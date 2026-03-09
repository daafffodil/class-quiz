'use client';

import { useEffect, useMemo, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getQuizSetById } from '@/lib/quiz';
import { QuizCard } from '@/components/quiz/QuizCard';
import { ProgressPanel } from '@/components/quiz/ProgressPanel';
import { PageContainer } from '@/components/shared/PageContainer';
import { EmptyState } from '@/components/shared/EmptyState';

export default function QuizPage() {
  const { setId } = useParams<{ setId: string }>();
  const router = useRouter();
  const quizSet = useMemo(() => getQuizSetById(setId), [setId]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  const currentQuestion = quizSet?.questions[currentIndex];
  const isCorrect = selectedIndex !== null && selectedIndex === currentQuestion?.correctIndex;

  useEffect(() => {
    if (!quizSet || selectedIndex === null || !isCorrect) return;

    const timer = window.setTimeout(() => {
      const nextIndex = currentIndex + 1;
      if (nextIndex >= quizSet.questions.length) {
        router.push(`/result/${quizSet.id}?total=${quizSet.questions.length}&correct=${correctCount}&wrong=${wrongCount}`);
        return;
      }

      setCurrentIndex(nextIndex);
      setSelectedIndex(null);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [selectedIndex, isCorrect, currentIndex, quizSet, router, correctCount, wrongCount]);

  if (!quizSet) {
    return (
      <PageContainer>
        <EmptyState title="未找到题组" description="请返回首页重新选择测验。" />
      </PageContainer>
    );
  }

  if (!currentQuestion) {
    return null;
  }

  const goNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= quizSet.questions.length) {
      router.push(`/result/${quizSet.id}?total=${quizSet.questions.length}&correct=${correctCount}&wrong=${wrongCount}`);
      return;
    }
    setCurrentIndex(nextIndex);
    setSelectedIndex(null);
  };

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
    <PageContainer>
      <div className="quiz-header">
        <h1>{quizSet.title}</h1>
        <ProgressPanel current={currentIndex + 1} total={quizSet.questions.length} correct={correctCount} wrong={wrongCount} />
      </div>
      <QuizCard question={currentQuestion} selectedIndex={selectedIndex} onAnswer={handleAnswer} onNext={goNext} />
    </PageContainer>
  );
}
