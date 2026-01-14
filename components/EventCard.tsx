
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EventActivity, EventStatus } from '../types';
import StudioModelSelectionModal from './StudioModelSelectionModal';

interface EventCardProps {
  event: EventActivity;
  showStudioJoin?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ event, showStudioJoin }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isStudioModalOpen, setIsStudioModalOpen] = useState(false);
  const [isJoined, setIsJoined] = useState(event.joined);
  const [isJoining, setIsJoining] = useState(false);

  const getStatusColor = (status: EventStatus) => {
    switch (status) {
      case EventStatus.ONGOING: return 'bg-green-500';
      case EventStatus.UPCOMING: return 'bg-blue-500';
      case EventStatus.TESTING: return 'bg-purple-500';
      case EventStatus.COMPLETED: return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const handleStudioJoinTrigger = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsStudioModalOpen(true);
  };

  const handleIndividualJoin = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isJoined || isJoining || event.status === EventStatus.COMPLETED) {
      // If already joined, navigate to detail page to see progress
      navigate(`/event/${event.id}`);
      return;
    }
    
    setIsJoining(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1200));
    setIsJoined(true);
    setIsJoining(false);
    // Auto navigate to detail after joining
    navigate(`/event/${event.id}`);
  };

  const handleCardClick = () => {
    navigate(`/event/${event.id}`);
  };

  return (
    <>
      <div 
        onClick={handleCardClick}
        className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group relative flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Cover Image */}
        <div className="relative h-44 overflow-hidden">
          <img 
            src={event.cover} 
            alt={event.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          <div className="absolute top-4 left-4 flex space-x-2">
            <span className={`${getStatusColor(event.status)} text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase shadow-sm`}>
              {event.status}
            </span>
            {isJoined && (
              <span className="bg-white/90 backdrop-blur text-pink-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase shadow-sm animate-pulse">
                已参加
              </span>
            )}
          </div>

          {/* Hover Overlay Stats */}
          <div className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 flex items-center justify-center ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
             <div className="grid grid-cols-2 gap-4 text-white text-center">
                <div>
                  <p className="text-[10px] uppercase text-gray-400 mb-1">当前观众</p>
                  <p className="text-xl font-bold">{event.stats.viewers}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase text-gray-400 mb-1">累计收益</p>
                  <p className="text-xl font-bold text-yellow-400">{event.stats.earningsTokens} Tks</p>
                </div>
                <div className="col-span-2 pt-2 border-t border-white/20">
                  <button className="text-xs font-bold hover:text-pink-400 flex items-center justify-center w-full">
                    查看详情与攻略 <i className="fa-solid fa-arrow-right ml-2"></i>
                  </button>
                </div>
             </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <div className="mb-4">
            <h3 className="font-bold text-gray-800 text-lg line-clamp-1">{event.name}</h3>
          </div>
          
          {/* Node Style Progress */}
          <div className="space-y-4 flex-1">
            <div>
              <div className="flex justify-between text-xs font-bold mb-3">
                <span className="text-gray-400">任务阶段</span>
                <span className="text-pink-500">{event.currentStep} / {event.totalSteps}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                {Array.from({ length: event.totalSteps }).map((_, idx) => (
                  <React.Fragment key={idx}>
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 border-2 transition-all duration-500 ${
                      idx < event.currentStep || (idx === 0 && isJoined && event.currentStep === 0)
                        ? 'bg-pink-500 border-pink-500 text-white' 
                        : idx === event.currentStep 
                          ? 'border-pink-500 bg-white'
                          : 'border-gray-200 bg-white'
                    }`}>
                      {(idx < event.currentStep || (idx === 0 && isJoined && event.currentStep === 0)) && <i className="fa-solid fa-check text-[8px]"></i>}
                    </div>
                    {idx < event.totalSteps - 1 && (
                      <div className={`flex-1 h-0.5 transition-all duration-500 ${idx < event.currentStep ? 'bg-pink-500' : 'bg-gray-100'}`}></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="space-y-2 pt-2">
              {event.stages.slice(0, 2).map((stage) => (
                <div key={stage.stage} className="flex items-center space-x-2 text-[11px]">
                  <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0 ${stage.isCompleted ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                    {stage.isCompleted ? <i className="fa-solid fa-check text-[7px]"></i> : <span className="text-[8px]">{stage.stage}</span>}
                  </div>
                  <span className={`flex-1 truncate ${stage.isCompleted ? 'text-gray-400 line-through' : 'text-gray-600'}`}>{stage.target}</span>
                  <span className={`font-bold shrink-0 ${stage.isCompleted ? 'text-gray-400' : 'text-yellow-600'}`}>+{stage.rewardAmount} LC</span>
                </div>
              ))}
              {event.stages.length > 2 && <p className="text-[10px] text-gray-400 pl-5">还有 {event.stages.length - 2} 个阶段任务...</p>}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 space-y-2">
            {showStudioJoin && !isJoined && (
              <button 
                onClick={handleStudioJoinTrigger}
                className="w-full py-2 rounded-xl font-bold text-xs transition-all flex items-center justify-center space-x-2 border-2 border-indigo-100 text-indigo-500 hover:bg-indigo-50 active:scale-95"
              >
                <i className="fa-solid fa-users-rectangle"></i>
                <span>工作室批量报名</span>
              </button>
            )}
            
            <button 
              onClick={handleIndividualJoin}
              disabled={isJoining}
              className={`w-full py-2.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center space-x-2 ${
                isJoined 
                  ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' 
                  : 'tech-gradient text-white shadow-lg shadow-pink-200 hover:scale-105 active:scale-95'
              } ${isJoining ? 'opacity-70 cursor-wait' : ''}`}
            >
              {isJoining ? (
                <i className="fa-solid fa-circle-notch fa-spin"></i>
              ) : isJoined ? (
                '查看详情'
              ) : (
                '立即报名'
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Studio Batch Join Modal */}
      {isStudioModalOpen && (
        <StudioModelSelectionModal 
          event={event}
          onClose={() => setIsStudioModalOpen(false)}
          onSuccess={() => {
            setIsJoined(true);
          }}
        />
      )}
    </>
  );
};

export default EventCard;
