
import { MessageSquare, X, Send } from "lucide-react";
import { useState } from "react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", isBot: true }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: message, isBot: false }]);

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Thanks for your message! Our team will get back to you soon.",
        isBot: true
      }]);
    }, 1000);

    setMessage("");
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 p-4 bg-primary rounded-full shadow-lg hover:bg-primary/90 transition-colors"
      >
        <MessageSquare className="w-6 h-6 text-white" />
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 bg-gray-900 rounded-lg shadow-xl border border-gray-200/10">
          <div className="flex items-center justify-between p-4 border-b border-gray-200/10">
            <div>
              <h3 className="font-semibold">Chat Support</h3>
              <p className="text-xs text-gray-400">We typically reply within 2 hours</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4 h-80 flex flex-col">
            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <p className={`text-sm p-3 rounded-lg max-w-[80%] ${
                    msg.isBot 
                      ? 'bg-primary/20 text-primary' 
                      : 'bg-primary text-white'
                  }`}>
                    {msg.text}
                  </p>
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="w-full px-4 py-2 pr-12 bg-white/5 border border-gray-200/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-primary hover:text-primary/80"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
