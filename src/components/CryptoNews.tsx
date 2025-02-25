
import { useQuery } from "@tanstack/react-query";
import { Calendar, ArrowUpRight } from "lucide-react";
import axios from "axios";

interface NewsItem {
  title: string;
  url: string;
  published_at: string;
  description: string;
}

const CryptoNews = () => {
  const { data: news, isLoading } = useQuery({
    queryKey: ["crypto-news"],
    queryFn: async () => {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/news"
      );
      return response.data.slice(0, 5);
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

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Crypto News</h2>
        <div className="grid gap-6 max-w-5xl mx-auto">
          {news?.map((item: NewsItem) => (
            <a
              key={item.url}
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
                  <p className="text-gray-400 line-clamp-2">{item.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={16} />
                    <span>
                      {new Date(item.published_at).toLocaleDateString()}
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
