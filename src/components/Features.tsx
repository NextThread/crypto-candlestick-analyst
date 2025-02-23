
import { Activity, Target, Shield } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our AI Analysis?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 p-6 rounded-xl border border-gray-200/10 backdrop-blur-sm">
            <Activity className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-Time Analysis</h3>
            <p className="text-gray-400">Get instant AI-powered analysis of cryptocurrency charts and market trends.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl border border-gray-200/10 backdrop-blur-sm">
            <Target className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Precise Entry Points</h3>
            <p className="text-gray-400">Identify optimal entry and exit points with AI-calculated targets and stop losses.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl border border-gray-200/10 backdrop-blur-sm">
            <Shield className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Risk Management</h3>
            <p className="text-gray-400">Advanced risk analysis and position sizing recommendations for safer trading.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
