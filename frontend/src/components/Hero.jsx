import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism mb-8 border border-purple-500/30 text-purple-300 text-sm font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            VisioAI Engine v2.0 is live
          </motion.div>
          
          <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 tracking-tight text-white">
            Generate <span className="text-gradient">Stunning Visuals</span> with AI
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
            Transform your imagination into breathtaking images and videos in seconds. 
            No design skills required.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <button className="btn-neon w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-all flex justify-center">
              Start Creating Free
            </button>
            <button className="btn-ghost w-full sm:w-auto px-8 py-4 rounded-full text-base font-medium text-white flex items-center justify-center gap-2 group">
              <Play className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
              Watch Demo
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-4 text-sm text-gray-500">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0a0a0f] bg-gradient-to-br from-gray-700 to-gray-900" />
              ))}
            </div>
            <p>Joined by 10,000+ creators</p>
          </div>
        </motion.div>

        {/* Animated Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative h-[600px] w-full hidden lg:block perspective-1000"
        >
          {/* Main 3D Floating Mockup */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotateY: [-5, 5, -5],
              rotateX: [5, -5, 5]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px] glassmorphism rounded-2xl p-4 shadow-[0_20px_50px_rgba(139,92,246,0.2)] border border-purple-500/20 z-20"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="w-full h-full rounded-xl overflow-hidden relative bg-gradient-to-br from-gray-900 to-gray-800">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                 <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                   <motion.div 
                     initial={{ width: "0%" }}
                     animate={{ width: "100%" }}
                     transition={{ duration: 3, repeat: Infinity }}
                     className="h-full bg-gradient-to-r from-purple-500 to-cyan-500"
                   />
                 </div>
                 <p className="text-xs text-purple-200 mt-2 font-mono uppercase tracking-wider">Generating abstract nebula...</p>
              </div>
            </div>
          </motion.div>

          {/* Secondary Floating Card 1 */}
          <motion.div
            animate={{ 
              y: [0, 15, 0],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[-5%] right-0 w-[200px] h-[250px] glassmorphism rounded-xl border border-cyan-500/20 shadow-2xl z-10 overflow-hidden"
          >
             <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center" />
          </motion.div>

          {/* Secondary Floating Card 2 */}
          <motion.div
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[5%] left-[-10%] w-[220px] h-[160px] glassmorphism rounded-xl border border-pink-500/20 shadow-2xl z-30 flex items-center justify-center"
          >
             <div className="text-center p-4">
                <p className="text-sm text-gray-300 font-medium mb-2">Prompt match: 98%</p>
                <div className="flex gap-2 justify-center">
                  <span className="px-2 py-1 bg-white/10 rounded-md text-xs text-cyan-300 border border-cyan-500/30">Cyberpunk</span>
                  <span className="px-2 py-1 bg-white/10 rounded-md text-xs text-pink-300 border border-pink-500/30">Neon</span>
                </div>
             </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
