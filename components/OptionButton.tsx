type OptionButtonProps = {
  label: string;
  option: string;
  disabled: boolean;
  isCorrect: boolean;
  isChosen: boolean;
  showResult: boolean;
  onClick: () => void;
};

export function OptionButton({
  label,
  option,
  disabled,
  isCorrect,
  isChosen,
  showResult,
  onClick
}: OptionButtonProps) {
  const resultClass = showResult
    ? isCorrect
      ? 'correct'
      : isChosen
        ? 'wrong'
        : ''
    : '';

  return (
    <button className={`btn option ${resultClass}`} disabled={disabled} onClick={onClick}>
      <span>
        {label}. {option}
      </span>
      <span>
        {showResult && isCorrect ? '✅' : null}
        {showResult && isChosen && !isCorrect ? '❌' : null}
      </span>
    </button>
  );
}
