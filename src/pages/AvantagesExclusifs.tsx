import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Percent, 
  ExternalLink, 
  Tag, 
  Filter,
  Dumbbell,
  Shirt,
  Mountain,
  Heart,
  Clock,
  CheckCircle2,
  Star,
  Gift
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for Awin offers
const MOCK_OFFERS = [
  {
    id: "1",
    advertiser_name: "Fitness Park",
    advertiser_id: "fp001",
    logo: "🏋️",
    title: "-30% sur l'abonnement annuel",
    description: "Profitez de 30% de réduction sur tous les abonnements annuels dans plus de 200 clubs en France.",
    discount_value: 30,
    discount_type: "percentage",
    voucher_code: "KADOSPORT30",
    start_date: "2024-01-01",
    end_date: "2024-12-31",
    landing_page_url: "https://fitnesspark.fr",
    category: "fitness",
    is_popular: true
  },
  {
    id: "2",
    advertiser_name: "Decathlon",
    advertiser_id: "dec001",
    logo: "🎽",
    title: "15€ offerts dès 80€ d'achat",
    description: "15€ de réduction immédiate sur votre panier équipement sportif à partir de 80€.",
    discount_value: 15,
    discount_type: "fixed",
    voucher_code: "KADO15",
    start_date: "2024-01-01",
    end_date: "2024-06-30",
    landing_page_url: "https://decathlon.fr",
    category: "equipement",
    is_popular: true
  },
  {
    id: "3",
    advertiser_name: "Nike",
    advertiser_id: "nike001",
    logo: "👟",
    title: "-20% sur la collection running",
    description: "Chaussures, vêtements et accessoires running avec 20% de remise exclusive.",
    discount_value: 20,
    discount_type: "percentage",
    voucher_code: null,
    start_date: "2024-02-01",
    end_date: "2024-04-30",
    landing_page_url: "https://nike.com/fr",
    category: "vetements",
    is_popular: false
  },
  {
    id: "4",
    advertiser_name: "Alltricks",
    advertiser_id: "all001",
    logo: "🚴",
    title: "-25% sur les vélos électriques",
    description: "Large sélection de VAE avec une remise exceptionnelle de 25%.",
    discount_value: 25,
    discount_type: "percentage",
    voucher_code: "KADOVELO25",
    start_date: "2024-01-15",
    end_date: "2024-05-31",
    landing_page_url: "https://alltricks.fr",
    category: "outdoor",
    is_popular: true
  },
  {
    id: "5",
    advertiser_name: "i-Run",
    advertiser_id: "irun001",
    logo: "🏃",
    title: "Livraison gratuite + 10%",
    description: "10% de réduction et livraison offerte sur tout le site running et trail.",
    discount_value: 10,
    discount_type: "percentage",
    voucher_code: "KADORUN10",
    start_date: "2024-01-01",
    end_date: "2024-12-31",
    landing_page_url: "https://i-run.fr",
    category: "equipement",
    is_popular: false
  },
  {
    id: "6",
    advertiser_name: "Basic-Fit",
    advertiser_id: "bf001",
    logo: "💪",
    title: "1er mois offert",
    description: "Premier mois d'abonnement gratuit dans toutes les salles Basic-Fit.",
    discount_value: 100,
    discount_type: "percentage",
    voucher_code: "KADOFREE",
    start_date: "2024-02-01",
    end_date: "2024-06-30",
    landing_page_url: "https://basic-fit.com",
    category: "fitness",
    is_popular: true
  },
  {
    id: "7",
    advertiser_name: "Salomon",
    advertiser_id: "sal001",
    logo: "⛰️",
    title: "-15% sur le trail",
    description: "Équipez-vous pour le trail avec 15% sur chaussures et textile technique.",
    discount_value: 15,
    discount_type: "percentage",
    voucher_code: null,
    start_date: "2024-01-01",
    end_date: "2024-03-31",
    landing_page_url: "https://salomon.com/fr",
    category: "outdoor",
    is_popular: false
  },
  {
    id: "8",
    advertiser_name: "Under Armour",
    advertiser_id: "ua001",
    logo: "🎯",
    title: "-30% sur les vêtements techniques",
    description: "Toute la gamme textile performance avec 30% de remise exclusive.",
    discount_value: 30,
    discount_type: "percentage",
    voucher_code: "KADOUA30",
    start_date: "2024-02-15",
    end_date: "2024-05-15",
    landing_page_url: "https://underarmour.fr",
    category: "vetements",
    is_popular: true
  }
];

const CATEGORIES = [
  { value: "all", label: "Toutes", icon: Gift },
  { value: "fitness", label: "Fitness", icon: Dumbbell },
  { value: "equipement", label: "Équipement", icon: Tag },
  { value: "vetements", label: "Vêtements", icon: Shirt },
  { value: "outdoor", label: "Outdoor", icon: Mountain },
];

interface OfferCardProps {
  offer: typeof MOCK_OFFERS[0];
  index: number;
}

const OfferCard = ({ offer, index }: OfferCardProps) => {
  const handleClick = () => {
    // In real implementation, this would track the click and redirect
    // For now, just open in new tab
    console.log(`Click tracked for offer ${offer.id} - clickref would be user_id`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-kado transition-all duration-300"
    >
      {/* Popular badge */}
      {offer.is_popular && (
        <div className="absolute top-3 right-3 z-10">
          <Badge className="bg-kado-gold text-kado-gold-foreground border-0 shadow-md">
            <Star className="w-3 h-3 mr-1 fill-current" />
            Populaire
          </Badge>
        </div>
      )}

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-14 h-14 bg-muted rounded-xl flex items-center justify-center text-2xl shadow-sm">
            {offer.logo}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground truncate">{offer.advertiser_name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="outline" className="text-xs capitalize">
                {offer.category}
              </Badge>
            </div>
          </div>
        </div>

        {/* Discount highlight */}
        <div className="bg-primary/10 rounded-xl p-4 mb-4">
          <div className="flex items-center gap-2 mb-1">
            <Percent className="w-5 h-5 text-primary" />
            <span className="font-bold text-xl text-primary">
              {offer.discount_type === "percentage" 
                ? `-${offer.discount_value}%` 
                : `-${offer.discount_value}€`}
            </span>
          </div>
          <p className="font-medium text-foreground">{offer.title}</p>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {offer.description}
        </p>

        {/* Voucher code if available */}
        {offer.voucher_code && (
          <div className="flex items-center gap-2 mb-4 p-3 bg-muted/50 rounded-lg border border-dashed border-border">
            <Tag className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Code :</span>
            <code className="font-mono font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
              {offer.voucher_code}
            </code>
          </div>
        )}

        {/* Validity */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
          <Clock className="w-3 h-3" />
          <span>Valide jusqu'au {new Date(offer.end_date).toLocaleDateString('fr-FR')}</span>
        </div>

        {/* CTA */}
        <Button 
          className="w-full group-hover:shadow-md transition-all"
          onClick={handleClick}
          asChild
        >
          <a href={offer.landing_page_url} target="_blank" rel="noopener noreferrer">
            Profiter de l'offre
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </div>
    </motion.div>
  );
};

const AvantagesExclusifs = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showPopularOnly, setShowPopularOnly] = useState(false);

  const filteredOffers = MOCK_OFFERS.filter(offer => {
    const categoryMatch = selectedCategory === "all" || offer.category === selectedCategory;
    const popularMatch = !showPopularOnly || offer.is_popular;
    return categoryMatch && popularMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/dashboard">
              <Button variant="ghost" size="icon" className="shrink-0">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="font-display font-bold text-xl">Avantages exclusifs sport</h1>
              <p className="text-sm text-muted-foreground">Réservés aux bénéficiaires Kadosport</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Intro section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-primary/10 via-kado-coral/5 to-kado-gold/10 rounded-2xl p-6 md:p-8 mb-8 border border-primary/20"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Gift className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="font-display font-bold text-xl md:text-2xl mb-2">
                Des offres négociées pour vous
              </h2>
              <p className="text-muted-foreground mb-4">
                En tant que bénéficiaire Kadosport, profitez d'avantages exclusifs chez nos partenaires sport. 
                Ces achats s'effectuent directement sur le site du marchand et n'impactent pas votre solde Kadosport.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="bg-background/50">
                  <CheckCircle2 className="w-3 h-3 mr-1 text-green-500" />
                  Offres vérifiées
                </Badge>
                <Badge variant="outline" className="bg-background/50">
                  <Heart className="w-3 h-3 mr-1 text-kado-coral" />
                  Partenaires sport
                </Badge>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Filtrer par catégorie</span>
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="h-auto flex-wrap gap-2 bg-transparent p-0">
              {CATEGORIES.map((cat) => (
                <TabsTrigger
                  key={cat.value}
                  value={cat.value}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-4 py-2 border border-border data-[state=active]:border-primary"
                >
                  <cat.icon className="w-4 h-4 mr-2" />
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Popular filter toggle */}
          <div className="mt-4">
            <Button
              variant={showPopularOnly ? "default" : "outline"}
              size="sm"
              onClick={() => setShowPopularOnly(!showPopularOnly)}
              className="rounded-full"
            >
              <Star className={`w-4 h-4 mr-2 ${showPopularOnly ? "fill-current" : ""}`} />
              Populaires uniquement
            </Button>
          </div>
        </motion.div>

        {/* Results count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-sm text-muted-foreground mb-6"
        >
          {filteredOffers.length} offre{filteredOffers.length > 1 ? 's' : ''} disponible{filteredOffers.length > 1 ? 's' : ''}
        </motion.p>

        {/* Offers grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOffers.map((offer, index) => (
            <OfferCard key={offer.id} offer={offer} index={index} />
          ))}
        </div>

        {filteredOffers.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Tag className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Aucune offre trouvée</h3>
            <p className="text-muted-foreground">
              Essayez de modifier vos filtres pour voir plus d'offres.
            </p>
          </motion.div>
        )}

        {/* Legal mention */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 p-4 bg-muted/50 rounded-xl border border-border"
        >
          <p className="text-xs text-muted-foreground text-center">
            Offres négociées par nos partenaires – achats effectués sur le site du marchand. 
            Ces achats n'impactent pas le solde de votre carte Kadosport.
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default AvantagesExclusifs;
