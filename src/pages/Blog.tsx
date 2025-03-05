
import { useEffect } from "react";
import { Link } from "react-router-dom";

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "How to Use Chartly AI for Market Predictions",
    excerpt: "Learn how to leverage Chartly AI's powerful features to make accurate market predictions and improve your trading strategy.",
    date: "May 28, 2024",
    category: "Guides & Tutorials",
    slug: "how-to-use-chartly-ai-for-market-predictions",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Top AI-Powered Chart Analysis Tools in 2024",
    excerpt: "Discover the best AI tools for chart analysis that are revolutionizing how traders and investors make decisions in today's market.",
    date: "May 25, 2024",
    category: "Guides & Tutorials",
    slug: "top-ai-powered-chart-analysis-tools-2024",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "How to Read Stock Market Charts with AI",
    excerpt: "Master the art of reading and interpreting stock market charts with the assistance of artificial intelligence.",
    date: "May 22, 2024",
    category: "Guides & Tutorials",
    slug: "how-to-read-stock-market-charts-with-ai",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "What is AI in Trading? A Beginner's Guide",
    excerpt: "An introduction to artificial intelligence in trading for beginners. Learn the basic concepts and how AI is transforming the trading landscape.",
    date: "May 19, 2024",
    category: "Educational Content",
    slug: "what-is-ai-in-trading-beginners-guide",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Machine Learning vs. AI in Finance – Key Differences",
    excerpt: "Understand the distinct differences between machine learning and artificial intelligence in the context of financial analysis.",
    date: "May 16, 2024",
    category: "Educational Content",
    slug: "machine-learning-vs-ai-in-finance",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "How AI is Changing Technical Analysis",
    excerpt: "Explore how artificial intelligence is revolutionizing traditional technical analysis methods and creating new opportunities for traders.",
    date: "May 13, 2024",
    category: "Educational Content",
    slug: "how-ai-is-changing-technical-analysis",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "Why Choose Chartly AI for Data Analysis?",
    excerpt: "Discover the unique advantages and features that make Chartly AI stand out from other data analysis platforms in the market.",
    date: "May 10, 2024",
    category: "Product & Features",
    slug: "why-choose-chartly-ai-for-data-analysis",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "How Chartly AI Helps Traders Make Better Decisions",
    excerpt: "Learn how Chartly AI's advanced features can help traders make more informed and strategic decisions in volatile markets.",
    date: "May 7, 2024",
    category: "Product & Features",
    slug: "how-chartly-ai-helps-traders-make-better-decisions",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
  }
];

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="pt-24 pb-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gradient-primary">Chartly AI Blog</h1>
        <p className="text-gray-400 mb-12">Insights, guides, and news about AI-powered chart analysis</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link 
              to={`/blog/${post.slug}`} 
              key={post.id}
              className="glass hover:bg-gray-800/40 transition-all duration-300 overflow-hidden group rounded-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-0 right-0 bg-primary/80 text-white text-xs font-semibold px-2 py-1 m-2 rounded">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm mb-4">
                  {post.date}
                </p>
                <p className="text-gray-300">
                  {post.excerpt}
                </p>
                <div className="mt-4 text-primary font-medium flex items-center">
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
