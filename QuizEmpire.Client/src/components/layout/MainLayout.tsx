import React from 'react';
import Sidebar from './Sidebar';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F0F2F5] font-sans text-gray-900 pb-10">
      {/*
        Сетка:
        На мобилках - 1 колонка.
        На ПК - центрированный контейнер с сайдбаром и основным контентом.
      */}
      <div className="max-w-[1000px] mx-auto pt-6 px-4 md:px-8 flex items-start gap-8">

        {/* Левая колонка (Сайдбар) - скрыта на мобилках */}
        <aside className="hidden md:block w-[280px] shrink-0">
          <Sidebar />
        </aside>

        {/* Правая колонка (Контент: Расписание, Карточки) */}
        <main className="flex-1 w-full max-w-[630px] mx-auto">
          {children}
        </main>

      </div>
    </div>
  );
}