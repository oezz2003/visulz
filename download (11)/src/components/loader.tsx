
"use client";

import { motion } from "framer-motion";
import { Logo } from "./logo";

const containerVariants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const logoVariants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const textVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-background"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div variants={logoVariants}>
        <Logo className="text-4xl" />
      </motion.div>
      <motion.p 
        className="mt-4 font-headline text-lg text-primary"
        variants={textVariants}
      >
        We craft from scratch.
      </motion.p>
    </motion.div>
  );
};

export default Loader;
