import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Header />

      <main className="pt-24">
        <Hero />
        <Features />
        <Pricing />
        <Faq />
      </main>

      <Footer />
    </div>
  );
}

export default App;
