import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

interface WelcomeProps {
  onStart: () => void;
}

export const Welcome = ({ onStart }: WelcomeProps) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-valentine-pink via-valentine-light to-[#FFE5EC] overflow-hidden p-3 sm:p-4">
      <motion.div
        className="relative z-10 text-center p-6 sm:p-8 md:p-12 bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-[650px] w-full mx-2 sm:mx-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="text-valentine-red mb-4 sm:mb-6 inline-block"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaHeart size={60} className="sm:hidden" />
          <FaHeart size={80} className="hidden sm:block" />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-playfair text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-valentine-red to-valentine-pink bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight px-2"
        >
          Para Alguien Especial
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-dancing text-xl sm:text-2xl md:text-3xl text-gray-700 mb-6 sm:mb-10 px-2 sm:px-4"
        >
          Un viaje a través de nuestros momentos más preciados...
        </motion.p>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          whileHover={{ scale: 1.08, y: -4 }}
          whileTap={{ scale: 0.95 }}
          className="relative font-poppins text-lg sm:text-xl md:text-2xl font-bold py-5 px-10 sm:py-6 sm:px-14 md:py-7 md:px-16 bg-gradient-to-r from-valentine-red via-pink-500 to-valentine-pink text-white border-none rounded-full cursor-pointer shadow-2xl hover:shadow-[0_20px_60px_rgba(255,23,68,0.6)] transition-all duration-300 ease-out overflow-hidden group w-full sm:w-auto"
          onClick={onStart}
        >
          <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
            <span>Comenzar el Viaje</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ❤️
            </motion.span>
          </span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
          />
        </motion.button>
      </motion.div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute pointer-events-none drop-shadow-[0_0_10px_rgba(255,107,157,0.5)]"
            initial={{
              y: '100vh',
              x: Math.random() * window.innerWidth,
              opacity: 0.6
            }}
            animate={{
              y: '-10vh',
              x: Math.random() * window.innerWidth,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            style={{ fontSize: `${Math.random() * 20 + 10}px` }}
          >
            ❤️
          </motion.div>
        ))}
      </div>
    </div>
  );
};

