import SearchBar from "@/components/SearchBar";
import ChartUpload from "@/components/ChartUpload";
import AnalysisDisplay from "@/components/AnalysisDisplay";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Subscribe from "@/components/Subscribe";
import FAQ from "@/components/FAQ";
import { ArrowDown, Check, Instagram, Linkedin } from "lucide-react";
import { SignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import { useState } from "react";
import CryptoNews from "@/components/CryptoNews";
import SocialProofBanner from "@/components/SocialProofBanner";
import ComparisonTable from "@/components/ComparisonTable";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  const [analysisResult, setAnalysisResult] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <SocialProofBanner />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
              AI-Powered Chart Analysis
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Upload your chart or search for any cryptocurrency to get instant,
              AI-powered technical analysis and trading insights.
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <a
                href="https://www.instagram.com/chartlyai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/chartlyai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <a
              href="#analysis"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span>Try it now</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>
        </div>
      </div>

      {/* Analysis Section */}
      <div id="analysis" className="py-16">
        <div className="container px-4 mx-auto">
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="space-y-8">
              <SignedIn>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-8">
                    <SearchBar onAnalysisComplete={setAnalysisResult} />
                    <ChartUpload />
                  </div>
                  <div className="h-full">
                    <AnalysisDisplay analysis={analysisResult} />
                  </div>
                </div>
              </SignedIn>
              <SignedOut>
                <div className="text-center p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-gray-200/10">
                  <h3 className="text-xl font-semibold mb-4">Sign In to Analyze Charts</h3>
                  <p className="text-gray-400 mb-6">Create an account or sign in to analyze your crypto charts</p>
                  <SignIn />
                </div>
              </SignedOut>
            </div>
          </div>
        </div>
      </div>

      {/* Crypto News Section */}
      <div id="news">
        <CryptoNews />
      </div>

      {/* Features */}
      <div id="features">
        <Features />
      </div>

      {/* Comparison Table */}
      <div id="comparison">
        <ComparisonTable />
      </div>

      {/* Pricing Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <div className="p-6 rounded-xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-200/10 hover:border-primary/50 transition-colors">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Basic</h3>
                <div className="text-3xl font-bold mb-2">$9<span className="text-lg font-normal text-gray-400">/month</span></div>
                <p className="text-gray-400">Perfect for getting started</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Basic market analysis</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-primary" />
                  <span>5 chart uploads per day</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Standard support</span>
                </li>
              </ul>
              <button className="w-full py-2 px-4 rounded-lg bg-primary hover:bg-primary/90 transition-colors">
                Get Started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="p-6 rounded-xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm">
                Most Popular
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Pro</h3>
                <div className="text-3xl font-bold mb-2">$29<span className="text-lg font-normal text-gray-400">/6 months</span></div>
                <p className="text-gray-400">Best value for regular traders</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Advanced technical analysis</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-primary" />
                  <span>20 chart uploads per day</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Priority support</span>
                </li>
              </ul>
              <button className="w-full py-2 px-4 rounded-lg bg-primary hover:bg-primary/90 transition-colors">
                Get Started
              </button>
            </div>

            {/* Premium Plan */}
            <div className="p-6 rounded-xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-200/10 hover:border-primary/50 transition-colors">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Premium</h3>
                <div className="text-3xl font-bold mb-2">$49<span className="text-lg font-normal text-gray-400">/year</span></div>
                <p className="text-gray-400">For professional traders</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Professional analysis suite</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Unlimited chart uploads</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-primary" />
                  <span>24/7 premium support</span>
                </li>
              </ul>
              <button className="w-full py-2 px-4 rounded-lg bg-primary hover:bg-primary/90 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact */}
      <div id="contact">
        <Contact />
      </div>

      {/* Subscribe */}
      <Subscribe />

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200/10">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2025 CryptoAI. All rights reserved.</p>
        </div>
      </footer>

      {/* Chat Bot */}
      <ChatBot />
    </div>
  );
};

export default Index;
