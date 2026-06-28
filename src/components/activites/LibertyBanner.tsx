import { Heart } from "lucide-react";

export const LibertyBanner = ({ variant = "default" }: { variant?: "default" | "compact" }) => {
  if (variant === "compact") {
    return (
      <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20">
        <Heart className="w-5 h-5 text-primary mt-0.5 shrink-0" />
        <p className="text-sm text-foreground/80">
          <span className="font-semibold text-foreground">Vous êtes libre de choisir votre activité sportive.</span>{" "}
          Kadosport facilite ensuite les démarches avec le professionnel afin que vous puissiez profiter pleinement de ses services.
        </p>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 p-6 md:p-8">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-primary/10 shrink-0">
          <Heart className="w-6 h-6 text-primary" />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl md:text-2xl font-bold text-foreground">
            Vous êtes libre de choisir votre activité sportive.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Kadosport facilite ensuite les démarches avec le professionnel afin que vous puissiez profiter pleinement de ses services.
          </p>
        </div>
      </div>
    </div>
  );
};
