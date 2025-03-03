import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { CircleDollarSign } from "lucide-react";

interface CryptoWalletPaymentProps {
  amount: number;
  planName: string;
  planDescription: string;
  onSuccess?: () => void;
}

const CryptoWalletPayment = ({
  amount,
  planName,
  planDescription,
  onSuccess,
}: CryptoWalletPaymentProps) => {
  const [isMetaMaskAvailable, setIsMetaMaskAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentPending, setPaymentPending] = useState(false);
  const { toast } = useToast();

  const ETHEREUM_WALLET_ADDRESS = "0x58d298A676c31546895a04EfdF06Cb4AC9f43635";

  useEffect(() => {
    if (window.ethereum) {
      setIsMetaMaskAvailable(true);
    }
  }, []);

  const connectMetaMask = async () => {
    if (!window.ethereum) {
      toast({
        title: "MetaMask not installed",
        description: "Please install MetaMask to continue with the payment",
        variant: "destructive",
      });
      window.open("https://metamask.io/download/", "_blank");
      return;
    }

    setIsLoading(true);

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      
      if (accounts.length > 0) {
        toast({
          title: "Wallet Connected",
          description: `Connected to ${accounts[0].substring(0, 6)}...${accounts[0].substring(
            accounts[0].length - 4
          )}`,
        });
        
        await initiateEthereumPayment(accounts[0]);
      }
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
      toast({
        title: "Connection Failed",
        description: "Failed to connect to MetaMask. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const initiateEthereumPayment = async (fromAddress: string) => {
    setPaymentPending(true);
    
    try {
      const ethAmount = (amount / 2000).toFixed(6);
      const weiAmount = `0x${Math.floor(Number(ethAmount) * 1e18).toString(16)}`;
      
      toast({
        title: "Payment Initiated",
        description: `Please confirm the payment of ${ethAmount} ETH (~$${amount}) in your MetaMask wallet.`,
      });
      
      const transactionParameters = {
        to: ETHEREUM_WALLET_ADDRESS,
        from: fromAddress,
        value: weiAmount,
        gas: '0x5208',
      };
      
      const txHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      });
      
      if (txHash) {
        toast({
          title: "Transaction Submitted",
          description: `Transaction hash: ${txHash.substring(0, 10)}...`,
        });
        
        const subscriptionDetails = getSubscriptionDetails(planName);
        saveSubscription(subscriptionDetails);
        
        toast({
          title: "Payment Successful",
          description: `Successfully subscribed to ${planName} plan! Valid for ${subscriptionDetails.duration} days.`,
        });
        
        if (onSuccess) onSuccess();
      }
    } catch (error) {
      console.error("Payment error:", error);
      if (error.code === 4001) {
        toast({
          title: "Payment Rejected",
          description: "You rejected the transaction in your wallet.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Payment Failed",
          description: "There was an error processing your payment. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setPaymentPending(false);
    }
  };

  const getSubscriptionDetails = (plan: string) => {
    let duration = 30;
    let analysisLimit = 5;
    
    if (plan.startsWith("Basic")) {
      if (plan.includes("3 analyses")) {
        duration = 30;
        analysisLimit = 3;
      } else if (plan.includes("5 analyses")) {
        duration = 30;
        analysisLimit = 5;
      } else if (plan.includes("10 analyses")) {
        duration = 30;
        analysisLimit = 10;
      } else {
        duration = 30;
        analysisLimit = 5;
      }
    } else if (plan === "Pro") {
      duration = 180;
      analysisLimit = 20;
    } else if (plan === "Premium") {
      duration = 365;
      analysisLimit = -1;
    }
    
    return {
      plan,
      duration,
      analysisLimit,
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + duration * 24 * 60 * 60 * 1000).toISOString(),
    };
  };

  const saveSubscription = (subscriptionDetails: any) => {
    if (window.localStorage && window.localStorage.getItem) {
      const userId = localStorage.getItem('userId') || 'anonymous';
      localStorage.setItem(`subscription_${userId}`, JSON.stringify(subscriptionDetails));
      localStorage.setItem(`analysisLimit_${userId}`, subscriptionDetails.analysisLimit.toString());
      
      localStorage.setItem(`analysisCount_${userId}`, "0");
      
      resetAnalysisCountInUI();
    }
  };

  const resetAnalysisCountInUI = () => {
    const event = new CustomEvent('subscriptionUpdated');
    window.dispatchEvent(event);
  };

  return (
    <div className="mt-4 space-y-3">
      <p className="text-sm text-gray-400 mb-2">Payment method:</p>
      
      <Button
        onClick={connectMetaMask}
        disabled={isLoading || paymentPending}
        variant="outline"
        className="w-full justify-start"
      >
        <CircleDollarSign className="mr-2 h-4 w-4" />
        {isMetaMaskAvailable ? 
          (paymentPending ? "Payment in Progress..." : "Pay with MetaMask") 
          : "Install MetaMask"}
      </Button>
      
      {(isLoading || paymentPending) && (
        <div className="text-center py-2">
          <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-primary border-r-transparent"></div>
          <span className="ml-2 text-sm">
            {paymentPending ? "Waiting for wallet confirmation..." : "Processing..."}
          </span>
        </div>
      )}
    </div>
  );
};

export default CryptoWalletPayment;
