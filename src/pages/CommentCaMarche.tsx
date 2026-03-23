import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Gift,
  QrCode,
  Store,
  Check,
  CreditCard,
  Clock,
  Shield,
  ArrowRight,
  Dumbbell,
  Users,
  Mountain,
  Trophy,
  Heart,
  Bike,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import siretBadge from "@/assets/siret-badge.png";

const beneficiarySteps = [
  {
    num: "1",
    icon: Gift,
    title: "Recevez votre carte Kadosport",
    description:
      "Un proche, votre entreprise ou votre CSE vous offre une carte cadeau sport. Vous la recevez instantanément par email avec votre QR code personnel.",
    color: "bg-primary/10 text-primary",
  },
  {
    num: "2",
    icon: Store,
    title: "Choisissez votre activité sportive",
    description:
      "Salle de fitness, coach sportif, club, activité outdoor, centre aquatique… Rendez-vous chez le professionnel du sport de votre choix, partout en France.",
    color: "bg-kado-coral/10 text-kado-coral",
  },
  {
    num: "3",
    icon: QrCode,
    title: "Présentez votre carte au professionnel",
    description:
      "Montrez votre QR code ou communiquez votre numéro de carte au professionnel du sport. Il accède à la plateforme Kadosport pour déclarer l'encaissement.",
    color: "bg-kado-sky/10 text-kado-sky",
  },
  {
    num: "4",
    icon: Check,
    title: "C'est payé, profitez de votre sport !",
    description:
      "Le montant est débité de votre carte. Aucune manipulation bancaire côté bénéficiaire. Simple, rapide, sécurisé.",
    color: "bg-kado-gold/10 text-kado-gold",
  },
];

const proSteps = [
  {
    num: "1",
    icon: QrCode,
    title: "Scannez le QR code du client",
    description:
      "Le client vous présente sa carte Kadosport. Scannez le QR code ou rendez-vous sur kadosport.fr/encaisser-une-carte.",
    color: "bg-primary/10 text-primary",
  },
  {
    num: "2",
    icon: CreditCard,
    title: "Déclarez l'encaissement",
    description:
      "Renseignez le montant à débiter et votre email professionnel. La plateforme vérifie automatiquement votre SIRET et l'activité sportive.",
    color: "bg-kado-coral/10 text-kado-coral",
  },
  {
    num: "3",
    icon: Shield,
    title: "Vérification automatique",
    description:
      "Kadosport vérifie en temps réel : SIRET actif, activité sportive éligible, solde suffisant sur la carte. Confirmation immédiate.",
    color: "bg-kado-sky/10 text-kado-sky",
  },
  {
    num: "4",
    icon: Clock,
    title: "Remboursement sous 48h",
    description:
      "Le montant est viré directement sur votre compte bancaire sous 48h. Zéro commission, zéro frais.",
    color: "bg-kado-gold/10 text-kado-gold",
  },
];

const eligiblePros = [
  { icon: Dumbbell, label: "Salles de sport & fitness" },
  { icon: Users, label: "Coachs sportifs indépendants" },
  { icon: Mountain, label: "Activités outdoor & nature" },
  { icon: Trophy, label: "Clubs & associations sportives" },
  { icon: Heart, label: "Centres bien-être & yoga" },
  { icon: Bike, label: "Centres sportifs & loisirs" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CommentCaMarche = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative pt-28 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-kado-coral/5" />
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Guide complet
              </span>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Comment fonctionne la{" "}
                <span className="text-primary">carte cadeau Kadosport</span> ?
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Un système simple et sécurisé pour offrir et encaisser du sport,
                chez tous les professionnels du sport déclarés en France.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Beneficiary Steps */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                <span className="text-primary">Pour le bénéficiaire</span> — utiliser sa carte
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Vous avez reçu une carte Kadosport ? Voici comment l'utiliser en 4 étapes.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            >
              {beneficiarySteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={itemVariants}
                  className="group relative"
                >
                  {index < beneficiarySteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-border to-transparent" />
                  )}
                  <div className="relative bg-card rounded-2xl p-6 lg:p-8 border border-border/50 shadow-sm hover:shadow-kado transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-kado">
                      {step.num}
                    </div>
                    <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Eligible professionals */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-10">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <img
                    src={siretBadge}
                    alt="SIRET vérifié — professionnel du sport déclaré"
                    className="h-20 w-auto drop-shadow-lg"
                  />
                </div>
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Carte cadeau encaissable exclusivement par un{" "}
                  <span className="text-primary">professionnel du sport déclaré</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  La carte Kadosport est un dispositif de financement de la pratique sportive.
                  Seuls les professionnels disposant d'un SIRET valide avec une activité sportive
                  éligible peuvent encaisser les cartes.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {eligiblePros.map((pro, index) => (
                  <motion.div
                    key={pro.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <pro.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{pro.label}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Vérification SIRET automatique</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-kado-coral/10 border border-kado-coral/20 rounded-full">
                  <Check className="w-4 h-4 text-kado-coral" />
                  <span className="text-sm font-medium text-foreground">0% commission</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-kado-gold/10 border border-kado-gold/20 rounded-full">
                  <Clock className="w-4 h-4 text-kado-gold" />
                  <span className="text-sm font-medium text-foreground">Remboursement sous 48h</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pro Steps */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                <span className="text-kado-coral">Pour le professionnel du sport</span> — encaisser une carte
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Vous êtes un professionnel du sport déclaré ? Encaissez les cartes Kadosport sans commission.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            >
              {proSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={itemVariants}
                  className="group relative"
                >
                  {index < proSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-kado-coral/30 to-transparent" />
                  )}
                  <div className="relative bg-card rounded-2xl p-6 lg:p-8 border border-kado-coral/20 shadow-sm hover:shadow-kado transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-kado-coral text-white flex items-center justify-center font-bold text-sm shadow-kado">
                      {step.num}
                    </div>
                    <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6"
            >
              <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-8 text-center">
                <Gift className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  Vous souhaitez offrir du sport ?
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Offrez une carte cadeau Kadosport à un proche, un salarié, un sportif.
                </p>
                <Link to="/offrir-carte">
                  <Button variant="hero" size="lg" className="w-full">
                    Offrir une carte Kadosport
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-kado-coral/10 to-kado-coral/5 border border-kado-coral/20 p-8 text-center">
                <QrCode className="w-10 h-10 text-kado-coral mx-auto mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  Vous êtes professionnel du sport ?
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Encaissez les cartes Kadosport sans commission, sans contrat préalable.
                </p>
                <Link to="/partner-payment">
                  <Button variant="hero" size="lg" className="w-full bg-kado-coral hover:bg-kado-coral/90">
                    Encaisser une carte
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CommentCaMarche;