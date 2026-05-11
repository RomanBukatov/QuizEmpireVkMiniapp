import React, { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm h-fit sticky top-6">

      {/* Кнопка сброса */}
      <div className="flex items-center justify-between mb-6">
        <button className="flex items-center gap-2 bg-gradient-to-r from-[#A020F0] to-[#E94057] text-white px-4 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity cursor-pointer shadow-md">
          Фильтры <X size={16} strokeWidth={3} />
        </button>
      </div>

      {/* Основные чекбоксы */}
      <div className="space-y-3 mb-6 border-b pb-6">
        <GradientCheckbox label="Все игры" defaultChecked={true} />
        <GradientCheckbox label="Есть места" />
        <GradientCheckbox label="Запись в резерв" />
      </div>

      {/* Аккордеон: Тип квиза */}
      <FilterSection title="Тип квиза">
        <GradientCheckbox label="Квиз-вечеринка" />
        <GradientCheckbox label="Стандартная" />
      </FilterSection>

      {/* Аккордеон: Заведение */}
      <FilterSection title="Заведение">
        <GradientCheckbox label='Кафе "ГОСТИ"' />
        <GradientCheckbox label='Кафе "DIESEL ROOM"' />
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

// Кастомный чекбокс с градиентом
function GradientCheckbox({ label, defaultChecked = false }: { label: string, defaultChecked?: boolean }) {
  const [checked, setChecked] = useState(defaultChecked);
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <div className={`w-5 h-5 rounded flex items-center justify-center transition-all ${checked ? 'bg-gradient-to-br from-[#A020F0] to-[#F6416C]' : 'border-2 border-gray-300'}`} onClick={() => setChecked(!checked)}>
        {checked && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
      </div>
      <span className={`${checked ? 'text-[#F6416C] font-bold' : 'text-gray-700'}`}>{label}</span>
    </label>
  );
}