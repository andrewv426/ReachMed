import { motion } from 'framer-motion';

function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Ask a Question",
      description: "Type your health-related question in your preferred language."
    },
    {
      number: "2",
      title: "AI Responds",
      description: "Get a helpful, informative response from our AI assistant."
    },
    {
      number: "3",
      title: "Follow Up Safely",
      description: "Continue the conversation or follow guidance on seeking professional care."
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  // Line animation for connecting the steps on desktop
  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1,
      transition: { 
        duration: 1,
        delay: 0.5 
      } 
    }
  };

  return (
    <section className="py-16 bg-gray-50" id="how-it-works">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12"
        >
          How It Works
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Connecting line for desktop */}
          <motion.div 
            className="hidden md:block absolute top-6 left-[25%] right-[25%] h-0.5 bg-red-200 z-0"
            variants={lineVariants}
            style={{ transformOrigin: 'left' }}
          />
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center text-center relative z-10"
              variants={itemVariants}
            >
              <motion.div 
                className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center text-xl font-bold mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {step.number}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default HowItWorks;
