import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  index: number;
  inView: boolean;
}

export default function ServiceCard({ icon: Icon, title, description, gradient, index, inView }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
    >
      <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${gradient} p-4 
        transform group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-full h-full text-white" />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
        {description}
      </p>
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient} opacity-0 
        group-hover:opacity-10 transition-opacity duration-300`} />
    </motion.div>
  );
}