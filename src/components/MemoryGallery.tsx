import { useState } from 'react';
import { FaHeart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import type { Memory } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from '../assets/IMG_2662.jpg';
import img2 from '../assets/IMG_3526.jpg';
import img3 from '../assets/IMG_5263.jpg';

interface MemoryGalleryProps {
  onComplete: () => void;
}

export const MemoryGallery = ({ onComplete }: MemoryGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hearts, setHearts] = useState<number[]>([]);
  const [loveBubbles, setLoveBubbles] = useState<Array<{ id: number; message: string; x: number; delay: number }>>([]);

  const loveMessages = [
    "Te amo mi vida 💕",
    "Eres la mejor 🌟",
    "Eres mi todo 💝",
    "Me haces tan feliz 😊",
    "Gracias por existir 🌹",
    "Eres mi persona favorita 💗",
    "Contigo todo es mejor ✨",
    "Mi amor eterno 💞",
    "Eres perfecta para mí 🎀",
    "Mi corazón es tuyo 💖",
    "Eres mi sueño hecho realidad ✨",
    "Gracias por amarme 💗",
    "Eres única 🌹",
    "Mi felicidad eres tú 😊",
    "Te adoro 💕",
    "Eres mi luz ⭐",
    "Mi amor hermoso 💝",
    "Eres especial 🎀",
    "Mi mundo entero 🌎",
    "Te amo más cada día 💞",
    "Mi Cielito 👑",
    "Eres mágica ✨",
    "Mi Bida 💎",
    "Eres increíble 🌟"
  ];

  const memories: Memory[] = [
    {
      id: 1,
      image: img1,
      description: 'Comenzando el año juntos con mucha alegría.',
      date: 'Enero 2025'
    },
    {
      id: 2,
      image: img2,
      description: 'El dia del amor con mi amor.',
      date: 'Febrero 2025'
    },
    {
      id: 3,
      image: img3,
      description: 'Recorriendo nuevos lugares y creando recuerdos inolvidables.',
      date: 'Marzo 2025'
    },
  ];

  const nextMemory = () => {
    if (currentIndex < memories.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevMemory = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleLove = () => {
    // Crear múltiples corazones (8-12 corazones)
    const heartCount = Math.floor(Math.random() * 5) + 8;
    const newHearts = Array.from({ length: heartCount }, () => Date.now() + Math.random());
    setHearts([...hearts, ...newHearts]);

    // Crear burbujas de amor (3-4 burbujas) con mejor distribución
    const bubbleCount = Math.floor(Math.random() * 2) + 3;
    // Dividir el ancho en secciones para evitar solapamiento
    const sectionWidth = 80 / bubbleCount; // 80% del ancho dividido en secciones
    const newBubbles = Array.from({ length: bubbleCount }, (_, index) => ({
      id: Date.now() + Math.random(),
      message: loveMessages[Math.floor(Math.random() * loveMessages.length)],
      x: 10 + (index * sectionWidth) + (Math.random() * sectionWidth * 0.5), // Distribuir en secciones
      delay: index * 0.15 // Agregar delay escalonado
    }));
    setLoveBubbles([...loveBubbles, ...newBubbles]);

    setTimeout(() => {
      setHearts(hearts.filter(id => !newHearts.includes(id)));
      setLoveBubbles(loveBubbles.filter(b => !newBubbles.find(nb => nb.id === b.id)));
    }, 4000);
  };

  const handleContinue = () => {
    onComplete();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#ffecd2] via-[#fcb69f] to-[#ff9a9e] p-3 sm:p-4 md:p-8 relative overflow-hidden">
      <motion.div
        className="max-w-[900px] w-full text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-6 sm:mb-8 md:mb-12 px-2">
          Nuestros Momentos 💕
        </h2>

        <div className="relative flex items-center justify-center gap-2 sm:gap-3 md:gap-6 mb-6 sm:mb-8">
          <button
            className="bg-white border-none w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center cursor-pointer text-xl sm:text-2xl md:text-3xl text-valentine-pink shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl hover:bg-valentine-pink hover:text-white active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-white disabled:hover:text-valentine-pink flex-shrink-0"
            onClick={prevMemory}
            disabled={currentIndex === 0}
          >
            <FaChevronLeft />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="bg-gradient-to-br from-white to-pink-50 rounded-2xl sm:rounded-[30px] p-4 sm:p-6 md:p-8 shadow-2xl max-w-[600px] w-full border-2 sm:border-4 border-white/50"
              initial={{ opacity: 0, x: 100, rotateY: 90 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -100, rotateY: -90 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <div className="relative w-full h-[220px] sm:h-[250px] md:h-[380px] rounded-2xl sm:rounded-3xl overflow-hidden mb-4 sm:mb-6 shadow-xl ring-2 sm:ring-4 ring-pink-200/50">
                <img
                  src={memories[currentIndex].image}
                  alt={memories[currentIndex].description}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23FF6B9D" width="400" height="400"/%3E%3Ctext fill="%23fff" font-family="Arial" font-size="20" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3E❤️ Coloca tu foto aquí%3C/text%3E%3C/svg%3E';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>

              <div className="mb-4 sm:mb-6 space-y-2 sm:space-y-3">
                <div className="inline-block bg-gradient-to-r from-valentine-pink to-valentine-red text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md">
                  {memories[currentIndex].date}
                </div>
                <p className="font-dancing text-xl sm:text-2xl md:text-3xl text-gray-800 leading-relaxed px-1 sm:px-2">
                  {memories[currentIndex].description}
                </p>
              </div>

              <motion.button
                className="relative font-poppins py-4 px-6 sm:py-5 sm:px-10 bg-gradient-to-r from-valentine-red via-pink-500 to-valentine-pink text-white border-none rounded-full text-base sm:text-lg md:text-xl font-bold cursor-pointer inline-flex items-center gap-2 sm:gap-3 shadow-xl transition-all duration-200 hover:shadow-2xl hover:scale-105 active:scale-95 overflow-hidden group w-full sm:w-auto justify-center"
                onClick={handleLove}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                  <FaHeart className="text-lg sm:text-2xl" />
                  <span>Me encanta este recuerdo</span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 to-red-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </AnimatePresence>

          <button
            className="bg-white border-none w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center cursor-pointer text-xl sm:text-2xl md:text-3xl text-valentine-pink shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl hover:bg-valentine-pink hover:text-white active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-white disabled:hover:text-valentine-pink flex-shrink-0"
            onClick={nextMemory}
            disabled={currentIndex === memories.length - 1}
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="flex gap-2 sm:gap-3 justify-center mb-6 sm:mb-8">
          {memories.map((_, index) => (
            <button
              key={index}
              className={`h-2.5 sm:h-3 rounded-full cursor-pointer transition-all duration-300 border-2 ${
                index === currentIndex 
                  ? 'w-8 sm:w-10 bg-white border-white shadow-md' 
                  : 'w-2.5 sm:w-3 bg-white/50 border-white/50 hover:bg-white/70 hover:border-white/70'
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir a recuerdo ${index + 1}`}
            />
          ))}
        </div>

        {currentIndex === memories.length - 1 && (
          <motion.button
            className="relative font-poppins text-base sm:text-lg md:text-xl font-bold py-5 px-10 sm:py-6 sm:px-12 bg-white text-valentine-pink border-none rounded-full cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95 overflow-hidden group w-full sm:w-auto"
            onClick={handleContinue}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ y: -4 }}
          >
            <span className="relative z-10">Continuar el Viaje ✨</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-valentine-pink to-valentine-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.button>
        )}
      </motion.div>

      {/* Corazones flotantes múltiples */}
      {hearts.map(heartId => (
        <motion.div
          key={heartId}
          className="fixed text-4xl pointer-events-none z-50 drop-shadow-lg"
          initial={{
            y: window.innerHeight / 2,
            x: Math.random() * window.innerWidth,
            opacity: 1,
            scale: 0.5,
            rotate: Math.random() * 360
          }}
          animate={{
            y: -200,
            x: Math.random() * window.innerWidth,
            opacity: 0,
            scale: [0.5, 1.5, 1, 0.5],
            rotate: Math.random() * 720
          }}
          transition={{
            duration: 3,
            ease: "easeOut"
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Burbujas de amor con mensajes */}
      {loveBubbles.map(bubble => (
        <motion.div
          key={bubble.id}
          className="fixed pointer-events-none z-50"
          style={{ left: `${bubble.x}%` }}
          initial={{
            y: window.innerHeight - 100,
            opacity: 0,
            scale: 0
          }}
          animate={{
            y: -150,
            opacity: [0, 1, 1, 1, 0.7, 0.3, 0],
            scale: [0, 1.1, 1, 1, 0.95, 0.9, 0.8]
          }}
          transition={{
            duration: 4,
            ease: "easeOut",
            delay: bubble.delay
          }}
        >
          <div className="bg-gradient-to-r from-pink-400 to-red-400 text-white px-6 py-3 rounded-full shadow-2xl font-poppins font-bold text-sm md:text-base whitespace-nowrap border-2 border-white/50">
            {bubble.message}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

