export interface Stage {
  id: number;
  title: string;
  type: 'welcome' | 'memory' | 'quiz' | 'puzzle' | 'video' | 'final';
  completed: boolean;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  hint?: string;
}

export interface Memory {
  id: number;
  image?: string;
  video?: string;
  description: string;
  date?: string;
}

