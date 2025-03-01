
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const ComparisonTable = () => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const features = [
    {
      name: "Real-time Analysis",
      chartly: true,
      traditional: true,
    },
    {
      name: "AI-Powered Insights",
      chartly: true,
      traditional: false,
    },
    {
      name: "Pattern Recognition",
      chartly: true,
      traditional: true,
    },
    {
      name: "Sentiment Analysis",
      chartly: true,
      traditional: false,
    },
    {
      name: "Custom Chart Upload",
      chartly: true,
      traditional: false,
    },
    {
      name: "Predictive Analytics",
      chartly: true,
      traditional: false,
    },
    {
      name: "Market Correlation",
      chartly: true,
      traditional: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.05)" },
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Chartly AI vs Traditional Tools
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-400 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          See how our AI-powered platform outperforms traditional analysis tools in every category
        </motion.p>
        
        <div className="max-w-4xl mx-auto overflow-x-auto glass p-1 rounded-xl">
          <motion.table 
            className="w-full border-collapse"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <thead>
              <tr className="border-b border-gray-200/20">
                <th className="p-6 text-left text-lg font-medium">Features</th>
                <th className="p-6 text-center text-lg font-medium">
                  <div className="flex flex-col items-center">
                    <span className="text-primary font-bold">Chartly AI</span>
                    <span className="text-xs text-gray-400 mt-1">Next-Gen Analysis</span>
                  </div>
                </th>
                <th className="p-6 text-center text-lg font-medium">
                  <div className="flex flex-col items-center">
                    <span className="text-gray-400 font-bold">Traditional Tools</span>
                    <span className="text-xs text-gray-500 mt-1">Legacy Solutions</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <motion.tr
                  key={index}
                  className="border-b border-gray-200/10 transition-colors"
                  variants={rowVariants}
                  onMouseEnter={() => setHoveredRow(index)}
                  onMouseLeave={() => setHoveredRow(null)}
                  animate={hoveredRow === index ? "hover" : "visible"}
                >
                  <td className="p-6 font-medium">{feature.name}</td>
                  <td className="p-6 text-center">
                    {feature.chartly ? (
                      <div className="flex justify-center">
                        <motion.div
                          className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.2 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <Check className="w-5 h-5 text-primary" />
                        </motion.div>
                      </div>
                    ) : (
                      <X className="w-5 h-5 mx-auto text-gray-500" />
                    )}
                  </td>
                  <td className="p-6 text-center">
                    {feature.traditional ? (
                      <div className="flex justify-center">
                        <div className="w-8 h-8 bg-gray-700/40 rounded-full flex items-center justify-center">
                          <Check className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                    ) : (
                      <X className="w-5 h-5 mx-auto text-gray-500" />
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
