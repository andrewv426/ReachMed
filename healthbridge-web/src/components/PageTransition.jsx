import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 10
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: -10
  }
};

// Page transition settings
const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.3 // 300ms - fast but still noticeable
};

function PageTransition({ children }) {
  const location = useLocation();
  
  return (
    <motion.div
      key={location.pathname}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="page-transition"
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
