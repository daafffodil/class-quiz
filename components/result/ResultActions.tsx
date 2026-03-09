import Link from 'next/link';

export function ResultActions({ setId }: { setId: string }) {
  return (
    <div className="result-actions">
      <Link className="btn btn-primary" href={`/quiz/${setId}`}>
        再做一次
      </Link>
      <Link className="btn" href="/">
        返回首页
      </Link>
    </div>
  );
}
