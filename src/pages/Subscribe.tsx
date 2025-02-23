
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const SubscribePage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscription successful!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail("");
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-center">Join Our Newsletter</h1>
            <p className="text-gray-300 mb-8 text-center">
              Get exclusive access to our latest market insights, trading signals, and AI-powered analysis delivered straight to your inbox.
            </p>
            <div className="bg-white/5 p-8 rounded-xl border border-gray-200/10 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-gray-200/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Subscribe Now
                </button>
              </form>
              <div className="mt-6 text-sm text-gray-400">
                <p>By subscribing, you agree to receive marketing communications from us.</p>
                <p>You can unsubscribe at any time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribePage;
