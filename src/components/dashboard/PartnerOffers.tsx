import { motion } from "framer-motion";
import { Percent, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Offer {
  id: string;
  partner: string;
  logo?: string;
  cashbackPercent: number;
  category: string;
  validUntil: string;
}

interface PartnerOffersProps {
  offers: Offer[];
}

const PartnerOffers = ({ offers }: PartnerOffersProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="rounded-2xl bg-card border border-border p-6 shadow-kado"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-kado-gold/10 rounded-xl">
            <Percent className="h-5 w-5 text-kado-gold" />
          </div>
          <h3 className="font-display font-semibold text-lg">Offres partenaires</h3>
        </div>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
          Voir tout
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>

      <div className="space-y-3">
        {offers.map((offer, index) => (
          <motion.div
            key={offer.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
            className="group flex items-center justify-between p-3 rounded-xl bg-muted/50 hover:bg-muted transition-all cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center shadow-sm border border-border">
                {offer.logo ? (
                  <img src={offer.logo} alt={offer.partner} className="w-8 h-8 object-contain" />
                ) : (
                  <span className="text-lg font-bold text-primary">
                    {offer.partner.charAt(0)}
                  </span>
                )}
              </div>
              <div>
                <p className="font-medium text-foreground">{offer.partner}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>{offer.category}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                <span className="font-bold">{offer.cashbackPercent}%</span>
                <span className="text-xs ml-1">cashback</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {offers.length === 0 && (
        <div className="text-center py-8">
          <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-3">
            <Percent className="h-6 w-6 text-muted-foreground" />
          </div>
          <p className="text-muted-foreground">Aucune offre disponible</p>
        </div>
      )}
    </motion.div>
  );
};

export default PartnerOffers;
