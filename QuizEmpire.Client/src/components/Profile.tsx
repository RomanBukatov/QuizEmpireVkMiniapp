import { useState } from 'react';
import { History, Star, LogOut } from 'lucide-react';
import GameCard from './GameCard';

export default function Profile() {
  const [activeTab, setActiveTab] = useState<'history' | 'bonuses'>('history');

  return (
    <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden min-h-[600px] flex flex-col">
      
      {/* Шапка ЛК */}
      <div className="bg-gradient-to-r from-[#A020F0] to-[#F6416C] p-6 flex justify-between items-center text-white">
        <div className="flex items-center gap-2">
          {/* Имитация аватарки ВК */}
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">И</div>
          <span className="font-bold text-lg">Иван Иванов</span>
        </div>
      </div>

      {/* Табы навигации */}
      <div className="flex gap-2 p-6 pb-2 border-b border-gray-100">
        <button 
          onClick={() => setActiveTab('history')}
          className={`p-3 rounded-xl transition-colors ${activeTab === 'history' ? 'bg-[#A020F0] text-white shadow-md' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}
        >
          <History size={20} />
        </button>
        <button 
          onClick={() => setActiveTab('bonuses')}
          className={`p-3 rounded-xl transition-colors ${activeTab === 'bonuses' ? 'bg-[#F6416C] text-white shadow-md' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}
        >
          <Star size={20} />
        </button>
        <div className="flex-1"></div>
        <button className="p-3 rounded-xl bg-gray-50 text-gray-400 hover:bg-gray-100 transition-colors">
          <LogOut size={20} />
        </button>
      </div>

      {/* Контент табов */}
      <div className="p-6 flex-1 bg-gray-50/50">
        
        {activeTab === 'history' && (
          <div>
            <h3 className="text-xl font-black text-gray-900 mb-6">Прошедшие игры</h3>
            <div className="opacity-80 scale-95 origin-top pointer-events-none">
              <GameCard 
                title="География и путешествия"
                date="10 АПРЕЛЯ"
                time="19:00"
                price={500}
                duration="2-3 часа игры"
                venue="LUBA"
                coverImage="/images/Schedule/map.png"
                colorFrom="from-[#A020F0]"
                colorTo="to-[#F6416C]"
              />
            </div>
          </div>
        )}

        {activeTab === 'bonuses' && (
          <div>
            <h3 className="text-xl font-black text-gray-900 mb-6">Бонусная система</h3>
            <div className="bg-white rounded-2xl p-5 shadow-sm space-y-4">
              {[1,2,3,4].map((i) => (
                <div key={i} className="flex justify-between items-center text-sm border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                  <div>
                    <div className="text-gray-400 text-xs mb-1">30.04</div>
                    <div className="font-bold text-gray-700">Музыкальное лото</div>
                  </div>
                  <div className="text-gray-500 font-medium">50 баллов</div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}