import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const partners = [
  { name: "Decathlon", bonus: "x2 pts", category: "Équipement" },
  { name: "Basic-Fit", bonus: "x3 pts", category: "Fitness" },
  { name: "Go Sport", bonus: "x2 pts", category: "Équipement" },
  { name: "Fitness Park", bonus: "x3 pts", category: "Fitness" },
  { name: "Intersport", bonus: "x2 pts", category: "Équipement" },
  { name: "Nike", bonus: "x2 pts", category: "Sportswear" },
  { name: "Adidas", bonus: "x2 pts", category: "Sportswear" },
  { name: "Alltricks", bonus: "x2 pts", category: "Cyclisme" },
];

export const PartnersSection = () => {
  return (
    <section id="partners" className="py-24 lg:py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="partner-grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="0.5" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#partner-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-4">
            +200 partenaires
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Récompenses exclusives chez nos partenaires
          </h2>
          <p className="text-lg text-secondary-foreground/80">
            Multipliez vos points et débloquez des avantages chez les plus grandes enseignes sportives.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 mb-12"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group bg-secondary-foreground/5 hover:bg-secondary-foreground/10 rounded-2xl p-5 lg:p-6 border border-secondary-foreground/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Partner Logo Placeholder */}
              <div className="w-full h-12 mb-4 flex items-center justify-center">
                <span className="font-display font-bold text-lg text-secondary-foreground/90 group-hover:text-secondary-foreground transition-colors">
                  {partner.name}
                </span>
              </div>

              {/* Bonus Badge */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-secondary-foreground/60">{partner.category}</span>
                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-primary/20 text-primary-foreground">
                  <span className="text-xs font-bold">{partner.bonus}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Button variant="hero" size="lg" className="group">
            Voir tous les partenaires
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
