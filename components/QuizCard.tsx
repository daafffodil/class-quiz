import { Question } from '@/types/quiz';
import { OptionButton } from './OptionButton';

const labels = ['A', 'B', 'C', 'D', 'E', 'F'];

type QuizCardProps = {
  question: Question;
  selectedIndex: number | null;
  onAnswer: (index: number) => void;
  showConfetti: boolean;
};

export function QuizCard({ question, selectedIndex, onAnswer, showConfetti }: QuizCardProps) {
  const showResult = selectedIndex !== null;

  return (
    <div className="card" style={{ position: 'relative' }}>
      {showConfetti ? <div className="confetti">🎉✨</div> : null}
      <h3>Context</h3>
      <p>{question.context}</p>

      <h3>Question</h3>
      <p>{question.question}</p>

      <div className="grid">
        {question.options.map((option, index) => (
          <OptionButton
            key={option}
            label={labels[index] || String(index + 1)}
            option={option}
            disabled={showResult}
            isCorrect={index === question.correctIndex}
            isChosen={index === selectedIndex}
            showResult={showResult}
            onClick={() => onAnswer(index)}
          />
        ))}
      </div>

      {showResult ? (
        <div style={{ marginTop: 16 }}>
          <strong>Explanation:</strong>
          <p className="muted">{question.explanation}</p>
        </div>
      ) : null}
    </div>
  );
}
