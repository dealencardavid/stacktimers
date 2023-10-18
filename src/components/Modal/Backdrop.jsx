import { motion } from "framer-motion";

function Backdrop({ children, onClick }) {
  return (
    <motion.div
      className="absolute z-10 top-0 left-0 backdrop-blur-sm w-full h-full flex items-center justify-center overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

export default Backdrop;
