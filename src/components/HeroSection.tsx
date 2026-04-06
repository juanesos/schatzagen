import { ArrowDown } from "lucide-react";
import StarField from "./StarField";

export default function HeroSection() {
  const scrollToExperiences = () => {
    document.getElementById("experiences")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center cosmic-bg overflow-hidden">
      <StarField />

      <div className="container mx-auto px-4 md:px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-tight mb-6 animate-fade-in-up animate-delay-100 tracking-[0.04em]">
            Descubre el Poder de{" "}
            <span className="text-jade-light glow-text">tu Naturaleza</span>
          </h1>

          {/* Subtitle */}
          <p className="font-editorial text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-up animate-delay-200 font-light leading-relaxed">
            Promovemos un LifeStyle auténtico, donde el enfoque, la creatividad y el bienestar convergen.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
            <button
              onClick={scrollToExperiences}
              className="btn-cosmic px-8 py-4 text-base"
            >
              Explorar Opciones
            </button>
            <button
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-outline-cosmic px-8 py-4 text-base"
            >
              Descubrir Más
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-20 flex justify-center animate-float">
            <button
              onClick={scrollToExperiences}
              className="flex flex-col items-center gap-3 text-foreground hover:text-jade-light transition-colors"
              aria-label="Scroll hacia abajo"
            >
              <span className="font-mono text-xs uppercase tracking-[0.4em] font-bold">
                Descubre
              </span>
              <ArrowDown className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
