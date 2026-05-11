import GameCard from './GameCard';

interface SuccessScreenProps {
  onGoHome: () => void;
}

export default function SuccessScreen({ onGoHome }: SuccessScreenProps) {
  return (
    <div className="bg-gradient-to-br from-[#A020F0] via-[#F6416C] to-[#FF7B25] rounded-[2rem] shadow-xl overflow-hidden relative p-6 sm:p-10 flex flex-col items-center text-center min-h-[600px]">
      
      {/* Декоративные элементы фона */}
      <img src="/images/CitySelection/purplestar.png" className="absolute top-10 left-4 w-12 opacity-80" alt="star" />
      <img src="/images/CitySelection/gamepad.png" className="absolute -bottom-10 -left-10 w-48 opacity-30 blur-sm mix-blend-overlay" alt="pad" />

      {/* Заголовки */}
      <div className="relative z-10 mt-4 mb-8">
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 drop-shadow-md">
          Вы успешно записаны!
        </h2>
        <p className="text-white/90 text-sm sm:text-base font-medium">
          Подтверждение придёт в личные<br/>сообщения ВК
        </p>
      </div>

      {/* Карточка игры (копия той, на которую записались) */}
      <div className="w-full max-w-sm relative z-10 mb-10 text-left pointer-events-none">
        {/* Оборачиваем в белый фон с паддингом, чтобы выделить на градиенте, как в макете */}
        <div className="bg-white p-2 rounded-[2.5rem] shadow-2xl">
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

      {/* Кнопка "На главную" */}
      <button 
        onClick={onGoHome}
        className="relative z-10 bg-[#FFAB3B] hover:bg-[#F29C2E] text-white font-black py-4 px-10 rounded-xl text-lg transition-colors shadow-xl w-full max-w-sm"
      >
        На главную
      </button>

    </div>
  );
}