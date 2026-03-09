import Link from 'next/link';
import { calcAccuracy } from '@/lib/quiz';
import { SectionCard } from '@/components/shared/SectionCard';

export function ResultSummary({ setId, total, correct, wrong }: { setId: string; total: number; correct: number; wrong: number }) {
  const accuracy = calcAccuracy(correct, total);

  return (
    <SectionCard className="result-card">
      <h1>测验完成</h1>
      <p>总题数：{total}</p>
      <p>正确题数：{correct}</p>
      <p>错误题数：{wrong}</p>
      <p>正确率：{accuracy}%</p>

      <div className="result-actions">
        <Link className="btn btn-primary" href={`/quiz/${setId}`}>
          再做一次
        </Link>
        <Link className="btn" href="/">
          返回首页
        </Link>
      </div>
    </SectionCard>
  );
}
