
const Subscribe = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/20 to-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-8">
            Subscribe to our newsletter for the latest updates on AI trading analysis and market insights.
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-gray-200/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
