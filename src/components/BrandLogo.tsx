interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
}

export default function BrandLogo({ size = "md" }: BrandLogoProps) {
  const heightClass = {
    sm: "h-12 md:h-16",
    md: "h-16 md:h-20",
    lg: "h-20 md:h-28",
  }[size];

  return (
    <img
      src="/logo-schatza.png"
      alt="SchatZa.Gen — Cosmos Botánico"
      className={`${heightClass} w-auto object-contain`}
      draggable={false}
    />
  );
}
