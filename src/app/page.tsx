import About from "@/components/About";
import BuyNow from "@/components/BuyNow";
import CanvasContainre from "@/components/CanvasContainre";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <div className="h-screen w-full fixed top-0 z-10 hidden lg:block">
        <CanvasContainre />
      </div>
      <Header />
      <Hero />
      <About />
      <BuyNow />
    </main>
  );
}
