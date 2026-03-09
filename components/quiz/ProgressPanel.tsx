type ProgressPanelProps = {
  current: number;
  total: number;
  correct: number;
  wrong: number;
};

export function ProgressPanel({ current, total, correct, wrong }: ProgressPanelProps) {
  return (
    <aside className="progress-panel">
      <p>第 {current} / {total} 题</p>
      <p>正确：{correct}</p>
      <p>错误：{wrong}</p>
    </aside>
  );
}
