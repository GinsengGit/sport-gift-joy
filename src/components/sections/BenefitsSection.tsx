import { motion } from "framer-motion";
import { Check, Globe, Clock, Percent, Shield, Users, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Globe,
    title: "Universelle",
    description: "Valable dans tout l'écosystème sportif : équipements, abonnements, cours, événements...",
  },
  {
    icon: Clock,
    title: "Valable 1 an",
    description: "Une année complète pour profiter de sa carte. Renouvelable facilement.",
  },
  {
    icon: Percent,
    title: "Récompenses exclusives",
    description: "Gagnez des points et débloquez des récompenses chez nos partenaires sportifs.",
  },
  {
    icon: Shield,
    title: "100% sécurisée",
    description: "Carte nominative avec KYC. Vos données et transactions sont protégées.",
  },
  {
    icon: Users,
    title: "Cadeau commun",
    description: "Créez un lien et laissez plusieurs personnes contribuer au même cadeau.",
  },
  {
    icon: Smartphone,
    title: "100% digitale",
    description: "Pas de plastique. Reçue instantanément par email. Toujours dans votre poche.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-kado-coral/10 text-kado-coral text-sm font-medium mb-4">
              Pourquoi Kadosport ?
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Plus qu'une carte cadeau,{" "}
              <span className="text-primary">une expérience</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Kadosport n'est pas une carte cadeau classique. C'est un passeport vers 
              l'univers du sport, avec des avantages exclusifs et une liberté totale.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              {[
                "Acceptée partout dans l'écosystème sportif",
                "Récompenses exclusives chez +200 partenaires",
                "Solde remboursable à l'expiration",
              ].map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{point}</span>
                </motion.div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              Découvrir tous les avantages
            </Button>
          </motion.div>

          {/* Right Content - Benefits Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 gap-4 lg:gap-5"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                className={`group p-5 lg:p-6 rounded-2xl border border-border/50 bg-card hover:bg-card/80 hover:shadow-kado transition-all duration-300 hover:-translate-y-1 ${
                  index === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-kado">
                  <benefit.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
