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
import { Search, Loader2 } from "lucide-react";

type Listing = {
  id: string;
  slug: string;
  name: string;
  activity: string;
  city: string | null;
  department: string | null;
  description: string | null;
  kadosport_used_count: number;
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
        supabase.from("sport_listings").select("id,slug,name,activity,city,department,description,kadosport_used_count,category_id").eq("is_published", true).order("name").limit(500),
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

  return (
    <>
      <Helmet>
        <title>Activités sportives finançables avec Kadosport en France</title>
        <meta
          name="description"
          content="Trouvez une activité sportive finançable avec Kadosport : coachs, salles de sport, clubs et centres sportifs partout en France. Vous restez libre de votre choix."
        />
        <link rel="canonical" href={`${SITE_URL}/activites`} />
        <meta property="og:title" content="Activités sportives finançables avec Kadosport" />
        <meta property="og:url" content={`${SITE_URL}/activites`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-28 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Activités sportives finançables avec Kadosport
              </h1>
              <p className="text-lg text-muted-foreground">
                Coachs, salles, clubs, centres et associations sportives en France. Découvrez où utiliser votre carte
                Kadosport — et si votre activité préférée n'est pas encore listée, notre équipe contacte le professionnel pour vous.
              </p>
            </div>

            <LibertyBanner />

            <div className="flex flex-col md:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Rechercher une activité, une ville, un département..."
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
                <p className="text-sm text-muted-foreground">{filtered.length} activité{filtered.length > 1 ? "s" : ""} trouvée{filtered.length > 1 ? "s" : ""}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filtered.map(l => (
                    <ListingCard
                      key={l.id}
                      slug={l.slug}
                      name={l.name}
                      activity={l.activity}
                      city={l.city}
                      department={l.department}
                      description={l.description}
                      used={l.kadosport_used_count > 0}
                    />
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
