import MainLayout from './components/layout/MainLayout';
import GameCard from './components/GameCard';
import CitySelection from './components/CitySelection';

function App() {
  return (
    // <MainLayout>
    //   <div className="space-y-6">

    //     <GameCard
    //       title="ГЕОГРАФИЯ И ПУТЕШЕСТВИЯ"
    //       date="10 АПРЕЛЯ"
    //       time="19:00"
    //       price={500}
    //       duration="2-3 часа игры"
    //       venue="LUBA"
    //       coverImage="/images/Schedule/map.png"
    //       colorFrom="from-purple-500"
    //       colorTo="to-fuchsia-400"
    //     />

    //     <GameCard
    //       title="КВИЗ-ВЕЧЕРИНКА: ТОЛЬКО ХИТЫ №20.1"
    //       date="10 АПРЕЛЯ"
    //       time="19:00"
    //       price={1000}
    //       duration="2-3 часа игры"
    //       venue="Гости"
    //       coverImage="/images/Schedule/champagne.png"
    //       colorFrom="from-fuchsia-600"
    //       colorTo="to-pink-500"
    //     />

    //     <GameCard
    //       title="МУЗЫКАЛЬНОЕ ЛОТО"
    //       date="10 АПРЕЛЯ"
    //       time="19:00"
    //       price={500}
    //       duration="2-3 часа игры"
    //       venue="DIESEL ROOM"
    //       coverImage="/images/Schedule/loto.png"
    //       colorFrom="from-violet-500"
    //       colorTo="to-purple-400"
    //     />

    //   </div>
    // </MainLayout>
    <CitySelection />
  );
}

export default App;
