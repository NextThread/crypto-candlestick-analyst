
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Wallet, CircleDollarSign } from "lucide-react";

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
  const [isPhantomAvailable, setIsPhantomAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeWallet, setActiveWallet] = useState<string | null>(null);
  const { toast } = useToast();

  // Wallet addresses
  const ETHEREUM_WALLET_ADDRESS = "0x58d298A676c31546895a04EfdF06Cb4AC9f43635";
  const SOLANA_WALLET_ADDRESS = "HQo1gG52Ae7SUQAHND6ACJ8vFbboYHPpe49dFRP8KZuu";

  useEffect(() => {
    // Check for MetaMask availability
    if (window.ethereum) {
      setIsMetaMaskAvailable(true);
    }

    // Check for Phantom availability
    if (window.solana?.isPhantom) {
      setIsPhantomAvailable(true);
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
    setActiveWallet("metamask");

    try {
      // Request account access
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
        
        // Proceed with payment
        proceedWithPayment(accounts[0], "ethereum");
      }
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
      toast({
        title: "Connection Failed",
        description: "Failed to connect to MetaMask. Please try again.",
        variant: "destructive",
      });
      setActiveWallet(null);
    } finally {
      setIsLoading(false);
    }
  };

  const connectPhantom = async () => {
    if (!window.solana?.isPhantom) {
      toast({
        title: "Phantom not installed",
        description: "Please install Phantom wallet to continue with the payment",
        variant: "destructive",
      });
      window.open("https://phantom.app/download", "_blank");
      return;
    }

    setIsLoading(true);
    setActiveWallet("phantom");

    try {
      // Connect to Phantom
      const { publicKey } = await window.solana.connect();
      
      if (publicKey) {
        toast({
          title: "Wallet Connected",
          description: `Connected to ${publicKey.toString().substring(0, 6)}...${publicKey
            .toString()
            .substring(publicKey.toString().length - 4)}`,
        });
        
        // Proceed with payment
        proceedWithPayment(publicKey.toString(), "solana");
      }
    } catch (error) {
      console.error("Error connecting to Phantom:", error);
      toast({
        title: "Connection Failed",
        description: "Failed to connect to Phantom. Please try again.",
        variant: "destructive",
      });
      setActiveWallet(null);
    } finally {
      setIsLoading(false);
    }
  };

  const proceedWithPayment = async (account: string, network: "ethereum" | "solana") => {
    setIsLoading(true);
    
    try {
      // This is a simplified example. In a real app, you would:
      // 1. Call your backend to generate transaction data
      // 2. Have the user sign and send the transaction
      // 3. Verify the transaction on the backend
      
      if (network === "ethereum") {
        // Example Ethereum transaction (simplified)
        toast({
          title: "Processing Payment",
          description: `Requesting payment of $${amount} to ${ETHEREUM_WALLET_ADDRESS.substring(0, 8)}...`,
        });
        
        // Store subscription details
        const subscriptionDetails = getSubscriptionDetails(planName);
        saveSubscription(subscriptionDetails);
        
        // Simulating a successful payment after a short delay
        setTimeout(() => {
          toast({
            title: "Payment Successful",
            description: `Successfully subscribed to ${planName} plan! Valid for ${subscriptionDetails.duration} days.`,
          });
          if (onSuccess) onSuccess();
        }, 2000);
      } else if (network === "solana") {
        // Example Solana transaction (simplified)
        toast({
          title: "Processing Payment",
          description: `Requesting payment of $${amount} to ${SOLANA_WALLET_ADDRESS.substring(0, 8)}...`,
        });
        
        // Store subscription details
        const subscriptionDetails = getSubscriptionDetails(planName);
        saveSubscription(subscriptionDetails);
        
        // Simulating a successful payment after a short delay
        setTimeout(() => {
          toast({
            title: "Payment Successful",
            description: `Successfully subscribed to ${planName} plan! Valid for ${subscriptionDetails.duration} days.`,
          });
          if (onSuccess) onSuccess();
        }, 2000);
      }
    } catch (error) {
      console.error("Payment error:", error);
      toast({
        title: "Payment Failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Define subscription details based on plan
  const getSubscriptionDetails = (plan: string) => {
    let duration = 30; // days
    let analysisLimit = 5; // per day
    
    switch (plan) {
      case "Basic":
        // $9/month - 5 analyses per day, 30 days
        duration = 30;
        analysisLimit = 5;
        break;
      case "Pro":
        // $29/6 months - 20 analyses per day, 180 days
        duration = 180;
        analysisLimit = 20;
        break;
      case "Premium":
        // $49/year - unlimited analyses, 365 days
        duration = 365;
        analysisLimit = -1; // -1 indicates unlimited
        break;
      default:
        break;
    }
    
    return {
      plan,
      duration,
      analysisLimit,
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + duration * 24 * 60 * 60 * 1000).toISOString(),
    };
  };

  // Save subscription to localStorage
  const saveSubscription = (subscriptionDetails: any) => {
    if (window.localStorage && window.localStorage.getItem) {
      // Store user ID with subscription if available
      const userId = localStorage.getItem('userId') || 'anonymous';
      localStorage.setItem(`subscription_${userId}`, JSON.stringify(subscriptionDetails));
      localStorage.setItem(`analysisLimit_${userId}`, subscriptionDetails.analysisLimit.toString());
      
      // Reset the analysis count to 0 for the new subscription
      localStorage.setItem(`analysisCount_${userId}`, "0");
    }
  };

  return (
    <div className="mt-4 space-y-3">
      <p className="text-sm text-gray-400 mb-2">Choose payment method:</p>
      
      <Button
        onClick={connectMetaMask}
        disabled={isLoading}
        variant="outline"
        className={`w-full justify-start ${activeWallet === "metamask" ? "border-primary" : ""}`}
      >
        <CircleDollarSign className="mr-2 h-4 w-4" />
        {isMetaMaskAvailable ? "Pay with MetaMask" : "Install MetaMask"}
      </Button>
      
      <Button
        onClick={connectPhantom}
        disabled={isLoading}
        variant="outline"
        className={`w-full justify-start ${activeWallet === "phantom" ? "border-primary" : ""}`}
      >
        <Wallet className="mr-2 h-4 w-4" />
        {isPhantomAvailable ? "Pay with Phantom" : "Install Phantom"}
      </Button>
      
      {isLoading && (
        <div className="text-center py-2">
          <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-primary border-r-transparent"></div>
          <span className="ml-2 text-sm">Processing...</span>
        </div>
      )}
    </div>
  );
};

export default CryptoWalletPayment;
