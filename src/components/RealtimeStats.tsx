
import { useChartAnalyzedCount, useRegisteredUsersCount } from "@/utils/realtimeTracking";
import { Users, BarChart } from "lucide-react";
import { motion } from "framer-motion";

const RealtimeStats = () => {
  const chartCount = useChartAnalyzedCount();
  const userCount = useRegisteredUsersCount();

  const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };

  return (
    <section className="py-10 bg-gradient-to-b from-gray-900/40 to-gray-800/40">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="glass p-8 rounded-2xl flex items-center gap-6 border border-primary/20"
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <BarChart className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-400">Total Charts Analyzed</h3>
              <div className="text-3xl font-bold mt-2 flex items-center gap-2">
                <motion.span 
                  className="text-gradient-primary"
                  key={chartCount}
                  initial={{ opacity: 0.5, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {formatNumber(chartCount)}
                </motion.span>
                <span className="text-sm bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span>
                  live
                </span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="glass p-8 rounded-2xl flex items-center gap-6 border border-blue-400/20"
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center">
              <Users className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-400">Registered Users</h3>
              <div className="text-3xl font-bold mt-2 flex items-center gap-2">
                <motion.span 
                  className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent"
                  key={userCount}
                  initial={{ opacity: 0.5, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {formatNumber(userCount)}
                </motion.span>
                <span className="text-sm bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span>
                  live
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RealtimeStats;
