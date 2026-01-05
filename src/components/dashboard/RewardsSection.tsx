import { motion } from "framer-motion";
import { Gift, Ticket, Sparkles, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Reward {
  id: string;
  name: string;
  description: string;
  pointsCost: number;
  type: "promo" | "goodie" | "experience" | "lottery";
  partner: string;
  isAvailable: boolean;
  image?: string;
}

interface RewardsSectionProps {
  rewards: Reward[];
  currentPoints: number;
  lotteryPoints: number;
  lotteryThreshold: number;
}

const RewardsSection = ({ 
  rewards, 
  currentPoints, 
  lotteryPoints,
  lotteryThreshold 
}: RewardsSectionProps) => {
  const availableRewards = rewards.filter(r => r.isAvailable && r.pointsCost <= currentPoints);
  const upcomingRewards = rewards.filter(r => r.pointsCost > currentPoints);

  const getTypeIcon = (type: Reward["type"]) => {
    switch (type) {
      case "promo": return "🏷️";
      case "goodie": return "🎁";
      case "experience": return "⚡";
      case "lottery": return "🎰";
    }
  };

  const lotteryProgress = (lotteryPoints / lotteryThreshold) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="rounded-2xl bg-card border border-border p-6 shadow-kado"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-xl">
            <Gift className="h-5 w-5 text-primary" />
          </div>
          <h3 className="font-display font-semibold text-lg">Récompenses</h3>
        </div>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
          Voir tout
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>

      {/* Lottery card */}
      <div className="mb-6 p-4 bg-gradient-to-r from-kado-gold/10 to-kado-coral/10 rounded-xl border border-kado-gold/20">
        <div className="flex items-center gap-3 mb-3">
          <Ticket className="h-5 w-5 text-kado-gold" />
          <div>
            <h4 className="font-medium">Tirage au sort</h4>
            <p className="text-xs text-muted-foreground">Gagnez des lots exceptionnels !</p>
          </div>
        </div>
        <div className="mb-2">
          <div className="h-2 bg-background/50 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(lotteryProgress, 100)}%` }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-kado-gold to-kado-coral rounded-full"
            />
          </div>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-muted-foreground">{lotteryPoints} pts accumulés</span>
          <span className="font-medium text-kado-gold">{lotteryThreshold} pts pour participer</span>
        </div>
      </div>

      {/* Available rewards */}
      {availableRewards.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="h-4 w-4 text-primary" />
            <h4 className="text-sm font-medium">Disponibles maintenant</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {availableRewards.slice(0, 2).map((reward) => (
              <motion.div
                key={reward.id}
                whileHover={{ scale: 1.02 }}
                className="p-3 bg-primary/5 border border-primary/20 rounded-xl cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{getTypeIcon(reward.type)}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{reward.name}</p>
                    <p className="text-xs text-muted-foreground">{reward.partner}</p>
                    <p className="text-xs font-bold text-primary mt-1">{reward.pointsCost} pts</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Upcoming rewards */}
      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-3">Prochaines récompenses</h4>
        <div className="space-y-2">
          {upcomingRewards.slice(0, 3).map((reward) => (
            <div
              key={reward.id}
              className="flex items-center justify-between p-3 bg-muted/30 rounded-xl opacity-70"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl grayscale">{getTypeIcon(reward.type)}</span>
                <div>
                  <p className="text-sm font-medium">{reward.name}</p>
                  <p className="text-xs text-muted-foreground">{reward.partner}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs font-medium">{reward.pointsCost} pts</p>
                <p className="text-xs text-muted-foreground">
                  -{reward.pointsCost - currentPoints} pts
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default RewardsSection;
