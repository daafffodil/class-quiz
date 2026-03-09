import Link from 'next/link';
import { PageContainer } from '@/components/shared/PageContainer';
import { ExperimentalCard } from '@/components/home/ExperimentalCard';

export default function ExperimentalPage() {
  return (
    <PageContainer>
      <section className="section-card experimental-page-card">
        <h1>实验模式</h1>
        <p className="muted">此区域仅用于次要演示，当前只开放 English Demo。</p>
      </section>

      <ExperimentalCard />

      <Link href="/" className="btn">
        返回首页
      </Link>
    </PageContainer>
  );
}
