'use client';

import { useEffect, useMemo, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { getQuizSetById } from '@/data/quizSets';
import { QuizCard } from '@/components/QuizCard';
import { ProgressPanel } from '@/components/ProgressPanel';

export default function QuizPage() {
  const params = useParams<{ setId: string }>();
  const router = useRouter();
  const quizSet = useMemo(() => getQuizSetById(params.setId), [params.setId]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  const currentQuestion = quizSet?.questions[currentIndex];

  useEffect(() => {
    if (selectedIndex === null || !quizSet || !currentQuestion) {
      return;
    }

    const timer = window.setTimeout(() => {
      const isLast = currentIndex === quizSet.questions.length - 1;
      if (isLast) {
        router.push(
          `/quiz/${quizSet.id}/result?total=${quizSet.questions.length}&correct=${correctCount}&wrong=${wrongCount}`
        );
        return;
      }

      setCurrentIndex((prev) => prev + 1);
      setSelectedIndex(null);
    }, 2000);

    return () => window.clearTimeout(timer);
  }, [selectedIndex, quizSet, currentQuestion, currentIndex, router, correctCount, wrongCount]);

  if (!quizSet) {
    return (
      <main className="page">
        <div className="card">
          <h1>Quiz set not found.</h1>
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  if (!currentQuestion) {
    return null;
  }

  const handleAnswer = (index: number) => {
    if (selectedIndex !== null) return;
    setSelectedIndex(index);

    if (index === currentQuestion.correctIndex) {
      setCorrectCount((prev) => prev + 1);
    } else {
      setWrongCount((prev) => prev + 1);
    }
  };

  return (
    <main className="page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
        <h1 style={{ marginTop: 0 }}>{quizSet.title}</h1>
        <ProgressPanel
          current={currentIndex + 1}
          total={quizSet.questions.length}
          correct={correctCount}
          wrong={wrongCount}
        />
      </div>

      <QuizCard
        question={currentQuestion}
        selectedIndex={selectedIndex}
        onAnswer={handleAnswer}
        showConfetti={
          selectedIndex !== null && selectedIndex === currentQuestion.correctIndex
        }
      />
    </main>
  );
}
