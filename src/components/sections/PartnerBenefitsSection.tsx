import { motion } from "framer-motion";
import { BadgePercent, FileX, Clock, Shield, QrCode, ArrowRight, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const partnerBenefits = [
  {
    icon: BadgePercent,
    title: "0% de commission",
    description: "Aucun frais sur les transactions. Vous recevez 100% du montant payé par le client.",
    highlight: true,
  },
  {
    icon: FileX,
    title: "Pas de contrat",
    description: "Aucun engagement, aucune adhésion préalable. Acceptez Kadosport quand vous voulez.",
    highlight: false,
  },
  {
    icon: Clock,
    title: "Remboursement 48h",
    description: "Le montant est viré sur votre compte bancaire sous 48h après vérification.",
    highlight: true,
  },
  {
    icon: Shield,
    title: "Vérifications automatiques",
    description: "SIRET actif, activité sportive compatible, carte valide et solde suffisant.",
    highlight: false,
  },
  {
    icon: QrCode,
    title: "Process ultra simple",
    description: "Scannez le QR, remplissez le formulaire, confirmation immédiate. C'est tout.",
    highlight: false,
  },
];

const steps = [
  { step: "1", text: "Le client présente sa carte Kadosport" },
  { step: "2", text: "Scannez le QR code ou connectez-vous au site" },
  { step: "3", text: "Renseignez SIRET, RIB, n° de carte et montant" },
  { step: "4", text: "Confirmation immédiate, remboursement sous 48h" },
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const PartnerBenefitsSection = () => {
  return (
    <section id="partners" className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-kado-coral/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-kado-coral/10 text-kado-coral text-sm font-medium mb-4">
            Professionnels du sport
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Pourquoi accepter Kadosport ?
          </h2>
          <p className="text-lg text-muted-foreground">
            Zéro contrainte, zéro frais. Encaissez les cartes Kadosport sans adhésion préalable et recevez votre argent rapidement.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Benefits */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            {partnerBenefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                className={`flex gap-4 p-5 rounded-2xl border ${benefit.highlight ? 'bg-primary/5 border-primary/20' : 'bg-card border-border/50'} hover:shadow-kado transition-all duration-300`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${benefit.highlight ? 'bg-primary/10' : 'bg-muted'}`}>
                  <benefit.icon className={`w-6 h-6 ${benefit.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Process */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-3xl p-8 lg:p-10 border border-border/50 shadow-xl"
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-8">
              Comment récupérer un paiement ?
            </h3>

            <div className="space-y-6 mb-8">
              {steps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-kado-coral text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {item.step}
                  </div>
                  <p className="text-foreground font-medium pt-2">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="pt-6 border-t border-border">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">Commission</p>
                  <p className="font-display text-3xl font-bold text-primary">0%</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Délai remboursement</p>
                  <p className="font-display text-3xl font-bold text-kado-coral">48h</p>
                </div>
              </div>
              
              <Link to="/partner-payment">
                <Button variant="coral" size="lg" className="w-full group gap-2">
                  <CreditCard className="w-5 h-5" />
                  Je débite une carte Kadosport
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
