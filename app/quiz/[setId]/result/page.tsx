import { ResultSummary } from '@/components/ResultSummary';

type ResultPageProps = {
  params: { setId: string };
  searchParams: { total?: string; correct?: string; wrong?: string };
};

export default function ResultPage({ params, searchParams }: ResultPageProps) {
  const total = Number(searchParams.total ?? 0);
  const correct = Number(searchParams.correct ?? 0);
  const wrong = Number(searchParams.wrong ?? 0);

  return (
    <main className="page">
      <ResultSummary setId={params.setId} total={total} correct={correct} wrong={wrong} />
    </main>
  );
}
