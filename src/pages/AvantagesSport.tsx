import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Percent,
  Star,
  ArrowRight,
  Lock,
  Dumbbell,
  Mountain,
  Shirt,
  Heart,
  CheckCircle2,
  Gift,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useAffiliateOffers } from "@/hooks/useAffiliateOffers";

const CATEGORIES = [
  { icon: Dumbbell, label: "Fitness & salles", color: "bg-kado-coral/10 text-kado-coral" },
  { icon: Shirt, label: "Vêtements sport", color: "bg-primary/10 text-primary" },
  { icon: Mountain, label: "Outdoor & trail", color: "bg-kado-sky/10 text-kado-sky" },
  { icon: Heart, label: "Bien-être", color: "bg-kado-gold/10 text-kado-gold" },
];

const AvantagesSport = () => {
  const { data: featuredOffers = [], isLoading } = useAffiliateOffers({ featuredOnly: true, limit: 4 });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="container mx-auto px-4 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <Badge className="bg-kado-gold/10 text-kado-gold border-kado-gold/20 mb-4">
              <Star className="w-3 h-3 mr-1 fill-current" />
              Programme avantages sport
            </Badge>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Des tarifs négociés sur l'équipement sportif
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Avec Kadosport, accédez à des remises exclusives chez les plus grandes enseignes du sport.
              Réservé aux bénéficiaires d'une carte Kadosport.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="outline" className="bg-background/50 px-4 py-2">
                <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                Offres vérifiées
              </Badge>
              <Badge variant="outline" className="bg-background/50 px-4 py-2">
                <Percent className="w-4 h-4 mr-2 text-primary" />
                Jusqu'à -30% de réduction
              </Badge>
              <Badge variant="outline" className="bg-background/50 px-4 py-2">
                <Heart className="w-4 h-4 mr-2 text-kado-coral" />
                Enseignes sport partenaires
              </Badge>
            </div>
          </motion.div>
        </section>

        {/* Categories */}
        <section className="container mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {CATEGORIES.map((cat, i) => (
              <div key={cat.label} className="bg-card border border-border rounded-2xl p-6 text-center">
                <div className={`w-14 h-14 ${cat.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  <cat.icon className="w-7 h-7" />
                </div>
                <p className="font-semibold text-foreground">{cat.label}</p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Featured offers teaser */}
        <section className="container mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-2xl font-bold text-foreground">
                Aperçu des offres
              </h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lock className="w-4 h-4" />
                <span>Codes réservés aux bénéficiaires</span>
              </div>
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-48 bg-muted rounded-2xl animate-pulse" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {featuredOffers.map((offer, index) => (
                  <motion.div
                    key={offer.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + index * 0.05 }}
                    className="relative bg-card border border-border rounded-2xl p-5 group"
                  >
                    {offer.is_popular && (
                      <Badge className="absolute top-3 right-3 bg-kado-gold text-kado-gold-foreground border-0 text-xs">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Populaire
                      </Badge>
                    )}

                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center text-xl">
                        {offer.logo_emoji}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{offer.advertiser_name}</p>
                        <Badge variant="outline" className="text-xs capitalize mt-0.5">
                          {offer.category}
                        </Badge>
                      </div>
                    </div>

                    <div className="bg-primary/10 rounded-xl p-3 mb-3">
                      <div className="flex items-center gap-2">
                        <Percent className="w-4 h-4 text-primary" />
                        <span className="font-bold text-lg text-primary">
                          {offer.discount_type === "percentage" ? `-${offer.discount_value}%` : `-${offer.discount_value}€`}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-foreground mt-1">{offer.title}</p>
                    </div>

                    {/* Blurred code teaser */}
                    {offer.voucher_code && (
                      <div className="relative p-2.5 bg-muted/50 rounded-lg border border-dashed border-border mb-3 overflow-hidden">
                        <div className="blur-sm select-none">
                          <span className="font-mono text-sm">XXXX-XXXX</span>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Lock className="w-4 h-4 text-muted-foreground" />
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="bg-gradient-to-br from-kado-navy via-kado-navy to-primary/30 rounded-3xl p-8 md:p-12 text-center text-white"
          >
            <Gift className="w-12 h-12 mx-auto mb-4 text-kado-gold" />
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
              Accédez à tous les avantages
            </h2>
            <p className="text-white/70 max-w-lg mx-auto mb-6">
              Obtenez une carte Kadosport pour débloquer l'ensemble des offres négociées
              et profiter de tarifs exclusifs chez nos enseignes partenaires.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/offrir-carte">
                <Button variant="hero" size="lg">
                  Offrir une carte Kadosport
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/b2b">
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                  Solution entreprise / CSE
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AvantagesSport;
