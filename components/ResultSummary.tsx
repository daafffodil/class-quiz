import Link from 'next/link';

type ResultSummaryProps = {
  setId: string;
  total: number;
  correct: number;
  wrong: number;
};

export function ResultSummary({ setId, total, correct, wrong }: ResultSummaryProps) {
  const accuracy = total === 0 ? 0 : Math.round((correct / total) * 100);

  return (
    <div className="card">
      <h1>Quiz Completed</h1>
      <p>Total Questions: {total}</p>
      <p>Correct: {correct}</p>
      <p>Wrong: {wrong}</p>
      <p>Accuracy: {accuracy}%</p>

      <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
        <Link className="btn btn-primary" href={`/quiz/${setId}`}>
          Retry Quiz
        </Link>
        <Link className="btn" href="/">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
