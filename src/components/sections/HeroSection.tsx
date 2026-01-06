import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Zap, CreditCard, Store, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GiftCard3D } from "@/components/ui/GiftCard3D";
import heroSportsImage from "@/assets/hero-sports.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay - More visible */}
      <div className="absolute inset-0">
        <img 
          src={heroSportsImage} 
          alt="Athlète en action" 
          className="w-full h-full object-cover object-center"
        />
        {/* Less opaque overlay to show more of the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent lg:to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40" />
      </div>
      
      {/* Floating shapes */}
      <motion.div
        className="absolute top-32 left-[15%] w-3 h-3 rounded-full bg-primary/40"
        animate={{ y: [0, -20, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-48 right-[20%] w-4 h-4 rounded-full bg-kado-coral/40"
        animate={{ y: [0, -30, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <CreditCard className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Un véritable moyen de paiement sport
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-6">
              Offrez le sport,{" "}
              <span className="gradient-text">sans limite</span>
            </h1>

            {/* Subheadline - Emphasis on payment method */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed">
              <strong className="text-foreground">La carte cadeau qui fonctionne comme un vrai moyen de paiement.</strong>{" "}
              Utilisable dans les magasins de sport, sites e-commerce, salles de fitness, 
              cours collectifs, et même pour vos événements sportifs.
            </p>

            {/* Use Cases Pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8"
            >
              {["Équipement", "Abonnements", "Cours", "Événements", "E-commerce"].map((item, i) => (
                <span 
                  key={item}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-kado-coral/10 text-kado-coral border border-kado-coral/20"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="xl" className="group">
                Offrir une carte
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Découvrir
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-6 mt-10 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <span>Paiement sécurisé</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-kado-coral/10 flex items-center justify-center">
                  <Store className="w-4 h-4 text-kado-coral" />
                </div>
                <span>+200 partenaires</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-kado-sky/10 flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-kado-sky" />
                </div>
                <span>Valable 12-24 mois</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <GiftCard3D />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
