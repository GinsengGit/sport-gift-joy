import { motion } from "framer-motion";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import BalanceCard from "@/components/dashboard/BalanceCard";
import CashbackCard from "@/components/dashboard/CashbackCard";
import TransactionHistory from "@/components/dashboard/TransactionHistory";
import QuickActions from "@/components/dashboard/QuickActions";
import PartnerOffers from "@/components/dashboard/PartnerOffers";

// Mock data - will be replaced with real data from API
const mockUserData = {
  name: "Thomas Martin",
  balance: 127.50,
  cardNumber: "4532789012345678",
  expirationDate: "2026-01-15",
  totalCashback: 12.35,
  pendingCashback: 3.50,
};

const mockTransactions = [
  {
    id: "1",
    type: "payment" as const,
    merchant: "Decathlon",
    category: "Équipement sportif",
    amount: 45.90,
    date: new Date().toISOString(),
    cashbackEarned: 2.30,
  },
  {
    id: "2",
    type: "cashback" as const,
    merchant: "Cashback Decathlon",
    amount: 2.30,
    date: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: "3",
    type: "payment" as const,
    merchant: "Fitness Park",
    category: "Salle de sport",
    amount: 29.99,
    date: new Date(Date.now() - 86400000 * 2).toISOString(),
    cashbackEarned: 1.50,
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
    merchant: "Intersport",
    category: "Équipement sportif",
    amount: 78.50,
    date: new Date(Date.now() - 86400000 * 7).toISOString(),
    cashbackEarned: 3.93,
  },
];

const mockOffers = [
  {
    id: "1",
    partner: "Decathlon",
    cashbackPercent: 5,
    category: "Équipement sportif",
    validUntil: "2026-02-28",
  },
  {
    id: "2",
    partner: "Fitness Park",
    cashbackPercent: 10,
    category: "Salle de sport",
    validUntil: "2026-01-31",
  },
  {
    id: "3",
    partner: "Go Sport",
    cashbackPercent: 4,
    category: "Équipement sportif",
    validUntil: "2026-03-15",
  },
];

const Dashboard = () => {
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CashbackCard
                totalCashback={mockUserData.totalCashback}
                pendingCashback={mockUserData.pendingCashback}
              />
              <QuickActions />
            </div>

            <TransactionHistory transactions={mockTransactions} />
          </div>

          {/* Right column - Sidebar */}
          <div className="space-y-6">
            <PartnerOffers offers={mockOffers} />

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
                  href="/offrir"
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
