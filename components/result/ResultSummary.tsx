import { ResultHeroCard } from './ResultHeroCard';
import { ResultActions } from './ResultActions';

export function ResultSummary({ setId, total, correct, wrong }: { setId: string; total: number; correct: number; wrong: number }) {
  return (
    <section className="result-summary-wrap">
      <ResultHeroCard total={total} correct={correct} wrong={wrong} />
      <ResultActions setId={setId} />
    </section>
  );
}
