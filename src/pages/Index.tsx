import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import ProductGrid from "@/components/ProductGrid";
import ArmchairCollection from "@/components/ArmchairCollection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <ProductShowcase />
        <ProductGrid />
        <ArmchairCollection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
