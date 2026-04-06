export interface ExperienceCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string; // first letter for visual
}

export const experienceCategories: ExperienceCategory[] = [
  {
    id: "activadora",
    name: "Órbita Activa",
    tagline: "Enfoque & Creatividad",
    description:
      "Activa tu claridad mental, energía y flujo creativo.",
    icon: "⚡",
  },
  {
    id: "hibrida",
    name: "Equilibrio",
    tagline: "Balance & Bienestar",
    description:
      "Estabilidad y sensación de bienestar constante.",
    icon: "✦",
  },
  {
    id: "relajacion",
    name: "Cosmos Relajante",
    tagline: "Relajación & Descanso",
    description:
      "Desconecta, suelta el estrés y recupera tu energía.",
    icon: "☽",
  },
];
