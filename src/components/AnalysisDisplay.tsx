
import { useState } from "react";
import { analyzeCrypto, type CryptoAnalysis } from "@/utils/cryptoAnalysis";
import { useToast } from "@/hooks/use-toast";

const AnalysisDisplay = () => {
  const [analysis, setAnalysis] = useState<CryptoAnalysis | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleAnalyze = async (cryptoName: string) => {
    setLoading(true);
    try {
      const result = await analyzeCrypto(cryptoName);
      if (result) {
        setAnalysis(result);
      } else {
        toast({
          title: "Analysis Error",
          description: "Unable to analyze the cryptocurrency",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while analyzing the chart",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="w-full max-w-4xl mx-auto mt-12 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-gray-200/20">
        <div className="text-center text-gray-400">Loading analysis...</div>
      </div>
    );
  }

  if (!analysis) {
    return null;
  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-gray-200/20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
              Entry Point
            </span>
            <p className="mt-2 text-2xl font-semibold">
              ${analysis.entryPoint.toFixed(2)}
            </p>
          </div>
          <div>
            <span className="px-3 py-1 text-xs font-medium bg-red-500/10 text-red-500 rounded-full">
              Stop Loss
            </span>
            <p className="mt-2 text-2xl font-semibold">
              ${analysis.stopLoss.toFixed(2)}
            </p>
          </div>
          <div>
            <span className="px-3 py-1 text-xs font-medium bg-green-500/10 text-green-500 rounded-full">
              Target
            </span>
            <p className="mt-2 text-2xl font-semibold">
              ${analysis.target1.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Technical Analysis</h3>
          <div className="prose prose-sm prose-gray">
            <div className="space-y-2 text-gray-300">
              <p>
                <strong>Current Price:</strong> ${analysis.currentPrice.toFixed(2)}
              </p>
              <p>
                <strong>Trend:</strong>{" "}
                <span
                  className={
                    analysis.trend === "Bullish"
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  {analysis.trend}
                </span>
              </p>
              <p>
                <strong>7-Day SMA:</strong> ${analysis.sma7.toFixed(2)}
              </p>
              <p>
                <strong>14-Day SMA:</strong> ${analysis.sma14.toFixed(2)}
              </p>
              <p>
                <strong>30-Day SMA:</strong> ${analysis.sma30.toFixed(2)}
              </p>
              <p>
                <strong>Volatility:</strong> ${analysis.volatility.toFixed(2)}
              </p>
              <p>
                <strong>Support:</strong> ${analysis.support.toFixed(2)}
              </p>
              <p>
                <strong>Resistance:</strong> ${analysis.resistance.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisDisplay;
