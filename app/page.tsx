import Link from 'next/link';
import { quizSets } from '@/data/quizSets';
import { PageContainer } from '@/components/shared/PageContainer';
import { HeroSection } from '@/components/home/HeroSection';
import { QuizSetCard } from '@/components/home/QuizSetCard';
import { ExperimentalCard } from '@/components/home/ExperimentalCard';

export default function HomePage() {
  return (
    <PageContainer>
      <HeroSection />

      <section id="chinese-quiz-sets" className="home-grid">
        {quizSets.map((set) => (
          <QuizSetCard key={set.id} quizSet={set} />
        ))}
      </section>

      <ExperimentalCard />

      <Link href="/admin" className="admin-entry-button">
        后台
      </Link>
    </PageContainer>
  );
}
