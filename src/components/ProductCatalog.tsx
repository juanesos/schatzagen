import { experienceCategories } from "@/data/products";
import { Zap, Sparkles, Moon } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  activadora: <Zap className="w-10 h-10 text-jade-light" strokeWidth={1.5} />,
  hibrida: <Sparkles className="w-10 h-10 text-gold-warm" strokeWidth={1.5} />,
  relajacion: <Moon className="w-10 h-10 text-primary" strokeWidth={1.5} />,
};

export default function ProductCatalog() {
  return (
    <section id="experiences" className="py-12 md:py-16 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-sm uppercase tracking-[0.5em] text-primary mb-3 block font-bold">
            Experiencias
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-[0.04em] mb-6">
            Elige tu <span className="text-jade-light">Dimensión</span>
          </h2>
          <p className="font-editorial text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Elige el estado que quieres potenciar hoy.
          </p>
          <div className="section-divider w-24 mx-auto mt-6" />
        </div>

        {/* Experience Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {experienceCategories.map((cat, index) => (
            <div
              key={cat.id}
              className="product-card overflow-hidden group animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Visual Header */}
              <div className="aspect-[4/3] relative bg-secondary/30 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-jade-deep/10" />
                <div className="relative flex flex-col items-center gap-4 p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/15 to-jade-deep/25 flex items-center justify-center">
                    {iconMap[cat.id]}
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-foreground font-bold">
                    {cat.tagline}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-editorial text-2xl md:text-3xl font-light mb-3 group-hover:text-jade-light transition-colors">
                  {cat.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4 max-w-xl mx-auto leading-relaxed">
            ¿Estás interesado? Escríbenos o déjanos tus datos y te informaremos sobre lo que tenemos disponible.
          </p>
          <button
            onClick={() =>
              document.getElementById("order")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-outline-cosmic px-6 py-3 text-sm"
          >
            Contacto
          </button>
        </div>
      </div>
    </section>
  );
}
