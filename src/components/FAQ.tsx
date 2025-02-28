
import { HelpCircle, Search } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      question: "What is CryptoAI?",
      answer: "CryptoAI is an AI-powered cryptocurrency analysis platform that provides real-time technical analysis and trading insights. Our platform combines advanced AI algorithms with market data to help traders make informed decisions."
    },
    {
      question: "How does the chart analysis work?",
      answer: "Our AI analyzes your uploaded charts or selected cryptocurrencies using advanced pattern recognition algorithms. It identifies key technical indicators, support/resistance levels, and potential trend reversals to provide comprehensive trading insights."
    },
    {
      question: "How accurate are the analyses?",
      answer: "While our AI provides highly sophisticated analysis based on historical data and technical indicators, cryptocurrency markets are inherently volatile. We recommend using our insights as part of a broader trading strategy rather than as standalone trading signals."
    },
    {
      question: "What cryptocurrencies can I analyze?",
      answer: "You can analyze any major cryptocurrency listed on popular exchanges. Our platform supports both chart uploads and direct cryptocurrency searches for real-time analysis."
    },
    {
      question: "How many analyses can I perform?",
      answer: "Free users can perform up to 3 analyses per day. For unlimited analyses and advanced features, consider upgrading to one of our premium plans."
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-16 bg-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Find answers to common questions about our AI-powered crypto analysis platform
          </p>
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/5 border border-gray-200/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/5 rounded-lg px-6 backdrop-blur-sm border border-gray-200/10"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="text-lg font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
