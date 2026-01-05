import { motion } from "framer-motion";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import BalanceCard from "@/components/dashboard/BalanceCard";
import KadosportScoreCard from "@/components/dashboard/KadosportScoreCard";
import MedalProgress from "@/components/dashboard/MedalProgress";
import ActivityTracker from "@/components/dashboard/ActivityTracker";
import RewardsSection from "@/components/dashboard/RewardsSection";
import TransactionHistory from "@/components/dashboard/TransactionHistory";
import QuickActions from "@/components/dashboard/QuickActions";

// Mock data - will be replaced with real data from API
const mockUserData = {
  name: "Thomas Martin",
  balance: 127.50,
  cardNumber: "4532789012345678",
  expirationDate: "2026-01-15",
  totalPoints: 1850,
  purchasePoints: 1270,
  activityPoints: 580,
  weeklyActivityHours: 3,
};

const mockMedals = [
  { id: "1", name: "Débutant", emoji: "🥉", pointsRequired: 500, reward: "10% chez Decathlon", isUnlocked: true, isCurrent: false },
  { id: "2", name: "Sportif", emoji: "🥈", pointsRequired: 1000, reward: "Gourde offerte", isUnlocked: true, isCurrent: false },
  { id: "3", name: "Athlète", emoji: "🥇", pointsRequired: 2000, reward: "Séance coaching", isUnlocked: false, isCurrent: true },
  { id: "4", name: "Champion", emoji: "🏆", pointsRequired: 5000, reward: "Équipement premium", isUnlocked: false, isCurrent: false },
  { id: "5", name: "Légende", emoji: "👑", pointsRequired: 10000, reward: "Week-end sportif", isUnlocked: false, isCurrent: false },
];

const mockConnectedApps = [
  { id: "1", name: "Strava", icon: "🏃", isConnected: true, lastSync: "Il y a 2h" },
  { id: "2", name: "Decathlon Coach", icon: "🏋️", isConnected: true, lastSync: "Il y a 1j" },
  { id: "3", name: "Garmin", icon: "⌚", isConnected: false },
];

const mockRecentActivities = [
  { id: "1", type: "Course à pied", duration: 65, date: new Date().toISOString(), pointsEarned: 10, source: "Strava" },
  { id: "2", type: "Musculation", duration: 75, date: new Date(Date.now() - 86400000).toISOString(), pointsEarned: 10, source: "Decathlon Coach" },
  { id: "3", type: "Vélo", duration: 90, date: new Date(Date.now() - 86400000 * 3).toISOString(), pointsEarned: 10, source: "Strava" },
];

const mockRewards = [
  { id: "1", name: "-15% sur tout", description: "Code promo exclusif", pointsCost: 1500, type: "promo" as const, partner: "Decathlon", isAvailable: true },
  { id: "2", name: "Gourde sport", description: "Gourde 750ml", pointsCost: 1000, type: "goodie" as const, partner: "Kadosport", isAvailable: true },
  { id: "3", name: "Séance coaching", description: "1h avec un coach", pointsCost: 3000, type: "experience" as const, partner: "Fitness Park", isAvailable: false },
  { id: "4", name: "Montre connectée", description: "Tirage au sort", pointsCost: 2000, type: "lottery" as const, partner: "Garmin", isAvailable: false },
];

const mockTransactions = [
  {
    id: "1",
    type: "payment" as const,
    merchant: "Decathlon",
    category: "Équipement sportif",
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
    merchant: "Fitness Park",
    category: "Salle de sport",
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
    merchant: "Intersport",
    category: "Équipement sportif",
    amount: 78.50,
    date: new Date(Date.now() - 86400000 * 7).toISOString(),
    pointsEarned: 785,
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BalanceCard
                balance={mockUserData.balance}
                cardNumber={mockUserData.cardNumber}
                expirationDate={mockUserData.expirationDate}
              />
              <KadosportScoreCard
                totalPoints={mockUserData.totalPoints}
                purchasePoints={mockUserData.purchasePoints}
                activityPoints={mockUserData.activityPoints}
                weeklyActivityHours={mockUserData.weeklyActivityHours}
              />
            </div>

            <MedalProgress 
              currentPoints={mockUserData.totalPoints} 
              medals={mockMedals} 
            />

            <ActivityTracker
              connectedApps={mockConnectedApps}
              recentActivities={mockRecentActivities}
              weeklyHours={mockUserData.weeklyActivityHours}
              maxWeeklyHours={4}
            />

            <TransactionHistory transactions={mockTransactions} />
          </div>

          {/* Right column - Sidebar */}
          <div className="space-y-6">
            <RewardsSection
              rewards={mockRewards}
              currentPoints={mockUserData.totalPoints}
              lotteryPoints={mockUserData.totalPoints}
              lotteryThreshold={2000}
            />

            <QuickActions />

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
