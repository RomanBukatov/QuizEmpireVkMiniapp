import React, { useState } from 'react';
import { X } from 'lucide-react';

interface RegistrationFormProps {
  onBack: () => void;
  onSubmitSuccess: () => void;
}

export default function RegistrationForm({ onBack, onSubmitSuccess }: RegistrationFormProps) {
  // Локальный стейт для формы (в реальном проекте тут будет react-hook-form)
  const [formData, setFormData] = useState({
    teamName: '',
    captainName: '',
    phone: '',
    playerCount: '2',
    allowJoin: false,
    birthdayPerson: '',
    comment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Тут будет API-вызов к твоему .NET бэкенду
    console.log("Отправка данных:", formData);
    // Имитация успешной отправки
    onSubmitSuccess();
  };

  return (
    <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden relative pb-10">
      
      {/* Кнопка закрытия */}
      <button 
        onClick={onBack}
        className="absolute top-4 right-4 z-20 text-gray-500 hover:bg-gray-100 p-2 rounded-full transition-colors"
      >
        <X size={24} />
      </button>

      {/* Верхний блок: Градиент и Заголовок */}
      <div className="relative p-6 sm:p-8 bg-gradient-to-br from-[#A020F0]/10 to-[#F6416C]/10 border-b border-pink-100">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-gray-800 text-sm font-medium mb-4 transition-colors"
        >
          <span className="text-xl leading-none">←</span> Выбрать другую игру
        </button>
        <h2 className="text-2xl sm:text-3xl font-black leading-tight text-gray-900">
          Зарегистрироваться на квиз
        </h2>
      </div>

      {/* Форма */}
      <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
        
        {/* Название команды */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Название команды</label>
          <input 
            type="text" 
            required
            placeholder="КвизоБойня"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-400 focus:outline-none transition-all"
            value={formData.teamName}
            onChange={(e) => setFormData({...formData, teamName: e.target.value})}
          />
        </div>

        {/* Имя капитана */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Ваше имя</label>
          <input 
            type="text" 
            required
            placeholder="Иван"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-400 focus:outline-none transition-all"
            value={formData.captainName}
            onChange={(e) => setFormData({...formData, captainName: e.target.value})}
          />
        </div>

        {/* Телефон */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Телефон <span className="text-red-500">*</span></label>
          <input 
            type="tel" 
            required
            placeholder="+7 (XXX) XXX XX-XX"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-400 focus:outline-none transition-all"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>

        {/* Селект: Количество игроков */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Количество игроков</label>
          <select 
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-400 focus:outline-none transition-all appearance-none cursor-pointer"
            value={formData.playerCount}
            onChange={(e) => setFormData({...formData, playerCount: e.target.value})}
          >
            {[2,3,4,5,6,7,8,9,10].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>

        {/* Чекбокс: Присоединить игроков */}
        <div className="pt-2">
          <label className="block text-sm font-bold text-gray-700 mb-2">Хотите, чтобы к вам присоединились игроки?</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="allowJoin" className="w-5 h-5 text-pink-500 focus:ring-pink-500" onChange={() => setFormData({...formData, allowJoin: true})} />
              <span className="text-gray-700">Да</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="allowJoin" defaultChecked className="w-5 h-5 text-pink-500 focus:ring-pink-500" onChange={() => setFormData({...formData, allowJoin: false})} />
              <span className="text-gray-700">Нет</span>
            </label>
          </div>
        </div>

        {/* Именинники */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Есть ли в команде именинники? (Напишите имя)</label>
          <input 
            type="text" 
            placeholder="Имя именинника"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-400 focus:outline-none transition-all"
            value={formData.birthdayPerson}
            onChange={(e) => setFormData({...formData, birthdayPerson: e.target.value})}
          />
        </div>

        {/* Комментарий */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Комментарий</label>
          <textarea 
            rows={3}
            placeholder="Особые пожелания или оставьте пустым"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-400 focus:outline-none transition-all resize-none"
            value={formData.comment}
            onChange={(e) => setFormData({...formData, comment: e.target.value})}
          />
        </div>

        {/* Блок с балансом (Из макета Полины) */}
        <div className="flex justify-between items-center py-4 border-t border-b border-gray-100 my-6">
          <span className="font-bold text-gray-800">Ваш баланс: 500 бонусов</span>
          <button type="button" className="text-[#FFAB3B] font-bold text-sm px-4 py-2 border border-[#FFAB3B] rounded-xl hover:bg-[#FFAB3B] hover:text-white transition-colors">
            Списать
          </button>
        </div>

        {/* Кнопка отправки */}
        <button 
          type="submit"
          className="w-full bg-[#FFAB3B] hover:bg-[#F29C2E] text-white font-black py-4 px-6 rounded-xl text-lg transition-colors shadow-lg"
        >
          Подтвердить регистрацию
        </button>
        
        <p className="text-center text-[10px] text-gray-400 mt-4">
          Нажимая на кнопку, я даю согласие на <a href="#" className="text-pink-500 hover:underline">обработку персональных данных</a>
        </p>

      </form>
    </div>
  );
}