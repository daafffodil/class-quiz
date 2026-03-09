import Link from 'next/link';
import { quizSets } from '@/data/quizSets';
import { PageContainer } from '@/components/shared/PageContainer';
import { SectionCard } from '@/components/shared/SectionCard';

export default function HomePage() {
  return (
    <PageContainer>
      <SectionCard>
        <h1>文言文课堂测验工具</h1>
        <p className="muted">一题一练、即时反馈，适用于课堂投影练习与 DSE 风格备考。</p>
      </SectionCard>

      <section className="home-grid">
        {quizSets.map((set) => (
          <Link key={set.id} href={`/quiz/${set.id}`} className="section-card set-link">
            <h3>{set.title}</h3>
            <p className="muted">{set.description}</p>
            <span className="link-arrow">开始作答 →</span>
          </Link>
        ))}
      </section>

      <section className="entry-row">
        <Link href="/experimental" className="section-card entry-link">
          <h3>实验模式</h3>
          <p className="muted">进入次要演示版本（English Demo）。</p>
        </Link>
        <Link href="/admin" className="section-card entry-link">
          <h3>管理后台</h3>
          <p className="muted">查看后台功能规划（占位页）。</p>
        </Link>
      </section>
    </PageContainer>
  );
}
