
import { Users } from "lucide-react";
import { useState, useEffect } from "react";

const SocialProofBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide the banner when scrolled down more than 100px
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="sticky top-16 bg-primary/10 border-y border-primary/20 py-4 z-10">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-center gap-2 text-sm">
          <Users className="w-4 h-4 text-primary" />
          <span>Join 5,000+ traders making smarter decisions daily</span>
          <div className="ml-4 flex items-center gap-2 border-l border-primary/20 pl-4">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-xs">256-bit SSL encryption</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofBanner;
