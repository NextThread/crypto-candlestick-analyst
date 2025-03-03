
import { BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "The AI analysis has completely transformed my trading strategy. The accuracy of the predictions is remarkable.",
      name: "Alex Thompson",
      title: "Verified Crypto Trader",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      id: 2,
      content: "Being able to upload my own charts and get instant analysis has saved me countless hours of research.",
      name: "Sarah Chen",
      title: "Verified Portfolio Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: 3,
      content: "The risk management suggestions have helped me maintain a more disciplined approach to trading.",
      name: "Michael Rodriguez",
      title: "Verified Day Trader",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Fix: properly typed animation variants
  const floatingIconVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 0, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut"
      }
    }
  };

  // Fix: properly typed animation variants
  const glowVariants = {
    initial: { boxShadow: "0 0 10px rgba(59, 130, 246, 0.3)" },
    animate: {
      boxShadow: ["0 0 10px rgba(59, 130, 246, 0.3)", "0 0 20px rgba(59, 130, 246, 0.5)", "0 0 10px rgba(59, 130, 246, 0.3)"],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background decorative elements with animations */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent pointer-events-none" />
      
      <motion.div 
        className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.25, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute top-1/3 left-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl opacity-30"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          opacity: [0.3, 0.2, 0.3]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            What Our Traders Say
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Discover how Chartly AI has transformed trading strategies for professionals worldwide
          </motion.p>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.2 }
              }}
              className="card-shine glass p-8 rounded-xl flex flex-col justify-between h-full relative"
              custom={index}
            >
              <div>
                <motion.div 
                  className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: index * 0.5
                  }}
                />
                <div className="mb-6">
                  <motion.svg 
                    width="45" 
                    height="36" 
                    className="text-primary/30 mb-4" 
                    viewBox="0 0 45 36" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    variants={floatingIconVariants}
                    initial="initial"
                    animate="animate"
                  >
                    <path d="M13.65 36C9.45 36 6.075 34.65 3.525 31.95C1.175 29.05 0 25.9 0 22.5C0 19.5 0.85 16.675 2.55 14.025C4.45 11.175 7 8.85 10.2 7.05C13.4 5.25 16.875 4.25 20.625 4.05L21.825 7.8C19.275 8.2 17.025 9.05 15.075 10.35C13.125 11.65 11.85 13.075 11.25 14.625C10.85 15.625 10.75 16.425 10.95 17.025C11.15 17.625 11.6 18.025 12.3 18.225C13.5 18.425 14.625 18.15 15.675 17.4C16.725 16.65 17.25 15.375 17.25 13.575C17.25 12.025 16.75 10.75 15.75 9.75C14.75 8.75 13.45 8.25 11.85 8.25C11.05 8.25 10.3 8.35 9.6 8.55L9 6.15C9.8 5.95 10.7 5.85 11.7 5.85C14.1 5.85 16.075 6.575 17.625 8.025C19.175 9.475 19.95 11.3 19.95 13.5C19.95 16.1 19.075 18.225 17.325 19.875C15.575 21.525 13.45 22.35 10.95 22.35C9.55 22.35 8.45 21.95 7.65 21.15C6.85 20.35 6.45 19.35 6.45 18.15C6.45 17.65 6.6 16.975 6.9 16.125C7.2 15.275 7.725 14.425 8.475 13.575C9.425 12.525 11.05 11.45 13.35 10.35C15.65 9.25 18.1 8.6 20.7 8.4L20.325 10.275C18.325 10.475 16.5 11.1 14.85 12.15C13.2 13.2 12.075 14.375 11.475 15.675C10.875 16.975 10.9 18 11.55 18.75C11.95 19.25 12.55 19.5 13.35 19.5C14.65 19.5 15.675 19.025 16.425 18.075C17.175 17.125 17.55 15.975 17.55 14.625C17.55 13.425 17.225 12.45 16.575 11.7C15.925 10.95 15.1 10.575 14.1 10.575C13.3 10.575 12.55 10.825 11.85 11.325C11.15 11.825 10.8 12.45 10.8 13.2C10.8 13.8 11 14.325 11.4 14.775C11.8 15.225 12.3 15.45 12.9 15.45C13.7 15.45 14.35 15.15 14.85 14.55L16.425 16.2C15.525 17.4 14.25 18 12.6 18C11.4 18 10.375 17.575 9.525 16.725C8.675 15.875 8.25 14.825 8.25 13.575C8.25 11.825 9 10.375 10.5 9.225C12 8.075 13.725 7.5 15.675 7.5C17.825 7.5 19.575 8.175 20.925 9.525C22.275 10.875 22.95 12.525 22.95 14.475C22.95 17.025 22.125 19.125 20.475 20.775C18.825 22.425 16.775 23.25 14.325 23.25C12.225 23.25 10.55 22.575 9.3 21.225C8.05 19.875 7.425 18.225 7.425 16.275C7.425 13.325 8.625 10.85 11.025 8.85C13.425 6.85 16.375 5.85 19.875 5.85C20.675 5.85 21.35 5.9 21.9 6L21.45 8.25C20.95 8.15 20.375 8.1 19.725 8.1C16.975 8.1 14.625 8.975 12.675 10.725C10.725 12.475 9.75 14.6 9.75 17.1C9.75 20.2 11.05 22.425 13.65 23.775C14.85 24.425 16.225 24.75 17.775 24.75C20.475 24.75 22.775 23.825 24.675 21.975C26.575 20.125 27.525 17.825 27.525 15.075C27.525 12.575 26.675 10.5 24.975 8.85C23.275 7.2 21.1 6.375 18.45 6.375C16.75 6.375 15.225 6.75 13.875 7.5L12.525 5.55C14.325 4.55 16.35 4.05 18.6 4.05C22.1 4.05 24.975 5.175 27.225 7.425C29.475 9.675 30.6 12.425 30.6 15.675C30.6 19.625 29.2 22.95 26.4 25.65C23.6 28.35 20.05 29.7 15.75 29.7C14.85 29.7 14.075 29.65 13.425 29.55L13.275 27.45C14.075 27.55 14.85 27.6 15.6 27.6C19.25 27.6 22.25 26.45 24.6 24.15C26.95 21.85 28.125 19 28.125 15.6C28.125 12.95 27.2 10.725 25.35 8.925C23.5 7.125 21.175 6.225 18.375 6.225C16.775 6.225 15.275 6.575 13.875 7.275L12.9 5.7C14.5 4.9 16.2 4.5 18 4.5C21.3 4.5 24.075 5.55 26.325 7.65C28.575 9.75 29.7 12.325 29.7 15.375C29.7 18.875 28.45 21.8 25.95 24.15C23.45 26.5 20.3 27.675 16.5 27.675C15.65 27.675 14.85 27.625 14.1 27.525L13.95 25.725C14.55 25.825 15.175 25.875 15.825 25.875C19.125 25.875 21.85 24.85 24 22.8C26.15 20.75 27.225 18.25 27.225 15.3C27.225 12.75 26.325 10.625 24.525 8.925C22.725 7.225 20.475 6.375 17.775 6.375C15.975 6.375 14.325 6.8 12.825 7.65L12.15 6.375C13.75 5.525 15.525 5.1 17.475 5.1C20.525 5.1 23.1 6.05 25.2 7.95C27.3 9.85 28.35 12.2 28.35 15C28.35 18.25 27.15 20.975 24.75 23.175C22.35 25.375 19.4 26.475 15.9 26.475C15.05 26.475 14.25 26.425 13.5 26.325L13.35 24.75C13.95 24.85 14.55 24.9 15.15 24.9C17.95 24.9 20.3 24 22.2 22.2C24.1 20.4 25.05 18.1 25.05 15.3C25.05 12.9 24.15 10.95 22.35 9.45C20.55 7.95 18.4 7.2 15.9 7.2C14.7 7.2 13.55 7.425 12.45 7.875L12.15 6.375C13.35 5.875 14.65 5.625 16.05 5.625C18.95 5.625 21.425 6.5 23.475 8.25C25.525 10 26.55 12.2 26.55 14.85C26.55 18.05 25.475 20.65 23.325 22.65C21.175 24.65 18.5 25.65 15.3 25.65C14.5 25.65 13.825 25.6 13.275 25.5L13.125 24.075C13.675 24.175 14.2 24.225 14.7 24.225C17.4 24.225 19.65 23.325 21.45 21.525C23.25 19.725 24.15 17.535 24.15 14.955C24.15 12.755 23.425 10.93 21.975 9.48C20.525 8.03 18.725 7.305 16.575 7.305C15.325 7.305 14.175 7.53 13.125 7.98L12.825 6.75C13.975 6.25 15.225 6 16.575 6C19.075 6 21.175 6.85 22.875 8.55C24.575 10.25 25.425 12.3 25.425 14.7C25.425 17.6 24.4 20.025 22.35 21.975C20.3 23.925 17.775 24.9 14.775 24.9C14.025 24.9 13.35 24.85 12.75 24.75L12.6 23.4C13.1 23.5 13.6 23.55 14.1 23.55C16.7 23.55 18.875 22.675 20.625 20.925C22.375 19.175 23.25 17.075 23.25 14.625C23.25 12.525 22.55 10.775 21.15 9.375C19.75 7.975 18.025 7.275 15.975 7.275C14.875 7.275 13.825 7.5 12.825 7.95L12.75 6.975C13.65 6.575 14.6 6.375 15.6 6.375C17.9 6.375 19.9 7.175 21.6 8.775C23.3 10.375 24.15 12.325 24.15 14.625C24.15 17.275 23.2 19.5 21.3 21.3C19.4 23.1 17.05 24 14.25 24C13.75 24 13.25 23.975 12.75 23.925L12.9 36Z" fill="currentColor"/>
                  </motion.svg>
                  <p className="text-gray-300 leading-relaxed mb-6">{testimonial.content}</p>
                </div>
              </div>
              <div className="flex items-center">
                <motion.div 
                  className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 shadow-lg shadow-primary/10"
                  initial="initial"
                  whileHover="hover"
                  variants={imageVariants}
                  animate="animate"
                  variants={glowVariants}
                >
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="ml-4">
                  <div className="flex items-center gap-2">
                    <motion.h4 
                      className="font-semibold text-white"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (index * 0.1) }}
                    >
                      {testimonial.name}
                    </motion.h4>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 500, 
                        damping: 10, 
                        delay: 0.7 + (index * 0.1) 
                      }}
                    >
                      <BadgeCheck className="w-4 h-4 text-primary" />
                    </motion.div>
                  </div>
                  <motion.p 
                    className="text-sm text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 + (index * 0.1) }}
                  >
                    {testimonial.title}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
