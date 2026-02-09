import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  CreditCard, 
  ArrowRight, 
  Percent, 
  ExternalLink, 
  Tag, 
  Star, 
  Clock, 
  History,
  ChevronRight,
  Gift,
  Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import kadosportLogo from "@/assets/kadosport-logo.png";

// Mock data
const mockUserData = {
  name: "Thomas Martin",
  balance: 127.50,
  cardNumber: "4532789012345678",
  expirationDate: "2026-01-15",
};

const mockOffers = [
  { id: "1", logo: "🏋️", advertiser: "Fitness Park", title: "-30% abonnement annuel", discount: "-30%", code: "KADOSPORT30", url: "https://fitnesspark.fr", category: "Fitness", is_popular: true, end_date: "2024-12-31" },
  { id: "2", logo: "🎽", advertiser: "Decathlon", title: "15€ offerts dès 80€", discount: "-15€", code: "KADO15", url: "https://decathlon.fr", category: "Équipement", is_popular: true, end_date: "2024-06-30" },
  { id: "3", logo: "👟", advertiser: "Nike", title: "-20% collection running", discount: "-20%", code: null, url: "https://nike.com/fr", category: "Vêtements", is_popular: false, end_date: "2024-04-30" },
  { id: "4", logo: "🚴", advertiser: "Alltricks", title: "-25% vélos électriques", discount: "-25%", code: "KADOVELO25", url: "https://alltricks.fr", category: "Outdoor", is_popular: true, end_date: "2024-05-31" },
  { id: "5", logo: "🏃", advertiser: "i-Run", title: "Livraison gratuite + 10%", discount: "-10%", code: "KADORUN10", url: "https://i-run.fr", category: "Équipement", is_popular: false, end_date: "2024-12-31" },
  { id: "6", logo: "💪", advertiser: "Basic-Fit", title: "1er mois offert", discount: "Gratuit", code: "KADOFREE", url: "https://basic-fit.com", category: "Fitness", is_popular: true, end_date: "2024-06-30" },
];

const CardEntryScreen = ({ onSubmit }: { onSubmit: (cardNumber: string) => void }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [error, setError] = useState("");

  const formatCardNumber = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 16);
    return digits.replace(/(.{4})/g, "$1 ").trim();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const digits = cardNumber.replace(/\s/g, "");
    if (digits.length < 16) {
      setError("Veuillez saisir les 16 chiffres de votre carte.");
      return;
    }
    onSubmit(digits);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            <img src={kadosportLogo} alt="Kadosport" className="h-16 mx-auto mb-6" />
            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Ma carte Kadosport
            </h1>
            <p className="text-muted-foreground">
              Saisissez votre numéro de carte pour accéder à votre espace.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                <CreditCard className="w-5 h-5" />
              </div>
              <Input
                type="text"
                inputMode="numeric"
                placeholder="0000 0000 0000 0000"
                value={cardNumber}
                onChange={handleChange}
                className="pl-12 h-14 text-lg tracking-widest font-mono text-center rounded-xl border-2 border-border focus:border-primary"
                maxLength={19}
                autoFocus
              />
            </div>
            {error && (
              <p className="text-sm text-destructive text-center">{error}</p>
            )}
            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full"
              disabled={cardNumber.replace(/\s/g, "").length < 16}
            >
              Accéder à ma carte
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-6">
            Le numéro de carte figure sur l'email de réception de votre carte Kadosport.
          </p>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleCardSubmit = (cardNumber: string) => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <CardEntryScreen onSubmit={handleCardSubmit} />;
  }

  const expirationDate = new Date(mockUserData.expirationDate);
  const formattedExpiration = expirationDate.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  const daysUntilExpiry = Math.ceil((expirationDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24));

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader userName={mockUserData.name} />

      <main className="container mx-auto px-4 py-6 md:py-8 max-w-5xl">
        {/* Mobile greeting */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden mb-6"
        >
          <p className="text-muted-foreground">Bonjour,</p>
          <h1 className="font-display text-2xl font-bold text-foreground">
            {mockUserData.name}
          </h1>
        </motion.div>

        {/* Balance & Expiration Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl bg-gradient-to-br from-kado-navy via-kado-navy to-primary/30 p-6 md:p-8 text-white mb-6 relative overflow-hidden"
        >
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-white/60 text-sm mb-1">Solde disponible</p>
                <p className="font-display text-4xl md:text-5xl font-bold">
                  {mockUserData.balance.toFixed(2)} €
                </p>
              </div>
              <div className="flex flex-col gap-2 md:items-end">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-white/60" />
                  <span className="text-sm text-white/80">
                    Expire le {formattedExpiration}
                  </span>
                </div>
                {daysUntilExpiry < 90 && (
                  <Link to="/prolonger">
                    <Badge className="bg-kado-coral/20 text-kado-coral border-kado-coral/30 hover:bg-kado-coral/30 cursor-pointer">
                      Prolonger ma carte — 1€/mois
                    </Badge>
                  </Link>
                )}
                <p className="text-xs text-white/40 font-mono">
                  •••• •••• •••• {mockUserData.cardNumber.slice(-4)}
                </p>
              </div>
            </div>

            {/* Quick links */}
            <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-white/10">
              <Link to="/historique">
                <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10">
                  <History className="w-4 h-4 mr-2" />
                  Historique des transactions
                </Button>
              </Link>
              <Link to="/prolonger">
                <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10">
                  <Clock className="w-4 h-4 mr-2" />
                  Prolonger ma carte
                </Button>
              </Link>
              <Link to="/offrir-carte">
                <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10">
                  <Gift className="w-4 h-4 mr-2" />
                  Offrir une carte
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Avantages exclusifs sport - Full section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-kado-gold/15 rounded-xl">
                <Percent className="h-5 w-5 text-kado-gold" />
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-foreground">
                  Avantages exclusifs sport
                </h2>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <Lock className="h-3.5 w-3.5 text-kado-gold" />
                  <span className="text-xs text-muted-foreground">Réservé aux bénéficiaires Kadosport</span>
                </div>
              </div>
            </div>
            <Link to="/avantages-exclusifs">
              <Button variant="ghost" size="sm" className="text-primary">
                Voir tout
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            Profitez de remises négociées sur le matériel et l'équipement sportif. Ces achats s'effectuent sur le site du marchand.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockOffers.map((offer, index) => (
              <motion.a
                key={offer.id}
                href={offer.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                className="group relative bg-card border border-border rounded-2xl p-5 hover:shadow-kado hover:border-primary/30 transition-all duration-300"
              >
                {offer.is_popular && (
                  <Badge className="absolute top-3 right-3 bg-kado-gold text-kado-gold-foreground border-0 text-xs">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Populaire
                  </Badge>
                )}

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center text-xl">
                    {offer.logo}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{offer.advertiser}</p>
                    <Badge variant="outline" className="text-xs mt-0.5">{offer.category}</Badge>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-xl p-3 mb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Percent className="w-4 h-4 text-primary" />
                    <span className="font-bold text-lg text-primary">{offer.discount}</span>
                  </div>
                  <p className="text-sm font-medium text-foreground">{offer.title}</p>
                </div>

                {offer.code && (
                  <div className="flex items-center gap-2 mb-3 p-2.5 bg-muted/50 rounded-lg border border-dashed border-border">
                    <Tag className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs text-muted-foreground">Code :</span>
                    <code className="font-mono font-semibold text-primary text-sm">{offer.code}</code>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>Jusqu'au {new Date(offer.end_date).toLocaleDateString('fr-FR')}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Legal mention */}
          <p className="text-xs text-muted-foreground text-center mt-6">
            Offres négociées par nos partenaires – achats effectués sur le site du marchand. 
            N'impacte pas le solde de votre carte Kadosport.
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;
