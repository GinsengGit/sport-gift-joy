import { CheckCircle2, Sparkles } from "lucide-react";

type ListingBadgeProps = {
  used: boolean;
  size?: "sm" | "md";
};

export const ListingBadge = ({ used, size = "md" }: ListingBadgeProps) => {
  const padding = size === "sm" ? "px-2.5 py-1 text-xs" : "px-3 py-1.5 text-sm";

  if (used) {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full font-semibold bg-green-500/10 text-green-700 border border-green-500/30 ${padding}`}
      >
        <CheckCircle2 className="w-3.5 h-3.5" />
        Carte Kadosport déjà utilisée ici
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-semibold bg-blue-500/10 text-blue-700 border border-blue-500/30 ${padding}`}
    >
      <Sparkles className="w-3.5 h-3.5" />
      Activité finançable avec Kadosport
    </span>
  );
};
