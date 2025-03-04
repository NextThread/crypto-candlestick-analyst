
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { supabase } from "./supabaseClient.ts";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface CryptoPrice {
  name: string;
  symbol: string;
  price: number;
  priceChange24h: number;
}

async function fetchCryptoPrices(): Promise<CryptoPrice[]> {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana&order=market_cap_desc"
    );
    
    if (!response.ok) {
      throw new Error(`API returned status ${response.status}`);
    }
    
    const data = await response.json();
    
    return data.map((coin: any) => ({
      name: coin.name,
      symbol: coin.symbol.toUpperCase(),
      price: coin.current_price,
      priceChange24h: coin.price_change_percentage_24h
    }));
  } catch (error) {
    console.error("Error fetching crypto prices:", error);
    return [
      { name: "Bitcoin", symbol: "BTC", price: 0, priceChange24h: 0 },
      { name: "Ethereum", symbol: "ETH", price: 0, priceChange24h: 0 },
      { name: "Solana", symbol: "SOL", price: 0, priceChange24h: 0 }
    ];
  }
}

async function getAllUsers() {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*');
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

function generateEmailHtml(userName: string, cryptoPrices: CryptoPrice[]) {
  const priceRows = cryptoPrices.map(crypto => {
    const direction = crypto.priceChange24h >= 0 ? "up" : "down";
    const color = direction === "up" ? "#22c55e" : "#ef4444";
    const arrow = direction === "up" ? "↑" : "↓";
    
    return `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eaeaea;">${crypto.name} (${crypto.symbol})</td>
        <td style="padding: 10px; border-bottom: 1px solid #eaeaea;">$${crypto.price.toLocaleString()}</td>
        <td style="padding: 10px; border-bottom: 1px solid #eaeaea; color: ${color};">
          ${arrow} ${Math.abs(crypto.priceChange24h).toFixed(2)}%
        </td>
      </tr>
    `;
  }).join('');

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Daily Market Update</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { text-align: center; padding: 20px 0; }
        .market-table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
        .market-table th { background-color: #f5f5f5; text-align: left; padding: 10px; }
        .cta-button { display: inline-block; background-color: #3b82f6; color: white; text-decoration: none; padding: 12px 24px; border-radius: 4px; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Daily Market Update</h1>
        </div>
        <p>Hi ${userName || "Trader"},</p>
        <p>Here's your daily crypto market update:</p>
        
        <table class="market-table">
          <thead>
            <tr>
              <th>Cryptocurrency</th>
              <th>Price</th>
              <th>24h Change</th>
            </tr>
          </thead>
          <tbody>
            ${priceRows}
          </tbody>
        </table>
        
        <p>Are you ready to dominate today's market? Hurry up!</p>
        
        <p style="text-align: center; margin-top: 30px;">
          <a href="https://your-crypto-app-url.com" class="cta-button">Analyze New Charts</a>
        </p>
        
        <p style="font-size: 12px; color: #666; margin-top: 50px; text-align: center;">
          &copy; 2025 CryptoAI. All rights reserved.<br>
          If you no longer wish to receive these emails, you can unsubscribe here.
        </p>
      </div>
    </body>
    </html>
  `;
}

async function sendEmailToUser(user: any, cryptoPrices: CryptoPrice[]) {
  try {
    const userName = user.first_name || "Trader";
    const html = generateEmailHtml(userName, cryptoPrices);
    
    const emailResponse = await resend.emails.send({
      from: "ChartAI Team <chartaiteam@gmail.com>",
      to: [user.email],
      subject: "🚀 Today's Crypto Market Update",
      html: html,
    });
    
    console.log(`Email sent to ${user.email}:`, emailResponse);
    return emailResponse;
  } catch (error) {
    console.error(`Error sending email to ${user.email}:`, error);
    return { error };
  }
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }
  
  try {
    // For manual testing through HTTP requests
    let forceAll = false;
    
    if (req.method === "POST") {
      const body = await req.json();
      forceAll = !!body.forceAll;
    }
    
    // Get all crypto prices first
    const cryptoPrices = await fetchCryptoPrices();
    if (!cryptoPrices || cryptoPrices.length === 0) {
      throw new Error("Failed to fetch crypto prices");
    }
    
    // Get all users
    const users = await getAllUsers();
    console.log(`Found ${users.length} users to send emails to`);
    
    // Send emails to all users
    const emailPromises = users.map(user => sendEmailToUser(user, cryptoPrices));
    const results = await Promise.allSettled(emailPromises);
    
    const successful = results.filter(r => r.status === "fulfilled").length;
    const failed = results.filter(r => r.status === "rejected").length;
    
    console.log(`Email job completed. Successfully sent: ${successful}, Failed: ${failed}`);
    
    return new Response(
      JSON.stringify({ 
        success: true,
        message: `Emails sent to ${successful} users. Failed: ${failed}`,
        timestamp: new Date().toISOString()
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-daily-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
