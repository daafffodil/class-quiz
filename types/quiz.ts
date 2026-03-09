export type Question = {
  id: string;
  context: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  tags?: string[];
};

export type QuizSet = {
  id: string;
  title: string;
  description: string;
  questions: Question[];
};
