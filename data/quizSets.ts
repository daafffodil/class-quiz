import { QuizSet } from '@/types/quiz';

export const quizSets: QuizSet[] = [
  {
    id: 'yin-meaning',
    title: 'Verb “引” Meaning Practice',
    description: 'Practice understanding the contextual meaning of 引 in classical texts.',
    questions: [
      {
        id: 'yin-1',
        context: '东汉·班固《汉书》：于是延广引过归己，上甚贤之。',
        question: "What is the meaning of '引' in this sentence?",
        options: ['to draw a bow', 'to quote', 'to cause', 'to take responsibility'],
        correctIndex: 3,
        explanation:
          "The phrase '引过归己' means drawing fault toward oneself, which implies taking responsibility.",
        tags: ['vocabulary', 'han-dynasty']
      },
      {
        id: 'yin-2',
        context: '《史记》：引兵而东，至于河上。',
        question: "What does '引' most likely mean here?",
        options: ['to lead', 'to hide', 'to recall', 'to criticize'],
        correctIndex: 0,
        explanation: "'引兵' means to lead troops, so 引 here means to lead.",
        tags: ['military']
      },
      {
        id: 'yin-3',
        context: '《后汉书》：引咎自责，不敢推于人。',
        question: "What is the best interpretation of '引咎'?",
        options: ['to avoid blame', 'to accept blame', 'to distribute blame', 'to discuss faults'],
        correctIndex: 1,
        explanation: "'引咎' means taking blame upon oneself, showing self-reflection and responsibility."
      }
    ]
  },
  {
    id: 'historical-texts',
    title: 'Historical Text Practice',
    description: 'Short context-based questions from classical historical records.',
    questions: [
      {
        id: 'hist-1',
        context: '《资治通鉴》：臣闻兼听则明，偏信则暗。',
        question: 'What is the core idea of this sentence?',
        options: [
          'Listening broadly brings clarity; trusting one side brings blindness.',
          'Power should be centralized in one minister.',
          'A ruler should not listen to advice.',
          'Clarity depends only on military strength.'
        ],
        correctIndex: 0,
        explanation:
          'The sentence contrasts broad listening with one-sided belief, emphasizing balanced governance.'
      },
      {
        id: 'hist-2',
        context: '《左传》：多行不义必自毙。',
        question: 'What does this sentence warn about?',
        options: [
          'Ritual is always more important than law.',
          'Unjust acts will eventually lead to self-destruction.',
          'Only the strong survive in politics.',
          'Fate cannot be changed by behavior.'
        ],
        correctIndex: 1,
        explanation:
          'It states that repeated unjust behavior eventually causes one’s own downfall.'
      }
    ]
  }
];

export const getQuizSetById = (id: string) => quizSets.find((set) => set.id === id);
