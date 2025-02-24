
import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { analyzeCrypto } from "@/utils/cryptoAnalysis";
import { useToast } from "@/hooks/use-toast";
import SubscriptionAlert from "./SubscriptionAlert";

const ANALYSIS_LIMIT = 3;
const ANALYSIS_COUNT_KEY = "analysisCount";

const SearchBar = ({ onAnalysisComplete }: { onAnalysisComplete: (analysis: any) => void }) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [analysisCount, setAnalysisCount] = useState(0);
  const [showLimitAlert, setShowLimitAlert] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const storedCount = localStorage.getItem(ANALYSIS_COUNT_KEY);
    if (storedCount) {
      setAnalysisCount(parseInt(storedCount));
    }
  }, []);

  const incrementAnalysisCount = () => {
    const newCount = analysisCount + 1;
    setAnalysisCount(newCount);
    localStorage.setItem(ANALYSIS_COUNT_KEY, newCount.toString());
    if (newCount >= ANALYSIS_LIMIT) {
      setShowLimitAlert(true);
    }
  };

  const handleAnalyze = async () => {
    if (analysisCount >= ANALYSIS_LIMIT) {
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
          disabled={isAnalyzing || analysisCount >= ANALYSIS_LIMIT}
          className={`px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 transition-colors whitespace-nowrap ${
            isAnalyzing || analysisCount >= ANALYSIS_LIMIT ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isAnalyzing ? "Analyzing..." : "Analyze"}
        </button>
      </div>
      <SubscriptionAlert isOpen={showLimitAlert} />
    </>
  );
};

export default SearchBar;

