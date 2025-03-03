import SearchBar from "@/components/SearchBar";
import ChartUpload from "@/components/ChartUpload";
import AnalysisDisplay from "@/components/AnalysisDisplay";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Subscribe from "@/components/Subscribe";
import FAQ from "@/components/FAQ";
import { ArrowDown, Check } from "lucide-react";
import { SignIn, SignedIn, SignedOut, useUser } from "@clerk/clerk-react";
import { useState, useEffect } from "react";
import CryptoNews from "@/components/CryptoNews";
import SocialProofBanner from "@/components/SocialProofBanner";
import ComparisonTable from "@/components/ComparisonTable";
import ChatBot from "@/components/ChatBot";
import CryptoWalletPayment from "@/components/CryptoWalletPayment";
import SubscriptionSuccess from "@/components/SubscriptionSuccess";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RealtimeStats from "@/components/RealtimeStats";
import DiscountBadge from "@/components/DiscountBadge";
import SubscriberBadge from "@/components/DiscountBadge";
import { incrementRegisteredUsers } from "@/utils/realtimeTracking";

const Index = () => {
  const [analysisResult, setAnalysisResult] = useState(null);
  const [showPaymentFor, setShowPaymentFor] = useState<string | null>(null);
  const [successPlan, setSuccessPlan] = useState<string | null>(null);
  const [subscriptions, setSubscriptions] = useState<Record<string, any>>({});
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      const userId = user.id;
      const subscriptionData = localStorage.getItem(`subscription_${userId}`);
      if (subscriptionData) {
        try {
          const subscription = JSON.parse(subscriptionData);
          const endDate = new Date(subscription.endDate);
          
          if (endDate > new Date()) {
            const daysRemaining = Math.ceil((endDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
            setSubscriptions({
              ...subscriptions,
              [subscription.plan.toLowerCase()]: {
                ...subscription,
                daysRemaining
              }
            });
          } else {
            localStorage.removeItem(`subscription_${userId}`);
          }
        } catch (error) {
          console.error("Error parsing subscription data:", error);
        }
      }
    }
  }, [user, successPlan]);

  useEffect(() => {
    if (user) {
      const isNewUser = !localStorage.getItem(`registered_${user.id}`);
      if (isNewUser) {
        incrementRegisteredUsers();
        localStorage.setItem(`registered_${user.id}`, "true");
      }
    }
  }, [user]);

  const handlePaymentSuccess = (planName: string) => {
    setShowPaymentFor(null);
    setSuccessPlan(planName);
  };

  const handleSuccessClose = () => {
    setSuccessPlan(null);
  };

  const getRemainingDays = (planType: string) => {
    const plan = planType.toLowerCase();
    if (subscriptions[plan]) {
      return subscriptions[plan].daysRemaining;
    }
    return 0;
  };

  const hasActiveSubscription = (planType: string) => {
    const plan = planType.toLowerCase();
    return !!subscriptions[plan];
  };

  const basicPlans = [
    {
      id: "basic-1",
      price: 4,
      name: "Basic - 3 analyses",
      analyses: 3,
      fullName: "Basic (3 analyses per day)"
    },
    {
      id: "basic-2",
      price: 7,
      name: "Basic - 5 analyses",
      analyses: 5,
      fullName: "Basic (5 analyses per day)"
    },
    {
      id: "basic-3",
      price: 9,
      name: "Basic - 10 analyses",
      analyses: 10,
      fullName: "Basic (10 analyses per day)"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <SocialProofBanner />
      
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

      <RealtimeStats />

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

      <div id="news">
        <CryptoNews />
      </div>

      <div id="features">
        <Features />
      </div>

      <div id="comparison">
        <ComparisonTable />
      </div>

      <section id="pricing" className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 rounded-xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-200/10 hover:border-primary/50 transition-colors card-shine relative">
              <SubscriberBadge count={127} planName="Basic" />
              {hasActiveSubscription("Basic (3 analyses per day)") && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm z-10">
                  {getRemainingDays("Basic (3 analyses per day)")} days remaining
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Basic</h3>
                <Tabs defaultValue="basic-1" className="w-full">
                  <TabsList className="grid grid-cols-3 mb-4">
                    <TabsTrigger value="basic-1">$4</TabsTrigger>
                    <TabsTrigger value="basic-2">$7</TabsTrigger>
                    <TabsTrigger value="basic-3">$9</TabsTrigger>
                  </TabsList>
                  
                  {basicPlans.map((plan) => (
                    <TabsContent key={plan.id} value={plan.id} className="space-y-6">
                      <div className="text-3xl font-bold mb-2">${plan.price}<span className="text-lg font-normal text-gray-400">/month</span></div>
                      <p className="text-gray-400">Perfect for getting started</p>
                      
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-center gap-2 text-gray-300">
                          <Check className="w-5 h-5 text-primary" />
                          <span>Basic market analysis</span>
                        </li>
                        <li className="flex items-center gap-2 text-gray-300">
                          <Check className="w-5 h-5 text-primary" />
                          <span>{plan.analyses} chart uploads per day</span>
                        </li>
                        <li className="flex items-center gap-2 text-gray-300">
                          <Check className="w-5 h-5 text-primary" />
                          <span>Standard support</span>
                        </li>
                      </ul>
                      
                      {showPaymentFor === plan.id ? (
                        <CryptoWalletPayment 
                          amount={plan.price} 
                          planName={plan.fullName} 
                          planDescription="Monthly subscription" 
                          onSuccess={() => handlePaymentSuccess(plan.fullName)}
                        />
                      ) : hasActiveSubscription(plan.fullName.toLowerCase()) ? (
                        <Button 
                          className="w-full bg-gray-700 text-white hover:bg-gray-600 cursor-default"
                          disabled
                        >
                          {getRemainingDays(plan.fullName.toLowerCase())} days remaining
                        </Button>
                      ) : (
                        <Button 
                          onClick={() => setShowPaymentFor(plan.id)}
                          className="w-full"
                        >
                          Get Started
                        </Button>
                      )}
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-2 border-primary relative card-shine">
              <SubscriberBadge count={358} planName="Pro" />
              {hasActiveSubscription("pro") && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm z-10">
                  {getRemainingDays("pro")} days remaining
                </div>
              )}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm">
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
              {showPaymentFor === 'pro' ? (
                <CryptoWalletPayment 
                  amount={29} 
                  planName="Pro" 
                  planDescription="6-month subscription" 
                  onSuccess={() => handlePaymentSuccess('Pro')}
                />
              ) : hasActiveSubscription('pro') ? (
                <Button 
                  className="w-full bg-gray-700 text-white hover:bg-gray-600 cursor-default"
                  disabled
                >
                  {getRemainingDays('pro')} days remaining
                </Button>
              ) : (
                <Button 
                  onClick={() => setShowPaymentFor('pro')}
                  className="w-full"
                >
                  Get Started
                </Button>
              )}
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-200/10 hover:border-primary/50 transition-colors card-shine relative">
              <SubscriberBadge count={84} planName="Premium" />
              {hasActiveSubscription("premium") && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm z-10">
                  {getRemainingDays("premium")} days remaining
                </div>
              )}
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
              {showPaymentFor === 'premium' ? (
                <CryptoWalletPayment 
                  amount={49} 
                  planName="Premium" 
                  planDescription="Annual subscription" 
                  onSuccess={() => handlePaymentSuccess('Premium')}
                />
              ) : hasActiveSubscription('premium') ? (
                <Button 
                  className="w-full bg-gray-700 text-white hover:bg-gray-600 cursor-default"
                  disabled
                >
                  {getRemainingDays('premium')} days remaining
                </Button>
              ) : (
                <Button 
                  onClick={() => setShowPaymentFor('premium')}
                  className="w-full"
                >
                  Get Started
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      <Testimonials />

      <div id="contact">
        <Contact />
      </div>

      <Subscribe />

      <footer className="py-8 border-t border-gray-200/10">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2025 CryptoAI. All rights reserved.</p>
        </div>
      </footer>

      <ChatBot />

      <SubscriptionSuccess 
        isOpen={!!successPlan} 
        onClose={handleSuccessClose} 
        planName={successPlan || ''}
      />
    </div>
  );
};

export default Index;
