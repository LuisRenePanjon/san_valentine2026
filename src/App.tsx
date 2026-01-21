import { useState, useEffect } from 'react';
import { Welcome } from './components/Welcome';
import { MemoryGallery } from './components/MemoryGallery';
import { QuizGame } from './components/QuizGame';
import { PuzzleGame } from './components/PuzzleGame';
import { FinalProposal } from './components/FinalProposal';
import { getActiveSections, getStartIndex } from './config/sections';

function App() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);

  const activeSections = getActiveSections();
  const currentSection = activeSections[currentSectionIndex];

  // Establecer el índice inicial según la configuración
  useEffect(() => {
    setCurrentSectionIndex(getStartIndex());
  }, []);

  // Función para avanzar a la siguiente sección
  const goToNextSection = () => {
    if (currentSectionIndex < activeSections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
    }
  };

  // Manejar cuando acepta la propuesta (el componente FinalProposal maneja su propio estado)
  const handleAccept = () => {
    // La lógica de aceptación ya está en FinalProposal
  };

  // Renderizar la sección actual
  const renderCurrentSection = () => {
    if (!currentSection) return null;

    switch (currentSection.id) {
      case 'welcome':
        return <Welcome onStart={goToNextSection} />;

      case 'memory-gallery':
        return <MemoryGallery onComplete={goToNextSection} />;

      case 'quiz':
        return <QuizGame onComplete={goToNextSection} />;

      case 'puzzle':
        return <PuzzleGame onComplete={goToNextSection} />;

      case 'proposal':
        return <FinalProposal onAccept={handleAccept} />;

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      {renderCurrentSection()}
    </div>
  );
}

export default App;

