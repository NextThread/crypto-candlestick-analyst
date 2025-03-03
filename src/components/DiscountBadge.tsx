
import { BadgePercent } from "lucide-react";
import { motion } from "framer-motion";

const DiscountBadge = () => {
  return (
    <motion.div 
      className="absolute -top-5 -right-5 bg-gradient-to-r from-amber-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1 whitespace-nowrap z-10"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 10,
        duration: 0.5 
      }}
    >
      <BadgePercent className="w-4 h-4" />
      <span>30% OFF</span>
      <span className="text-xs font-normal">Limited Time</span>
    </motion.div>
  );
};

export default DiscountBadge;
