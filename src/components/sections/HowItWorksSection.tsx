import { motion } from "framer-motion";
import { Gift, QrCode, Store, CreditCard, Check, Clock } from "lucide-react";

const userSteps = [
  {
    icon: Gift,
    title: "Achetez une carte",
    description: "Choisissez le montant (20€ à 500€) et personnalisez votre cadeau sport.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: QrCode,
    title: "QR code unique",
    description: "Le bénéficiaire reçoit sa carte avec un QR code personnel et sécurisé.",
    color: "bg-kado-coral/10 text-kado-coral",
  },
  {
    icon: Store,
    title: "Présentez chez un pro",
    description: "Chez n'importe quel professionnel du sport : salle, club, coach, événement...",
    color: "bg-kado-sky/10 text-kado-sky",
  },
  {
    icon: Check,
    title: "C'est payé !",
    description: "Le partenaire scanne, le montant est débité. Simple, rapide, sans limite d'enseigne.",
    color: "bg-kado-gold/10 text-kado-gold",
  },
];

const partnerSteps = [
  {
    icon: QrCode,
    title: "Scannez le QR",
    description: "Le client présente sa carte Kadosport avec son QR code unique.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: CreditCard,
    title: "Remplissez le formulaire",
    description: "SIRET, nom commercial, RIB, numéro de carte et montant à débiter.",
    color: "bg-kado-coral/10 text-kado-coral",
  },
  {
    icon: Check,
    title: "Confirmation immédiate",
    description: "Vérification automatique : SIRET actif, activité sportive, solde suffisant.",
    color: "bg-kado-sky/10 text-kado-sky",
  },
  {
    icon: Clock,
    title: "Remboursé sous 48h",
    description: "Le montant est viré sur votre compte bancaire. 0% de commission.",
    color: "bg-kado-gold/10 text-kado-gold",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-glow opacity-40" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Simple comme bonjour
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comment ça marche ?
          </h2>
          <p className="text-lg text-muted-foreground">
            Un système simple et sécurisé, sans carte bancaire complexe, sans contrat partenaire.
          </p>
        </motion.div>

        {/* User Steps */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center font-display text-2xl font-bold text-foreground mb-10"
          >
            <span className="text-primary">Pour le bénéficiaire</span>
          </motion.h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {userSteps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="group relative"
              >
                {/* Connector Line (desktop only) */}
                {index < userSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-border to-transparent" />
                )}

                <div className="relative bg-card rounded-2xl p-6 lg:p-8 border border-border/50 shadow-sm hover:shadow-kado transition-all duration-300 hover:-translate-y-1">
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-kado">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-7 h-7" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Partner Steps */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center font-display text-2xl font-bold text-foreground mb-10"
          >
            <span className="text-kado-coral">Pour le partenaire</span>
          </motion.h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {partnerSteps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="group relative"
              >
                {/* Connector Line (desktop only) */}
                {index < partnerSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-kado-coral/30 to-transparent" />
                )}

                <div className="relative bg-card rounded-2xl p-6 lg:p-8 border border-kado-coral/20 shadow-sm hover:shadow-kado transition-all duration-300 hover:-translate-y-1">
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-kado-coral text-white flex items-center justify-center font-bold text-sm shadow-kado">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-7 h-7" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
