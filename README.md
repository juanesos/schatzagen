# SchatZa.Gen — Sitio Web Oficial

> **Cosmos Botánico** · LifeStyle Premium · Enfoque, Creatividad y Bienestar  
> Sitio web de la marca SchatZa.Gen, publicado en producción en [schatza.com](https://schatza.com)

---

## Marca

SchatZa.Gen es una marca colombiana de lifestyle premium orientada al bienestar auténtico. Ofrece tres líneas de experiencias diseñadas para potenciar el estado físico, mental y emocional de sus clientes:

| Experiencia | Tagline | Propósito |
|-------------|---------|-----------|
| **Órbita Activa** ⚡ | Enfoque & Creatividad | Activa claridad mental, energía y flujo creativo |
| **Equilibrio** ✦ | Balance & Bienestar | Estabilidad y sensación de bienestar constante |
| **Cosmos Relajante** ☽ | Relajación & Descanso | Desconexión, liberación del estrés y recuperación de energía |

**Contacto comercial:** +57 304 228 7991  
**Instagram:** [@schatza.gen](https://www.instagram.com/schatza.gen/)  
**País:** Colombia 🇨🇴

---

## Logo

El logotipo de SchatZa.Gen está construido como componente SVG vectorial (`src/components/BrandLogo.tsx`) con las siguientes características:

- **Ícono:** Átomo botánico — tres elipses orbitales + hoja con venas + destellos dorados. Representa la intersección entre ciencia, naturaleza y cosmos.
- **Nombre:** `SchatZa.` — tipografía `Barlow ExtraBold`, uppercase, tracking ajustado, con escalado sutil en letras minúsculas (`chat`, `a`). El punto final es de color jade primario (`#3D8A5F`).
- **Subtítulo:** `Gen` — tipografía `Space Mono`, uppercase, tracking extremo (`0.45em`), en color jade primario.
- **Tamaños disponibles:** `sm` · `md` · `lg`

```tsx
// Uso del logo en cualquier componente
import BrandLogo from "@/components/BrandLogo";

<BrandLogo size="md" />          // con ícono (por defecto)
<BrandLogo size="lg" showIcon={false} />  // solo texto
```

---

## Paleta de Colores — *Cosmos Botánico*

El sistema de color está construido como tokens CSS en `src/index.css` y mapeado a Tailwind en `tailwind.config.ts`.

### Fondos y espacios

| Token | Nombre | Hex | Descripción |
|-------|--------|-----|-------------|
| `--void` | Vacío | `#07070E` | Fondo principal — negro cosmos |
| `--deep-space` | Espacio profundo | `#0B0B17` | Fondo muted |
| `--nebula` | Nébula | `#0D0D1A` | Fondo alternativo |
| `--cosmos` | Cosmos | `#081323` | Fondo de tarjetas |
| `--cosmos-mid` | Cosmos medio | `#0B1C2A` | Fondo secundario |

### Jade — Color primario de marca

| Token | Hex | Uso |
|-------|-----|-----|
| `jade-deep` | `#1A3D2E` | Sombras jade, fondos activos |
| `jade-mid` | `#2A5C42` | Estados hover sutiles |
| `jade-glow` | `#3D8A5F` | **Primario principal** — botones, bordes activos, iconos |
| `jade-light` | `#5BB882` | Texto destacado, hover de botones |

### Dorado — Acento

| Token | Hex | Uso |
|-------|-----|-----|
| `gold-dim` | `#8A7040` | Destellos sutiles |
| `gold-warm` | `#C4973A` | Acento cálido |
| `gold-bright` | `#E8C060` | Destellos brillantes, estrellas |

### Textos y neutros

| Token | Hex | Uso |
|-------|-----|-----|
| `--star-white` | `#F0EDE6` | Texto principal — blanco cálido |
| `--moon-dust` | `#C8C0B0` | Texto secundario / muted |
| `--ash` | `#7A7585` | Placeholders, texto desactivado |

### Referencia rápida visual

```
Fondo principal   ████  #07070E   (casi negro, tono azul-índigo)
Jade primario     ████  #3D8A5F   (verde bosque)
Jade claro        ████  #5BB882   (verde jade brillante)
Dorado acento     ████  #E8C060   (dorado cálido)
Texto principal   ████  #F0EDE6   (blanco cálido, como pergamino)
Texto secundario  ████  #C8C0B0   (gris luna)
```

---

## Tipografía

Fuentes cargadas desde Google Fonts. Definidas en `tailwind.config.ts` y `index.html`.

| Rol | Fuente | Pesos | Uso |
|-----|--------|-------|-----|
| **Display / Sans** | [Barlow](https://fonts.google.com/specimen/Barlow) | 300 · 400 · 500 · 600 · 700 · 800 · 900 | Texto general, encabezados, botones, navegación |
| **Editorial** | [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) | 300 · 300i | Textos descriptivos, subtítulos, copy de marca |
| **Monospace** | [Space Mono](https://fonts.google.com/specimen/Space+Mono) | 400 · 700 | Labels, etiquetas, datos técnicos, subtítulo del logo |

### Jerarquía tipográfica

```
H1 – H6    Barlow ExtraBold (800) · uppercase · tracking 0.04em
Cuerpo     Barlow Regular (400)
Editorial  Cormorant Garamond Light (300) · para descripciones
Labels     Space Mono Regular (400) · uppercase · tracking 0.3–0.5em
Botones    Barlow Bold (700) · uppercase · tracking 0.04em
```

---

## Stack Tecnológico

| Área | Tecnología | Versión |
|------|------------|---------|
| Framework UI | React | 18.x |
| Lenguaje | TypeScript | 5.x |
| Bundler | Vite | 5.x |
| Estilos | Tailwind CSS | 3.x |
| Componentes base | shadcn/ui + Radix UI | — |
| Routing | React Router DOM | 6.x |
| Estado servidor | TanStack Query | 5.x |
| Formularios | React Hook Form + Zod | — |
| Íconos | Lucide React | — |
| Animaciones | tailwindcss-animate | — |
| Tests | Vitest + Testing Library | — |
| Linter | ESLint | 9.x |

---

## Estructura del Proyecto

```
/
├── public/
│   ├── favicon.ico
│   ├── robots.txt          # Indexación configurada para schatza.com
│   ├── sitemap.xml         # Mapa del sitio para SEO
│   └── placeholder.svg
├── src/
│   ├── components/
│   │   ├── ui/             # Componentes shadcn/ui (no editar directamente)
│   │   ├── Header.tsx      # Navegación sticky con menú móvil
│   │   ├── HeroSection.tsx # Sección principal / hero
│   │   ├── AboutSection.tsx# Sección "Nosotros"
│   │   ├── ProductCatalog.tsx # Catálogo de experiencias
│   │   ├── OrderForm.tsx   # Formulario de contacto / solicitud
│   │   ├── Footer.tsx      # Pie de página
│   │   ├── BrandLogo.tsx   # Logo SVG vectorial de la marca
│   │   ├── StarField.tsx   # Fondo animado de estrellas
│   │   ├── NavLink.tsx     # Componente de navegación
│   │   └── WhatsAppButton.tsx # Botón flotante de WhatsApp
│   ├── data/
│   │   └── products.ts     # Catálogo de experiencias SchatZa
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/
│   │   └── utils.ts        # Utilidades (cn, etc.)
│   ├── pages/
│   │   ├── Index.tsx       # Página principal (single page)
│   │   └── NotFound.tsx    # Página 404
│   ├── types/
│   │   └── order.ts        # Tipos TypeScript del formulario
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css           # Tokens de color + estilos globales
├── index.html              # Entry point con SEO, OG tags y fuentes
├── vercel.json             # Configuración de despliegue en Vercel
├── tailwind.config.ts
├── vite.config.ts
└── package.json
```

---

## Despliegue

| Plataforma | URL |
|------------|-----|
| **Producción** | [https://schatza.com](https://schatza.com) |
| **www** | [https://www.schatza.com](https://www.schatza.com) |
| **Vercel** | [https://schatzagen.vercel.app](https://schatzagen.vercel.app) |
| **Repositorio** | [github.com/juanesos/schatzagen](https://github.com/juanesos/schatzagen) |

El proyecto está desplegado en **Vercel** con despliegue automático en cada push a `main`. El dominio `schatza.com` está registrado en **Hover** y apunta a Vercel via registros DNS (`A` + `CNAME`).

---

## Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:8080)
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Ejecutar tests
npm run test

# Linter
npm run lint
```

---

## Recomendaciones y Buenas Prácticas

### Edición de contenido
- **Experiencias / productos:** editar únicamente `src/data/products.ts`. No tocar los componentes de UI para cambiar textos de productos.
- **Colores de marca:** los tokens están centralizados en `src/index.css`. Cambiar un token actualiza toda la UI automáticamente.
- **Logo:** es un SVG en código (`BrandLogo.tsx`). Para cambiar colores del logo, ajustar los valores hex dentro del componente `AtomIcon`.

### Componentes UI (shadcn)
- Los archivos en `src/components/ui/` son componentes base de shadcn/ui. **No editarlos directamente.**
- Para agregar nuevos componentes shadcn: `npx shadcn@latest add [componente]`

### SEO
- El `index.html` ya contiene canonical, Open Graph, Twitter Card y JSON-LD apuntando a `https://schatza.com`.
- Si se agrega una nueva página, actualizar `public/sitemap.xml`.
- El `public/robots.txt` permite indexación total y apunta al sitemap.

### Formulario de contacto
- Actualmente el formulario (`OrderForm.tsx`) valida los datos en el cliente.
- **Pendiente de integración:** conectar con webhook de n8n → Airtable para almacenamiento de leads y notificación por WhatsApp.

### Performance
- Las fuentes se cargan con `preconnect` a Google Fonts en `index.html`.
- El fondo de estrellas (`StarField.tsx`) usa CSS puro — sin impacto en rendimiento.
- Vite genera chunks optimizados automáticamente en el build de producción.

### Control de versiones
- Rama principal: `main`
- Cada push a `main` dispara un deploy automático en Vercel.
- Usar ramas para cambios grandes antes de hacer merge a `main`.

---

## Tips de Diseño

- **No mezclar fuentes:** usar `font-editorial` (Cormorant) solo para copy descriptivo y emocional, nunca para botones o etiquetas funcionales.
- **Jade como color primario:** todo elemento interactivo usa jade (`#3D8A5F` / `jade-glow`). El dorado es acento decorativo, no funcional.
- **Espaciado generoso:** el diseño respira. Evitar secciones muy cargadas; el espacio en blanco (oscuro) es parte del lenguaje visual.
- **Uppercase con tracking:** los títulos y labels siempre van en mayúscula con letter-spacing. Respetar esta convención en contenido nuevo.
- **Modo oscuro único:** el sitio está diseñado solo para modo oscuro (`Cosmos Botánico`). No agregar variantes de modo claro.

---

*SchatZa.Gen © 2026 · Colombia*
