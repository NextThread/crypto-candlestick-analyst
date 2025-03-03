
import { Users } from "lucide-react";
import { motion } from "framer-motion";

interface SubscriberBadgeProps {
  count: number;
  planName: string;
}

const SubscriberBadge = ({ count, planName }: SubscriberBadgeProps) => {
  // Generate a unique but consistent number of subscribers for each plan
  const getSubscriberCount = () => {
    switch (planName.toLowerCase()) {
      case 'basic':
        return 127;
      case 'pro':
        return 358;
      case 'premium':
        return 84;
      default:
        return count || 100;
    }
  };

  const subscribers = count || getSubscriberCount();

  return (
    <motion.div 
      className="absolute top-4 right-4 bg-gray-800 text-white px-3 py-1.5 rounded-full shadow-lg flex items-center justify-center z-10"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 10,
        duration: 0.5 
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
    >
      <Users className="w-4 h-4 mr-1.5" />
      <span className="text-xs font-medium">{subscribers} users</span>
    </motion.div>
  );
};

export default SubscriberBadge;
