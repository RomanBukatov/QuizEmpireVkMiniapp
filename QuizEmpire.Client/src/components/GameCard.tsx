export default function GameCard({
  title, date, time, price, duration, venue, coverImage, colorFrom, colorTo
}: any) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-md border border-gray-100 flex min-h-[220px]">
      
      {/* ПРАВАЯ ЧАСТЬ: Градиентный фон (плавно переходит в белый налево) */}
      <div className={`absolute top-0 right-0 w-[65%] h-full bg-gradient-to-l ${colorFrom} ${colorTo} to-transparent opacity-90 z-0`}></div>
      <div className={`absolute top-0 right-0 w-[45%] h-full bg-gradient-to-br ${colorFrom} ${colorTo} z-0`}></div>

      {/* ПРАВАЯ ЧАСТЬ: Картинка (обрезается снизу и справа) */}
      <img 
        src={coverImage} 
        alt={title} 
        className="absolute bottom-0 right-0 w-[40%] object-contain object-bottom-right z-0" 
      />

      {/* КОНТЕНТ */}
      <div className="relative z-10 w-full p-6 flex flex-col justify-between">
        
        {/* ВЕРХ: Заголовок (Черный) и Дата/Время (Белые) */}
        <div className="flex justify-between items-start">
          <div className="w-[55%] relative z-20">
            <h3 className="text-xl font-black text-gray-900 leading-tight mb-3 uppercase">
              {title}
            </h3>
            <span className="inline-block bg-gradient-to-r from-[#A020F0] to-[#E94057] text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-sm">
              Кафе "{venue}"
            </span>
          </div>
          
          <div className="w-[40%] text-right text-white drop-shadow-md pr-2 relative z-20">
            {/* СИЛЬНОЕ ФИОЛЕТОВОЕ НАПЫЛЕНИЕ ТОЧНО ПОД ДАТОЙ И ВРЕМЕНЕМ */}
            <div className="absolute top-[-20px] right-[-20px] w-40 h-40 bg-[#A020F0] rounded-full mix-blend-normal filter blur-[35px] opacity-100 -z-10"></div>
            
            <div className="text-sm font-bold uppercase tracking-wider relative z-10">{date}</div>
            <div className="text-4xl font-black tracking-tighter relative z-10">{time}</div>
          </div>
        </div>

        {/* НИЗ: Цена, Длительность, Кнопки */}
        <div className="mt-6 flex justify-between items-end">
          <div className="w-[45%]">
            <div className="text-2xl font-black text-gray-900">{price} <span className="text-base font-bold">₽/чел</span></div>
            <div className="text-[#FFAB3B] font-bold text-sm">{duration}</div>
          </div>
          
          <div className="flex gap-2">
            <button className="bg-[#FFAB3B] text-white font-bold py-2 px-6 rounded-xl text-sm transition-colors hover:bg-orange-500">
              Зарегистрироваться
            </button>
            <button className="bg-white border-2 border-[#FFAB3B] text-[#FFAB3B] font-bold py-2 px-6 rounded-xl text-sm transition-colors hover:bg-gray-50">
              Подробнее
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}