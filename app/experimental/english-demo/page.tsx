'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { englishDemoQuiz } from '@/data/englishDemoQuiz';
import { PageContainer } from '@/components/shared/PageContainer';
import { SectionCard } from '@/components/shared/SectionCard';
import { calcAccuracy } from '@/lib/quiz';

export default function EnglishDemoPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  const total = englishDemoQuiz.questions.length;
  const currentQuestion = englishDemoQuiz.questions[currentIndex];
  const finished = currentIndex >= total;

  const resultText = useMemo(() => {
    const accuracy = calcAccuracy(correctCount, total);
    return `Total: ${total} | Correct: ${correctCount} | Wrong: ${wrongCount} | Accuracy: ${accuracy}%`;
  }, [correctCount, total, wrongCount]);

  if (finished) {
    return (
      <PageContainer>
        <SectionCard>
          <h1>English Demo Completed</h1>
          <p>{resultText}</p>
          <div className="result-actions">
            <button className="btn btn-primary" onClick={() => { setCurrentIndex(0); setSelectedIndex(null); setCorrectCount(0); setWrongCount(0); }}>
              Try Again
            </button>
            <Link href="/experimental" className="btn">Back</Link>
          </div>
        </SectionCard>
      </PageContainer>
    );
  }

  const hasAnswered = selectedIndex !== null;
  const isCorrect = selectedIndex === currentQuestion.correctIndex;

  const choose = (index: number) => {
    if (hasAnswered) return;
    setSelectedIndex(index);
    if (index === currentQuestion.correctIndex) {
      setCorrectCount((prev) => prev + 1);
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
        setSelectedIndex(null);
      }, 1000);
    } else {
      setWrongCount((prev) => prev + 1);
    }
  };

  return (
    <PageContainer>
      <SectionCard>
        <h1>{englishDemoQuiz.title}</h1>
        <p className="muted">Question {currentIndex + 1} / {total} · Correct: {correctCount} · Wrong: {wrongCount}</p>
        <p><strong>Context:</strong> {currentQuestion.context}</p>
        <p><strong>Question:</strong> {currentQuestion.question}</p>
        <div className="options-wrap">
          {currentQuestion.options.map((option, index) => (
            <button key={option} className={`option-button ${hasAnswered && index === currentQuestion.correctIndex ? 'option-correct' : ''} ${hasAnswered && selectedIndex === index && index !== currentQuestion.correctIndex ? 'option-wrong' : ''}`} onClick={() => choose(index)}>
              {option}
            </button>
          ))}
        </div>
        {hasAnswered ? (
          <div className="answer-footer">
            <p>{isCorrect ? 'Correct! Moving to next question...' : `Incorrect. Correct answer: ${currentQuestion.options[currentQuestion.correctIndex]}`}</p>
            <p className="muted">Explanation: {currentQuestion.explanation}</p>
            {!isCorrect ? <button className="btn btn-primary" onClick={() => { setCurrentIndex((prev) => prev + 1); setSelectedIndex(null); }}>Next Question</button> : null}
          </div>
        ) : null}
      </SectionCard>
    </PageContainer>
  );
}
