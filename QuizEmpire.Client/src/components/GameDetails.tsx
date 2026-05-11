import { X, MapPin } from 'lucide-react';

export default function GameDetails({ game, onBack, onRegister }: { game: any, onBack: () => void, onRegister: () => void }) {
  return (
    <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden relative border border-gray-100">
      
      <button onClick={onBack} className="absolute top-4 right-4 z-20 text-gray-500 hover:bg-gray-100 p-2 rounded-full transition-colors cursor-pointer">
        <X size={24} />
      </button>

      {/* Динамический градиент из пропсов */}
      <div className={`relative p-6 sm:p-8 bg-gradient-to-br ${game.colorFrom} ${game.colorTo} opacity-90`}>
        <button onClick={onBack} className="flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium mb-6 transition-colors cursor-pointer relative z-20">
          <span className="text-xl leading-none">←</span> Выбрать другую игру
        </button>

        <div className="flex justify-between items-start gap-4 relative z-20">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-black leading-tight mb-3 uppercase text-white drop-shadow-md">
              {game.title}
            </h2>
            <span className="inline-block bg-gradient-to-r from-[#A020F0] to-[#E94057] text-white text-xs font-bold px-3 py-1.5 rounded-xl mb-4 shadow-sm">
              Кафе "{game.venue}"
            </span>
          </div>

          <div className="text-right shrink-0">
            <div className="text-white text-sm font-bold uppercase tracking-wider bg-black/20 px-2 py-1 rounded-md backdrop-blur-md inline-block mb-1">
              {game.date}
            </div>
            <div className="text-4xl sm:text-5xl font-black tracking-tighter text-white drop-shadow-lg">
              {game.time}
            </div>
          </div>
        </div>
      </div>

      {/* Нижний блок: Описание и Карта */}
      <div className="p-6 sm:p-8 relative min-h-[350px] bg-white">
        
        {/* КАРТИНКА: Теперь она не вылезает наверх и плавно растворяется слева */}
        <div className="absolute bottom-0 right-0 w-[50%] h-[90%] z-0 pointer-events-none">
          {/* Белый градиент слева направо, чтобы картинка не съедала текст */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent z-10"></div>
          <img 
            src={game.coverImage} 
            alt="Cover" 
            className="w-full h-full object-contain object-bottom-right" 
          />
        </div>

        {/* КОНТЕНТ: Ограничиваем ширину (max-w-[60%]), чтобы текст переносился ДО картинки */}
        <div className="relative z-20 flex flex-col justify-between h-full min-h-[300px]">
          
          {/* Текст описания */}
          <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed max-w-[55%]">
            <p className="bg-white/80 backdrop-blur-sm p-1 rounded">
              Вопросы про страны, города, национальные особенности и традиции. 
              (75 вопросов / 500 рублей с человека)
            </p>
            <p className="bg-white/80 backdrop-blur-sm p-1 rounded">
              На каждой игре мы дарим подарки всем!<br/>
              Бесплатное пиво каждому участнику!<br/>
              Команде от 8 участников пиццу в подарок!
            </p>
            <p className="font-bold text-gray-900 bg-white/80 backdrop-blur-sm p-1 rounded inline-block">
              Тип игры: Обо всём
            </p>
          </div>

          {/* Цена и Кнопка */}
          <div className="mt-8 flex flex-col items-start gap-4">
            <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
              <div className="text-3xl font-black text-gray-900">{game.price} <span className="text-xl font-bold">₽/чел</span></div>
              <div className="text-[#FFAB3B] font-bold text-sm">{game.duration}</div>
            </div>
            
            <button 
              onClick={onRegister}
              className="bg-[#FFAB3B] hover:bg-[#F29C2E] text-white font-black py-4 px-10 rounded-xl text-lg transition-colors shadow-lg cursor-pointer"
            >
              Зарегистрироваться
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}