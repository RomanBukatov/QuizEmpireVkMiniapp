import React from 'react';

interface GameCardProps {
  title: string;
  date: string;
  time: string;
  price: number;
  duration: string;
  venue: string;
  coverImage: string;
  colorFrom: string; 
  colorTo: string;   
}

export default function GameCard({
  title,
  date,
  time,
  price,
  duration,
  venue,
  coverImage,
  colorFrom,
  colorTo
}: GameCardProps) {
  return (
    <div className={`relative overflow-hidden rounded-[2rem] text-white shadow-sm bg-gradient-to-br ${colorFrom} ${colorTo}`}>
      
      {/* Фоновая картинка */}
      <div className="absolute top-0 right-0 w-[60%] h-full z-0">
        {/* Градиентная маска, чтобы сгладить переход от цвета к картинке */}
        <div className={`absolute inset-0 bg-gradient-to-r ${colorFrom} via-transparent to-transparent z-10`}></div>
        <img 
          src={coverImage} 
          alt={title} 
          className="w-full h-full object-cover object-right"
          onError={(e) => {
            // Заглушка, если путь к картинке неверный
            e.currentTarget.style.display = 'none'; 
          }}
        />
      </div>

      {/* Контент */}
      <div className="relative z-20 p-6 sm:p-8 flex flex-col justify-between min-h-[240px]">
        
        {/* Верх (Название и Время) */}
        <div className="flex justify-between items-start gap-4">
          <div className="max-w-[60%]">
            <h3 className="text-xl sm:text-2xl font-black leading-tight mb-3 uppercase drop-shadow-sm">
              {title}
            </h3>
            <span className="inline-block bg-[#F8387F] text-white text-xs font-bold px-3 py-1.5 rounded-xl">
              Кафе "{venue}"
            </span>
          </div>
          <div className="text-right shrink-0 drop-shadow-sm">
            <div className="text-sm font-bold uppercase tracking-wider">{date}</div>
            <div className="text-4xl sm:text-5xl font-black tracking-tighter">{time}</div>
          </div>
        </div>

        {/* Низ (Цена и Кнопки) */}
        <div className="mt-8 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
          <div>
            <div className="text-2xl font-black">{price} <span className="text-lg">₽/чел</span></div>
            <div className="text-[#FFC266] font-bold text-sm">{duration}</div>
          </div>
          
          <div className="flex gap-2">
            <button className="bg-[#FFAB3B] hover:bg-[#F29C2E] text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors shadow-md">
              Зарегистрироваться
            </button>
            <button className="bg-white text-[#FFAB3B] hover:bg-gray-50 font-bold py-2.5 px-6 rounded-xl text-sm transition-colors shadow-md">
              Подробнее
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}