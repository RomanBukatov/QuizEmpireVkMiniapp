import { Search } from 'lucide-react';

export default function CitySelection() {
  const cities = [
    "Москва", "Альметьевск", "Арзамас", "Арсеньев", "Архангельск",
    "Астрахань", "Барнаул", "Белгород", "Брянск", "Владивосток"
  ];

  return (
    // Правильный фон: диагональный градиент с нужными цветами
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #FF7B25 0%, #E94057 30%, #8A2387 70%, #FF7B25 100%)' }}>

      {/* --- КАРТИНКИ (Абсолютное позиционирование) --- */}

      {/* Большая звезда (слева сверху) */}
      <img
        src="/images/CitySelection/purplestar.png"
        alt="Star"
        className="absolute top-[8%] left-[5%] w-32 md:w-48 drop-shadow-2xl pointer-events-none transform -rotate-12"
      />

      {/* Маленькая звезда (слева, ниже большой) */}
      <img
        src="/images/CitySelection/purplestar.png"
        alt="Star"
        className="absolute top-[25%] left-[2%] w-16 md:w-20 drop-shadow-xl pointer-events-none transform rotate-12"
      />

      {/* Геймпад (слева снизу) */}
      <img
        src="/images/CitySelection/gamepad.png"
        alt="Gamepad"
        className="absolute -bottom-10 -left-16 w-80 md:w-[400px] drop-shadow-2xl pointer-events-none transform -rotate-12"
      />

      {/* Наушники (справа по центру) */}
      <img
        src="/images/CitySelection/headphones.png"
        alt="Headphones"
        className="absolute top-[30%] -right-16 w-72 md:w-[450px] drop-shadow-2xl pointer-events-none"
      />

      {/* --- КОНТЕНТНАЯ ЧАСТЬ --- */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-[500px]">

        {/* Логотип */}
        <div className="mb-6 w-[280px] md:w-[340px]">
          <img src="/images/CitySelection/logo.png" alt="Квизобойня" className="w-full h-auto drop-shadow-2xl" />
        </div>

        {/* Заголовок */}
        <div className="text-center text-white mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg tracking-tight">Выберите ваш город</h1>
          <p className="text-lg md:text-xl font-medium opacity-90 drop-shadow-md">Покажем актуальные квизы</p>
        </div>

        {/* Поиск */}
        <div className="relative mb-4 shadow-xl w-full">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-6 w-6 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-12 pr-4 py-4 border-none rounded-2xl focus:ring-4 focus:ring-pink-400 bg-white shadow-xl text-gray-900 placeholder-gray-400 font-semibold text-lg"
            placeholder="Поиск города"
          />
        </div>

        {/* Список городов */}
        <div className="bg-white rounded-3xl p-6 shadow-2xl w-full h-[320px] overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-2 gap-y-5 gap-x-4">
            {cities.map((city, index) => (
              <button
                key={index}
                className={`text-left text-base md:text-lg hover:text-pink-600 transition-colors ${index === 0 ? 'font-bold text-gray-900' : 'text-gray-600 font-medium'}`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}