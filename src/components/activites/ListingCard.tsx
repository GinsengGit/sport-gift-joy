import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { ListingBadge } from "./ListingBadge";

type ListingCardProps = {
  slug: string;
  name: string;
  activity: string;
  city: string | null;
  department: string | null;
  description: string | null;
  used: boolean;
};

export const ListingCard = ({ slug, name, activity, city, department, description, used }: ListingCardProps) => {
  return (
    <Link
      to={`/activites/${slug}`}
      className="group block bg-card border border-border rounded-2xl p-5 hover:border-primary/40 hover:shadow-lg transition-all"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="min-w-0">
          <h3 className="font-bold text-lg text-foreground truncate group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground">{activity}</p>
        </div>
        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
      </div>

      {(city || department) && (
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-3">
          <MapPin className="w-4 h-4" />
          <span>
            {city}
            {department ? ` (${department})` : ""}
          </span>
        </div>
      )}

      {description && (
        <p className="text-sm text-foreground/70 line-clamp-2 mb-4">{description}</p>
      )}

      <ListingBadge used={used} size="sm" />
    </Link>
  );
};
