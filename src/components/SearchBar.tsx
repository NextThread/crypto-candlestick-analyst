
import { Search } from "lucide-react";
import { useState } from "react";
import { analyzeCrypto } from "@/utils/cryptoAnalysis";
import { useToast } from "@/hooks/use-toast";

const SearchBar = ({ onAnalysisComplete }: { onAnalysisComplete: (analysis: any) => void }) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const handleAnalyze = async () => {
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
        disabled={isAnalyzing}
        className={`px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 transition-colors whitespace-nowrap ${
          isAnalyzing ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isAnalyzing ? "Analyzing..." : "Analyze"}
      </button>
    </div>
  );
};

export default SearchBar;

