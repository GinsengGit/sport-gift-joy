import { motion } from "framer-motion";
import { Wallet, Eye, EyeOff, RefreshCw } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface BalanceCardProps {
  balance: number;
  cardNumber: string;
  expirationDate: string;
}

const BalanceCard = ({ balance, cardNumber, expirationDate }: BalanceCardProps) => {
  const [showBalance, setShowBalance] = useState(true);

  const formatCardNumber = (num: string) => {
    return num.replace(/(.{4})/g, '$1 ').trim();
  };

  const daysUntilExpiration = () => {
    const today = new Date();
    const expDate = new Date(expirationDate);
    const diffTime = expDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const days = daysUntilExpiration();
  const isExpiringSoon = days <= 30 && days > 0;
  const isExpired = days <= 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-3xl bg-gradient-card p-6 md:p-8 text-primary-foreground shadow-kado-navy"
    >
      {/* Background decoration */}
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white/5 blur-xl" />
      
      {/* Card content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
              <Wallet className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-white/70">Carte Kadosport</p>
              <p className="font-display font-semibold text-lg">{formatCardNumber(cardNumber)}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowBalance(!showBalance)}
            className="text-white hover:bg-white/10"
          >
            {showBalance ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </Button>
        </div>

        <div className="mb-6">
          <p className="text-sm text-white/70 mb-1">Solde disponible</p>
          <motion.div
            key={showBalance ? "visible" : "hidden"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-6xl font-bold tracking-tight"
          >
            {showBalance ? `${balance.toFixed(2)} €` : "••••••"}
          </motion.div>
        </div>

        <div className="flex items-center justify-between border-t border-white/20 pt-4">
          <div>
            <p className="text-xs text-white/60">Expire le</p>
            <p className="font-medium">
              {new Date(expirationDate).toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </p>
          </div>
          {isExpired ? (
            <div className="flex items-center gap-2 bg-destructive/20 px-3 py-1.5 rounded-full">
              <span className="text-sm font-medium">Carte expirée</span>
            </div>
          ) : isExpiringSoon ? (
            <div className="flex items-center gap-2 bg-kado-coral/20 px-3 py-1.5 rounded-full">
              <span className="text-sm font-medium">{days} jours restants</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
              <span className="text-sm font-medium">{days} jours restants</span>
            </div>
          )}
        </div>

        {(isExpiringSoon || isExpired) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-4"
          >
            <Button 
              className="w-full bg-white text-kado-emerald-dark hover:bg-white/90 font-semibold"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              {isExpired ? "Réactiver ma carte" : "Prolonger ma carte"}
            </Button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default BalanceCard;
