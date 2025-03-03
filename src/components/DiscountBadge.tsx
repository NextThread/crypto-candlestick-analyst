
import { BadgePercent } from "lucide-react";
import { motion } from "framer-motion";

const DiscountBadge = () => {
  return (
    <motion.div 
      className="absolute bottom-4 right-4 bg-gradient-to-r from-amber-500 to-red-500 text-white h-16 w-16 rounded-full shadow-lg flex flex-col items-center justify-center z-10 rotate-12"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 10,
        duration: 0.5 
      }}
      whileHover={{ 
        scale: 1.1,
        rotate: 0,
        boxShadow: "0 0 20px rgba(251, 113, 133, 0.6)",
        transition: { duration: 0.2 }
      }}
    >
      <motion.div
        animate={{
          rotate: [0, 10, 0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }}
      >
        <BadgePercent className="w-5 h-5 mb-0.5" />
        <span className="text-xs font-bold">30% OFF</span>
      </motion.div>
      <motion.div 
        className="absolute inset-0 rounded-full border-2 border-white/30"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.7, 0.3, 0.7]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </motion.div>
  );
};

export default DiscountBadge;
