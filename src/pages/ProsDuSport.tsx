import { motion } from "framer-motion";
import { 
  ArrowRight, 
  BadgeCheck, 
  Check,
  CreditCard, 
  HandCoins, 
  QrCode, 
  Shield, 
  Users, 
  Zap,
  ChevronLeft,
  Building2,
  Dumbbell,
  Mountain,
  Waves,
  Banknote,
  FileCheck,
  UserCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import siretBadge from "@/assets/siret-badge.png";

const steps = [
  {
    num: 1,
    title: "Un client arrive avec Kadosport",
    description: "Il vous présente sa carte cadeau digitale.",
    icon: UserCheck,
  },
  {
    num: 2,
    title: "Vous déclarez l'encaissement",
    description: "Via l'interface simple et rapide.",
    icon: QrCode,
  },
  {
    num: 3,
    title: "Vérification SIRET et activité",
    description: "Validation requise pour le premier remboursement.",
    icon: FileCheck,
  },
  {
    num: 4,
    title: "Remboursement sous 48h ouvrées",
    description: "Par virement bancaire sur votre compte.",
    icon: Banknote,
  },
];

const eligibleActivities = [
  { icon: Dumbbell, label: "Salles de sport & Fitness" },
  { icon: Users, label: "Coachs sportifs" },
  { icon: Mountain, label: "Activités outdoor" },
  { icon: Waves, label: "Sports nautiques" },
  { icon: Zap, label: "Sports extrêmes" },
  { icon: Building2, label: "Clubs & Associations" },
];

const keyPoints = [
  "Réservé aux professionnels du sport",
  "Vérification administrative",
  "Remboursement bancaire",
  "Zéro commission",
];

const ProsDuSport = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ChevronLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <HandCoins className="w-4 h-4" />
              Zéro commission
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              Professionnels du sport :{" "}
              <span className="gradient-text">encaissez Kadosport</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              <strong className="text-foreground">0% de commission prélevée.</strong>{" "}
              Dispositif de remboursement réservé aux professionnels du sport disposant d'un SIRET valide.
            </p>
            <Link to="/partner-payment">
              <Button variant="hero" size="xl" className="group">
                <QrCode className="w-5 h-5 mr-2" />
                Encaisser Kadosport
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* Comment ça fonctionne */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Comment ça fonctionne ?
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-card rounded-2xl p-6 border border-border shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-display font-bold text-lg flex items-center justify-center">
                      {step.num}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="inline-flex items-center gap-3 px-6 py-4 bg-primary/10 rounded-2xl border border-primary/20">
                <BadgeCheck className="w-6 h-6 text-primary" />
                <span className="font-semibold text-foreground">Aucune commission prélevée</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vérification & Sécurité */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-card rounded-3xl p-8 border border-border shadow-lg">
                <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
                  <img src={siretBadge} alt="SIRET vérifié" className="h-20 w-auto" />
                  <div>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
                      Vérification & sécurité
                    </h2>
                    <p className="text-lg text-primary font-semibold">
                      Vérification SIRET automatique
                    </p>
                  </div>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Les remboursements sont <strong className="text-foreground">réservés aux professionnels du sport</strong>.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <BadgeCheck className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>L'entreprise est <strong className="text-foreground">vérifiée avant le premier remboursement</strong>.</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Qui peut encaisser */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Qui peut encaisser Kadosport ?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Exclusivement les professionnels déclarés proposant des activités de pratique sportive.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {eligibleActivities.map((activity, index) => (
                <motion.div
                  key={activity.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex flex-col items-center p-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <activity.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-center text-foreground">{activity.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* À retenir */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">
                À retenir
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {keyPoints.map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-hero rounded-3xl p-8 lg:p-12 text-center"
            >
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
                Prêt à encaisser votre première carte ?
              </h2>
              <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
                Interface simple, remboursement garanti sous 48h, zéro commission.
              </p>
              <Link to="/partner-payment">
                <Button 
                  variant="outline" 
                  size="xl" 
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-none group"
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  Encaisser Kadosport
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProsDuSport;
