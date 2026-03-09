import Link from 'next/link';
import { quizSets } from '@/data/quizSets';

export default function HomePage() {
  return (
    <main className="page">
      <h1>Classical Chinese Quiz</h1>
      <p className="muted">Choose a quiz set to begin practicing context-based interpretation.</p>

      <h2>Quiz Sets</h2>
      <div className="grid" style={{ marginBottom: 20 }}>
        {quizSets.map((set) => (
          <Link key={set.id} href={`/quiz/${set.id}`} className="card" style={{ display: 'block' }}>
            <h3 style={{ marginTop: 0 }}>{set.title}</h3>
            <p className="muted" style={{ marginBottom: 0 }}>
              {set.description}
            </p>
          </Link>
        ))}
      </div>

      <Link href="/admin" className="btn">
        Admin
      </Link>
    </main>
  );
}
