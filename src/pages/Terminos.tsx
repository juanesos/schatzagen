import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

const sections = [
  {
    id: "objeto",
    title: "1. Objeto",
    content: `Estos Términos y Condiciones regulan el acceso y uso del sitio web schatza.com (en adelante, "el Sitio"), operado por SchatZa.Gen, marca colombiana de lifestyle premium dedicada a promover experiencias de bienestar, enfoque, creatividad y relajación.

Al navegar o interactuar con el Sitio, el usuario acepta de manera libre, voluntaria e informada los presentes términos. Si no está de acuerdo con alguno de ellos, debe abstenerse de utilizar el Sitio.`,
  },
  {
    id: "servicios",
    title: "2. Descripción del Servicio",
    content: `SchatZa.Gen ofrece información sobre sus líneas de experiencias premium:

• Órbita Activa — Experiencias orientadas al enfoque y la creatividad.
• Equilibrio — Experiencias de balance y bienestar integral.
• Cosmos Relajante — Experiencias de relajación y recuperación de energía.

El Sitio tiene carácter informativo y de contacto. Las solicitudes de información recibidas a través del formulario no constituyen por sí mismas un contrato de compraventa o prestación de servicios, sino el inicio de una comunicación comercial entre el usuario y SchatZa.Gen.`,
  },
  {
    id: "uso",
    title: "3. Uso Permitido",
    content: `El usuario se compromete a utilizar el Sitio de forma lícita, ética y conforme a los presentes Términos. Queda expresamente prohibido:

• Reproducir, copiar, distribuir o modificar cualquier contenido del Sitio sin autorización escrita de SchatZa.Gen.
• Usar el Sitio con fines fraudulentos, engañosos o que vulneren derechos de terceros.
• Introducir virus, malware u otro código malicioso que afecte el funcionamiento del Sitio.
• Realizar scraping, minería de datos o cualquier extracción automatizada de contenido.
• Suplantar la identidad de SchatZa.Gen o de terceros.`,
  },
  {
    id: "propiedad",
    title: "4. Propiedad Intelectual",
    content: `Todos los contenidos del Sitio — incluyendo pero no limitado a textos, imágenes, logotipos, gráficos, diseños, código fuente y estructura visual — son propiedad exclusiva de SchatZa.Gen o se utilizan bajo licencia, y están protegidos por la legislación colombiana e internacional en materia de propiedad intelectual.

El nombre comercial SchatZa.Gen, su logotipo y los elementos visuales de la marca son signos distintivos de uso exclusivo. Su uso no autorizado está prohibido y podrá ser objeto de acciones legales.`,
  },
  {
    id: "responsabilidad",
    title: "5. Limitación de Responsabilidad",
    content: `SchatZa.Gen no será responsable por:

• Interrupciones, errores técnicos o fallas en la disponibilidad del Sitio por causas ajenas a su control.
• Decisiones tomadas por el usuario basadas en la información publicada en el Sitio.
• Daños directos o indirectos derivados del uso o imposibilidad de uso del Sitio.
• Contenidos de sitios web de terceros enlazados desde el Sitio.

SchatZa.Gen se reserva el derecho de modificar, suspender o discontinuar el Sitio en cualquier momento sin previo aviso.`,
  },
  {
    id: "enlaces",
    title: "6. Enlaces a Terceros",
    content: `El Sitio puede contener enlaces a páginas web de terceros (redes sociales, plataformas de mensajería, etc.). Estos enlaces se proporcionan únicamente por conveniencia del usuario. SchatZa.Gen no controla dichos sitios, no avala su contenido y no asume responsabilidad alguna por su funcionamiento, políticas o prácticas.`,
  },
  {
    id: "modificaciones",
    title: "7. Modificaciones",
    content: `SchatZa.Gen se reserva el derecho de actualizar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en el Sitio. El uso continuado del Sitio tras la publicación de cambios implica la aceptación de los nuevos términos. Se recomienda revisar esta página periódicamente.`,
  },
  {
    id: "ley",
    title: "8. Ley Aplicable y Jurisdicción",
    content: `Los presentes Términos y Condiciones se rigen por las leyes de la República de Colombia. Para cualquier controversia derivada del uso del Sitio, las partes se someten a la jurisdicción de los jueces y tribunales competentes de Colombia, renunciando a cualquier otro fuero que pudiera corresponderles.`,
  },
  {
    id: "contacto",
    title: "9. Contacto",
    content: `Para consultas relacionadas con estos Términos y Condiciones, puede contactarnos a través de:

• Correo electrónico: schatzagen@gmail.com
• WhatsApp: +57 304 228 7991
• Instagram: @schatzagen`,
  },
];

export default function Terminos() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg"
        style={{
          borderBottom: "1px solid transparent",
          borderImage: "linear-gradient(90deg, transparent, rgba(61,138,95,0.18), transparent) 1",
        }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-20 md:h-24">
            <Link to="/">
              <BrandLogo size="sm" />
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-sans font-medium uppercase tracking-[0.08em] text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">

            {/* Page Header */}
            <div className="mb-14">
              <span className="font-mono text-sm uppercase tracking-[0.5em] text-primary mb-3 block font-bold">
                Legal
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold uppercase tracking-[0.04em] mb-6">
                Términos y <span className="text-jade-light">Condiciones</span>
              </h1>
              <p className="font-editorial text-lg text-muted-foreground mb-2">
                Última actualización: abril de 2026
              </p>
              <div className="section-divider w-24 mt-6" />
            </div>

            {/* Intro */}
            <div className="p-6 rounded bg-card border border-primary/10 mb-10">
              <p className="font-editorial text-base text-muted-foreground leading-relaxed">
                Bienvenido a <span className="text-foreground font-medium">SchatZa.Gen</span>. Antes de utilizar nuestro sitio web, te pedimos que leas atentamente estos Términos y Condiciones. Al acceder y navegar en schatza.com, aceptas quedar vinculado por las condiciones aquí descritas.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-10">
              {sections.map((section) => (
                <div key={section.id} id={section.id}>
                  <h2 className="font-display text-lg font-extrabold uppercase tracking-[0.04em] text-foreground mb-4">
                    {section.title}
                  </h2>
                  <div className="section-divider mb-4" />
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Footer links */}
            <div className="mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
              style={{
                borderTop: "1px solid transparent",
                borderImage: "linear-gradient(90deg, transparent, rgba(61,138,95,0.18), transparent) 1",
              }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                © {new Date().getFullYear()} SchatZa.Gen — Todos los derechos reservados
              </p>
              <div className="flex gap-6">
                <Link to="/terminos" className="text-xs uppercase tracking-wider text-primary font-sans">
                  Términos
                </Link>
                <Link to="/privacidad" className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors font-sans">
                  Privacidad
                </Link>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
