export function QuestionBlock({ question }: { question: string }) {
  return (
    <div className="quiz-block">
      <p className="block-label">问题</p>
      <h2 className="question-text">{question}</h2>
    </div>
  );
}
