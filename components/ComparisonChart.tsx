
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { MOCK_USER_STATS } from '../constants';

const ComparisonChart: React.FC = () => {
  const data = [
    { name: '平均收益 (TK)', event: MOCK_USER_STATS.averageEventIncome, normal: MOCK_USER_STATS.averageNormalIncome },
    { name: '平均观众 (人)', event: MOCK_USER_STATS.averageEventViewers, normal: MOCK_USER_STATS.averageNormalViewers },
  ];

  return (
    <div className="h-32 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 0, right: 30, left: 60, bottom: 0 }}>
          <XAxis type="number" hide />
          <YAxis 
            dataKey="name" 
            type="category" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 10, fontWeight: 500, fill: '#94a3b8' }} 
            width={70}
          />
          <Tooltip 
            cursor={{ fill: 'transparent' }}
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Bar dataKey="event" radius={[0, 4, 4, 0]} barSize={12} name="活动期间">
            {data.map((entry, index) => (
              <Cell key={`cell-event-${index}`} fill="#ec4899" />
            ))}
          </Bar>
          <Bar dataKey="normal" radius={[0, 4, 4, 0]} barSize={12} name="日常直播">
            {data.map((entry, index) => (
              <Cell key={`cell-normal-${index}`} fill="#94a3b8" />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="flex justify-center space-x-4 mt-2">
        <div className="flex items-center space-x-1.5">
          <div className="w-2 h-2 rounded-full bg-pink-500"></div>
          <span className="text-[10px] font-medium text-gray-500">活动中</span>
        </div>
        <div className="flex items-center space-x-1.5">
          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          <span className="text-[10px] font-medium text-gray-500">不参加活动</span>
        </div>
      </div>
    </div>
  );
};

export default ComparisonChart;
