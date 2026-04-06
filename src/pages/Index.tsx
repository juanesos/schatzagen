import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductCatalog from "@/components/ProductCatalog";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductCatalog />
        <OrderForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
