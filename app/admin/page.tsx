import Link from 'next/link';
import { PageContainer } from '@/components/shared/PageContainer';
import { SectionCard } from '@/components/shared/SectionCard';

export default function AdminPage() {
  return (
    <PageContainer>
      <SectionCard>
        <h1>管理后台</h1>
        <p>后台功能开发中。</p>
        <p className="muted">未来将支持题库上传与管理。</p>
        <Link href="/" className="btn btn-primary">返回首页</Link>
      </SectionCard>
    </PageContainer>
  );
}
