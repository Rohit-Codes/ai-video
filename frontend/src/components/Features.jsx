import React from 'react';
import { motion } from 'framer-motion';
import { Image, Video, Zap, Palette, MonitorPlay, Lock } from 'lucide-react';

const FEATURES = [
  {
    icon: <Image className="w-6 h-6 text-purple-400" />,
    title: "AI Image Generation",
    description: "From text to photorealistic images in seconds. High-resolution detailing.",
    color: "group-hover:shadow-[0_0_25px_rgba(139,92,246,0.3)] group-hover:border-purple-500/50"
  },
  {
    icon: <Video className="w-6 h-6 text-cyan-400" />,
    title: "AI Video Generation",
    description: "Bring your ideas to life with AI-powered video sequences matching your vision.",
    color: "group-hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] group-hover:border-cyan-500/50"
  },
  {
    icon: <Zap className="w-6 h-6 text-pink-400" />,
    title: "Lightning Fast",
    description: "Results in under 10 seconds. Optimized infrastructure for rapid iterative creation.",
    color: "group-hover:shadow-[0_0_25px_rgba(236,72,153,0.3)] group-hover:border-pink-500/50"
  },
  {
    icon: <Palette className="w-6 h-6 text-cyan-400" />,
    title: "Style Control",
    description: "Realistic, anime, cinematic, abstract & more. Total freedom over aesthetics.",
    color: "group-hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] group-hover:border-cyan-500/50"
  },
  {
    icon: <MonitorPlay className="w-6 h-6 text-purple-400" />,
    title: "Multiple Formats",
    description: "Export in HD, 4K, portrait, landscape, or widescreen with perfect upscaling.",
    color: "group-hover:shadow-[0_0_25px_rgba(139,92,246,0.3)] group-hover:border-purple-500/50"
  },
  {
    icon: <Lock className="w-6 h-6 text-pink-400" />,
    title: "Private & Secure",
    description: "Your creations belong only to you. Enterprise-grade security protocols.",
    color: "group-hover:shadow-[0_0_25px_rgba(236,72,153,0.3)] group-hover:border-pink-500/50"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Features = () => {
  return (
    <section id="features" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            What You Can <span className="text-gradient">Create</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Access a comprehensive suite of AI tools designed for professional creators, artists, and visionaries.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FEATURES.map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className={`glassmorphism-card p-8 rounded-2xl group cursor-pointer ${feature.color}`}
            >
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Features;
