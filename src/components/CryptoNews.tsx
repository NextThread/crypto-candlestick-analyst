import { useQuery } from "@tanstack/react-query";
import { Calendar, ArrowUpRight } from "lucide-react";
import axios from "axios";

// Updated interface to match CryptoCompare's news response
interface NewsItem {
  id: string;
  title: string;
  url: string;
  published_on: number; // Unix timestamp
  body: string; // Using 'body' as description
}

const CryptoNews = () => {
  const { data: news, isLoading, error } = useQuery({
    queryKey: ["crypto-news"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
        );
        console.log("API Response:", response.data);
        // CryptoCompare returns data in a 'Data' property
        return response.data.Data.slice(0, 5);
      } catch (err) {
        console.error("Error fetching news:", err);
        throw err;
      }
    },
  });

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

  if (!news || news.length === 0) {
    return (
      <div className="py-20">
        <div className="container mx-auto px-4">
          <p>No news available at the moment</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Crypto News</h2>
        <div className="grid gap-6 max-w-5xl mx-auto">
          {news.map((item: NewsItem) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-gray-200/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
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