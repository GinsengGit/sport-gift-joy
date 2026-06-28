import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LibertyBanner } from "@/components/activites/LibertyBanner";
import { ListingBadge } from "@/components/activites/ListingBadge";
import { UseCardForm } from "@/components/activites/UseCardForm";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Globe, Loader2, ArrowLeft, CreditCard } from "lucide-react";

type Listing = {
  id: string;
  slug: string;
  name: string;
  activity: string;
  description: string | null;
  address: string | null;
  city: string | null;
  postal_code: string | null;
  department: string | null;
  latitude: number | null;
  longitude: number | null;
  phone: string | null;
  email: string | null;
  website: string | null;
  photos: string[];
  kadosport_used_count: number;
};

const SITE_URL = "https://sport-gift-joy.lovable.app";

const ActiviteDetail = () => {
  const { slug } = useParams();
  const [listing, setListing] = useState<Listing | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    (async () => {
      const { data, error } = await supabase
        .from("sport_listings")
        .select("id,slug,name,activity,description,address,city,postal_code,department,latitude,longitude,phone,email,website,photos,kadosport_used_count")
        .eq("slug", slug)
        .eq("is_published", true)
        .maybeSingle();
      if (error || !data) setNotFound(true);
      else setListing(data as Listing);
      setLoading(false);
    })();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center py-40">
          <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
        </div>
        <Footer />
      </div>
    );
  }

  if (notFound || !listing) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-28 pb-20 container mx-auto px-4 text-center space-y-4">
          <h1 className="text-3xl font-bold">Fiche introuvable</h1>
          <p className="text-muted-foreground">Cette activité n'est plus disponible ou l'adresse est incorrecte.</p>
          <Link to="/activites" className="text-primary font-semibold underline underline-offset-4">
            ← Retour à l'annuaire
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const used = listing.kadosport_used_count > 0;
  const pageUrl = `${SITE_URL}/activites/${listing.slug}`;
  const title = `${listing.name} — ${listing.activity}${listing.city ? ` à ${listing.city}` : ""} | Kadosport`;
  const description = `${listing.activity}${listing.city ? ` à ${listing.city}` : ""}. ${listing.description?.slice(0, 140) ?? `Découvrez ${listing.name} et utilisez votre carte Kadosport pour financer votre pratique sportive.`}`;

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: listing.name,
    description: listing.description ?? undefined,
    url: pageUrl,
    telephone: listing.phone ?? undefined,
    image: listing.photos?.[0] ?? undefined,
    address: listing.address || listing.city ? {
      "@type": "PostalAddress",
      streetAddress: listing.address ?? undefined,
      addressLocality: listing.city ?? undefined,
      postalCode: listing.postal_code ?? undefined,
      addressRegion: listing.department ?? undefined,
      addressCountry: "FR",
    } : undefined,
    geo: listing.latitude && listing.longitude ? {
      "@type": "GeoCoordinates",
      latitude: listing.latitude,
      longitude: listing.longitude,
    } : undefined,
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        {listing.photos?.[0] && <meta property="og:image" content={listing.photos[0]} />}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-28 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-8">
            <Link to="/activites" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
              <ArrowLeft className="w-4 h-4" /> Retour à l'annuaire
            </Link>

            <header className="space-y-4">
              <ListingBadge used={used} />
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                {listing.name} — {listing.activity}{listing.city ? ` à ${listing.city}` : ""}
              </h1>
              {(listing.address || listing.city) && (
                <p className="flex items-center gap-2 text-lg text-muted-foreground">
                  <MapPin className="w-5 h-5" />
                  {[listing.address, listing.postal_code, listing.city].filter(Boolean).join(" · ")}
                </p>
              )}
            </header>

            {listing.photos && listing.photos.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {listing.photos.map((p, i) => (
                  <img key={i} src={p} alt={`${listing.name} - photo ${i + 1}`} className="rounded-xl aspect-video object-cover" loading="lazy" />
                ))}
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {listing.description && (
                  <section>
                    <h2 className="text-2xl font-bold mb-3">À propos</h2>
                    <p className="text-foreground/80 leading-relaxed whitespace-pre-line">{listing.description}</p>
                  </section>
                )}

                <section className="space-y-3">
                  <h2 className="text-2xl font-bold">Utiliser votre carte Kadosport ici</h2>
                  {used ? (
                    <p className="text-foreground/80">
                      Au moins un bénéficiaire Kadosport a déjà utilisé sa carte chez <strong>{listing.name}</strong>.
                      Vous pouvez vous y rendre librement et payer votre activité avec votre carte.
                    </p>
                  ) : (
                    <p className="text-foreground/80">
                      Cette activité est <strong>compatible avec Kadosport</strong>. Si le professionnel n'a pas encore
                      accepté de règlement Kadosport, notre équipe le contactera afin que vous puissiez profiter pleinement de ses services.
                    </p>
                  )}
                </section>

                <section className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-5">
                  <div>
                    <h2 className="text-2xl font-bold mb-1 flex items-center gap-2">
                      <CreditCard className="w-6 h-6 text-primary" />
                      {used ? "Utiliser ma carte ici" : "Je souhaite financer cette activité"}
                    </h2>
                  </div>
                  <UseCardForm
                    listingId={listing.id}
                    defaultProName={listing.name}
                    defaultProActivity={listing.activity}
                    defaultProCity={listing.city ?? undefined}
                  />
                </section>
              </div>

              <aside className="space-y-6">
                <LibertyBanner variant="compact" />

                <div className="bg-card border border-border rounded-2xl p-5 space-y-3">
                  <h2 className="font-bold">Coordonnées</h2>
                  {listing.phone && (
                    <a href={`tel:${listing.phone}`} className="flex items-center gap-2 text-sm hover:text-primary">
                      <Phone className="w-4 h-4 text-muted-foreground" /> {listing.phone}
                    </a>
                  )}
                  {listing.email && (
                    <a href={`mailto:${listing.email}`} className="flex items-center gap-2 text-sm hover:text-primary break-all">
                      <Mail className="w-4 h-4 text-muted-foreground shrink-0" /> {listing.email}
                    </a>
                  )}
                  {listing.website && (
                    <a href={listing.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-primary break-all">
                      <Globe className="w-4 h-4 text-muted-foreground shrink-0" /> Site internet
                    </a>
                  )}
                  {(listing.address || listing.city) && (
                    <div className="flex items-start gap-2 text-sm text-foreground/80">
                      <MapPin className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                      <span>{[listing.address, listing.postal_code, listing.city, listing.department && `Dép. ${listing.department}`].filter(Boolean).join(", ")}</span>
                    </div>
                  )}
                </div>

                {listing.latitude && listing.longitude && (
                  <a
                    href={`https://www.openstreetmap.org/?mlat=${listing.latitude}&mlon=${listing.longitude}#map=16/${listing.latitude}/${listing.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button variant="outline" className="w-full">
                      Voir sur la carte
                    </Button>
                  </a>
                )}
              </aside>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ActiviteDetail;
