import { useState } from "react";
import { CustomerData, FormErrors, OrderData } from "@/types/order";
import { experienceCategories } from "@/data/products";
import { User, MapPin, Phone, FileText, Check, AlertCircle, Loader2, Sparkles } from "lucide-react";

export default function OrderForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderData, setOrderData] = useState<OrderData | null>(null);

  const [formData, setFormData] = useState<CustomerData>({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    ciudad: "",
    direccion: "",
    observaciones: "",
  });

  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "nombre":
        if (!value.trim()) return "El nombre es obligatorio";
        if (value.trim().length < 2) return "Mínimo 2 caracteres";
        return undefined;
      case "apellidos":
        if (!value.trim()) return "Los apellidos son obligatorios";
        if (value.trim().length < 2) return "Mínimo 2 caracteres";
        return undefined;
      case "email":
        if (value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "Ingresa un correo válido";
        return undefined;
      case "telefono":
        if (!value.trim()) return "El teléfono es obligatorio";
        if (!/^[\d\s\-\+\(\)]{8,}$/.test(value)) return "Ingresa un teléfono válido";
        return undefined;
      case "ciudad":
        if (!value.trim()) return "La ciudad es obligatoria";
        return undefined;
      case "direccion":
        return undefined;
      case "observaciones":
        return undefined;
      default:
        return undefined;
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof CustomerData]);
      if (error) newErrors[key as keyof FormErrors] = error;
    });
    if (selectedPreferences.length === 0) {
      newErrors.preferencias = "Selecciona al menos una experiencia de interés";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const togglePreference = (id: string) => {
    setSelectedPreferences((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
    setErrors((prev) => ({ ...prev, preferencias: undefined }));
    setTouched((prev) => ({ ...prev, preferencias: true }));
  };

  const requiredFields: (keyof CustomerData)[] = ["nombre", "apellidos", "telefono", "ciudad"];

  const isFormValid =
    selectedPreferences.length > 0 &&
    requiredFields.every((key) => !validateField(key, formData[key])) &&
    !validateField("email", formData.email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = Object.keys(formData).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      { preferencias: true }
    );
    setTouched(allTouched);
    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const order: OrderData = {
      cliente: formData,
      preferencias: selectedPreferences,
    };

    console.log("Pedido enviado:", JSON.stringify(order, null, 2));
    setOrderData(order);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setOrderData(null);
    setFormData({ nombre: "", apellidos: "", email: "", telefono: "", ciudad: "", direccion: "", observaciones: "" });
    setSelectedPreferences([]);
    setErrors({});
    setTouched({});
  };

  if (isSubmitted && orderData) {
    return (
      <section id="order" className="py-24 md:py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center p-8 md:p-12 rounded bg-card border border-primary/10 glow-box">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold uppercase tracking-[0.04em] mb-4">
                ¡Solicitud Recibida!
              </h2>
              <p className="font-editorial text-lg text-muted-foreground mb-8">
                Gracias, {orderData.cliente.nombre}. Te enviaremos información sobre las experiencias disponibles muy pronto.
              </p>

              <div className="text-left bg-secondary/30 rounded p-6 mb-8">
                <h3 className="font-display font-extrabold uppercase tracking-[0.04em] text-sm mb-4">
                  Resumen
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-muted-foreground">Experiencias de interés:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {orderData.preferencias.map((prefId) => {
                        const cat = experienceCategories.find((c) => c.id === prefId);
                        return cat ? (
                          <span
                            key={prefId}
                            className="px-3 py-1 rounded bg-primary/10 border border-primary/25 text-primary font-mono text-[10px] uppercase tracking-[0.2em]"
                          >
                            {cat.name}
                          </span>
                        ) : null;
                      })}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Nombre:</span>
                    <span>{orderData.cliente.nombre} {orderData.cliente.apellidos}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Ciudad:</span>
                    <span>{orderData.cliente.ciudad}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Teléfono:</span>
                    <span className="font-mono text-xs">{orderData.cliente.telefono}</span>
                  </div>
                </div>
              </div>

              <button onClick={handleReset} className="btn-cosmic px-8 py-3">
                Enviar otra solicitud
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const inputClass = (field: string) =>
    `input-cosmic w-full px-4 py-3 ${errors[field as keyof FormErrors] && touched[field] ? "error" : ""}`;

  return (
    <section id="order" className="py-12 md:py-16 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="font-mono text-sm uppercase tracking-[0.5em] text-primary mb-3 block font-bold">
              Contacto
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-[0.04em] mb-6">
              Recibe <span className="text-jade-light">Información</span>
            </h2>
            <p className="font-editorial text-lg text-muted-foreground">
              ¿Te interesó? Escríbenos o déjanos tus datos y te informaremos nuestra disponibilidad.
            </p>
            <div className="section-divider w-24 mx-auto mt-6" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="p-6 rounded bg-card border border-primary/10 space-y-6">
              {/* Experience Preferences - inline */}
              <div>
              <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <label className="block text-sm font-sans font-medium uppercase tracking-wider">
                    ¿Qué quieres potenciar? *
                  </label>
                </div>
                <p className="text-xs text-muted-foreground mb-3">Puedes elegir una o más experiencias</p>
                <div className="grid grid-cols-3 gap-3">
                  {experienceCategories.map((cat) => {
                    const isSelected = selectedPreferences.includes(cat.id);
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => togglePreference(cat.id)}
                        className={`flex flex-col items-center gap-2 p-4 rounded border text-center transition-all ${
                          isSelected
                            ? "border-primary bg-primary/10"
                            : "border-primary/10 hover:border-primary/30"
                        }`}
                      >
                        <span className="text-2xl">{cat.icon}</span>
                        <span className={`font-editorial text-base sm:text-lg leading-tight ${isSelected ? "text-jade-light" : "text-foreground"}`}>
                          {cat.name}
                        </span>
                        <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-muted-foreground hidden sm:block">
                          {cat.tagline}
                        </span>
                      </button>
                    );
                  })}
                </div>
                {errors.preferencias && touched.preferencias && (
                  <p className="text-destructive text-sm mt-2 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />{errors.preferencias}
                  </p>
                )}
              </div>

              {/* Divider */}
              <div className="section-divider" />

              {/* Customer Data */}
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                <span className="text-sm font-sans font-medium uppercase tracking-wider">
                  Tus Datos
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-sans font-medium uppercase tracking-wider mb-2">
                    Nombre *
                  </label>
                  <input type="text" id="nombre" name="nombre" value={formData.nombre}
                    onChange={handleChange} onBlur={handleBlur} placeholder="Tu nombre"
                    className={inputClass("nombre")} />
                  {errors.nombre && touched.nombre && (
                    <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />{errors.nombre}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="apellidos" className="block text-sm font-sans font-medium uppercase tracking-wider mb-2">
                    Apellidos *
                  </label>
                  <input type="text" id="apellidos" name="apellidos" value={formData.apellidos}
                    onChange={handleChange} onBlur={handleBlur} placeholder="Tus apellidos"
                    className={inputClass("apellidos")} />
                  {errors.apellidos && touched.apellidos && (
                    <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />{errors.apellidos}
                    </p>
                  )}
                </div>
              </div>


              <div>
                <label htmlFor="telefono" className="block text-sm font-sans font-medium uppercase tracking-wider mb-2">
                  <Phone className="w-4 h-4 inline mr-1" />Teléfono *
                </label>
                <input type="tel" id="telefono" name="telefono" value={formData.telefono}
                  onChange={handleChange} onBlur={handleBlur} placeholder="Tu número de teléfono"
                  className={inputClass("telefono")} />
                {errors.telefono && touched.telefono && (
                  <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />{errors.telefono}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="ciudad" className="block text-sm font-sans font-medium uppercase tracking-wider mb-2">
                  <MapPin className="w-4 h-4 inline mr-1" />Ciudad *
                </label>
                <input type="text" id="ciudad" name="ciudad" value={formData.ciudad}
                  onChange={handleChange} onBlur={handleBlur} placeholder="Tu ciudad"
                  className={inputClass("ciudad")} />
                {errors.ciudad && touched.ciudad && (
                  <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />{errors.ciudad}
                  </p>
                )}
              </div>


              <div>
                <label htmlFor="observaciones" className="block text-sm font-sans font-medium uppercase tracking-wider mb-2">
                  <FileText className="w-4 h-4 inline mr-1" />Observaciones (opcional)
                </label>
                <textarea id="observaciones" name="observaciones" value={formData.observaciones}
                  onChange={handleChange} onBlur={handleBlur}
                  placeholder="Cuéntanos qué buscas mejorar o cómo quieres sentirte"
                  rows={3}
                  className={`${inputClass("observaciones")} resize-none`} />
                {errors.observaciones && touched.observaciones && (
                  <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />{errors.observaciones}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className="flex-1 w-full btn-cosmic px-8 py-4 text-lg flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Procesando...
                  </>
                ) : (
                  <>
                    <Check className="w-5 h-5" />
                    Solicitar Información
                  </>
                )}
              </button>
              <span className="text-muted-foreground font-sans text-sm uppercase tracking-wider font-medium">Ó</span>
              <a
                href="https://wa.me/573042287991?text=Hola%2C%20estoy%20interesado%20en%20conocer%20más%20sobre%20SchatZa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 w-full btn-outline-cosmic px-8 py-4 text-lg flex items-center justify-center gap-2 text-center"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="flex flex-col items-start leading-tight">
                  <span>Escríbenos</span>
                  <span className="text-xs font-mono opacity-75">+57 304 228 7991</span>
                </span>
              </a>
            </div>

            {!isFormValid && (
              <p className="text-center text-sm text-muted-foreground font-mono text-xs uppercase tracking-wider">
                Completa todos los campos obligatorios para continuar
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
