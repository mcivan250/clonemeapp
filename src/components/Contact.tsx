import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mic2 } from 'lucide-react';
import ContactForm from './contact/ContactForm';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} id="contact" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-6">
            <Mic2 className="w-12 h-12 text-purple-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Book Your Session</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to create your next hit? Let's make music together.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <ContactForm inView={inView} />
        </div>
      </div>
    </section>
  );
}