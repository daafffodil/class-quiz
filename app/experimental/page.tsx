import Link from 'next/link';
import { PageContainer } from '@/components/shared/PageContainer';
import { SectionCard } from '@/components/shared/SectionCard';

export default function ExperimentalPage() {
  return (
    <PageContainer>
      <SectionCard>
        <h1>实验模式</h1>
        <p className="muted">此区域仅用于次要演示与测试。</p>
      </SectionCard>

      <Link href="/experimental/english-demo" className="section-card set-link">
        <h3>English Demo</h3>
        <p className="muted">Secondary showcase flow in English.</p>
      </Link>
    </PageContainer>
  );
}
