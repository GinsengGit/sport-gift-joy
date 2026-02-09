import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Percent, ChevronRight, CreditCard, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import BalanceCard from "@/components/dashboard/BalanceCard";
import TransactionHistory from "@/components/dashboard/TransactionHistory";
import QuickActions from "@/components/dashboard/QuickActions";
import kadosportLogo from "@/assets/kadosport-logo.png";

// Mock data - will be replaced with real data from API
const mockUserData = {
  name: "Thomas Martin",
  balance: 127.50,
  cardNumber: "4532789012345678",
  expirationDate: "2026-01-15",
};

const mockTransactions = [
  {
    id: "1",
    type: "payment" as const,
    merchant: "Fitness Park",
    category: "Salle de sport",
    amount: 45.90,
    date: new Date().toISOString(),
    pointsEarned: 459,
  },
  {
    id: "2",
    type: "credit" as const,
    merchant: "Points activité",
    amount: 0,
    date: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: "3",
    type: "payment" as const,
    merchant: "Club de Tennis",
    category: "Cours & Entraînement",
    amount: 29.99,
    date: new Date(Date.now() - 86400000 * 2).toISOString(),
    pointsEarned: 300,
  },
  {
    id: "4",
    type: "credit" as const,
    merchant: "Crédit carte cadeau",
    amount: 100.00,
    date: new Date(Date.now() - 86400000 * 5).toISOString(),
  },
  {
    id: "5",
    type: "payment" as const,
    merchant: "Coach sportif",
    category: "Coaching personnel",
    amount: 78.50,
    date: new Date(Date.now() - 86400000 * 7).toISOString(),
    pointsEarned: 785,
  },
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
    // In production, validate card number against the database
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <CardEntryScreen onSubmit={handleCardSubmit} />;
  }
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader userName={mockUserData.name} />

      <main className="container mx-auto px-4 py-6 md:py-8">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - Main content */}
          <div className="lg:col-span-2 space-y-6">
            <BalanceCard
              balance={mockUserData.balance}
              cardNumber={mockUserData.cardNumber}
              expirationDate={mockUserData.expirationDate}
            />

            <TransactionHistory transactions={mockTransactions} />

          </div>

          {/* Right column - Sidebar */}
          <div className="space-y-6">
            <QuickActions />

            <QuickActions />

            {/* Exclusive offers teaser */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <Link 
                to="/avantages-exclusifs"
                className="block rounded-2xl bg-gradient-to-br from-kado-gold/10 via-kado-coral/5 to-primary/10 border border-kado-gold/20 p-6 hover:shadow-kado transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-kado-gold/20 rounded-xl">
                      <Percent className="h-5 w-5 text-kado-gold" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-foreground group-hover:text-primary transition-colors">
                        Avantages exclusifs sport
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Codes promo et remises chez nos partenaires
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </Link>
            </motion.div>

            {/* Promo banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="rounded-2xl bg-gradient-navy p-6 text-white overflow-hidden relative"
            >
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
              <div className="relative z-10">
                <h4 className="font-display font-bold text-lg mb-2">
                  Offrez une carte Kadosport ! 🎁
                </h4>
                <p className="text-white/70 text-sm mb-4">
                  Faites plaisir à vos proches sportifs avec une carte cadeau universelle.
                </p>
                <a
                  href="/offrir-carte"
                  className="inline-flex items-center gap-2 bg-white text-kado-navy font-semibold px-4 py-2 rounded-lg text-sm hover:bg-white/90 transition-colors"
                >
                  Offrir maintenant
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
