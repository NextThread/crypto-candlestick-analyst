
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
  const [paymentPending, setPaymentPending] = useState(false);
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
        
        // Initiate Ethereum payment
        await initiateEthereumPayment(accounts[0]);
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
        
        // Initiate Solana payment
        await initiateSolanaPayment(publicKey.toString());
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

  const initiateEthereumPayment = async (fromAddress: string) => {
    setPaymentPending(true);
    
    try {
      // Convert dollar amount to ETH (simplified - in real app you would use an API for conversion)
      // For demo purposes we'll use a fixed conversion rate (1 ETH = $2000 in this example)
      const ethAmount = (amount / 2000).toFixed(6);
      const weiAmount = `0x${(parseInt(ethAmount) * 1e18).toString(16)}`;
      
      toast({
        title: "Payment Initiated",
        description: `Please confirm the payment of ${ethAmount} ETH (~$${amount}) in your MetaMask wallet.`,
      });
      
      // Prepare transaction parameters
      const transactionParameters = {
        to: ETHEREUM_WALLET_ADDRESS,
        from: fromAddress,
        value: weiAmount, // Value in wei
        gas: '0x5208', // 21000 gas (standard tx)
      };
      
      // Send transaction request to MetaMask
      const txHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      });
      
      if (txHash) {
        // Transaction was initiated and signed by the user
        toast({
          title: "Transaction Submitted",
          description: `Transaction hash: ${txHash.substring(0, 10)}...`,
        });
        
        // Store subscription details
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
      // Handle user rejection or other errors
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

  const initiateSolanaPayment = async (fromAddress: string) => {
    setPaymentPending(true);
    
    try {
      // Convert dollar amount to SOL (simplified - in real app you would use an API for conversion)
      // For demo purposes we'll use a fixed conversion rate (1 SOL = $100 in this example)
      const solAmount = (amount / 100).toFixed(6);
      
      toast({
        title: "Payment Initiated",
        description: `Please confirm the payment of ${solAmount} SOL (~$${amount}) in your Phantom wallet.`,
      });
      
      // In a real implementation, you would use Solana web3.js library to create and sign transactions
      // For this demo, we'll simulate a successful transaction after a delay
      
      // Simulate wallet interaction
      console.log(`Simulating Solana payment of ${solAmount} SOL from ${fromAddress} to ${SOLANA_WALLET_ADDRESS}`);
      
      // Simulate transaction delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate successful transaction
      const simulatedSignature = "5KtP4YMeL4NG9PY7urqavGvg9rTUfqzhW6Eag5LFvQTDM3QK9rK1DPd5hZQLwrk6CuoxvDkXFPHgbjuzGxZbF3Ht";
      
      toast({
        title: "Transaction Submitted",
        description: `Transaction signature: ${simulatedSignature.substring(0, 10)}...`,
      });
      
      // Store subscription details
      const subscriptionDetails = getSubscriptionDetails(planName);
      saveSubscription(subscriptionDetails);
      
      toast({
        title: "Payment Successful",
        description: `Successfully subscribed to ${planName} plan! Valid for ${subscriptionDetails.duration} days.`,
      });
      
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Payment error:", error);
      // Handle user rejection or other errors
      toast({
        title: "Payment Failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setPaymentPending(false);
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
        disabled={isLoading || paymentPending}
        variant="outline"
        className={`w-full justify-start ${activeWallet === "metamask" ? "border-primary" : ""}`}
      >
        <CircleDollarSign className="mr-2 h-4 w-4" />
        {isMetaMaskAvailable ? 
          (paymentPending && activeWallet === "metamask" ? "Payment in Progress..." : "Pay with MetaMask") 
          : "Install MetaMask"}
      </Button>
      
      <Button
        onClick={connectPhantom}
        disabled={isLoading || paymentPending}
        variant="outline"
        className={`w-full justify-start ${activeWallet === "phantom" ? "border-primary" : ""}`}
      >
        <Wallet className="mr-2 h-4 w-4" />
        {isPhantomAvailable ? 
          (paymentPending && activeWallet === "phantom" ? "Payment in Progress..." : "Pay with Phantom") 
          : "Install Phantom"}
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
