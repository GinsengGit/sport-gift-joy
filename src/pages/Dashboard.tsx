import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  CreditCard, 
  ArrowRight, 
  Clock, 
  History,
  Gift,
  Download
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

// mockOffers removed — now using useAffiliateOffers hook

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
              <Link to={`/carte-digitale?name=${encodeURIComponent(mockUserData.name)}&balance=${mockUserData.balance}&card=${mockUserData.cardNumber}&exp=${mockUserData.expirationDate}&code=KDS-2024-7X9F`}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white/80 hover:text-white hover:bg-white/10"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger ma carte
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

      </main>
    </div>
  );
};

export default Dashboard;
