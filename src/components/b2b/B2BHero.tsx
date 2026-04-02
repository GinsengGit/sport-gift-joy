import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Building2, Gift, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const B2BHero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
    <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
    <div className="absolute bottom-0 left-0 w-80 h-80 bg-coral/10 rounded-full blur-3xl" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
        >
          <Building2 className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Entreprises & CSE</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
        >
          Pourquoi choisir <span className="text-transparent bg-clip-text bg-gradient-hero">Kadosport</span> pour votre CSE ou votre entreprise ?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto"
        >
          La pratique sportive est devenue un levier stratégique de qualité de vie au travail. Santé, bien-être, engagement : comment financer le sport sans complexifier la gestion administrative ?
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-xl md:text-2xl font-bold text-foreground mb-8"
        >
          Kadosport apporte une solution <span className="text-primary">claire, simple et adaptée</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/offrir-carte">
            <Button variant="hero" size="lg" className="text-base w-full sm:w-auto">
              <Gift className="w-5 h-5 mr-2" />
              Commander des cartes
            </Button>
          </Link>
          <a href="mailto:contact@kadosport.fr">
            <Button variant="outline" size="lg" className="text-base w-full sm:w-auto">
              <Mail className="w-5 h-5 mr-2" />
              Nous contacter
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);
