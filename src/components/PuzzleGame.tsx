import { useState, useEffect, useMemo } from 'react';
import { FaHeart, FaPuzzlePiece } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface PuzzleGameProps {
  onComplete: () => void;
}

export const PuzzleGame = ({ onComplete }: PuzzleGameProps) => {
  const [pieces, setPieces] = useState<number[]>([]);
  const [selectedPiece, setSelectedPiece] = useState<number | null>(null);
  const [moves, setMoves] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const gridSize = 3; // 3x3 puzzle
  const totalPieces = gridSize * gridSize;

  const initialPieces = useMemo(() => {
    return Array.from({ length: totalPieces }, (_, i) => i).sort(() => Math.random() - 0.5);
  }, [totalPieces]);

  useEffect(() => {
    // Inicializar puzzle mezclado
    setPieces(initialPieces);
  }, [initialPieces]);

  const handlePieceClick = (index: number) => {
    if (isComplete) return;

    if (selectedPiece === null) {
      setSelectedPiece(index);
    } else {
      // Intercambiar piezas
      const newPieces = [...pieces];
      [newPieces[selectedPiece], newPieces[index]] = [newPieces[index], newPieces[selectedPiece]];
      setPieces(newPieces);
      setSelectedPiece(null);
      setMoves(moves + 1);

      // Verificar si está completo
      const complete = newPieces.every((piece, idx) => piece === idx);
      if (complete) {
        setIsComplete(true);
        setTimeout(() => onComplete(), 3000);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fa709a] via-[#fee140] to-[#30cfd0] p-3 sm:p-4 md:p-8">
      <motion.div
        className="max-w-[650px] w-full text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-6 sm:mb-8">
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaPuzzlePiece className="text-white text-5xl sm:text-6xl md:text-7xl mx-auto mb-4 sm:mb-6 drop-shadow-2xl" />
          </motion.div>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 drop-shadow-2xl px-2 sm:px-4">
            Arma Nuestro Recuerdo 🧩
          </h2>
          <p className="font-poppins text-white text-base sm:text-lg md:text-xl mb-3 sm:mb-4 drop-shadow-lg px-2 sm:px-4">
            Haz clic en dos piezas para intercambiarlas
          </p>
          <div className="inline-block bg-white/30 backdrop-blur-sm px-6 py-2 sm:px-8 sm:py-3 rounded-full border-2 border-white/50 shadow-xl">
            <p className="font-poppins text-white font-bold text-xl sm:text-2xl md:text-3xl">
              Movimientos: <span className="text-yellow-300">{moves}</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-2 md:gap-3 bg-white/30 p-4 sm:p-5 md:p-7 rounded-2xl sm:rounded-3xl backdrop-blur-sm mb-4 sm:mb-6 shadow-2xl border-2 sm:border-4 border-white/50">
          {pieces.map((piece, index) => (
            <motion.div
              key={index}
              className={`aspect-square rounded-xl sm:rounded-2xl cursor-pointer border-2 sm:border-4 transition-all duration-200 overflow-hidden shadow-xl ${
                selectedPiece === index 
                  ? 'border-yellow-300 shadow-[0_0_30px_rgba(253,224,71,1)] scale-95 ring-4 sm:ring-8 ring-yellow-200/50' 
                  : isComplete 
                  ? 'border-green-400 shadow-green-400/70' 
                  : 'border-white/70 hover:border-white hover:shadow-2xl hover:scale-105 active:scale-95'
              }`}
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=800&fit=crop)',
                backgroundPosition: `${(piece % gridSize) * (100 / (gridSize - 1))}% ${Math.floor(piece / gridSize) * (100 / (gridSize - 1))}%`,
                backgroundSize: `${gridSize * 100}%`,
              }}
              onClick={() => handlePieceClick(index)}
              whileHover={{ scale: isComplete ? 1 : 1.05 }}
              whileTap={{ scale: isComplete ? 1 : 0.95 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className={`w-full h-full flex items-center justify-center text-white font-bold text-xl sm:text-2xl md:text-3xl transition-all ${
                selectedPiece === index ? 'bg-yellow-400/50' : 'bg-black/30 hover:bg-black/20'
              }`}>
                {piece + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {isComplete && (
          <motion.div
            className="bg-gradient-to-br from-white via-green-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border-2 sm:border-4 border-green-400"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="text-valentine-red text-5xl sm:text-6xl md:text-7xl mx-auto mb-4 sm:mb-6" />
            </motion.div>
            <h3 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-valentine-red mb-3 sm:mb-4 leading-tight px-2">
              ¡Perfecto! Así como armaste este puzzle,
            </h3>
            <p className="font-dancing text-xl sm:text-2xl md:text-3xl text-gray-700 leading-relaxed px-2">
              juntos armamos momentos inolvidables ❤️
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

