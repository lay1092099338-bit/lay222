
import React, { useState } from 'react';

interface TrafficModalProps {
  onClose: () => void;
  balance: number;
}

const TrafficModal: React.FC<TrafficModalProps> = ({ onClose, balance }) => {
  const [selectedPack, setSelectedPack] = useState(1);
  const packs = [
    { id: 1, name: '基础曝光包', price: 10, views: '2,000', icon: 'fa-paper-plane', color: 'bg-blue-500' },
    { id: 2, name: '热门推荐包', price: 50, views: '12,000', icon: 'fa-fire', color: 'bg-orange-500', badge: '最热门' },
    { id: 3, name: '超级引流包', price: 200, views: '50,000', icon: 'fa-rocket', color: 'bg-purple-600' },
  ];

  const handlePurchase = () => {
    const pack = packs.find(p => p.id === selectedPack);
    if (pack && balance < pack.price) {
      alert('Lovense Cash 余额不足，请多参加活动赢取奖励！');
      return;
    }
    alert(`购买成功！${pack?.name} 已加入待激活列表。`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-6 border-b flex justify-between items-center">
          <h3 className="text-xl font-bold flex items-center">
            <i className="fa-solid fa-bolt text-yellow-500 mr-2"></i>
            购买直播流量包
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600"><i className="fa-solid fa-xmark"></i></button>
        </div>
        
        <div className="p-8">
          <div className="mb-6 bg-pink-50 p-4 rounded-xl flex justify-between items-center">
            <span className="text-pink-600 font-medium">当前 Lovense Cash 余额:</span>
            <span className="text-pink-700 font-bold text-xl">${balance.toFixed(2)}</span>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-8">
            {packs.map(pack => (
              <div 
                key={pack.id}
                onClick={() => setSelectedPack(pack.id)}
                className={`relative p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                  selectedPack === pack.id ? 'border-pink-500 bg-pink-50/30' : 'border-gray-100 hover:border-pink-200'
                }`}
              >
                {pack.badge && (
                  <span className="absolute -top-3 left-4 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                    {pack.badge}
                  </span>
                )}
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl ${pack.color} flex items-center justify-center text-white text-xl shadow-lg`}>
                    <i className={`fa-solid ${pack.icon}`}></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{pack.name}</h4>
                    <p className="text-xs text-gray-500">预计提升 <span className="text-pink-600 font-bold">{pack.views}</span> 次曝光</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-black text-gray-900">${pack.price}</p>
                  <p className="text-[10px] text-gray-400 uppercase font-bold">Lovense Cash</p>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={handlePurchase}
            className="w-full tech-gradient text-white font-bold py-4 rounded-2xl shadow-xl shadow-pink-200 hover:scale-[1.02] active:scale-95 transition-all"
          >
            立即兑换流量包
          </button>
          
          <p className="text-center text-[10px] text-gray-400 mt-4">
            购买后流量包将保存在“流量卡片库”中，可随时手动激活。
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrafficModal;
