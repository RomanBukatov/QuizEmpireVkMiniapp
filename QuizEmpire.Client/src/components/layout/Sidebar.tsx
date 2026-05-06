import React, { useState } from 'react';
import { Trash2, ChevronDown } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm h-fit sticky top-6">
      {/* Кнопка сброса */}
      <div className="flex items-center justify-between mb-6">
        <button className="flex items-center gap-2 bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
          Фильтры <Trash2 size={16} />
        </button>
      </div>

      {/* Основные чекбоксы */}
      <div className="space-y-3 mb-6 border-b pb-6">
        <label className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-gray-300 text-pink-500 focus:ring-pink-500 accent-pink-500" />
          <span className="text-pink-500 font-medium">Все игры</span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-pink-500 focus:ring-pink-500" />
          <span className="text-gray-700">Есть места</span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-pink-500 focus:ring-pink-500" />
          <span className="text-gray-700">Запись в резерв</span>
        </label>
      </div>

      {/* Аккордеон: Тип квиза */}
      <FilterSection title="Тип квиза">
        <label className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-pink-500 focus:ring-pink-500" />
          <span className="text-gray-700 text-sm">Квиз-вечеринка</span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-pink-500 focus:ring-pink-500" />
          <span className="text-gray-700 text-sm">Стандартная</span>
        </label>
      </FilterSection>

      {/* Аккордеон: Заведение */}
      <FilterSection title="Заведение">
        <label className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-pink-500 focus:ring-pink-500" />
          <span className="text-gray-700 text-sm">Кафе "ГОСТИ"</span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-pink-500 focus:ring-pink-500" />
          <span className="text-gray-700 text-sm">Кафе "DIESEL ROOM"</span>
        </label>
      </FilterSection>
    </div>
  );
}

// Мини-компонент для сворачивающихся списков
function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left mb-3 group"
      >
        <span className="text-gray-400 font-medium">{title}</span>
        <ChevronDown size={18} className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <div className="space-y-3 pl-1">{children}</div>}
    </div>
  );
}