export function NextQuestionButton({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" className="btn btn-primary" onClick={onClick}>
      下一题
    </button>
  );
}
