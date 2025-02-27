
import { MessageSquare, X } from "lucide-react";
import { useState } from "react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <div className="p-4">
            <div className="mb-4">
              <p className="text-sm bg-primary/20 text-primary rounded-lg p-3 inline-block">
                Hello! How can I help you today?
              </p>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full px-4 py-2 bg-white/5 border border-gray-200/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
