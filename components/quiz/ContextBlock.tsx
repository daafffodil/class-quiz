export function ContextBlock({ context }: { context: string }) {
  return (
    <div className="quiz-block">
      <p className="block-label">原文语境</p>
      <p className="context-text">{context}</p>
    </div>
  );
}
