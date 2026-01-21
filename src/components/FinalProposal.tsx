import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';
import Confetti from 'react-confetti';
import { FaHeart, FaMusic } from 'react-icons/fa';

interface FinalProposalProps {
  onAccept: () => void;
}

// Generar valores aleatorios fuera del componente para evitar warnings de ESLint
const generateHeartAnimations = () => {
  return [...Array(50)].map(() => ({
    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
    fontSize: Math.random() * 30 + 20,
  }));
};

export const FinalProposal = ({ onAccept }: FinalProposalProps) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noButtonClicks, setNoButtonClicks] = useState(0);
  const [answered, setAnswered] = useState(false);

  // Generar valores aleatorios una sola vez para evitar warnings
  const heartAnimations = useMemo(() => generateHeartAnimations(), []);

  const noButtonTexts = [
    "No",
    "¿Estás segura?",
    "¿De verdad?",
    "Piénsalo bien... 🥺",
    "¡Dame una oportunidad!",
    "¡Por favoooor! 💕",
    "Sabes que quieres decir sí 😊",
    "Este botón ya no funciona 😜"
  ];

  const handleYesClick = () => {
    setShowConfetti(true);
    setAnswered(true);
    onAccept();
    // Opcional: reproducir música de celebración
    // const audio = new Audio('/src/assets/celebration.mp3');
    // audio.play();
  };

  const handleNoClick = () => {
    if (noButtonClicks < noButtonTexts.length - 1) {
      setNoButtonClicks(noButtonClicks + 1);
    }
    // Mover el botón "No" a una posición aleatoria
    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 100;
    setNoButtonPosition({
      x: Math.random() * maxX,
      y: Math.random() * maxY,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#D7CCC8] via-[#BCAAA4] to-[#A1887F] relative overflow-hidden p-3 sm:p-4">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={true}
          numberOfPieces={500}
          colors={['#FF6B9D', '#FFC2D4', '#FF1744', '#FFD700', '#FF80AB']}
        />
      )}

      <AnimatePresence mode="wait">
        {!answered ? (
          <motion.div
            key="proposal"
            className="relative z-10 text-center p-6 sm:p-8 md:p-12 max-w-[750px] w-full mx-2 sm:mx-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
          >
            {/* Carta vintage con bordes quemados */}
            {/* Carta con bordes quemados reales - El papel FALTA donde está quemado */}
            <div
              className="relative shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #F5DEB3 0%, #FFE4B5 50%, #F5DEB3 100%)',
                filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.4))',
                // Clip path que simula el papel quemado - FALTA papel en las esquinas
                clipPath: `polygon(
                  3% 0%, 8% 2%, 12% 0%, 18% 3%, 25% 1%, 32% 4%, 40% 1%, 48% 3%, 55% 0%, 62% 2%, 70% 1%, 78% 3%, 
                  88% 0%, 92% 4%, 95% 2%, 100% 8%,
                  98% 15%, 100% 22%, 97% 30%, 100% 38%, 98% 45%, 100% 52%, 97% 60%, 100% 68%, 98% 75%, 100% 82%, 97% 88%, 100% 92%,
                  96% 100%, 90% 97%, 82% 100%, 75% 98%, 68% 100%, 60% 97%, 52% 100%, 45% 98%, 38% 100%, 30% 97%, 22% 100%, 15% 98%, 8% 100%, 2% 96%,
                  0% 90%, 3% 82%, 0% 75%, 2% 68%, 0% 60%, 3% 52%, 0% 45%, 2% 38%, 0% 30%, 3% 22%, 0% 15%, 2% 8%
                )`,
              }}
            >
              {/* Textura de papel antiguo */}
              <div className="absolute inset-0 opacity-20 pointer-events-none"
                   style={{
                     backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
                   }} />

              {/* Bordes quemados oscuros - efecto de carbonización */}
              <div className="absolute inset-0 pointer-events-none"
                   style={{
                     background: `
                       linear-gradient(to bottom, rgba(44,24,16,0.7) 0%, rgba(44,24,16,0.3) 3%, transparent 8%),
                       linear-gradient(to top, rgba(44,24,16,0.6) 0%, rgba(44,24,16,0.2) 3%, transparent 8%),
                       linear-gradient(to right, rgba(44,24,16,0.5) 0%, rgba(44,24,16,0.2) 2%, transparent 6%),
                       linear-gradient(to left, rgba(44,24,16,0.6) 0%, rgba(44,24,16,0.3) 3%, transparent 8%)
                     `,
                   }} />

              {/* Efecto de chamuscado en la esquina del fuego */}
              <div className="absolute top-0 right-0 w-28 h-32 sm:w-36 sm:h-40 pointer-events-none"
                   style={{
                     background: 'radial-gradient(ellipse at top right, rgba(26,15,10,0.8) 0%, rgba(44,24,16,0.5) 25%, rgba(62,39,35,0.3) 50%, transparent 75%)',
                   }} />

              {/* Contenido de la carta - Con padding para que no toque los bordes */}
              <div className="relative p-6 sm:p-8 md:p-10 pt-8 sm:pt-10 pb-8 sm:pb-10 mx-2 sm:mx-4">

                {/* Decoración superior - Corazón vintage */}
                <motion.div
                  className="mb-4 sm:mb-6 text-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
                >
                  <FaHeart className="inline-block text-3xl sm:text-4xl md:text-5xl text-[#8B0000] opacity-80 drop-shadow-md"
                           style={{ filter: 'sepia(0.3)' }} />
                </motion.div>

                {/* Saludo inicial - TODO EN CURSIVA */}
                <motion.div
                  className="text-left mb-4 sm:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="font-dancing text-xl sm:text-2xl md:text-3xl text-[#5D4037] mb-2">
                    Para mi amor,
                  </p>
                  <p className="font-dancing text-xl sm:text-2xl md:text-3xl text-[#8B0000]">
                    María Josesita
                  </p>
                </motion.div>

                {/* Mensaje de amor - TODO EN CURSIVA MANUSCRITA */}
                <motion.div
                  className="text-left space-y-3 sm:space-y-4 mb-4 sm:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="font-dancing text-lg sm:text-xl md:text-2xl text-[#3E2723] leading-relaxed"
                     style={{ textIndent: '1.5rem' }}>
                    Mi amor preciosa, hemos pasado muchísimos momentos juntos, cada uno de ellos llenos de risas, amor, cuidado y muchísima felicidad.
                  </p>

                  <p className="font-dancing text-lg sm:text-xl md:text-2xl text-[#3E2723] leading-relaxed"
                     style={{ textIndent: '1.5rem' }}>
                    Te agradezco por ser mi compañera de vida, mi confidente y en quien deposito toda mi confianza y sé que está a mi lado apoyándome. Gracias por tu inmenso amor y hacerme el novio más feliz del mundo.
                  </p>

                  <p className="font-dancing text-lg sm:text-xl md:text-2xl text-[#3E2723] leading-relaxed"
                     style={{ textIndent: '1.5rem' }}>
                    Recuerda que estaré contigo hasta el fin, te apoyo y apoyaré en cada paso que demos, te cuido y cuidaré tu corazón para que siempre tengas amor en él.
                  </p>

                  <p className="font-dancing text-lg sm:text-xl md:text-2xl text-[#3E2723] leading-relaxed"
                     style={{ textIndent: '1.5rem' }}>
                    Así como el año pasado, quiero que este día del amor sea con muchísimo amor con mi amor, por ello...
                  </p>

                  {/* Pregunta especial */}
                  <p className="font-dancing text-xl sm:text-2xl md:text-3xl text-[#8B0000] text-center pt-3 sm:pt-4 leading-relaxed">
                    ¿Me regalas la dicha de ser mi San Valentín?
                  </p>
                </motion.div>

                {/* Firma - EN CURSIVA */}
                <motion.div
                  className="text-right space-y-2 pt-4 pb-4 border-t border-[#8B4513]/30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <p className="font-dancing text-lg sm:text-xl md:text-2xl text-[#5D4037]">
                    Con todo mi amor,
                  </p>
                  <p className="font-dancing text-xl sm:text-2xl md:text-3xl text-[#8B0000]">
                    Tu novio que te ama
                  </p>

                  {/* Reproductor de Spotify - Lejos de la ciudad */}
                  <div className="pt-4 flex justify-center">
                    <iframe
                      style={{ borderRadius: '12px' }}
                      src="https://open.spotify.com/embed/track/3iDMvP8BZxE2Olorh2pWg9?utm_source=generator&autoplay=1"
                      width="100%"
                      height="152"
                      frameBorder={0}
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      title="Lejos de la ciudad"
                    />
                  </div>

                  <div
                    className="font-dancing text-sm sm:text-base text-[#8B4513] flex items-center justify-end gap-2 pt-1">
                    <FaMusic className="text-sm sm:text-base"/>
                    <span>Nuestra canción sonando...</span>
                  </div>
                </motion.div>

                {/* BOTONES DENTRO DE LA CARTA */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center pt-4 mt-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.0, duration: 0.8 }}
                >
                  <motion.button
                    className="font-dancing text-base sm:text-lg md:text-xl py-3 px-6 sm:py-4 sm:px-8 bg-gradient-to-r from-[#8B0000] via-[#DC143C] to-[#8B0000] text-white border-2 border-[#5D4037] rounded-full cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                    onClick={handleYesClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      boxShadow: [
                        '0 5px 20px rgba(139, 0, 0, 0.3)',
                        '0 8px 25px rgba(139, 0, 0, 0.5)',
                        '0 5px 20px rgba(139, 0, 0, 0.3)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      ¡Sí, acepto! 💕
                    </span>
                  </motion.button>

                  <motion.button
                    className="font-dancing text-sm sm:text-base py-2 px-4 sm:py-3 sm:px-6 bg-[#D2B48C] text-[#3E2723] border border-[#8B4513] rounded-full cursor-pointer transition-all duration-200 hover:bg-[#C19A6B] w-full sm:w-auto"
                    onClick={handleNoClick}
                    style={{
                      position: noButtonClicks > 0 ? 'fixed' : 'relative',
                      left: noButtonClicks > 0 ? noButtonPosition.x : 'auto',
                      top: noButtonClicks > 0 ? noButtonPosition.y : 'auto',
                      zIndex: noButtonClicks > 0 ? 100 : 'auto',
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {noButtonTexts[noButtonClicks]}
                  </motion.button>
                </motion.div>
              </div>

              {/* Manchas sutiles de envejecimiento */}
              <div className="absolute top-[30%] right-[12%] w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#8B4513] opacity-5 blur-sm" />
              <div className="absolute bottom-[35%] left-[8%] w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#8B4513] opacity-5 blur-sm" />

              {/* FUEGO en la esquina - Integrado con el borde */}
              <motion.div
                className="absolute -top-3 -right-2 sm:-top-4 sm:-right-3 pointer-events-none z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <div className="relative w-14 h-16 sm:w-18 sm:h-20 md:w-20 md:h-24">
                  {/* Resplandor sobre el papel */}
                  <motion.div
                    className="absolute top-6 right-0 w-16 h-12 sm:w-20 sm:h-16"
                    style={{
                      background: 'radial-gradient(ellipse at top right, rgba(255,100,0,0.3) 0%, rgba(255,69,0,0.15) 50%, transparent 80%)',
                      filter: 'blur(6px)',
                    }}
                    animate={{ opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  />

                  {/* Llama trasera */}
                  <motion.div
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-10 sm:w-10 sm:h-13"
                    style={{
                      background: 'linear-gradient(to top, #8B0000 0%, #CC2200 25%, #FF4500 50%, #FF8C00 75%, transparent 100%)',
                      borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                      filter: 'blur(2px)',
                      transformOrigin: 'bottom center',
                    }}
                    animate={{
                      scaleY: [1, 1.15, 0.9, 1.1, 1],
                      scaleX: [1, 0.9, 1.1, 0.95, 1],
                      rotate: [0, -3, 4, -2, 0],
                    }}
                    transition={{ duration: 0.7, repeat: Infinity }}
                  />

                  {/* Llama principal */}
                  <motion.div
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-8 sm:w-8 sm:h-10"
                    style={{
                      background: 'linear-gradient(to top, #FF4500 0%, #FF6B00 35%, #FFD700 70%, transparent 100%)',
                      borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                      filter: 'blur(1px)',
                      transformOrigin: 'bottom center',
                    }}
                    animate={{
                      scaleY: [1, 1.25, 0.85, 1.15, 1],
                      scaleX: [1, 0.85, 1.15, 0.9, 1],
                      rotate: [0, 4, -5, 3, 0],
                    }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  />

                  {/* Núcleo brillante */}
                  <motion.div
                    className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3 h-5 sm:w-4 sm:h-6"
                    style={{
                      background: 'linear-gradient(to top, #FFD700 0%, #FFFF00 50%, #FFFACD 85%, transparent 100%)',
                      borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                      transformOrigin: 'bottom center',
                    }}
                    animate={{
                      scaleY: [1, 1.3, 0.8, 1.2, 1],
                      scaleX: [1, 0.8, 1.2, 0.9, 1],
                    }}
                    transition={{ duration: 0.4, repeat: Infinity }}
                  />

                  {/* Chispas */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={`spark-${i}`}
                      className="absolute w-1 h-1 rounded-full"
                      style={{
                        left: `${30 + i * 12}%`,
                        bottom: '25%',
                        background: i % 2 === 0 ? '#FFD700' : '#FF8C00',
                        boxShadow: `0 0 3px ${i % 2 === 0 ? '#FFD700' : '#FF6B00'}`,
                      }}
                      animate={{
                        y: [0, -20 - i * 5, -35 - i * 8],
                        x: [0, (i % 2 === 0 ? 6 : -5), (i % 2 === 0 ? 10 : -8)],
                        opacity: [1, 0.6, 0],
                        scale: [1, 0.6, 0.2],
                      }}
                      transition={{
                        duration: 0.9 + i * 0.15,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}

                  {/* Humo */}
                  <motion.div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10"
                    style={{
                      background: 'radial-gradient(ellipse, rgba(100,100,100,0.3) 0%, rgba(120,120,120,0.15) 50%, transparent 70%)',
                      filter: 'blur(3px)',
                      borderRadius: '50%',
                    }}
                    animate={{
                      y: [0, -15, -25],
                      x: [0, 4, 7],
                      opacity: [0.35, 0.2, 0],
                      scaleX: [1, 1.6, 2.2],
                      scaleY: [1, 1.3, 1.6],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="accepted"
            className="relative z-10 text-center max-w-[700px] w-full mx-2 sm:mx-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: 'spring' }}
          >
            {/* Carta de respuesta - Con bordes quemados */}
            <div
              className="relative shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #F5DEB3 0%, #FFE4B5 50%, #F5DEB3 100%)',
                filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.4))',
                clipPath: `polygon(
                  4% 0%, 10% 2%, 16% 0%, 24% 3%, 32% 1%, 40% 3%, 50% 0%, 60% 2%, 70% 1%, 80% 3%, 90% 1%, 96% 3%, 100% 6%,
                  98% 15%, 100% 25%, 97% 35%, 100% 45%, 98% 55%, 100% 65%, 97% 75%, 100% 85%, 97% 92%,
                  94% 100%, 85% 97%, 75% 100%, 65% 98%, 55% 100%, 45% 98%, 35% 100%, 25% 97%, 15% 100%, 5% 97%,
                  0% 92%, 3% 82%, 0% 72%, 2% 62%, 0% 52%, 3% 42%, 0% 32%, 2% 22%, 0% 12%, 3% 5%
                )`,
              }}
            >
              {/* Bordes quemados oscuros */}
              <div className="absolute inset-0 pointer-events-none"
                   style={{
                     background: `
                       linear-gradient(to bottom, rgba(44,24,16,0.6) 0%, transparent 6%),
                       linear-gradient(to top, rgba(44,24,16,0.5) 0%, transparent 6%),
                       linear-gradient(to right, rgba(44,24,16,0.4) 0%, transparent 5%),
                       linear-gradient(to left, rgba(44,24,16,0.5) 0%, transparent 6%)
                     `,
                   }} />

              <div className="relative p-6 sm:p-8 md:p-10 mx-2 sm:mx-4">
                <motion.div
                  className="mb-4 sm:mb-6"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaHeart className="inline-block text-5xl sm:text-6xl md:text-7xl text-[#8B0000] opacity-90 drop-shadow-lg"
                           style={{ filter: 'sepia(0.3)' }} />
                </motion.div>

                <h1 className="font-dancing text-2xl sm:text-3xl md:text-5xl text-[#8B0000] mb-4 sm:mb-6 leading-tight px-2">
                  ¡Amor de mi vida!
                </h1>

                <p className="font-dancing text-lg sm:text-xl md:text-2xl text-[#3E2723] leading-relaxed mb-4 px-2 sm:px-4">
                  Este San Valentín será inolvidable porque lo pasaré contigo.
                </p>

                <p className="font-dancing text-xl sm:text-2xl md:text-3xl text-[#8B0000] px-2">
                  ¡Te amo con toda mi alma! ❤️
                </p>

                {/* Sello vintage */}
                <div className="mt-6 sm:mt-8 flex justify-center">
                  <div className="relative">
                    <div className="w-14 h-14 sm:w-18 sm:h-18 border-3 border-[#8B0000] rounded-full flex items-center justify-center bg-[#DC143C]/15 rotate-12">
                      <span className="text-xl sm:text-2xl">💕</span>
                    </div>
                    <p className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 whitespace-nowrap font-dancing text-sm sm:text-base text-[#8B0000]">
                      Sellado con amor
                    </p>
                  </div>
                </div>
              </div>

              {/* Fuego pequeño en la esquina */}
              <motion.div
                className="absolute -top-2 -right-1 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="relative w-12 h-14 sm:w-14 sm:h-16">
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-8 sm:w-8 sm:h-10"
                    style={{
                      background: 'linear-gradient(to top, #8B0000 0%, #FF4500 40%, #FFD700 80%, transparent 100%)',
                      borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                      filter: 'blur(1px)',
                    }}
                    animate={{
                      scaleY: [1, 1.2, 0.9, 1.15, 1],
                      scaleX: [1, 0.9, 1.1, 0.95, 1],
                    }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3 h-5 sm:w-4 sm:h-6"
                    style={{
                      background: 'linear-gradient(to top, #FFD700 0%, #FFFF00 60%, transparent 100%)',
                      borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                    }}
                    animate={{
                      scaleY: [1, 1.3, 0.85, 1.2, 1],
                      scaleX: [1, 0.85, 1.15, 0.9, 1],
                    }}
                    transition={{ duration: 0.4, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {answered && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full pointer-events-none z-[1]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {heartAnimations.map((animation, i) => (
            <motion.div
              key={i}
              className="absolute pointer-events-none drop-shadow-[0_0_5px_rgba(255,107,157,0.5)]"
              initial={{
                opacity: 1,
                x: animation.x,
                y: -100,
              }}
              animate={{
                opacity: 0,
                y: window.innerHeight + 100,
              }}
              transition={{
                duration: animation.duration,
                repeat: Infinity,
                delay: animation.delay,
              }}
              style={{
                fontSize: `${animation.fontSize}px`,
              }}
            >
              ❤️
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

