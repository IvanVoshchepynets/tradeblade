import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Header />

      {/* Трохи відступу зверху, щоб контент не залазив під хедер */}
      <main className="pt-24">
        <section className="mx-auto max-w-6xl px-4 py-8">
          <h1 className="text-2xl font-semibold text-white/80">
            {/* Тимчасовий плейсхолдер, потім тут буде Hero */}
            Hero section will be here
          </h1>
        </section>
      </main>
    </div>
  );
}

export default App;
