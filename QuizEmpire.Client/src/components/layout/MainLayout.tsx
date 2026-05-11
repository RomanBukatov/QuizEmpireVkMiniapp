import React from 'react';
import Sidebar from './Sidebar';
import { MapPin, ChevronDown, User } from 'lucide-react';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans">
      
      {/* ШАПКА (Header) с градиентом */}
      <header className="bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#FF7B25] text-white px-6 py-3 sticky top-0 z-50 shadow-md">
        <div className="max-w-[1000px] mx-auto flex justify-between items-center">
          {/* Логотип */}
          <img src="/images/CitySelection/logo.png" alt="Квизобойня" className="h-10 object-contain" />
          
          {/* Правая часть шапки: Город и Юзер */}
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-1 hover:opacity-80 transition-opacity cursor-pointer">
              <MapPin size={18} />
              <span className="font-medium text-sm">Москва</span>
              <ChevronDown size={16} />
            </button>
            <button className="bg-white text-[#E94057] p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer shadow-sm">
              <User size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* ОСНОВНОЙ КОНТЕНТ */}
      <div className="max-w-[1000px] mx-auto pt-6 px-4 flex items-start gap-6">
        {/* Сайдбар (Слева) */}
        <aside className="hidden md:block w-[260px] shrink-0">
          <Sidebar />
        </aside>

        {/* Правая колонка */}
        <main className="flex-1 w-full max-w-[650px] mx-auto pb-10">
          {children}
        </main>
      </div>

    </div>
  );
}