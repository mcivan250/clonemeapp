import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Project } from '../../types/project';

interface ProjectCardProps extends Project {
  inView: boolean;
  index: number;
}

export default function ProjectCard({ title, category, image, color, size, inView, index }: ProjectCardProps) {
  const sizeClass = size === 'large' ? 'h-[600px]' : size === 'medium' ? 'h-[400px]' : 'h-[300px]';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative w-full ${sizeClass} mb-6 overflow-hidden rounded-2xl cursor-pointer`}
    >
      <div className="absolute inset-0 bg-black/60 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-40" />
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-60 mix-blend-multiply group-hover:opacity-40 transition-opacity duration-300`} />
      
      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-medium text-white/80 backdrop-blur-sm bg-black/20 px-4 py-2 rounded-full"
          >
            {category}
          </motion.span>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center
              opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
          >
            <Play className="w-5 h-5 text-white" />
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="transform group-hover:-translate-y-2 transition-transform duration-300"
        >
          <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
          <div className="h-1 w-12 bg-white rounded-full transform origin-left group-hover:scale-x-150 transition-transform duration-300" />
        </motion.div>
      </div>
    </motion.div>
  );
}