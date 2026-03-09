import { Question } from '@/types/quiz';
import { ContextBlock } from './ContextBlock';
import { QuestionBlock } from './QuestionBlock';
import { OptionButton } from './OptionButton';
import { ExplanationBox } from './ExplanationBox';
import { NextQuestionButton } from './NextQuestionButton';

type QuizCardProps = {
  question: Question;
  selectedIndex: number | null;
  onAnswer: (index: number) => void;
  onNext: () => void;
};

const optionLabels = ['A', 'B', 'C', 'D', 'E', 'F'];

export function QuizCard({ question, selectedIndex, onAnswer, onNext }: QuizCardProps) {
  const hasAnswered = selectedIndex !== null;
  const isCorrect = hasAnswered && selectedIndex === question.correctIndex;

  return (
    <section className="section-card quiz-card">
      <ContextBlock context={question.context} />
      <QuestionBlock question={question.question} />

      <div className="options-wrap">
        {question.options.map((option, index) => (
          <OptionButton
            key={`${question.id}-${index}`}
            label={optionLabels[index] ?? String(index + 1)}
            option={option}
            disabled={hasAnswered}
            isSelected={selectedIndex === index}
            isCorrect={index === question.correctIndex}
            hasAnswered={hasAnswered}
            onClick={() => onAnswer(index)}
          />
        ))}
      </div>

      {hasAnswered ? (
        <div className="answer-footer">
          <ExplanationBox
            explanation={question.explanation}
            isCorrect={Boolean(isCorrect)}
            correctOption={`${optionLabels[question.correctIndex]}. ${question.options[question.correctIndex]}`}
          />
          {!isCorrect ? <NextQuestionButton onClick={onNext} /> : null}
        </div>
      ) : null}
    </section>
  );
}
