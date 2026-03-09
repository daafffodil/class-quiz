type ProgressPanelProps = {
  current: number;
  total: number;
  correct: number;
  wrong: number;
};

export function ProgressPanel({ current, total, correct, wrong }: ProgressPanelProps) {
  return (
    <div className="card stats">
      <div>
        Question {current} / {total}
      </div>
      <div>Correct: {correct}</div>
      <div>Wrong: {wrong}</div>
    </div>
  );
}
