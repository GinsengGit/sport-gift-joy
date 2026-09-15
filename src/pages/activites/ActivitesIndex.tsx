import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LibertyBanner } from "@/components/activites/LibertyBanner";
import { ListingCard } from "@/components/activites/ListingCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Loader2, MapPin } from "lucide-react";

type Listing = {
  id: string;
  slug: string;
  name: string;
  activity: string;
  city: string | null;
  department: string | null;
  description: string | null;
  photos: string[];
  category_id: string | null;
};

type Category = { id: string; slug: string; name: string };

const SITE_URL = "https://sport-gift-joy.lovable.app";

const ActivitesIndex = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  useEffect(() => {
    (async () => {
      const [{ data: listingsData }, { data: catData }] = await Promise.all([
        supabase.from("sport_listings").select("id,slug,name,activity,city,department,description,photos,category_id").eq("is_published", true).order("city").order("name").limit(500),
        supabase.from("sport_categories").select("id,slug,name").order("display_order"),
      ]);
      setListings((listingsData as Listing[]) ?? []);
      setCategories((catData as Category[]) ?? []);
      setLoading(false);
    })();
  }, []);

  const filtered = useMemo(() => {
    return listings.filter(l => {
      if (categoryFilter !== "all" && l.category_id !== categoryFilter) return false;
      if (!search) return true;
      const q = search.toLowerCase();
      return (
        l.name.toLowerCase().includes(q) ||
        l.activity.toLowerCase().includes(q) ||
        (l.city ?? "").toLowerCase().includes(q) ||
        (l.department ?? "").toLowerCase().includes(q)
      );
    });
  }, [listings, search, categoryFilter]);

  const groupedByCity = useMemo(() => {
    return filtered.reduce<Record<string, Listing[]>>((groups, listing) => {
      const city = listing.city?.trim() || "À proximité";
      groups[city] = [...(groups[city] ?? []), listing];
      return groups;
    }, {});
  }, [filtered]);

  return (
    <>
      <Helmet>
        <title>Guide du sport par ville en France | Kadosport</title>
        <meta
          name="description"
          content="Explorez le guide du sport par ville : clubs, coachs, salles et centres sportifs finançables avec votre carte Kadosport."
        />
        <link rel="canonical" href={`${SITE_URL}/activites`} />
        <meta property="og:title" content="Guide du sport par ville | Kadosport" />
        <meta property="og:url" content={`${SITE_URL}/activites`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-28 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="max-w-4xl">
              <p className="mb-3 text-sm font-bold uppercase text-primary">Annuaire du sport en France</p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Le guide du sport par ville
              </h1>
              <p className="text-lg text-muted-foreground">
                Trouvez un club, un coach, une salle, un centre ou une association sportive près de chez vous.
                Votre choix reste libre : Kadosport facilite ensuite les démarches avec le professionnel du sport.
              </p>
            </div>

            <LibertyBanner />

            <div className="flex flex-col md:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Ville, activité ou professionnel..."
                  className="pl-9"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="md:w-72">
                  <SelectValue placeholder="Toutes les catégories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les catégories</SelectItem>
                  {categories.map(c => (
                    <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
              </div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <p className="text-lg font-semibold">Aucune fiche ne correspond à votre recherche</p>
                <p className="text-muted-foreground">
                  Vous restez libre de choisir votre activité — indiquez-nous où vous souhaitez utiliser votre carte.
                </p>
                <Link to="/utiliser-ma-carte" className="text-primary font-semibold underline underline-offset-4">
                  Indiquer mon professionnel du sport →
                </Link>
              </div>
            ) : (
              <>
                <p className="text-sm text-muted-foreground">{filtered.length} professionnel{filtered.length > 1 ? "s" : ""} du sport dans {Object.keys(groupedByCity).length} ville{Object.keys(groupedByCity).length > 1 ? "s" : ""}</p>
                <div className="space-y-12">
                  {Object.entries(groupedByCity).map(([city, cityListings]) => (
                    <section key={city} aria-labelledby={`ville-${city}`}>
                      <div className="mb-5 flex items-center gap-3 border-b border-border pb-3">
                        <MapPin className="h-6 w-6 text-primary" />
                        <div>
                          <h2 id={`ville-${city}`} className="text-2xl font-bold text-foreground">Sport à {city}</h2>
                          <p className="text-sm text-muted-foreground">{cityListings.length} adresse{cityListings.length > 1 ? "s" : ""}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                        {cityListings.map(listing => <ListingCard key={listing.id} {...listing} />)}
                      </div>
                    </section>
                  ))}
                </div>
              </>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ActivitesIndex;
