
import { useQuery } from "@tanstack/react-query";
import { Calendar, ArrowUpRight, AlertCircle, Shield } from "lucide-react";
import axios from "axios";
import { useState } from "react";

interface NewsItem {
  id: string;
  title: string;
  url: string;
  published_on: number;
  body: string;
  categories?: string[];
  impact?: "high" | "medium" | "low";
  type?: "regulatory" | "market" | "technology";
}

const CryptoNews = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const categories = [
    { id: "all", label: "All News" },
    { id: "bitcoin", label: "Bitcoin" },
    { id: "altcoins", label: "Altcoins" },
    { id: "regulations", label: "Regulations" },
  ];

  const { data: news, isLoading, error } = useQuery({
    queryKey: ["crypto-news"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
        );
        // Add mock categories and impact for demonstration
        return response.data.Data.slice(0, 5).map((item: any) => ({
          ...item,
          categories: ["bitcoin", "regulations", "altcoins"].slice(0, Math.floor(Math.random() * 3) + 1),
          impact: Math.random() > 0.5 ? "high" : "medium",
          type: ["regulatory", "market", "technology"][Math.floor(Math.random() * 3)],
        }));
      } catch (err) {
        console.error("Error fetching news:", err);
        throw err;
      }
    },
  });

  const filteredNews = news?.filter((item: NewsItem) => 
    selectedCategory === "all" || item.categories?.includes(selectedCategory)
  );

  if (isLoading) {
    return (
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="animate-pulse space-y-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-32 bg-white/5 rounded-xl backdrop-blur-sm"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20">
        <div className="container mx-auto px-4">
          <p className="text-red-500">Error loading news: {error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Crypto News</h2>
        
        <div className="flex justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                selectedCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-white/5 hover:bg-white/10"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 max-w-5xl mx-auto">
          {filteredNews?.map((item: NewsItem) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-gray-200/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    {item.impact === "high" && (
                      <span className="flex items-center gap-1 text-xs bg-red-500/20 text-red-500 px-2 py-1 rounded-full">
                        <AlertCircle className="w-3 h-3" />
                        High Volatility Alert
                      </span>
                    )}
                    {item.type === "regulatory" && (
                      <span className="flex items-center gap-1 text-xs bg-blue-500/20 text-blue-500 px-2 py-1 rounded-full">
                        <Shield className="w-3 h-3" />
                        Regulatory Update
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 line-clamp-2">{item.body}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={16} />
                    <span>
                      {new Date(item.published_on * 1000).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CryptoNews;
