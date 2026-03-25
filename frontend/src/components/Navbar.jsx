import React from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <Motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glassmorphism border-b border-white/5 bg-[#0a0a0f]/80"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
            <span className="text-white font-display font-bold text-xl leading-none">
              V
            </span>
          </div>
          <Link
            to={"/"}
            className="text-2xl font-display font-bold text-white tracking-tight"
          >
            Visio<span className="text-gradient">AI</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
          >
            Features
          </a>
          <Link
            to={"#how-it-works"}
            className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
          >
            How it Works
          </Link>
          <a
            href="#pricing"
            className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
          >
            Pricing
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to={"/login"}
            className="hidden md:block text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            Log in
          </Link>
          <Link
            to={"/generate"}
            className="btn-neon px-6 py-2.5 rounded-full text-sm font-semibold text-white shadow-[0_0_15px_rgba(139,92,246,0.5)] hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] transition-all"
          >
            Get Started
          </Link>
        </div>
      </div>
    </Motion.nav>
  );
};

export default Navbar;
