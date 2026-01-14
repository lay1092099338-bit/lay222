
import { EventStatus, EventActivity, CashTransaction, UserStats, StudioModel, LeaderboardEntry } from './types';

export const MOCK_USER_STATS: UserStats = {
  totalEvents: 12,
  cumulativeViewers: 45800,
  totalCash: 125.80,
  averageEventIncome: 450,
  averageNormalIncome: 280,
  averageEventViewers: 1200,
  averageNormalViewers: 750
};

export const MOCK_STUDIO_MODELS: StudioModel[] = [
  { id: 'm1', name: 'Alice Wang', avatar: 'https://i.pravatar.cc/150?u=m1', isAvailable: true },
  { id: 'm2', name: 'Bella Chen', avatar: 'https://i.pravatar.cc/150?u=m2', isAvailable: true },
  { id: 'm3', name: 'Crystal Li', avatar: 'https://i.pravatar.cc/150?u=m3', isAvailable: false },
  { id: 'm4', name: 'Diana Zhang', avatar: 'https://i.pravatar.cc/150?u=m4', isAvailable: true },
  { id: 'm5', name: 'Elena Sun', avatar: 'https://i.pravatar.cc/150?u=m5', isAvailable: true },
  { id: 'm6', name: 'Fiona He', avatar: 'https://i.pravatar.cc/150?u=m6', isAvailable: true },
  { id: 'm7', name: 'Grace Wu', avatar: 'https://i.pravatar.cc/150?u=m7', isAvailable: false },
  { id: 'm8', name: 'Heidi Liu', avatar: 'https://i.pravatar.cc/150?u=m8', isAvailable: true },
];

export const MOCK_LEADERBOARD: LeaderboardEntry[] = [
  { rank: 1, id: 'l1', name: 'Sophia Grace', avatar: 'https://i.pravatar.cc/150?u=l1', earningsTokens: 125000, trend: 'up' },
  { rank: 2, id: 'l2', name: 'Mia Khalifa', avatar: 'https://i.pravatar.cc/150?u=l2', earningsTokens: 98400, trend: 'stable' },
  { rank: 3, id: 'l3', name: 'Ava Addams', avatar: 'https://i.pravatar.cc/150?u=l3', earningsTokens: 87200, trend: 'up' },
  { rank: 4, id: 'l4', name: 'Lily Love', avatar: 'https://i.pravatar.cc/150?u=l4', earningsTokens: 65000, trend: 'down' },
  { rank: 5, id: 'l5', name: 'Rose Red', avatar: 'https://i.pravatar.cc/150?u=l5', earningsTokens: 54300, trend: 'stable' },
];

export const MOCK_EVENTS: EventActivity[] = [
  {
    id: 'e1',
    name: '夏季狂欢直播节',
    cover: 'https://picsum.photos/seed/event1/800/400',
    description: '年度最盛大的直播盛典，旨在奖励高质量直播内容。通过提升互动率和直播时长，模特可以解锁阶梯式丰厚奖励。本活动由 Lovense 官方赞助，排名前列的模特还有机会获得首页轮播位推荐。',
    fullRules: '1. 必须在活动分类下直播；2. 严禁使用录像播片；3. 阶段性奖励在完成任务后即时结算至 Lovense Cash 账户。',
    status: EventStatus.ONGOING,
    joined: true,
    currentStep: 2,
    totalSteps: 3,
    stages: [
      { stage: 1, target: '直播2小时', rewardAmount: 10, isCompleted: true, fullDescription: '在活动期间，累计有效直播时长达到 120 分钟即可解锁。' },
      { stage: 2, target: '获得500观众', rewardAmount: 20, isCompleted: true, fullDescription: '单场直播的最高峰值观众数（Peak Viewers）达到 500 人。' },
      { stage: 3, target: '获得1000 Tokens', rewardAmount: 50, isCompleted: false, fullDescription: '活动期间累计获得的打赏 Tokens 达到 1000（不含返点）。' },
    ],
    stats: { viewers: 850, earningsTokens: 4200, duration: 180, participantCount: 1240 }
  },
  {
    id: 'e4',
    name: '周中巅峰赛',
    cover: 'https://picsum.photos/seed/event4/800/400',
    description: '针对工作日流量的专项激励。在周二至周四期间，凡是达成收益指标的模特均可获得额外流量卡奖励。这是提升粉丝忠诚度、稳定日常收益的绝佳机会。',
    fullRules: '活动仅限北京时间周二 0:00 至周四 23:59 期间产生的收益计算。',
    status: EventStatus.ONGOING,
    joined: false,
    currentStep: 0,
    totalSteps: 4,
    stages: [
      { stage: 1, target: '单场直播 60 分钟', rewardAmount: 5, isCompleted: false },
      { stage: 2, target: '打赏人数突破 50 人', rewardAmount: 15, isCompleted: false },
      { stage: 3, target: '累计 Tokens 达到 5000', rewardAmount: 30, isCompleted: false },
      { stage: 4, target: '进入排行榜前 100', rewardAmount: 100, isCompleted: false },
    ],
    stats: { viewers: 120, earningsTokens: 0, duration: 0, participantCount: 850 }
  },
  {
    id: 'e2',
    name: '新人扶持计划',
    cover: 'https://picsum.photos/seed/event2/800/400',
    description: '欢迎来到 Lovense 大家庭！这是专为入驻不到 30 天的新模特准备的专属赛道。在这里，我们不看流量厚度，只看成长速度。完成任务即可获得高额曝光加成，助你快速度过新手期。',
    status: EventStatus.UPCOMING,
    joined: false,
    currentStep: 0,
    totalSteps: 3,
    stages: [
      { stage: 1, target: '连续直播3天', rewardAmount: 30, isCompleted: false },
      { stage: 2, target: '粉丝增长100', rewardAmount: 50, isCompleted: false },
      { stage: 3, target: '单场收益破1k', rewardAmount: 100, isCompleted: false },
    ],
    stats: { viewers: 0, earningsTokens: 0, duration: 0, participantCount: 0 }
  },
  {
    id: 'e3',
    name: 'VR 互动新技术内测',
    cover: 'https://picsum.photos/seed/event3/800/400',
    description: '探索直播的下一个边界。我们正在测试基于 Lovense VR 系列玩具的深度互动功能。参与测试的模特需要通过特定接口与粉丝互动，并提交宝贵的反馈意见。',
    status: EventStatus.TESTING,
    joined: true,
    currentStep: 1,
    totalSteps: 2,
    stages: [
      { stage: 1, target: '提交体验报告', rewardAmount: 20, isCompleted: true },
      { stage: 2, target: '内测直播1小时', rewardAmount: 30, isCompleted: false },
    ],
    stats: { viewers: 320, earningsTokens: 1500, duration: 60, participantCount: 45 }
  }
];

export const MOCK_TRANSACTIONS: CashTransaction[] = [
  { id: 't1', date: '2023-10-25 14:30', amount: 20, source: '夏季狂欢阶段2奖励', type: 'income' },
  { id: 't2', date: '2023-10-24 09:15', amount: 10, source: 'VR内测奖励', type: 'income' },
  { id: 't4', date: '2023-10-20 12:00', amount: -50, source: '购买流量包 (1000次曝光)', type: 'spend' },
];
