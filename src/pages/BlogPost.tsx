
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// Blog post data (same as in Blog.tsx)
const blogPosts = [
  {
    id: 1,
    title: "How to Use Chartly AI for Market Predictions",
    slug: "how-to-use-chartly-ai-for-market-predictions",
    date: "May 28, 2024",
    author: "Alex Thompson",
    category: "Guides & Tutorials",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80",
    content: `
      <h2>Introduction to Chartly AI for Market Predictions</h2>
      <p>In today's fast-paced financial markets, having a reliable tool for market predictions can be the difference between successful trades and missed opportunities. Chartly AI is designed to help traders and investors make more informed decisions by leveraging the power of artificial intelligence to analyze patterns, trends, and market indicators.</p>
      
      <p>This comprehensive guide will walk you through how to effectively use Chartly AI to enhance your market prediction capabilities and improve your overall trading strategy.</p>
      
      <h2>Getting Started with Chartly AI</h2>
      <p>Before diving into market predictions, it's important to familiarize yourself with the Chartly AI platform. After creating an account and logging in, you'll be greeted with an intuitive dashboard that provides access to all the tools and features available to you.</p>
      
      <p>The dashboard is divided into several sections, including:</p>
      <ul>
        <li>Chart Analysis: Where you can upload and analyze charts</li>
        <li>Market Predictions: AI-generated forecasts based on historical data</li>
        <li>Performance Tracking: Monitor the accuracy of previous predictions</li>
        <li>Learning Resources: Tutorials and guides to help you make the most of the platform</li>
      </ul>
      
      <h2>Uploading and Analyzing Charts</h2>
      <p>To get started with market predictions, you'll first need to upload a chart for analysis. Chartly AI supports various chart formats from different trading platforms. Simply click on the "Upload Chart" button in the Chart Analysis section and select the file from your computer.</p>
      
      <p>Once uploaded, Chartly AI will automatically analyze the chart using its advanced algorithms. This analysis includes:</p>
      <ul>
        <li>Pattern Recognition: Identifying common trading patterns such as head and shoulders, double tops/bottoms, etc.</li>
        <li>Trend Analysis: Determining the current market trend (bullish, bearish, or sideways)</li>
        <li>Support and Resistance Levels: Identifying key price levels where the market is likely to find support or resistance</li>
        <li>Technical Indicators: Analyzing various technical indicators such as moving averages, RSI, MACD, etc.</li>
      </ul>
      
      <h2>Interpreting AI-Generated Predictions</h2>
      <p>After analyzing your chart, Chartly AI will generate market predictions based on the data provided. These predictions are presented in an easy-to-understand format, including:</p>
      
      <p><strong>Price Targets:</strong> Potential price levels the asset might reach in different timeframes (short-term, medium-term, and long-term)</p>
      
      <p><strong>Confidence Score:</strong> A percentage indicating how confident the AI is in its prediction, based on historical data and pattern recognition</p>
      
      <p><strong>Risk Assessment:</strong> An evaluation of the potential risks associated with the predicted market movement</p>
      
      <p>It's important to note that while Chartly AI provides powerful predictions, they should be used as part of a comprehensive trading strategy rather than as standalone trading signals.</p>
      
      <h2>Customizing Your Analysis Parameters</h2>
      <p>Chartly AI allows you to customize various parameters to refine your analysis according to your trading style and preferences. These customization options include:</p>
      <ul>
        <li>Timeframe Selection: Choose the timeframe for your analysis (e.g., hourly, daily, weekly)</li>
        <li>Indicator Preferences: Select which technical indicators you want to include in the analysis</li>
        <li>Risk Tolerance: Adjust your risk tolerance level to get predictions that align with your trading approach</li>
        <li>Historical Data Range: Define how far back the AI should look when analyzing historical data</li>
      </ul>
      
      <h2>Integrating Chartly AI Predictions into Your Trading Strategy</h2>
      <p>To get the most out of Chartly AI, it's essential to integrate its predictions into your existing trading strategy effectively. Here are some best practices:</p>
      
      <p><strong>Use Multiple Timeframes:</strong> Analyze the market across different timeframes to get a more comprehensive view of potential price movements</p>
      
      <p><strong>Combine with Fundamental Analysis:</strong> While Chartly AI excels at technical analysis, combining its predictions with fundamental analysis can provide a more holistic view of the market</p>
      
      <p><strong>Set Realistic Expectations:</strong> Remember that no prediction tool is 100% accurate. Use Chartly AI as a guide, not as a guaranteed outcome</p>
      
      <p><strong>Track and Learn:</strong> Keep track of how accurate the predictions are over time and learn from both successful and unsuccessful trades</p>
      
      <h2>Advanced Features for Power Users</h2>
      <p>As you become more comfortable with Chartly AI, you might want to explore its advanced features:</p>
      <ul>
        <li>Custom Alerts: Set up alerts for specific market conditions or price levels</li>
        <li>Historical Backtesting: Test trading strategies based on AI predictions using historical data</li>
        <li>Portfolio Analysis: Analyze multiple assets simultaneously to optimize your portfolio</li>
        <li>API Integration: Connect Chartly AI with your trading platform for seamless workflow</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Chartly AI offers a powerful suite of tools to enhance your market prediction capabilities. By following the steps outlined in this guide and consistently practicing, you can leverage the power of AI to make more informed trading decisions.</p>
      
      <p>Remember, the key to successful trading is not just having access to advanced tools like Chartly AI but also developing a disciplined approach to using these tools effectively. Happy trading!</p>
    `
  },
  {
    id: 2,
    title: "Top AI-Powered Chart Analysis Tools in 2024",
    slug: "top-ai-powered-chart-analysis-tools-2024",
    date: "May 25, 2024",
    author: "Sarah Chen",
    category: "Guides & Tutorials",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    content: `<p>Comprehensive content about the top AI-powered chart analysis tools available in 2024, including Chartly AI and its competitors...</p>`
  },
  // Add basic content structure for other articles
  {
    id: 3,
    title: "How to Read Stock Market Charts with AI",
    slug: "how-to-read-stock-market-charts-with-ai",
    date: "May 22, 2024",
    author: "Michael Rodriguez",
    category: "Guides & Tutorials",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80",
    content: `<p>Detailed guide on how to read stock market charts with the assistance of AI technology...</p>`
  },
  {
    id: 4,
    title: "What is AI in Trading? A Beginner's Guide",
    slug: "what-is-ai-in-trading-beginners-guide",
    date: "May 19, 2024",
    author: "Emma Wilson",
    category: "Educational Content",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    content: `<p>Introduction to AI in trading for beginners, covering basic concepts and applications...</p>`
  },
  {
    id: 5,
    title: "Machine Learning vs. AI in Finance – Key Differences",
    slug: "machine-learning-vs-ai-in-finance",
    date: "May 16, 2024",
    author: "David Chang",
    category: "Educational Content",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    content: `<p>Explanation of the differences between machine learning and AI in the context of financial analysis...</p>`
  },
  {
    id: 6,
    title: "How AI is Changing Technical Analysis",
    slug: "how-ai-is-changing-technical-analysis",
    date: "May 13, 2024",
    author: "Rachel Green",
    category: "Educational Content",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    content: `<p>Comprehensive overview of how AI is transforming traditional technical analysis methods...</p>`
  },
  {
    id: 7,
    title: "Why Choose Chartly AI for Data Analysis?",
    slug: "why-choose-chartly-ai-for-data-analysis",
    date: "May 10, 2024",
    author: "James Miller",
    category: "Product & Features",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80",
    content: `<p>In-depth look at the features and benefits that make Chartly AI stand out for data analysis...</p>`
  },
  {
    id: 8,
    title: "How Chartly AI Helps Traders Make Better Decisions",
    slug: "how-chartly-ai-helps-traders-make-better-decisions",
    date: "May 7, 2024",
    author: "Sophia Taylor",
    category: "Product & Features",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&q=80",
    content: `<p>Explanation of how Chartly AI's features can improve traders' decision-making processes...</p>`
  }
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(post => post.slug === slug);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!post) {
    return (
      <div className="pt-24 pb-16 px-4 md:px-8 lg:px-16 max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <p className="mb-8">The article you're looking for doesn't exist or has been moved.</p>
        <Link to="/blog" className="text-primary hover:underline">
          Return to Blog
        </Link>
      </div>
    );
  }
  
  return (
    <div className="pt-24 pb-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <Link to="/blog" className="text-primary hover:underline flex items-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>
        
        <article>
          <header className="mb-8">
            <div className="mb-4 text-primary text-sm font-medium">
              {post.category}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-400 text-sm">
              <span>By {post.author}</span>
              <span className="mx-2">•</span>
              <span>{post.date}</span>
            </div>
          </header>
          
          <div className="mb-8 rounded-xl overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-auto"
            />
          </div>
          
          <div 
            className="prose prose-invert prose-gray max-w-none" 
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
        
        <div className="mt-16 pt-8 border-t border-gray-800">
          <h3 className="text-xl font-semibold mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(relatedPost => relatedPost.id !== post.id && relatedPost.category === post.category)
              .slice(0, 2)
              .map(relatedPost => (
                <Link 
                  to={`/blog/${relatedPost.slug}`} 
                  key={relatedPost.id}
                  className="glass hover:bg-gray-800/40 transition-all duration-300 overflow-hidden rounded-xl flex flex-col"
                >
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex-grow">
                    <h4 className="text-lg font-semibold text-white mb-2 hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {relatedPost.date}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
