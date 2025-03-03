
import { Users } from "lucide-react";

const SocialProofBanner = () => {
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
