
import { Activity, Target, Shield, BarChart, TrendingUp, Zap } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our AI Analysis?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 p-6 rounded-xl border border-gray-200/10 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:bg-white/10 group">
            <div className="relative w-16 h-16 flex items-center justify-center mb-4">
              <Activity className="w-10 h-10 text-primary absolute transform transition-all duration-500 group-hover:scale-0 group-hover:rotate-90 group-hover:opacity-0" />
              <Activity className="w-10 h-10 text-primary absolute transform transition-all duration-500 scale-0 -rotate-90 opacity-0 group-hover:scale-100 group-hover:rotate-0 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse opacity-0 group-hover:opacity-50"></div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Real-Time Analysis</h3>
            <p className="text-gray-400">Get instant AI-powered analysis of cryptocurrency charts and market trends with blazing-fast response times.</p>
          </div>
          
          <div className="bg-white/5 p-6 rounded-xl border border-gray-200/10 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:bg-white/10 group">
            <div className="relative w-16 h-16 flex items-center justify-center mb-4">
              <Target className="w-10 h-10 text-primary absolute transform transition-all duration-500 group-hover:scale-0 group-hover:rotate-90 group-hover:opacity-0" />
              <Target className="w-10 h-10 text-primary absolute transform transition-all duration-500 scale-0 -rotate-90 opacity-0 group-hover:scale-100 group-hover:rotate-0 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse opacity-0 group-hover:opacity-50"></div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Precise Entry Points</h3>
            <p className="text-gray-400">Identify optimal entry and exit points with AI-calculated targets and stop losses based on advanced algorithms.</p>
          </div>
          
          <div className="bg-white/5 p-6 rounded-xl border border-gray-200/10 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:bg-white/10 group">
            <div className="relative w-16 h-16 flex items-center justify-center mb-4">
              <Shield className="w-10 h-10 text-primary absolute transform transition-all duration-500 group-hover:scale-0 group-hover:rotate-90 group-hover:opacity-0" />
              <Shield className="w-10 h-10 text-primary absolute transform transition-all duration-500 scale-0 -rotate-90 opacity-0 group-hover:scale-100 group-hover:rotate-0 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse opacity-0 group-hover:opacity-50"></div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Risk Management</h3>
            <p className="text-gray-400">Advanced risk analysis and position sizing recommendations for safer trading in volatile crypto markets.</p>
          </div>
          
          <div className="bg-white/5 p-6 rounded-xl border border-gray-200/10 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:bg-white/10 group">
            <div className="relative w-16 h-16 flex items-center justify-center mb-4">
              <BarChart className="w-10 h-10 text-primary absolute transform transition-all duration-500 group-hover:scale-0 group-hover:rotate-90 group-hover:opacity-0" />
              <BarChart className="w-10 h-10 text-primary absolute transform transition-all duration-500 scale-0 -rotate-90 opacity-0 group-hover:scale-100 group-hover:rotate-0 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse opacity-0 group-hover:opacity-50"></div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Pattern Recognition</h3>
            <p className="text-gray-400">AI-powered detection of chart patterns, support/resistance levels, and trend reversals with high accuracy.</p>
          </div>
          
          <div className="bg-white/5 p-6 rounded-xl border border-gray-200/10 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:bg-white/10 group">
            <div className="relative w-16 h-16 flex items-center justify-center mb-4">
              <TrendingUp className="w-10 h-10 text-primary absolute transform transition-all duration-500 group-hover:scale-0 group-hover:rotate-90 group-hover:opacity-0" />
              <TrendingUp className="w-10 h-10 text-primary absolute transform transition-all duration-500 scale-0 -rotate-90 opacity-0 group-hover:scale-100 group-hover:rotate-0 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse opacity-0 group-hover:opacity-50"></div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Market Sentiment</h3>
            <p className="text-gray-400">Analyze social media and news sentiment to gauge market emotions and predict potential price movements.</p>
          </div>
          
          <div className="bg-white/5 p-6 rounded-xl border border-gray-200/10 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:bg-white/10 group">
            <div className="relative w-16 h-16 flex items-center justify-center mb-4">
              <Zap className="w-10 h-10 text-primary absolute transform transition-all duration-500 group-hover:scale-0 group-hover:rotate-90 group-hover:opacity-0" />
              <Zap className="w-10 h-10 text-primary absolute transform transition-all duration-500 scale-0 -rotate-90 opacity-0 group-hover:scale-100 group-hover:rotate-0 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse opacity-0 group-hover:opacity-50"></div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Automated Alerts</h3>
            <p className="text-gray-400">Get notified of important market movements and trading opportunities as they happen in real-time.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
