import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function SectionCard({ children, className }: { children: ReactNode; className?: string }) {
  return <section className={cn('section-card', className)}>{children}</section>;
}
