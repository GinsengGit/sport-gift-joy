import { motion } from "framer-motion";
import { Medal, Lock, Check, Gift } from "lucide-react";

interface MedalTier {
  id: string;
  name: string;
  emoji: string;
  pointsRequired: number;
  reward: string;
  isUnlocked: boolean;
  isCurrent: boolean;
}

interface MedalProgressProps {
  currentPoints: number;
  medals: MedalTier[];
}

const MedalProgress = ({ currentPoints, medals }: MedalProgressProps) => {
  const currentMedalIndex = medals.findIndex(m => m.isCurrent);
  const nextMedal = medals.find(m => !m.isUnlocked);
  const progressToNext = nextMedal 
    ? ((currentPoints - (medals[medals.indexOf(nextMedal) - 1]?.pointsRequired || 0)) / 
       (nextMedal.pointsRequired - (medals[medals.indexOf(nextMedal) - 1]?.pointsRequired || 0))) * 100
    : 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="rounded-2xl bg-card border border-border p-6 shadow-kado"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-kado-gold/10 rounded-xl">
            <Medal className="h-5 w-5 text-kado-gold" />
          </div>
          <h3 className="font-display font-semibold text-lg">Médailles</h3>
        </div>
        {nextMedal && (
          <span className="text-xs text-muted-foreground">
            {nextMedal.pointsRequired - currentPoints} pts restants
          </span>
        )}
      </div>

      {/* Progress bar */}
      {nextMedal && (
        <div className="mb-6">
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progressToNext, 100)}%` }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-full bg-gradient-to-r from-kado-gold to-kado-coral rounded-full"
            />
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-xs text-muted-foreground">
              {medals[medals.indexOf(nextMedal) - 1]?.name || "Départ"}
            </span>
            <span className="text-xs font-medium text-kado-gold">{nextMedal.name}</span>
          </div>
        </div>
      )}

      {/* Medal tiers */}
      <div className="space-y-3">
        {medals.map((medal, index) => (
          <motion.div
            key={medal.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
            className={`flex items-center gap-4 p-3 rounded-xl transition-all ${
              medal.isCurrent 
                ? "bg-primary/10 border border-primary/20" 
                : medal.isUnlocked 
                  ? "bg-muted/50" 
                  : "bg-muted/30 opacity-60"
            }`}
          >
            <div className={`text-3xl ${!medal.isUnlocked && "grayscale"}`}>
              {medal.emoji}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className={`font-medium ${medal.isCurrent ? "text-primary" : ""}`}>
                  {medal.name}
                </span>
                {medal.isUnlocked && (
                  <Check className="h-4 w-4 text-primary" />
                )}
                {!medal.isUnlocked && (
                  <Lock className="h-3 w-3 text-muted-foreground" />
                )}
              </div>
              <p className="text-xs text-muted-foreground truncate">
                {medal.pointsRequired.toLocaleString()} pts • {medal.reward}
              </p>
            </div>

            {medal.isUnlocked && (
              <button className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors">
                <Gift className="h-4 w-4 text-primary" />
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MedalProgress;
