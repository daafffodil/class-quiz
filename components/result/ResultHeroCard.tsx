import { calcAccuracy } from '@/lib/quiz';

export function ResultHeroCard({ total, correct, wrong }: { total: number; correct: number; wrong: number }) {
  const accuracy = calcAccuracy(correct, total);

  return (
    <section className="section-card result-hero-card">
      <p className="card-eyebrow">测验完成</p>
      <h1>{accuracy}%</h1>
      <p className="muted">正确率</p>
      <div className="result-metrics">
        <p>总题数：{total}</p>
        <p>正确：{correct}</p>
        <p>错误：{wrong}</p>
      </div>
    </section>
  );
}
