import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle, FaStar } from 'react-icons/fa';
import type { QuizQuestion } from '../types';

interface QuizGameProps {
  onComplete: () => void;
}

export const QuizGame = ({ onComplete }: QuizGameProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const questions: QuizQuestion[] = [
    {
      question: "¿Cuál fue nuestro primer destino juntos?",
      options: ["Pindal", "Cartagena", "Laguna de Busa", "Ninguna de las anteriores"],
      correctAnswer: 3,
      hint: "Abrazos"
    },
    {
      question: "¿Que fecha fue la primera vez que nos vimos en loja?",
      options: ["8 octubre", "14 octubre", "17 octubre", "18 octubre"],
      correctAnswer: 3,
      hint: "Primero menos uno"
    },
    {
      question: "¿Cuál es nuestra canción especial?",
      options: ["Ladrona", "Perfect", "Lejos de la ciudad", "Berbenita"],
      correctAnswer: 2,
      hint: "La que siempre nos hace recordar ese momento..."
    },
  ];

  const handleAnswerClick = (answerIndex: number) => {
    if (showResult) return;

    setSelectedAnswer(answerIndex);
    setShowResult(true);

    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setTimeout(() => onComplete(), 1500);
      }
    }, 2500);
  };

  const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;

  // Emojis decorativos estilo lotería
  const decorativeEmojis = ['💕', '🌹', '💖', '✨', '🎀', '💝', '🌟', '💗'];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#f093fb] p-3 sm:p-4 md:p-8 relative overflow-hidden">
      {/* Decoraciones de fondo estilo lotería */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl sm:text-6xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {decorativeEmojis[i % decorativeEmojis.length]}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="max-w-[950px] w-full relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header estilo lotería */}
        <div className="mb-6 sm:mb-8">
          <motion.div
            className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white py-3 px-4 sm:py-4 sm:px-6 rounded-2xl sm:rounded-3xl shadow-2xl mb-4 sm:mb-6 border-2 sm:border-4 border-white/30"
            animate={{
              boxShadow: [
                "0 0 20px rgba(255,215,0,0.5)",
                "0 0 40px rgba(255,215,0,0.8)",
                "0 0 20px rgba(255,215,0,0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-5xl font-bold text-center drop-shadow-lg flex items-center justify-center gap-2 sm:gap-3">
              <FaStar className="text-yellow-300 text-xl sm:text-2xl md:text-3xl" />
              <span>¿Qué tanto me conoces?</span>
              <FaStar className="text-yellow-300 text-xl sm:text-2xl md:text-3xl" />
            </h2>
          </motion.div>

          <div className="bg-white/20 h-4 sm:h-5 rounded-full overflow-hidden mb-2 sm:mb-3 shadow-inner backdrop-blur-sm border-2 border-white/30">
            <motion.div
              className="h-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 shadow-lg relative overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </div>
          <p className="font-poppins text-white text-center text-base sm:text-lg font-bold drop-shadow-md">
            Pregunta {currentQuestion + 1} de {questions.length} 💝
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            className="bg-gradient-to-br from-white via-pink-50 to-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-10 shadow-2xl border-4 sm:border-8 border-white/50 relative overflow-hidden"
            initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
            exit={{ opacity: 0, rotateY: -90, scale: 0.8 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            {/* Decoración estilo lotería en las esquinas */}
            <div className="absolute top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-valentine-red to-transparent rounded-br-full opacity-20" />
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-bl from-valentine-pink to-transparent rounded-bl-full opacity-20" />
            <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-tr from-yellow-400 to-transparent rounded-tr-full opacity-20" />
            <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-tl from-pink-400 to-transparent rounded-tl-full opacity-20" />

            <motion.div
              className="bg-gradient-to-r from-valentine-red via-pink-500 to-valentine-pink text-white py-3 px-4 sm:py-4 sm:px-6 rounded-xl sm:rounded-2xl mb-6 sm:mb-8 shadow-lg border-2 sm:border-4 border-white/50"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <h3 className="font-poppins text-lg sm:text-xl md:text-3xl font-bold text-center leading-tight">
                {questions[currentQuestion].question}
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 mb-4 sm:mb-6">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  className={`relative font-poppins p-4 sm:p-6 md:p-7 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg md:text-xl transition-all duration-200 border-2 sm:border-4 shadow-lg overflow-hidden ${
                    showResult && index === questions[currentQuestion].correctAnswer
                      ? 'bg-gradient-to-br from-green-400 to-green-500 border-green-600 text-white shadow-green-400/50 scale-105'
                      : showResult && index === selectedAnswer
                      ? 'bg-gradient-to-br from-red-400 to-red-500 border-red-600 text-white shadow-red-400/50'
                      : selectedAnswer === index
                      ? 'bg-gradient-to-br from-valentine-pink to-valentine-red text-white border-pink-600 shadow-pink-400/50'
                      : 'bg-gradient-to-br from-white to-pink-50 border-pink-300 text-gray-800 hover:from-pink-100 hover:to-pink-200 hover:border-valentine-pink hover:shadow-xl hover:scale-105 active:scale-95'
                  }`}
                  onClick={() => handleAnswerClick(index)}
                  disabled={showResult}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={showResult ? {} : { y: -4 }}
                >
                  {/* Efecto de brillo */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: showResult && index === questions[currentQuestion].correctAnswer ? ["100%", "100%"] : "100%" }}
                    transition={{ duration: 0.6 }}
                  />

                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {option}
                  </span>

                  {showResult && index === questions[currentQuestion].correctAnswer && (
                    <motion.div
                      className="absolute top-2 right-2 sm:top-3 sm:right-3 text-white"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <FaCheckCircle className="text-2xl sm:text-3xl drop-shadow-lg" />
                    </motion.div>
                  )}
                  {showResult && index === selectedAnswer && index !== questions[currentQuestion].correctAnswer && (
                    <motion.div
                      className="absolute top-2 right-2 sm:top-3 sm:right-3 text-white"
                      initial={{ scale: 0, rotate: 180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <FaTimesCircle className="text-2xl sm:text-3xl drop-shadow-lg" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>

            <AnimatePresence>
              {showResult && (
                <motion.div
                  className="text-center mt-4 sm:mt-6"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                >
                  <div className={`inline-block ${
                    isCorrect 
                      ? 'bg-gradient-to-r from-green-400 to-green-500 border-green-600' 
                      : 'bg-gradient-to-r from-orange-400 to-orange-500 border-orange-600'
                  } text-white font-bold text-base sm:text-lg md:text-xl py-3 px-6 sm:py-4 sm:px-8 rounded-xl sm:rounded-2xl border-2 sm:border-4 shadow-2xl`}>
                    <p className="flex items-center gap-2 justify-center flex-wrap">
                      {isCorrect ? (
                        <>
                          <span className="text-xl sm:text-2xl">✨</span>
                          <span>¡Perfecto! {questions[currentQuestion].hint}</span>
                        </>
                      ) : (
                        <>
                          <span className="text-xl sm:text-2xl">💭</span>
                          <span>{questions[currentQuestion].hint}</span>
                        </>
                      )}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>

        {currentQuestion === questions.length - 1 && showResult && (
          <motion.div
            className="bg-gradient-to-br from-yellow-400 via-pink-500 to-red-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 mt-4 sm:mt-6 text-center shadow-2xl border-4 sm:border-8 border-white/50 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.5, rotateZ: -10 }}
            animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)",
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="relative z-10">
              <h3 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
                <FaStar className="text-yellow-300 text-2xl sm:text-3xl md:text-4xl" />
                <span>¡Quiz Completado!</span>
                <FaStar className="text-yellow-300 text-2xl sm:text-3xl md:text-4xl" />
              </h3>
              <p className="font-poppins text-xl sm:text-2xl md:text-3xl text-white font-bold drop-shadow-md">
                Tu puntuación: <span className="text-yellow-300 text-3xl sm:text-4xl">{score}</span> de {questions.length}
              </p>
              <div className="mt-3 sm:mt-4 flex justify-center gap-1 sm:gap-2">
                {[...Array(questions.length)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-2xl sm:text-3xl ${i < score ? 'text-yellow-300' : 'text-white/30'}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

