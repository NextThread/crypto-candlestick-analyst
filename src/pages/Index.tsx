
import SearchBar from "@/components/SearchBar";
import ChartUpload from "@/components/ChartUpload";
import AnalysisDisplay from "@/components/AnalysisDisplay";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Subscribe from "@/components/Subscribe";
import { ArrowDown } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
              AI-Powered Crypto Analysis
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Upload your chart or search for any cryptocurrency to get instant,
              AI-powered technical analysis and trading insights.
            </p>
            <a
              href="#analysis"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span>Try it now</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>

          {/* Demo Image */}
          <div className="max-w-4xl mx-auto mb-16">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Crypto Analysis Dashboard"
              className="w-full rounded-xl shadow-2xl border border-gray-200/10"
            />
          </div>
        </div>
      </div>

      {/* Analysis Section */}
      <div id="analysis" className="py-16">
        <div className="container px-4 mx-auto">
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <SearchBar />
            <ChartUpload />
            <AnalysisDisplay />
          </div>
        </div>
      </div>

      {/* Features */}
      <Features />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact */}
      <Contact />

      {/* Subscribe */}
      <Subscribe />

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200/10">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 CryptoAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
