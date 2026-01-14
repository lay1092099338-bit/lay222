
import React, { useState } from 'react';
import { MOCK_USER_STATS, MOCK_EVENTS, MOCK_TRANSACTIONS, MOCK_LEADERBOARD } from '../constants';
import { EventStatus, EventActivity } from '../types';
import EventCard from './EventCard';
import ComparisonChart from './ComparisonChart';
import WalletModal from './WalletModal';
import TrafficModal from './TrafficModal';
import StrategyModal from './StrategyModal';
import BetaTestModal from './BetaTestModal';
import LeaderboardModal from './LeaderboardModal';

const EventPlaza: React.FC = () => {
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [isTrafficOpen, setIsTrafficOpen] = useState(false);
  const [isStrategyOpen, setIsStrategyOpen] = useState(false);
  const [isBetaOpen, setIsBetaOpen] = useState(false);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [filter, setFilter] = useState('全部');

  const filteredEvents = MOCK_EVENTS.filter(e => {
    if (filter === '全部') return e.status !== EventStatus.TESTING;
    if (filter === '进行中') return e.status === EventStatus.ONGOING;
    if (filter === '即将开始') return e.status === EventStatus.UPCOMING;
    return true;
  });

  const grayTestEvents = MOCK_EVENTS.filter(e => e.status === EventStatus.TESTING);

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12">
      {/* Welcome Banner */}
      <div className="relative h-48 rounded-2xl overflow-hidden tech-gradient shadow-xl flex items-center px-12 transition-all duration-500 hover:shadow-2xl">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <i className="fa-solid fa-bullhorn text-[200px] -rotate-12 absolute -right-10 -bottom-10"></i>
        </div>
        <div className="relative z-10 text-white max-w-xl">
          <h1 className="text-4xl font-bold mb-2 tracking-tight">活动广场 <span className="text-xl font-normal opacity-80 ml-2 italic">Event Plaza</span></h1>
          <p className="text-lg opacity-90 mb-6">参加平台活动，提升流量与收益，赢取 Lovense Cash 专属现金奖励。</p>
          <div className="flex space-x-4">
            <button 
              onClick={() => setIsStrategyOpen(true)}
              className="bg-white text-pink-600 px-8 py-2.5 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center space-x-2"
            >
              <i className="fa-solid fa-scroll"></i>
              <span>查看攻略 & 规则</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Achievements & Ranking Trigger */}
        <div className="md:col-span-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-pink-50 rounded-full opacity-50 group-hover:scale-110 transition-transform"></div>
          <div className="relative z-10 h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-pink-500 flex items-center justify-center text-white text-sm">
                  <i className="fa-solid fa-trophy"></i>
                </div>
                <p className="text-gray-800 font-bold uppercase tracking-wider text-sm">活动成就概况</p>
              </div>
              {/* Leaderboard Trigger Icon */}
              <button 
                onClick={() => setIsLeaderboardOpen(true)}
                className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-yellow-500 transition-colors"
                title="查看战力榜"
              >
                <i className="fa-solid fa-ranking-star"></i>
              </button>
            </div>
            
            <div className="flex-1 space-y-4">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">累计参与</p>
                  <p className="text-3xl font-black text-gray-900">{MOCK_USER_STATS.totalEvents}<span className="text-xs font-normal ml-1">场</span></p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-gray-400 font-bold uppercase">超越全站</p>
                  <p className="text-sm font-bold text-green-500">85.4%</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-50">
                <div className="bg-gray-50 p-2 rounded-xl">
                  <p className="text-[9px] text-gray-400 font-bold uppercase mb-0.5">累计观众</p>
                  <p className="text-sm font-bold">{(MOCK_USER_STATS.cumulativeViewers / 1000).toFixed(1)}k</p>
                </div>
                <div className="bg-gray-50 p-2 rounded-xl">
                  <p className="text-[9px] text-gray-400 font-bold uppercase mb-0.5">累计时长</p>
                  <p className="text-sm font-bold">248h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lovense Cash Wallet Entry */}
        <div className="md:col-span-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between group cursor-pointer hover:border-pink-200 transition-colors"
             onClick={() => setIsWalletOpen(true)}>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-1">LOVENSE CASH (USD 1:1)</p>
              <div className="flex items-center space-x-2">
                <i className="fa-solid fa-dollar-sign text-green-600 text-xl"></i>
                <span className="text-3xl font-black text-gray-900">{MOCK_USER_STATS.totalCash.toFixed(2)}</span>
              </div>
            </div>
            <div className="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center text-pink-500 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-wallet text-lg"></i>
            </div>
          </div>
          <button className="w-full mt-4 py-2 text-pink-500 font-bold text-xs border-2 border-pink-100 rounded-xl group-hover:bg-pink-500 group-hover:text-white transition-all uppercase tracking-wide">
            奖励明细 & 兑换
          </button>
        </div>

        {/* Dashboard Comparison Entry */}
        <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative">
          <div className="absolute top-4 right-4 text-[10px] font-bold text-gray-300 uppercase tracking-widest">Performance Insights</div>
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
             <i className="fa-solid fa-chart-line text-indigo-500 mr-2"></i>
             平均收益对比 <span className="text-xs font-normal text-gray-400 ml-2">(Token)</span>
          </h3>
          <ComparisonChart />
        </div>
      </div>

      {/* Main Exploration Area */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center space-x-8">
             <h2 className="text-xl font-bold text-gray-800">活动探索</h2>
             <div className="flex space-x-6">
                {['全部', '进行中', '即将开始'].map(f => (
                  <button 
                    key={f} 
                    onClick={() => setFilter(f)}
                    className={`text-sm font-bold transition-all relative py-1 ${filter === f ? 'text-pink-500' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    {f}
                    {filter === f && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 rounded-full"></div>}
                  </button>
                ))}
             </div>
          </div>
          <div className="hidden sm:flex items-center space-x-2 bg-white px-3 py-1.5 rounded-lg border text-sm">
            <span className="text-gray-400">排序:</span>
            <button className="text-gray-800 font-bold flex items-center">
              最新发布 <i className="fa-solid fa-chevron-down ml-1 text-[10px]"></i>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} showStudioJoin={true} />
          ))}
        </div>
      </div>

      {/* Gray Test Section Specific for Studios/Partners */}
      <div className="bg-gray-900 rounded-3xl p-10 text-white relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-[100px] group-hover:bg-pink-500/20 transition-all duration-700"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 max-w-2xl">
             <div className="flex items-center space-x-3 mb-4">
                <span className="bg-pink-500 text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider">Experimental Access</span>
                <h3 className="text-3xl font-black">先锋测试入口</h3>
             </div>
             <p className="text-gray-400 text-lg leading-relaxed">工作室与核心模特专属通道。您可以抢先体验开发中的互动功能与活动模块，提交反馈不仅能完善平台，更能通过 Bug 赏金计划获得高额 Lovense Cash 奖励。</p>
          </div>
          <button 
            onClick={() => setIsBetaOpen(true)}
            className="bg-white text-gray-900 px-10 py-4 rounded-2xl font-black shadow-2xl hover:bg-pink-50 hover:scale-105 active:scale-95 transition-all shrink-0 flex items-center space-x-3"
          >
            <i className="fa-solid fa-flask"></i>
            <span>查看内测项目 ({grayTestEvents.length})</span>
          </button>
        </div>
      </div>

      {/* Modals */}
      {isWalletOpen && (
        <WalletModal 
          onClose={() => setIsWalletOpen(false)} 
          balance={MOCK_USER_STATS.totalCash}
          transactions={MOCK_TRANSACTIONS}
          onBuyTraffic={() => {
            setIsWalletOpen(false);
            setIsTrafficOpen(true);
          }}
        />
      )}
      {isTrafficOpen && (
        <TrafficModal onClose={() => setIsTrafficOpen(false)} balance={MOCK_USER_STATS.totalCash} />
      )}
      {isStrategyOpen && (
        <StrategyModal onClose={() => setIsStrategyOpen(false)} />
      )}
      {isBetaOpen && (
        <BetaTestModal onClose={() => setIsBetaOpen(false)} events={grayTestEvents} />
      )}
      {isLeaderboardOpen && (
        <LeaderboardModal data={MOCK_LEADERBOARD} onClose={() => setIsLeaderboardOpen(false)} />
      )}
    </div>
  );
};

export default EventPlaza;
