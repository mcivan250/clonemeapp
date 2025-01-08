import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

interface ContactFormProps {
  inView: boolean;
}

export default function ContactForm({ inView }: ContactFormProps) {
  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-8"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
          <input
            type="text"
            id="name"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white 
              placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
              transition-all duration-300"
            placeholder="Artist Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white 
              placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
              transition-all duration-300"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-2">Service</label>
        <select
          id="service"
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white 
            focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
            transition-all duration-300"
        >
          <option value="" className="bg-black">Select a Service</option>
          <option value="production" className="bg-black">Music Production</option>
          <option value="management" className="bg-black">Artist Management</option>
          <option value="songwriting" className="bg-black">Songwriting</option>
          <option value="distribution" className="bg-black">Distribution</option>
          <option value="video" className="bg-black">Music Video</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
        <textarea
          id="message"
          rows={6}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white 
            placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
            transition-all duration-300"
          placeholder="Tell us about your project..."
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg px-8 py-4
          flex items-center justify-center space-x-2 hover:from-purple-700 hover:to-pink-700 
          transition-all duration-300"
      >
        <span>Book Session</span>
        <Send className="w-5 h-5" />
      </motion.button>
    </motion.form>
  );
}