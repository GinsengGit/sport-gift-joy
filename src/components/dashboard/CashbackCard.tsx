import { motion } from "framer-motion";
import { Gift, TrendingUp, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CashbackCardProps {
  totalCashback: number;
  pendingCashback: number;
}

const CashbackCard = ({ totalCashback, pendingCashback }: CashbackCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="rounded-2xl bg-card border border-border p-6 shadow-kado"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-kado-coral/10 rounded-xl">
            <Gift className="h-5 w-5 text-kado-coral" />
          </div>
          <h3 className="font-display font-semibold text-lg">Cashback</h3>
        </div>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
          Voir les offres
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-muted/50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="text-xs text-muted-foreground">Cumulé</span>
          </div>
          <p className="font-display text-2xl font-bold text-primary">
            {totalCashback.toFixed(2)} €
          </p>
          <p className="text-xs text-muted-foreground mt-1">Disponible</p>
        </div>

        <div className="bg-muted/50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-2 w-2 rounded-full bg-kado-gold animate-pulse" />
            <span className="text-xs text-muted-foreground">En attente</span>
          </div>
          <p className="font-display text-2xl font-bold text-kado-gold">
            {pendingCashback.toFixed(2)} €
          </p>
          <p className="text-xs text-muted-foreground mt-1">Sous 30 jours</p>
        </div>
      </div>

      <div className="mt-4 p-3 bg-primary/5 border border-primary/10 rounded-xl">
        <p className="text-sm text-muted-foreground">
          <span className="text-primary font-medium">Astuce :</span> Utilisez votre carte chez nos partenaires pour gagner jusqu'à 10% de cashback !
        </p>
      </div>
    </motion.div>
  );
};

export default CashbackCard;
