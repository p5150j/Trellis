import { cn } from "@/lib/utils";

interface FeatureCardProps {
  number?: string;
  title?: string;
  description?: string;
  cta?: string;
  ctaHref?: string;
  children?: React.ReactNode;
  className?: string;
  variant?: "light" | "coral" | "spectrum";
}

export function FeatureCard({
  number,
  title,
  description,
  cta,
  ctaHref,
  children,
  className,
  variant = "light",
}: FeatureCardProps) {
  const variants = {
    light: "bg-[#F5F4F0]",
    coral: "bg-gradient-to-br from-[#FFB088] via-[#FF7B72] to-[#E85D75]",
    spectrum: "bg-gradient-to-r from-[#67E8F9] via-[#A78BFA] to-[#F472B6]",
  };

  const textColor = variant === "light" ? "text-foreground" : "text-white";
  const mutedColor = variant === "light" ? "text-muted-foreground" : "text-white/70";
  const badgeBg = variant === "light" ? "bg-white border-border" : "bg-white/20 border-white/30 backdrop-blur-sm";
  const badgeText = variant === "light" ? "text-muted-foreground" : "text-white";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-none min-h-[400px] flex flex-col",
        variants[variant],
        className
      )}
    >
      {/* Number badge */}
      {number && (
        <div className="absolute top-5 left-5 z-10">
          <span className={cn(
            "inline-flex items-center justify-center w-9 h-9 rounded-full text-xs font-medium border",
            badgeBg,
            badgeText
          )}>
            {number}
          </span>
        </div>
      )}

      {/* Custom content area */}
      {children && (
        <div className="flex-1 flex items-center justify-center p-6 pt-16">
          {children}
        </div>
      )}

      {/* Bottom content */}
      <div className="mt-auto p-6 pt-0">
        {title && (
          <h3 className={cn("text-sm font-medium mb-1", textColor)}>{title}</h3>
        )}
        {description && (
          <p className={cn("text-xs", mutedColor)}>{description}</p>
        )}
        {cta && (
          <a href={ctaHref || "/projects"} className={cn(
            "mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-colors no-underline",
            variant === "light"
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm"
          )}>
            {cta}
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

interface StatCardProps {
  number?: string;
  stat: string;
  label: string;
  className?: string;
}

export function StatCard({
  number,
  stat,
  label,
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-none min-h-[400px] flex flex-col",
        "bg-gradient-to-br from-[#06B6D4] via-[#8B5CF6] to-[#EC4899]",
        className
      )}
      style={{
        backgroundImage: `
          linear-gradient(135deg, #06B6D4 0%, #8B5CF6 50%, #EC4899 100%),
          repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)
        `,
      }}
    >
      {/* Abstract data viz — full bleed */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full opacity-[0.1] pointer-events-none" fill="none" preserveAspectRatio="xMidYMid slice">
        <circle cx="60" cy="80" r="90" stroke="white" strokeWidth="0.75" />
        <circle cx="60" cy="80" r="130" stroke="white" strokeWidth="0.5" />
        <circle cx="340" cy="340" r="110" stroke="white" strokeWidth="0.75" />
        <circle cx="340" cy="340" r="160" stroke="white" strokeWidth="0.5" />
        <line x1="0" y1="350" x2="400" y2="100" stroke="white" strokeWidth="0.75" />
        <line x1="0" y1="380" x2="400" y2="160" stroke="white" strokeWidth="0.5" />
        {[0,1,2,3,4,5,6,7,8].map(i => (
          <circle key={i} cx={40 + i * 45} cy={350 - i * 28} r={3 + i * 0.8} fill="white" opacity={0.15 + i * 0.04} />
        ))}
      </svg>

      {/* Number badge */}
      {number && (
        <div className="absolute top-5 left-5 z-10">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm text-xs font-medium text-white border border-white/30">
            {number}
          </span>
        </div>
      )}

      {/* Bottom content */}
      <div className="mt-auto p-6 flex items-end justify-between">
        <div>
          <span className="text-5xl md:text-6xl font-medium text-white tracking-tight">
            {stat}
          </span>
          <p className="text-xs text-white/70 mt-2 max-w-[200px]">{label}</p>
        </div>
        <a href="/projects" className="mb-2 block hover:opacity-80 transition-opacity">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </a>
      </div>
    </div>
  );
}

interface ListCardProps {
  number?: string;
  items: { label: string; href?: string }[];
  className?: string;
}

export function ListCard({
  number,
  items,
  className,
}: ListCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-none min-h-[400px] flex flex-col",
        "bg-gradient-to-br from-[#FED7AA] via-[#FB923C] to-[#EA580C]",
        className
      )}
    >
      {/* Decorative pattern overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 8px,
            rgba(255,255,255,0.1) 8px,
            rgba(255,255,255,0.1) 9px
          )`,
        }}
      />

      {/* Abstract geometric shapes — full bleed */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full opacity-[0.12] pointer-events-none" fill="none" preserveAspectRatio="xMidYMid slice">
        <rect x="-20" y="20" width="140" height="140" rx="8" stroke="white" strokeWidth="1" transform="rotate(15 50 90)" />
        <rect x="220" y="-30" width="180" height="180" rx="8" stroke="white" strokeWidth="1" transform="rotate(-12 310 60)" />
        <polygon points="160,250 230,380 90,380" stroke="white" strokeWidth="1" />
        <circle cx="340" cy="320" r="80" stroke="white" strokeWidth="1" />
        <rect x="280" y="180" width="90" height="90" rx="6" stroke="white" strokeWidth="0.75" transform="rotate(25 325 225)" />
        <circle cx="100" cy="180" r="30" stroke="white" strokeWidth="0.75" />
      </svg>

      {/* Number badge */}
      {number && (
        <div className="absolute top-5 left-5 z-10">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm text-xs font-medium text-white border border-white/30">
            {number}
          </span>
        </div>
      )}

      {/* List content */}
      <div className="mt-auto p-6 relative z-10">
        <ul className="space-y-3">
          {items.map((item, i) => (
            <li key={i}>
              <a
                href={item.href || "#"}
                className="flex items-center justify-between text-sm text-white hover:text-white/80 transition-colors group"
              >
                <span>{item.label}</span>
                <svg
                  className="w-4 h-4 text-white/60 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

interface ImageCardProps {
  number?: string;
  title?: string;
  cta?: string;
  imageSrc?: string;
  avatars?: string[];
  className?: string;
}

export function ImageCard({
  number,
  title,
  cta,
  imageSrc,
  avatars,
  className,
}: ImageCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-none min-h-[400px] flex flex-col bg-[#F5F4F0]",
        className
      )}
    >
      {/* Background image */}
      {imageSrc && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
      )}

      {/* Number badge */}
      {number && (
        <div className="absolute top-5 left-5 z-10">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border border-border text-xs font-medium text-muted-foreground">
            {number}
          </span>
        </div>
      )}

      {/* Bottom content */}
      <div className="mt-auto p-6 relative z-10">
        {/* Avatars */}
        {avatars && avatars.length > 0 && (
          <div className="flex -space-x-2 mb-3">
            {avatars.map((avatar, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-muted border-2 border-white overflow-hidden"
              >
                {avatar && (
                  <img src={avatar} alt="" className="w-full h-full object-cover" />
                )}
              </div>
            ))}
          </div>
        )}

        {title && (
          <h3 className="text-sm font-medium text-foreground mb-2">{title}</h3>
        )}

        {cta && (
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors">
            {cta}
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
