import Link from 'next/link';

export function ExperimentalCard() {
  return (
    <Link href="/experimental/english-demo" className="experimental-card">
      <h3>English Demo</h3>
      <span className="link-arrow">开始答题 →</span>
    </Link>
  );
}
