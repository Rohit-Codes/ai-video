import React from 'react';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import Features from './components/Features';

function App() {
  return (
    <main className="min-h-screen relative text-gray-200 selection:bg-purple-500/30">
      <ParticleBackground />
      <Navbar />
      
      <div className="pt-20">
        <Hero />
        <Features />
      </div>

      <footer className="border-t border-white/10 mt-32 py-12 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} VisioAI. All rights reserved.</p>
      </footer>
    </main>
  );
}

export default App;
