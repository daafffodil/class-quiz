import { cn } from '@/lib/utils';

type OptionButtonProps = {
  label: string;
  option: string;
  disabled: boolean;
  isSelected: boolean;
  isCorrect: boolean;
  hasAnswered: boolean;
  onClick: () => void;
};

export function OptionButton({ label, option, disabled, isSelected, isCorrect, hasAnswered, onClick }: OptionButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'option-button',
        hasAnswered && isCorrect && 'option-correct',
        hasAnswered && isSelected && !isCorrect && 'option-wrong'
      )}
    >
      <span className="option-label">{label}</span>
      <span className="option-content">{option}</span>
      <span className="option-indicator">{hasAnswered && isCorrect ? '✓' : hasAnswered && isSelected ? '✕' : ''}</span>
    </button>
  );
}
