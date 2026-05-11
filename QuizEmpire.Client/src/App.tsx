import { useState } from 'react';
import CitySelection from './components/CitySelection';
import MainLayout from './components/layout/MainLayout';
import GameCard from './components/GameCard';
import GameDetails from './components/GameDetails';

type Page = 'city' | 'schedule' | 'game-details' | 'registration';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('city');
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  
  // Стейт для хранения выбранной игры
  const [selectedGame, setSelectedGame] = useState<any>(null);

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setCurrentPage('schedule');
  };

  const handleGameClick = (gameData: any) => {
    setSelectedGame(gameData);
    setCurrentPage('game-details');
  };

  const handleBack = (page: Page) => {
    setCurrentPage(page);
  };

  const handleRegister = () => {
    setCurrentPage('registration');
  };

  return (
    <>
      {currentPage === 'city' && <CitySelection onSelectCity={handleCitySelect} />}

      {currentPage !== 'city' && (
        <MainLayout>
          
          {currentPage === 'schedule' && (
            <div>
              {/* ПОИСК КВИЗА (С градиентной кнопкой) */}
              <div className="flex gap-2 mb-6">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Поиск квиза" 
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E94057] text-gray-700 font-medium shadow-sm"
                  />
                </div>
                {/* ГРАДИЕНТНАЯ КНОПКА НАЙТИ */}
                <button className="bg-gradient-to-r from-[#A020F0] to-[#E94057] hover:opacity-90 text-white font-bold py-3 px-8 rounded-xl shadow-sm transition-opacity">
                  Найти
                </button>
              </div>

              {/* СПИСОК КАРТОЧЕК */}
              <div className="space-y-6">
                <div onClick={() => handleGameClick({
                  title: "ГЕОГРАФИЯ И ПУТЕШЕСТВИЯ",
                  date: "10 АПРЕЛЯ", time: "19:00", price: 500, duration: "2-3 часа игры",
                  venue: "LUBA", coverImage: "/images/Schedule/map.png",
                  colorFrom: "from-purple-500", colorTo: "to-[#B026FF]"
                })}>
                  <GameCard title="ГЕОГРАФИЯ И ПУТЕШЕСТВИЯ" date="10 АПРЕЛЯ" time="19:00" price={500} duration="2-3 часа игры" venue="LUBA" coverImage="/images/Schedule/map.png" colorFrom="from-purple-500" colorTo="to-[#B026FF]" />
                </div>
                
                <div onClick={() => handleGameClick({
                  title: "КВИЗ-ВЕЧЕРИНКА: ТОЛЬКО ХИТЫ №20.1",
                  date: "10 АПРЕЛЯ", time: "19:00", price: 1000, duration: "2-3 часа игры",
                  venue: "Гости", coverImage: "/images/Schedule/champagne.png",
                  colorFrom: "from-[#E94057]", colorTo: "to-[#FF7B25]"
                })}>
                   <GameCard title="КВИЗ-ВЕЧЕРИНКА: ТОЛЬКО ХИТЫ №20.1" date="10 АПРЕЛЯ" time="19:00" price={1000} duration="2-3 часа игры" venue="Гости" coverImage="/images/Schedule/champagne.png" colorFrom="from-[#E94057]" colorTo="to-[#FF7B25]" />
                </div>
              </div>
            </div>
          )}

          {/* ЭКРАН 3: ДЕТАЛИ ИГРЫ (Передаем выбранную игру) */}
          {currentPage === 'game-details' && selectedGame && (
            <GameDetails game={selectedGame} onBack={() => handleBack('schedule')} onRegister={handleRegister} />
          )}

        </MainLayout>
      )}
    </>
  );
}