
import React from 'react';

interface StrategyModalProps {
  onClose: () => void;
}

const StrategyModal: React.FC<StrategyModalProps> = ({ onClose }) => {
  const rules = [
    {
      title: '如何获得奖励?',
      desc: '报名参加活动广场中的任意活动，并按照要求完成各个阶段的任务。任务通常包括直播时长、收益达标、粉丝增长等维度。',
      icon: 'fa-gift'
    },
    {
      title: '奖励单位说明',
      desc: '活动中的收益以 Token 为单位展示；活动奖励金为 Lovense Cash (LC)。LC 与美元 1:1 挂钩，价值稳定。',
      icon: 'fa-coins'
    },
    {
      title: 'Lovense Cash 用途',
      desc: 'LC 不支持直接提现，但可以像美元一样在 Lovense 官方商店购买所有玩具硬件，或在平台兑换多种强效流量曝光包。',
      icon: 'fa-store'
    },
    {
      title: '工作室特权',
      desc: '工作室管理员可以使用“一键加入”功能，批量为旗下模特报名特定活动，高效提升整体曝光度。',
      icon: 'fa-users-gear'
    }
  ];

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-3xl rounded-[32px] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-10 border-b relative">
          <button onClick={onClose} className="absolute top-8 right-8 text-gray-400 hover:text-gray-600 transition-colors">
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
          <div className="flex items-center space-x-4 mb-2">
            <div className="w-12 h-12 rounded-2xl bg-pink-500 flex items-center justify-center text-white text-2xl shadow-lg">
              <i className="fa-solid fa-scroll"></i>
            </div>
            <h3 className="text-3xl font-black text-gray-800">活动广场参与指南</h3>
          </div>
          <p className="text-gray-400">了解如何通过活动最大化您的收益与影响力。</p>
        </div>

        <div className="p-10 overflow-y-auto bg-gray-50/50 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rules.map((rule, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-4 transition-transform hover:-translate-y-1">
                <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-pink-500 shrink-0">
                  <i className={`fa-solid ${rule.icon} text-lg`}></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">{rule.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{rule.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-indigo-900 rounded-2xl p-8 text-white">
            <h4 className="font-bold text-lg mb-4 flex items-center">
              <i className="fa-solid fa-circle-exclamation text-yellow-400 mr-2"></i>
              注意事项
            </h4>
            <ul className="space-y-3 text-sm text-indigo-100">
              <li className="flex items-start">
                <span className="mr-2 opacity-50">•</span>
                <span>每个活动都有对应的有效期，任务必须在活动结束前完成才可获得奖励。</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 opacity-50">•</span>
                <span>LC 奖励通常在阶段任务完成后 24 小时内发放至您的钱包。</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 opacity-50">•</span>
                <span>禁止任何形式的作弊行为，一经发现将扣除所有活动所得并封禁活动资格。</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="p-8 bg-white border-t flex justify-center">
          <button 
            onClick={onClose}
            className="bg-gray-900 text-white px-12 py-3 rounded-xl font-bold hover:bg-gray-800 transition-all shadow-lg active:scale-95"
          >
            我已了解规则
          </button>
        </div>
      </div>
    </div>
  );
};

export default StrategyModal;
