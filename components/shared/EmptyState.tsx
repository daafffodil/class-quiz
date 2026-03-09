import Link from 'next/link';
import { SectionCard } from './SectionCard';

export function EmptyState({ title, description, backHref = '/' }: { title: string; description: string; backHref?: string }) {
  return (
    <SectionCard>
      <h2>{title}</h2>
      <p className="muted">{description}</p>
      <Link href={backHref} className="btn btn-primary">
        返回首页
      </Link>
    </SectionCard>
  );
}
