import { Leaf, Heart, Shield } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-16 relative" aria-labelledby="about-heading">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-sm uppercase tracking-[0.5em] text-primary mb-3 block font-bold">
              Nuestra Esencia
            </span>
            <h2 id="about-heading" className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-[0.04em] mb-6">
              Tu <span className="text-jade-light">Ecosistema</span>
            </h2>
            <div className="section-divider w-24 mx-auto" />
          </div>

          {/* Content - Full width, centered */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
            <p className="font-editorial text-xl md:text-2xl text-foreground leading-relaxed">
              Experiencias pensadas para potenciar tu <strong>enfoque</strong>, <strong>creatividad</strong>, <strong>recreación</strong> y <strong>relajación</strong>. 🪐
            </p>
            <p className="font-editorial text-xl md:text-2xl text-foreground leading-relaxed">
              Un sistema simple para acompañar tu <strong>estilo de vida</strong>, según el momento que quieras vivir. 🍃
            </p>
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Selección Especializada",
                desc: (
                  <>
                    Experiencias elegidas para ofrecer{" "}
                    <strong className="text-foreground">resultados consistentes</strong>.
                  </>
                ),
              },
              {
                icon: Heart,
                title: "Bienestar Funcional",
                desc: (
                  <>
                    Diseñado para acompañar tu{" "}
                    <strong className="text-foreground">ritmo mental</strong>, emocional y creativo.
                  </>
                ),
              },
              {
                icon: Shield,
                title: "Estándares Premium",
                desc: (
                  <>
                    Procesos cuidados para garantizar{" "}
                    <strong className="text-foreground">confianza</strong> en cada experiencia.
                  </>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-6 rounded bg-card border border-primary/10"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded bg-primary/10 mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-extrabold uppercase tracking-[0.04em] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
