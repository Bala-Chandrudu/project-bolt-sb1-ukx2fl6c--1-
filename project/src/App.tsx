import React, { useState } from 'react';
import { Github, Linkedin, Code2, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-blue-50 overflow-y-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            className="text-xl font-bold"
            // whileHover={{ scale: 1.05 }}
          >
            Devarakonda Bala Chandrudu
          </motion.h1>
          <motion.div
            whileHover={{ scale: 1.05 }}
          >
            <a href="#portfolio" className="text-gray-800 hover:text-blue-600 transition-colors">
              Know more about me from Portfolio
            </a>
          </motion.div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 min-h-[80vh]">
          {/* Left Side */}
          <motion.div 
            className="flex-1 space-y-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-6xl font-bold text-orange-400"
              // whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              1-PhotoGallery
            </motion.h2>
            <motion.div 
              className="bg-black/80 text-white p-6 rounded-lg max-w-md"
              // whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-lg">
                This is just a Landing Page. If you want to redirect to portfolio just click on below button and explore about me.......
              </p>
            </motion.div>
            <motion.button 
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <a href="https://personal-portfolio-henna-three-64.vercel.app/">Explore Portfolio</a>
            </motion.button>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute -top-8 right-0"
                animate={{ rotate: isHovered ? 360 : 0 }}
                transition={{ duration: 2, ease: "linear" }}
              >
                <div className="w-16 h-16 border-2 border-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-xs text-gray-800">LIFESTYLE</span>
                </div>
              </motion.div>
              <motion.img
                src="https://i.postimg.cc/xTqzM8NQ/me12.jpg"
                alt="Portrait"
                className="w-[500px] h-[450px] object-cover rounded-lg shadow-2xl"
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
          </motion.div>
        </div>
      </main>

      {/* Social Links */}
      <motion.div 
        className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <div className="flex items-center gap-8">
          {[
            { icon: Linkedin, color: "blue", href: "#" },
            { icon: Code2, color: "purple", href: "#" },
            { icon: Github, color: "gray", href: "#" },
            { icon: Instagram, color: "pink", href: "#" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              className={`text-gray-700 hover:text-${social.color}-600 transition`}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Status Bar */}
      <motion.div 
        className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white py-2"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring", delay: 0.2 }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <motion.span whileHover={{ scale: 1.1 }}>ENG</motion.span>
          </div>
          <div className="flex items-center gap-4">
            <motion.span whileHover={{ scale: 1.1 }}>{new Date().toLocaleTimeString()}</motion.span>
            <motion.span whileHover={{ scale: 1.1 }}>{new Date().toLocaleDateString()}</motion.span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;