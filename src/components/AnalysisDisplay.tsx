import { CryptoAnalysis } from "@/utils/cryptoAnalysis";

const AnalysisDisplay = ({ analysis }: { analysis: CryptoAnalysis | null }) => {
  if (!analysis) {
    return null;
  }

  // Craft a brief analysis based on the available data
  const getAnalysisSummary = () => {
    const { currentPrice, trend, sma7, sma14, sma30, volatility, support, resistance } = analysis;
    const isBullish = trend === "Bullish";
    const priceVsSma7 = currentPrice > sma7 ? "above" : "below";
    const priceMovement = isBullish
      ? "The price is trending upward, indicating bullish momentum."
      : "The price is trending downward, suggesting bearish pressure.";
    const smaObservation = `The current price is ${priceVsSma7} the 7-day SMA ($${sma7.toFixed(2)}), which supports a ${trend.toLowerCase()} trend.`;
    const volatilityNote = volatility > 5 ? "high volatility, indicating potential for significant price swings" : "moderate volatility, suggesting relatively stable movement";
    const supportResistance = `Support is at $${support.toFixed(2)}, while resistance is at $${resistance.toFixed(2)}.`;

    return (
      <>
        <p>Based on the current analysis, here are some observations for this cryptocurrency:</p>
        <ol className="list-decimal list-inside space-y-2">
          <li><strong>Price Movement:</strong> {priceMovement}</li>
          <li><strong>Moving Averages:</strong> {smaObservation}</li>
          <li><strong>Volatility:</strong> The 14-day volatility is $${volatility.toFixed(2)}, showing {volatilityNote}.</li>
          <li><strong>Key Levels:</strong> {supportResistance}</li>
        </ol>
        <p className="mt-2">
          <strong>Conclusion:</strong> The chart appears to be {trend.toLowerCase()} based on the price trend and moving averages. However, monitor volatility and key levels, as they could signal a reversal or consolidation soon. Always combine this with broader market analysis before deciding. 🚀📈
        </p>
      </>
    );
  };

  return (
    <div className="w-full h-full p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-gray-200/20">
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
      {/* New Analysis Summary Section */}
      <div className="mt-8">
        <h3 className="text-lg font-medium mb-4">Analysis Summary</h3>
        <div className="prose prose-sm prose-gray text-gray-300">
          {getAnalysisSummary()}
        </div>
      </div>
    </div>
  );
};

export default AnalysisDisplay;