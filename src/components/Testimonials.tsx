
const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Traders Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm">
            <p className="text-gray-300 mb-4">"The AI analysis has completely transformed my trading strategy. The accuracy of the predictions is remarkable."</p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary/20"></div>
              <div className="ml-3">
                <h4 className="font-semibold">Alex Thompson</h4>
                <p className="text-sm text-gray-400">Crypto Trader</p>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm">
            <p className="text-gray-300 mb-4">"Being able to upload my own charts and get instant analysis has saved me countless hours of research."</p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary/20"></div>
              <div className="ml-3">
                <h4 className="font-semibold">Sarah Chen</h4>
                <p className="text-sm text-gray-400">Portfolio Manager</p>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm">
            <p className="text-gray-300 mb-4">"The risk management suggestions have helped me maintain a more disciplined approach to trading."</p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary/20"></div>
              <div className="ml-3">
                <h4 className="font-semibold">Michael Rodriguez</h4>
                <p className="text-sm text-gray-400">Day Trader</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
