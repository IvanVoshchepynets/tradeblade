import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";

function App() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Header />

      <main className="pt-24">
        <Hero />
        <Features />
        {/* Далі підуть наступні секції: Pricing, Community, FAQ, Footer */}
      </main>
    </div>
  );
}

export default App;
