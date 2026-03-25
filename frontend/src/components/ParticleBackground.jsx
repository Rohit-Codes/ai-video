import React from 'react';
import { motion } from 'framer-motion';

const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pattern-grid">
      {/* Dark overlay for grid */}
      <div className="absolute inset-0 bg-[#0a0a0f] opacity-[0.85]" />
      
      {/* Animated Blobs */}
      <motion.div 
        animate={{ 
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="blob-glow top-[-20%] left-[-10%]"
      />
      
      <motion.div 
        animate={{ 
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
        className="blob-glow blob-glow-cyan top-[40%] right-[-10%]"
      />
      
      <motion.div 
        animate={{ 
          x: [0, 50, 0],
          y: [0, -100, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear", delay: 5 }}
        className="blob-glow blob-glow-pink bottom-[-20%] left-[20%]"
      />
    </div>
  );
};

export default ParticleBackground;
