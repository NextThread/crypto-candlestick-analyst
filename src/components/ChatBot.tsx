
import { MessageSquare, X, Send } from "lucide-react";
import { useState } from "react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", isBot: true }
  ]);

  const getRandomGreeting = () => {
    const greetings = [
      "Hi there! How can I assist you?",
      "Hello! How are you today?",
      "Hey! What can I help you with?",
      "Greetings! How may I be of service?",
      "Welcome! How can I support you today?"
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: message, isBot: false }]);

    // Simple keyword-based response system
    const lowerMessage = message.toLowerCase();
    let botResponse = "";

    if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
      botResponse = getRandomGreeting();
    } else if (lowerMessage.includes("how are you")) {
      botResponse = "I'm doing great, thanks for asking! How can I help you today?";
    } else {
      botResponse = "Thanks for your message! Our team will get back to you soon.";
    }

    // Add bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 1000);

    setMessage("");
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 p-4 bg-gradient-to-r from-primary to-blue-500 rounded-full shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-110 animate-fade-in"
      >
        <MessageSquare className="w-6 h-6 text-white" />
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-[90vw] sm:w-80 bg-gradient-to-b from-gray-900 to-black rounded-lg shadow-xl border border-gray-200/10 animate-scale-in">
          <div className="flex items-center justify-between p-4 border-b border-gray-200/10 bg-gradient-to-r from-gray-900/50 to-black/50">
            <div>
              <h3 className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Chat Support</h3>
              <p className="text-xs text-gray-400">We typically reply within 2 hours</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transform hover:rotate-90 transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4 h-80 flex flex-col">
            <div className="flex-1 overflow-y-auto space-y-4 mb-4 scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'} animate-fade-in`}>
                  <p className={`text-sm p-3 rounded-lg max-w-[80%] ${
                    msg.isBot 
                      ? 'bg-gradient-to-r from-primary/20 to-blue-500/20 text-primary' 
                      : 'bg-gradient-to-r from-primary to-blue-500 text-white'
                  } shadow-lg`}>
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
                className="w-full px-4 py-2 pr-12 bg-white/5 border border-gray-200/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-primary hover:text-primary/80 transition-colors"
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
