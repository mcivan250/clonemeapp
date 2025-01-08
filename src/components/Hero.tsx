import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.215, 0.610, 0.355, 1.000],
    },
  }),
};

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-black"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-black/80" />
        <motion.div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80')] bg-cover bg-center"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1.5 }}
        />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl">
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="overflow-hidden"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              Craft
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                Connect
              </span>
              Create
            </h1>
          </motion.div>
          
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl"
          >
            We're a creative agency that transforms visions into reality through strategic brand communication, innovative campaign concepts, and impactful creative direction.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="flex space-x-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 p-[2px] rounded-full"
            >
              <div className="bg-black rounded-full px-8 py-4 transition group-hover:bg-transparent">
                <span className="flex items-center space-x-2 text-white">
                  <Play className="w-5 h-5" />
                  <span>Our Work</span>
                </span>
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <div className="rounded-full px-8 py-4">
                <span className="flex items-center space-x-2 text-white">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}