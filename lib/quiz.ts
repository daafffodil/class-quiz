import { quizSets } from '@/data/quizSets';

export const getQuizSetById = (setId: string) => quizSets.find((set) => set.id === setId);

export const calcAccuracy = (correct: number, total: number) => {
  if (total <= 0) return 0;
  return Math.round((correct / total) * 100);
};
