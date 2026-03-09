import { ResultSummary } from '@/components/result/ResultSummary';
import { PageContainer } from '@/components/shared/PageContainer';

export default function ResultPage({ params, searchParams }: { params: { setId: string }; searchParams: { total?: string; correct?: string; wrong?: string } }) {
  const total = Number(searchParams.total ?? 0);
  const correct = Number(searchParams.correct ?? 0);
  const wrong = Number(searchParams.wrong ?? 0);

  return (
    <PageContainer>
      <ResultSummary setId={params.setId} total={total} correct={correct} wrong={wrong} />
    </PageContainer>
  );
}
