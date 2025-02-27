"use client";

import { motion } from "framer-motion";
import React from "react";

interface WiggleTextProps {
  text: string;
  classes: string;
}

const WiggleText: React.FC<WiggleTextProps> = ({ text, classes }) => {
  return (
    <h1 className={classes}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          animate={{ y: [-5, 5, -5] }}
          transition={{
            duration: 0.6,
            // repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.1, // Creates wave effect
          }}
        >
          {char}
        </motion.span>
      ))}
    </h1>
  );
};

export default WiggleText;
