import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Header />

      <main className="pt-24">
        <Hero />
        {/* Далі будемо додавати інші секції (Features, Pricing, Community...) */}
      </main>
    </div>
  );
}

export default App;
