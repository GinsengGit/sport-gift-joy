import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import sportsGuideFallback from "@/assets/sports-guide-fallback.jpg";

type ListingCardProps = {
  slug: string;
  name: string;
  activity: string;
  city: string | null;
  department: string | null;
  description: string | null;
  photos: string[];
};

export const ListingCard = ({ slug, name, activity, city, department, description, photos }: ListingCardProps) => {
  const photo = photos[0] || sportsGuideFallback;

  return (
    <Link
      to={`/activites/${slug}`}
      className="group grid grid-cols-[7rem_1fr] overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg sm:grid-cols-[9rem_1fr]"
    >
      <img
        src={photo}
        alt={`Pratiquer ${activity} à ${city || "proximité"}`}
        className="h-full min-h-36 w-full object-cover"
        loading="lazy"
        width={320}
        height={240}
      />
      <div className="min-w-0 p-4">
        <div className="mb-2 flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-primary">{name}</h3>
            <p className="text-sm font-medium text-primary">{activity}</p>
          </div>
          <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
        </div>

        {(city || department) && (
          <div className="mb-2 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0" />
            <span>{city}{department ? ` · ${department}` : ""}</span>
          </div>
        )}

        {description && <p className="line-clamp-2 text-sm text-foreground/70">{description}</p>}
      </div>
    </Link>
  );
};
