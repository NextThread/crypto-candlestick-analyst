
import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { analyzeCrypto } from "@/utils/cryptoAnalysis";
import { useToast } from "@/hooks/use-toast";
import SubscriptionAlert from "./SubscriptionAlert";
import { useUser } from "@clerk/clerk-react";

const ANALYSIS_COUNT_KEY = "analysisCount";

const SearchBar = ({ onAnalysisComplete }: { onAnalysisComplete: (analysis: any) => void }) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [analysisCount, setAnalysisCount] = useState(0);
  const [showLimitAlert, setShowLimitAlert] = useState(false);
  const [analysisLimit, setAnalysisLimit] = useState(3); // Default for free tier
  const [hasSubscription, setHasSubscription] = useState(false);
  const { toast } = useToast();
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      const userId = user.id;
      // Get current subscription
      const subscriptionData = localStorage.getItem(`subscription_${userId}`);
      if (subscriptionData) {
        const subscription = JSON.parse(subscriptionData);
        const endDate = new Date(subscription.endDate);
        
        // Check if subscription is still valid
        if (endDate > new Date()) {
          setHasSubscription(true);
          
          // Set analysis limit from subscription
          const limitValue = localStorage.getItem(`analysisLimit_${userId}`);
          if (limitValue) {
            const limit = parseInt(limitValue);
            setAnalysisLimit(limit === -1 ? Infinity : limit); // -1 means unlimited
          }
        } else {
          // Subscription expired, revert to free tier
          localStorage.removeItem(`subscription_${userId}`);
          localStorage.removeItem(`analysisLimit_${userId}`);
          setAnalysisLimit(3);
          setHasSubscription(false);
        }
      }
      
      // Get analysis count
      const storedCount = localStorage.getItem(`${ANALYSIS_COUNT_KEY}_${userId}`);
      if (storedCount) {
        setAnalysisCount(parseInt(storedCount));
      } else {
        setAnalysisCount(0);
        localStorage.setItem(`${ANALYSIS_COUNT_KEY}_${userId}`, "0");
      }
    }
  }, [user]);

  const incrementAnalysisCount = () => {
    if (!user) return;
    const newCount = analysisCount + 1;
    setAnalysisCount(newCount);
    localStorage.setItem(`${ANALYSIS_COUNT_KEY}_${user.id}`, newCount.toString());
    if (newCount >= analysisLimit) {
      setShowLimitAlert(true);
    }
  };

  const handleAnalyze = async () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to analyze charts",
        variant: "destructive",
      });
      return;
    }

    if (analysisCount >= analysisLimit) {
      setShowLimitAlert(true);
      return;
    }

    if (!searchQuery.trim()) {
      toast({
        title: "Enter Cryptocurrency",
        description: "Please enter a cryptocurrency name to analyze",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    try {
      const analysis = await analyzeCrypto(searchQuery.toLowerCase());
      if (analysis) {
        onAnalysisComplete(analysis);
        incrementAnalysisCount();
        toast({
          title: "Analysis Complete",
          description: "Check the results on the right",
        });
      }
    } catch (error) {
      toast({
        title: "Analysis Failed",
        description: "Unable to analyze the cryptocurrency",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <>
      <div className="w-full flex gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAnalyze()}
            placeholder="Enter cryptocurrency name..."
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-gray-200/20 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
          />
        </div>
        <button
          onClick={handleAnalyze}
          disabled={isAnalyzing || analysisCount >= analysisLimit}
          className={`px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 transition-colors whitespace-nowrap ${
            isAnalyzing || analysisCount >= analysisLimit ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isAnalyzing ? "Analyzing..." : "Analyze"}
        </button>
      </div>
      <SubscriptionAlert 
        isOpen={showLimitAlert} 
        onClose={() => setShowLimitAlert(false)}
        hasSubscription={hasSubscription}
      />
    </>
  );
};

export default SearchBar;
