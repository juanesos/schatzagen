import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

const sections = [
  {
    id: "responsable",
    title: "1. Responsable del Tratamiento",
    content: `SchatZa.Gen es el responsable del tratamiento de los datos personales recopilados a través del sitio web schatza.com.

• Nombre: SchatZa.Gen
• Correo electrónico: schatzagen@gmail.com
• WhatsApp: +57 304 228 7991
• País: Colombia

Esta Política de Privacidad ha sido elaborada en cumplimiento de la Ley 1581 de 2012 (Ley de Protección de Datos Personales) y el Decreto 1377 de 2013 de la República de Colombia.`,
  },
  {
    id: "datos",
    title: "2. Datos que Recopilamos",
    content: `Recopilamos únicamente los datos que el usuario proporciona voluntariamente a través del formulario de contacto del Sitio:

• Nombre y apellidos
• Número de teléfono
• Correo electrónico (opcional)
• Ciudad de residencia
• Dirección (opcional)
• Experiencias de interés seleccionadas
• Observaciones o comentarios adicionales

No recopilamos datos sensibles (origen racial, información de salud, datos biométricos, opiniones políticas ni creencias religiosas). No utilizamos cookies de seguimiento ni herramientas de analítica de terceros en la versión actual del Sitio.`,
  },
  {
    id: "finalidad",
    title: "3. Finalidad del Tratamiento",
    content: `Los datos personales recopilados serán utilizados exclusivamente para:

• Responder a la solicitud de información del usuario sobre las experiencias SchatZa.Gen.
• Contactar al usuario a través de WhatsApp o correo electrónico para brindar información sobre disponibilidad y condiciones.
• Mantener un registro interno de contactos comerciales para el seguimiento y atención al cliente.
• Mejorar la oferta de productos y experiencias de SchatZa.Gen.

SchatZa.Gen no utilizará los datos para envío de publicidad no solicitada, ni los compartirá con terceros con fines comerciales ajenos a la marca.`,
  },
  {
    id: "base",
    title: "4. Base Legal del Tratamiento",
    content: `El tratamiento de datos personales se basa en el consentimiento libre, previo, expreso e informado del titular, manifestado al momento de diligenciar y enviar el formulario de contacto del Sitio.

El usuario puede revocar su consentimiento en cualquier momento, sin que ello afecte la licitud del tratamiento efectuado antes de dicha revocación.`,
  },
  {
    id: "transferencia",
    title: "5. Transferencia y Transmisión de Datos",
    content: `SchatZa.Gen podrá compartir datos personales con proveedores tecnológicos que actúen como encargados del tratamiento (por ejemplo, plataformas de almacenamiento de datos como Airtable), siempre bajo acuerdos que garanticen el mismo nivel de protección exigido por la ley colombiana.

No se realizarán transferencias internacionales de datos sin el cumplimiento de los requisitos establecidos en la Ley 1581 de 2012 y las instrucciones de la Superintendencia de Industria y Comercio (SIC).

SchatZa.Gen no vende, arrienda ni cede datos personales a terceros.`,
  },
  {
    id: "conservacion",
    title: "6. Conservación de los Datos",
    content: `Los datos personales serán conservados durante el tiempo necesario para cumplir con la finalidad para la que fueron recopilados y por el término establecido por las obligaciones legales aplicables.

Una vez cumplida la finalidad, los datos serán eliminados o anonimizados de forma segura. El usuario puede solicitar la eliminación de sus datos en cualquier momento conforme a lo indicado en la sección de Derechos del Titular.`,
  },
  {
    id: "derechos",
    title: "7. Derechos del Titular",
    content: `De conformidad con la Ley 1581 de 2012, el titular de los datos personales tiene los siguientes derechos:

• Conocer los datos personales que SchatZa.Gen tiene sobre él/ella.
• Actualizar y rectificar sus datos cuando sean inexactos, incompletos o desactualizados.
• Solicitar prueba del consentimiento otorgado.
• Ser informado sobre el uso que se da a sus datos.
• Revocar el consentimiento y solicitar la supresión de sus datos cuando no exista obligación legal de conservarlos.
• Presentar quejas ante la Superintendencia de Industria y Comercio (SIC) por infracciones a la normativa de protección de datos.

Para ejercer cualquiera de estos derechos, el titular puede contactarnos mediante los canales indicados en la sección de Contacto.`,
  },
  {
    id: "seguridad",
    title: "8. Seguridad de los Datos",
    content: `SchatZa.Gen implementa medidas técnicas y organizativas razonables para proteger los datos personales contra acceso no autorizado, pérdida, alteración o divulgación indebida.

Sin perjuicio de lo anterior, ningún sistema de transmisión de datos por internet es completamente seguro. SchatZa.Gen no puede garantizar la seguridad absoluta de los datos transmitidos a través del Sitio y el usuario los proporciona bajo su propia responsabilidad.`,
  },
  {
    id: "menores",
    title: "9. Menores de Edad",
    content: `El Sitio no está dirigido a menores de 18 años y SchatZa.Gen no recopila conscientemente datos personales de menores. Si un padre, madre o tutor tiene conocimiento de que su hijo menor ha proporcionado datos personales, debe contactarnos para proceder a su eliminación.`,
  },
  {
    id: "cambios",
    title: "10. Cambios en la Política",
    content: `SchatZa.Gen se reserva el derecho de actualizar esta Política de Privacidad en cualquier momento para reflejar cambios en sus prácticas, en la normativa aplicable o en los servicios ofrecidos. La versión vigente siempre estará disponible en schatza.com/privacidad con la fecha de última actualización.

El uso continuado del Sitio tras la publicación de cambios implica la aceptación de la nueva versión de la Política.`,
  },
  {
    id: "contacto",
    title: "11. Contacto y Ejercicio de Derechos",
    content: `Para consultas, solicitudes de acceso, rectificación, supresión o revocación de consentimiento, puede contactarnos a través de:

• Correo electrónico: schatzagen@gmail.com
• WhatsApp: +57 304 228 7991
• Instagram: @schatzagen

Daremos respuesta a su solicitud en un plazo máximo de diez (10) días hábiles conforme a lo establecido en la Ley 1581 de 2012.`,
  },
];

export default function Privacidad() {
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
                Política de <span className="text-jade-light">Privacidad</span>
              </h1>
              <p className="font-editorial text-lg text-muted-foreground mb-2">
                Última actualización: abril de 2026
              </p>
              <div className="section-divider w-24 mt-6" />
            </div>

            {/* Intro */}
            <div className="p-6 rounded bg-card border border-primary/10 mb-10">
              <p className="font-editorial text-base text-muted-foreground leading-relaxed">
                En <span className="text-foreground font-medium">SchatZa.Gen</span> valoramos y respetamos tu privacidad. Esta Política describe cómo recopilamos, usamos y protegemos tu información personal, en cumplimiento de la{" "}
                <span className="text-foreground">Ley 1581 de 2012</span> de Protección de Datos Personales de Colombia.
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
                <Link to="/terminos" className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors font-sans">
                  Términos
                </Link>
                <Link to="/privacidad" className="text-xs uppercase tracking-wider text-primary font-sans">
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
