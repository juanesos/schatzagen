interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
}

export default function BrandLogo({ size = "md" }: BrandLogoProps) {
  const heightClass = {
    sm: "h-10",
    md: "h-14",
    lg: "h-20",
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
