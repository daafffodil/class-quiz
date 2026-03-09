import { QuizSet } from '@/types/quiz';

export const quizSets: QuizSet[] = [
  {
    id: 'xiang-yu-yan-zhi',
    title: '《项羽本纪》语义辨析',
    description: '结合史传语境，训练词义与句意理解。',
    questions: [
      {
        id: 'xy-1',
        context: '沛公军霸上，未得与项羽相见。',
        question: '句中“军”字最恰当的解释是：',
        options: ['军队', '驻扎', '战争', '将领'],
        correctIndex: 1,
        explanation: '“军霸上”是“驻军于霸上”之意，“军”在此作动词，表示驻扎。',
        tags: ['词类活用', '史记']
      },
      {
        id: 'xy-2',
        context: '项伯乃夜驰之沛公军，私见张良，具告以事。',
        question: '“具告以事”中的“具”意思是：',
        options: ['具体', '准备', '全都、详尽', '器具'],
        correctIndex: 2,
        explanation: '“具告”常见于文言，意为“详细地告诉”。'
      },
      {
        id: 'xy-3',
        context: '范增数目项王，举所佩玉玦以示之者三。',
        question: '“数目项王”中的“数目”应理解为：',
        options: ['多次用眼神示意', '统计人数', '公开责备', '认真端详'],
        correctIndex: 0,
        explanation: '“目”在此作动词，表示“以目示意”；“数”表示多次。'
      }
    ]
  },
  {
    id: 'lun-yu-jing-du',
    title: '《论语》课堂精读',
    description: '围绕常见考核句，强化语境与主旨判断。',
    questions: [
      {
        id: 'ly-1',
        context: '子曰：“学而不思则罔，思而不学则殆。”',
        question: '这句话主要强调：',
        options: ['学习比思考更重要', '思考比学习更重要', '学习与思考应相互结合', '学习应完全依赖老师'],
        correctIndex: 2,
        explanation: '孔子强调“学”与“思”不可偏废，必须并进。'
      },
      {
        id: 'ly-2',
        context: '子曰：“温故而知新，可以为师矣。”',
        question: '“温故而知新”最贴切的解释是：',
        options: ['只需复习旧知识', '复习旧知并获得新体会', '每天学习新内容即可', '背诵越多越好'],
        correctIndex: 1,
        explanation: '“温故”与“知新”并提，强调在复习中生发新的理解。'
      }
    ]
  }
];
