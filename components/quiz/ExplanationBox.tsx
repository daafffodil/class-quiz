export function ExplanationBox({ explanation, isCorrect, correctOption }: { explanation: string; isCorrect: boolean; correctOption: string }) {
  return (
    <div className={`explanation-box ${isCorrect ? 'exp-correct' : 'exp-wrong'}`}>
      <p className="feedback-title">{isCorrect ? '回答正确，做得好！' : '回答错误，请看解析。'}</p>
      {!isCorrect ? <p className="feedback-correct">正确答案：{correctOption}</p> : null}
      <p className="muted">解析：{explanation}</p>
    </div>
  );
}
