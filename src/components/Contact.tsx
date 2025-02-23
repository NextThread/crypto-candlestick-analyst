
import { Mail, MessageSquare, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Email Us</h3>
                <p className="text-gray-400">support@cryptoai.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Call Us</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MessageSquare className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Live Chat</h3>
                <p className="text-gray-400">Available 24/7</p>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-gray-200/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-gray-200/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-gray-200/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
            ></textarea>
            <button className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
