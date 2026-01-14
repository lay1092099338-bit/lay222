
export enum EventStatus {
  UPCOMING = '即将开始',
  ONGOING = '进行中',
  COMPLETED = '已结束',
  TESTING = '灰度测试'
}

export interface RewardStage {
  stage: number;
  target: string;
  rewardAmount: number; // Reward is in LC
  isCompleted: boolean;
  fullDescription?: string;
}

export interface EventActivity {
  id: string;
  name: string;
  cover: string;
  description: string;
  fullRules?: string;
  status: EventStatus;
  joined: boolean;
  currentStep: number; 
  totalSteps: number;
  stages: RewardStage[];
  stats: {
    viewers: number;
    earningsTokens: number;
    duration: number;
    participantCount?: number;
  };
}

export interface StudioModel {
  id: string;
  name: string;
  avatar: string;
  isAvailable: boolean;
}

export interface LeaderboardEntry {
  rank: number;
  id: string;
  name: string;
  avatar: string;
  earningsTokens: number;
  trend: 'up' | 'down' | 'stable';
}

export interface CashTransaction {
  id: string;
  date: string;
  amount: number;
  source: string;
  type: 'income' | 'spend';
}

export interface UserStats {
  totalEvents: number;
  cumulativeViewers: number;
  totalCash: number;
  averageEventIncome: number;
  averageNormalIncome: number;
  averageEventViewers: number;
  averageNormalViewers: number;
}
