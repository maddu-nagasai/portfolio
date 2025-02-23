import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, Terminal, Database, Cloud, FileText } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import "./Hero.css";
const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Graphics */}
      <div className="absolute inset-0 blur-3xl opacity-30">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/5"
              style={{
                width: Math.random() * 200 + 50 + 'px',
                height: Math.random() * 200 + 50 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                transform: 'translate(-50%, -50%)',
                animation: `float ${Math.random() * 10 + 20}s linear infinite`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 min-h-screen">
        <div className="min-h-screen flex items-center">
          <div className="grid md:grid-cols-2 gap-8 items-center w-full">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <span className="text-blue-400 font-medium">Hello, I'm</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-7xl font-bold mb-6 glow-text"
              >
                Maddu Nagasai
              </motion.h1>

              {/* Typewriter Animation */}
              <TypeAnimation
                sequence={[
                  "I'm a SDE Intern",
                  2000,
                  "I build web solutions",
                  2000,
                  "I explore cloud technologies",
                  2000
                ]}
                wrapper="h2"
                speed={50}
                repeat={Infinity}
                className="text-2xl md:text-3xl text-blue-400 mb-8"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-lg text-gray-300 mb-12 max-w-2xl"
              >
                Passionate about building innovative web solutions and exploring new technologies.
                Currently focusing on full-stack development and cloud technologies.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex gap-4 flex-wrap"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors hover:shadow-glow-blue"
                >
                  View My Work
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://drive.google.com/file/d/1FXel0oQSFIYNGAWNlIvpqJvnWITlzyAm/view?usp=sharing"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-colors hover:shadow-glow-white"
                >
                  <FileText className="w-4 h-4" />
                  Download Resume
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:nagasai1050@gmail.com"
                  className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors hover:shadow-glow-white"
                >
                  Contact Me
                </motion.a>
              </motion.div>

              {/* Tech Stack Icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="flex gap-6 mt-12"
              >
                <Code2 className="w-8 h-8 text-blue-400 glow-icon animate-float" />
                <Terminal className="w-8 h-8 text-green-400 glow-icon animate-float" style={{ animationDelay: '0.2s' }} />
                <Database className="w-8 h-8 text-purple-400 glow-icon animate-float" style={{ animationDelay: '0.4s' }} />
                <Cloud className="w-8 h-8 text-yellow-400 glow-icon animate-float" style={{ animationDelay: '0.6s' }} />
              </motion.div>
            </motion.div>

            {/* Right Column - Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="heroalign"
            >
              <div className="hero-image">
                <img
                  src="https://res.cloudinary.com/dgpiiljnj/image/upload/v1740339296/hero_cyr2jj.jpg"
                  alt="Maddu Nagasai"
                  className="herocss"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 text-white glow-icon" />
      </motion.div>
    </section>
  );
};

export default Hero;
