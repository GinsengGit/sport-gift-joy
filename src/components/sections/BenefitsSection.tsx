import { motion } from "framer-motion";
import { Check, Globe, Clock, Award, Shield, Users, Smartphone, Store, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import sportsActivitiesImage from "@/assets/sports-activities.jpg";
import sportsStoreImage from "@/assets/sports-store.jpg";

const benefits = [
  {
    icon: CreditCard,
    title: "Vrai moyen de paiement",
    description: "Fonctionne comme une carte bancaire dans tout l'écosystème sportif : magasins, sites web, apps.",
  },
  {
    icon: Store,
    title: "Acceptée partout",
    description: "Magasins de sport, salles de fitness, cours collectifs, événements, e-commerce spécialisé...",
  },
  {
    icon: Clock,
    title: "Valable jusqu'à 24 mois",
    description: "Choisissez la durée de validité : 12, 18 ou 24 mois. Renouvelable facilement.",
  },
  {
    icon: Award,
    title: "Récompenses exclusives",
    description: "Gagnez des points Kadosport et débloquez des récompenses chez nos partenaires sportifs.",
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
        {/* Main Grid with Image */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-kado-coral/10 text-kado-coral text-sm font-medium mb-4">
              Un vrai moyen de paiement
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Utilisable dans{" "}
              <span className="text-primary">tout l'écosystème sportif</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              La carte Kadosport n'est pas une carte cadeau ordinaire. C'est un véritable 
              moyen de paiement accepté dans plus de 200 enseignes et sites partenaires.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              {[
                "Magasins de sport : Decathlon, Intersport, Go Sport...",
                "Sites e-commerce : équipements, vêtements, nutrition",
                "Salles de fitness et cours collectifs",
                "Événements sportifs : marathons, courses, compétitions",
                "Loisirs : escalade, tennis, natation, yoga...",
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
              Voir tous les partenaires
            </Button>
          </motion.div>

          {/* Right Content - Images */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-2xl overflow-hidden shadow-kado"
              >
                <img 
                  src={sportsActivitiesImage} 
                  alt="Activités sportives diverses" 
                  className="w-full h-64 object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="rounded-2xl overflow-hidden shadow-kado mt-8"
              >
                <img 
                  src={sportsStoreImage} 
                  alt="Magasin de sport" 
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            </div>
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card border border-border rounded-2xl px-6 py-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center">
                  <Store className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display font-bold text-2xl text-foreground">+200</p>
                  <p className="text-sm text-muted-foreground">partenaires</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="group p-6 rounded-2xl border border-border/50 bg-card hover:bg-card/80 hover:shadow-kado transition-all duration-300 hover:-translate-y-1"
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
    </section>
  );
};
