import { motion } from "framer-motion";
import { Check, Gift, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const amounts = [20, 30, 50, 75, 100, 150, 200, 500];

export const PricingSection = () => {
  return (
    <section id="offer" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-glow opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Offrir une carte
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Choisissez votre montant
          </h2>
          <p className="text-lg text-muted-foreground">
            Frais d'activation uniques de 7,90€. Pas d'abonnement, pas de frais cachés.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card rounded-3xl border border-border shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-hero p-6 lg:p-8 text-primary-foreground">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                  <Gift className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">Carte Kadosport</h3>
                  <p className="text-sm opacity-80">Carte cadeau digitale</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 lg:p-8">
              {/* Amount Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-muted-foreground mb-4">
                  Montant de la carte
                </label>
                <div className="grid grid-cols-4 gap-2 lg:gap-3">
                  {amounts.map((amount, index) => (
                    <motion.button
                      key={amount}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03 }}
                      className={`py-3 lg:py-4 rounded-xl font-bold text-sm lg:text-base transition-all duration-200 ${
                        amount === 100
                          ? "bg-primary text-primary-foreground shadow-kado"
                          : "bg-muted text-foreground hover:bg-primary/10 hover:text-primary"
                      }`}
                    >
                      {amount}€
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Price Summary */}
              <div className="bg-muted/50 rounded-2xl p-5 mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-muted-foreground">Montant carte</span>
                  <span className="font-semibold text-foreground">100,00 €</span>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-muted-foreground">Frais d'activation</span>
                  <span className="font-semibold text-foreground">7,90 €</span>
                </div>
                <div className="h-px bg-border my-4" />
                <div className="flex justify-between items-center">
                  <span className="font-bold text-foreground">Total</span>
                  <span className="font-display text-2xl font-bold text-primary">107,90 €</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {[
                  "Livraison instantanée par email",
                  "Valable 1 an",
                  "Cashback chez +200 partenaires",
                  "Option cadeau commun disponible",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button variant="hero" size="xl" className="w-full group">
                Offrir cette carte
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
