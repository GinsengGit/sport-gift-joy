import { motion } from "framer-motion";
import { Trophy, Zap, TrendingUp } from "lucide-react";

interface KadosportScoreCardProps {
  totalPoints: number;
  purchasePoints: number;
  activityPoints: number;
  weeklyActivityHours: number;
}

const KadosportScoreCard = ({ 
  totalPoints, 
  purchasePoints, 
  activityPoints,
  weeklyActivityHours 
}: KadosportScoreCardProps) => {
  const maxWeeklyHours = 4;
  const activityProgress = (weeklyActivityHours / maxWeeklyHours) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="rounded-2xl bg-gradient-to-br from-kado-navy via-kado-navy to-primary/20 p-6 shadow-kado text-white overflow-hidden relative"
    >
      {/* Background decoration */}
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-kado-coral/10 rounded-full blur-2xl" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm">
              <Trophy className="h-5 w-5 text-kado-gold" />
            </div>
            <h3 className="font-display font-semibold text-lg">Kadosport Score</h3>
          </div>
          <div className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
            <Zap className="h-4 w-4 text-kado-gold" />
            <span className="text-sm font-medium">{totalPoints.toLocaleString()} pts</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-xs text-white/70">Achats</span>
            </div>
            <p className="font-display text-xl font-bold">
              {purchasePoints.toLocaleString()} <span className="text-sm font-normal text-white/70">pts</span>
            </p>
            <p className="text-xs text-white/50 mt-1">1€ = 10 pts</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-2 w-2 rounded-full bg-kado-coral" />
              <span className="text-xs text-white/70">Activité</span>
            </div>
            <p className="font-display text-xl font-bold">
              {activityPoints.toLocaleString()} <span className="text-sm font-normal text-white/70">pts</span>
            </p>
            <p className="text-xs text-white/50 mt-1">1h = 10 pts</p>
          </div>
        </div>

        {/* Weekly activity progress */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-white/70">Activité cette semaine</span>
            <span className="text-xs font-medium">{weeklyActivityHours}h / {maxWeeklyHours}h max</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(activityProgress, 100)}%` }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-primary to-kado-coral rounded-full"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default KadosportScoreCard;
