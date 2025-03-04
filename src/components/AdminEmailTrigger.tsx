
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle, XCircle } from "lucide-react";
import { useUser } from "@clerk/clerk-react";
import { useToast } from "@/components/ui/use-toast";

const AdminEmailTrigger = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);
  const { user } = useUser();
  const { toast } = useToast();

  const triggerEmails = async () => {
    if (!user || !user.emailAddresses[0]) {
      toast({
        title: "Error",
        description: "You must be logged in to perform this action.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      const response = await fetch(
        "https://yirtkghihsoktwxbbats.supabase.co/functions/v1/send-daily-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpcnRrZ2hpaHNva3R3eGJiYXRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzMDI3NzAsImV4cCI6MjA1NTg3ODc3MH0.1ee384OCIfrVvfgEvLbotlGSUKU91g3C6O0h7vOsjtw`,
          },
          body: JSON.stringify({ forceAll: true }),
        }
      );

      const data = await response.json();
      
      if (response.ok) {
        setResult({
          success: true,
          message: data.message || "Emails sent successfully!",
        });
        toast({
          title: "Success!",
          description: data.message || "Emails have been sent to all users.",
        });
      } else {
        throw new Error(data.error || "Failed to send emails");
      }
    } catch (error: any) {
      setResult({
        success: false,
        message: error.message || "An error occurred while sending emails.",
      });
      toast({
        title: "Error",
        description: error.message || "Failed to send emails.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-gray-200/10">
      <h3 className="text-xl font-semibold mb-4">Daily Email Administration</h3>
      <p className="text-gray-400 mb-6">
        Manually trigger sending daily crypto market update emails to all registered users.
      </p>
      
      <Button 
        onClick={triggerEmails}
        disabled={isLoading}
        className="w-full"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending emails...
          </>
        ) : (
          "Send Market Updates Now"
        )}
      </Button>
      
      {result && (
        <div className={`mt-4 p-4 rounded-md ${
          result.success ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
        }`}>
          <div className="flex items-center">
            {result.success ? (
              <CheckCircle className="mr-2 h-5 w-5" />
            ) : (
              <XCircle className="mr-2 h-5 w-5" />
            )}
            <p>{result.message}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminEmailTrigger;
