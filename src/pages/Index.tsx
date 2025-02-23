
import SearchBar from "@/components/SearchBar";
import ChartUpload from "@/components/ChartUpload";
import AnalysisDisplay from "@/components/AnalysisDisplay";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container px-4 py-16 mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AI-Powered Crypto Analysis
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Upload your chart or search for any cryptocurrency to get instant,
            AI-powered technical analysis and trading insights.
          </p>
        </div>
        
        <div className="space-y-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <SearchBar />
          <ChartUpload />
          <AnalysisDisplay />
        </div>
      </div>
    </div>
  );
};

export default Index;
