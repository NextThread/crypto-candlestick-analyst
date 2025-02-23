
const AnalysisDisplay = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-12 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-gray-200/20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
              Entry Point
            </span>
            <p className="mt-2 text-2xl font-semibold">$42,850</p>
          </div>
          <div>
            <span className="px-3 py-1 text-xs font-medium bg-red-500/10 text-red-500 rounded-full">
              Stop Loss
            </span>
            <p className="mt-2 text-2xl font-semibold">$41,200</p>
          </div>
          <div>
            <span className="px-3 py-1 text-xs font-medium bg-green-500/10 text-green-500 rounded-full">
              Target
            </span>
            <p className="mt-2 text-2xl font-semibold">$45,300</p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Technical Analysis</h3>
          <div className="prose prose-sm prose-gray">
            <p className="text-gray-300">
              Strong bullish momentum with key resistance at $43,500. RSI indicates
              slightly overbought conditions but MACD shows potential for
              continued upward movement. Support levels found at $42,000 and
              $41,200.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisDisplay;
