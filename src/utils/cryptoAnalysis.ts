
import axios from "axios";

export interface CryptoAnalysis {
  currentPrice: number;
  trend: string;
  sma7: number;
  sma14: number;
  sma30: number;
  volatility: number;
  entryPoint: number;
  stopLoss: number;
  target1: number;
  target2: number;
  target3: number;
  exit: number;
  support: number;
  resistance: number;
}

function calculateSMA(prices: number[]): number {
  const sum = prices.reduce((a, b) => a + b, 0);
  return sum / prices.length;
}

function calculateVolatility(prices: number[]): number {
  const mean = calculateSMA(prices);
  const variance = prices.reduce((sum, price) => sum + Math.pow(price - mean, 2), 0) / prices.length;
  return Math.sqrt(variance);
}

export async function analyzeCrypto(cryptoName: string): Promise<CryptoAnalysis | null> {
  try {
    const priceResponse = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoName}&vs_currencies=usd`
    );
    const currentPrice = priceResponse.data[cryptoName]?.usd;

    if (!currentPrice) {
      throw new Error("Cryptocurrency not found");
    }

    const historicalResponse = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${cryptoName}/market_chart?vs_currency=usd&days=30`
    );
    const prices = historicalResponse.data.prices.map((price: number[]) => price[1]);

    const sma7 = calculateSMA(prices.slice(-7));
    const sma14 = calculateSMA(prices.slice(-14));
    const sma30 = calculateSMA(prices.slice(-30));
    const trend = currentPrice > sma7 ? "Bullish" : "Bearish";
    const support = Math.min(...prices);
    const resistance = Math.max(...prices);
    const volatility = calculateVolatility(prices.slice(-14));

    const entryPoint = currentPrice;
    const stopLoss = entryPoint * 0.95;
    const target1 = entryPoint * 1.05;
    const target2 = entryPoint * 1.1;
    const target3 = entryPoint * 1.15;
    const exit = trend === "Bullish" ? resistance * 0.98 : support * 1.02;

    return {
      currentPrice,
      trend,
      sma7,
      sma14,
      sma30,
      volatility,
      entryPoint,
      stopLoss,
      target1,
      target2,
      target3,
      exit,
      support,
      resistance,
    };
  } catch (error) {
    console.error("Error analyzing crypto:", error);
    return null;
  }
}
