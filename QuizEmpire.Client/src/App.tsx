import MainLayout from './components/layout/MainLayout';

function App() {
  return (
    <MainLayout>
      <div className="bg-white rounded-3xl p-8 shadow-sm text-center h-[500px] flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-400">
          Здесь будут красивые карточки квизов! 🚀
        </h1>
      </div>
    </MainLayout>
  );
}

export default App;
