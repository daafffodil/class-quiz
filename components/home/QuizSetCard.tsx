import Link from 'next/link';
import { QuizSet } from '@/types/quiz';

export function QuizSetCard({ quizSet }: { quizSet: QuizSet }) {
  return (
    <Link href={`/quiz/${quizSet.id}`} className="quiz-set-card">
      <h3>{quizSet.title}</h3>
      <div className="card-meta">
        <span>{quizSet.questions.length}题</span>
        <span className="btn btn-primary card-start-button">开始答题</span>
      </div>
    </Link>
  );
}
