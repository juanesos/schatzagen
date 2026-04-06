interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
}

function AtomIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 96" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Three orbital ellipses */}
      <ellipse cx="48" cy="48" rx="44" ry="16" stroke="#3D8A5F" strokeWidth="1.8" fill="none" />
      <ellipse cx="48" cy="48" rx="44" ry="16" stroke="#3D8A5F" strokeWidth="1.8" fill="none"
        transform="rotate(60 48 48)" />
      <ellipse cx="48" cy="48" rx="44" ry="16" stroke="#3D8A5F" strokeWidth="1.8" fill="none"
        transform="rotate(-60 48 48)" />
      {/* Electrons */}
      <circle cx="92" cy="48" r="4" fill="#5BB882" />
      <circle cx="26" cy="11.3" r="4" fill="#3D8A5F" />
      <circle cx="26" cy="84.7" r="4" fill="#5BB882" />
      {/* Leaf with stem */}
      <path d="M44 60 C43 63 41 65 40 67" stroke="#5BB882" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M57 34 C60 42 54 56 44 60 C38 56 34 42 57 34 Z"
        fill="rgba(61,138,95,0.42)" stroke="#5BB882" strokeWidth="1.9" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M44 60 C46 54 50 44 57 34" stroke="rgba(240,237,230,0.6)" strokeWidth="1.1" fill="none" strokeLinecap="round" />
      {/* Leaf veins */}
      <path d="M49 51 C46 50 43 51 41 53" stroke="rgba(91,184,130,0.5)" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      <path d="M52 44 C49 42 46 43 44 45" stroke="rgba(91,184,130,0.5)" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      {/* Stars */}
      <circle cx="10" cy="14" r="1.1" fill="#E8C060" opacity="0.65" />
      <circle cx="82" cy="10" r="0.8" fill="#F0EDE6" opacity="0.45" />
      <circle cx="88" cy="72" r="1.0" fill="#5BB882" opacity="0.50" />
      {/* Gold sparkle cross */}
      <line x1="26" y1="8" x2="26" y2="5" stroke="#E8C060" strokeWidth="0.7" opacity="0.55" />
      <line x1="24" y1="6.5" x2="28" y2="6.5" stroke="#E8C060" strokeWidth="0.7" opacity="0.55" />
    </svg>
  );
}

export default function BrandLogo({ size = "md", showIcon = true }: BrandLogoProps) {
  const nameSize = {
    sm: "text-[30px]",
    md: "text-[42px]",
    lg: "text-[70px]",
  }[size];

  const genSize = {
    sm: "text-[8px] mt-[4px]",
    md: "text-[11px] mt-[6px] pl-[1px]",
    lg: "text-[15px] mt-[9px] pl-[2px]",
  }[size];

  const smallScale = "text-[0.68em]";

  const iconSize = {
    sm: "w-[50px] h-[50px]",
    md: "w-[67px] h-[67px]",
    lg: "w-[123px] h-[123px]",
  }[size];

  const gap = {
    sm: "gap-[16px]",
    md: "gap-[28px]",
    lg: "gap-[42px]",
  }[size];

  return (
    <div className={`flex items-center ${gap}`}>
      {showIcon && <AtomIcon className={iconSize} />}
      <div className="flex flex-col items-start leading-none">
        <span className={`font-display font-extrabold uppercase tracking-[0.05em] text-foreground ${nameSize}`}>
          S<span className={smallScale}>chat</span>Z<span className={smallScale}>a</span>
          <span className="text-primary">.</span>
        </span>
        <span className={`font-mono font-normal uppercase tracking-[0.45em] text-primary ${genSize}`}>
          Gen
        </span>
      </div>
    </div>
  );
}
