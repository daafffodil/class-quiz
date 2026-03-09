import { QuizSet } from '@/types/quiz';

export const englishDemoQuiz: QuizSet = {
  id: 'english-demo',
  title: 'English Demo: Context-Based Classical Chinese Quiz',
  description: 'A secondary showcase mode for testing the same interaction flow in English.',
  questions: [
    {
      id: 'en-1',
      context: '《史记》: “多行不义必自毙。”',
      question: 'What is the best interpretation?',
      options: [
        'Doing many unjust acts leads to one’s own downfall.',
        'Justice is decided by military power.',
        'Only rulers can define morality.',
        'People should avoid all action.'
      ],
      correctIndex: 0,
      explanation: 'The sentence warns that repeated injustice eventually causes self-destruction.'
    },
    {
      id: 'en-2',
      context: '《论语》: “学而不思则罔，思而不学则殆。”',
      question: 'What does this sentence emphasize?',
      options: [
        'Learning and reflection should support each other.',
        'Reflection is unnecessary in learning.',
        'Memorization alone guarantees understanding.',
        'Teachers should do all thinking for students.'
      ],
      correctIndex: 0,
      explanation: 'Confucius highlights the balance between study and reflection.'
    }
  ]
};
