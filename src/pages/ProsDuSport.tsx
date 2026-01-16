import { motion } from "framer-motion";
import { 
  ArrowRight, 
  BadgeCheck, 
  Clock, 
  CreditCard, 
  Euro, 
  HandCoins, 
  QrCode, 
  Shield, 
  Smartphone, 
  Users, 
  Zap,
  ChevronLeft,
  Building2,
  Dumbbell,
  Mountain,
  Waves
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import siretBadge from "@/assets/siret-badge.png";

const benefits = [
  {
    icon: Euro,
    title: "0% de commission",
    description: "Recevez 100% du montant de la carte. Aucun frais caché, jamais.",
    highlight: true,
  },
  {
    icon: Clock,
    title: "Paiement sous 48h",
    description: "Virement bancaire automatique après validation de la transaction.",
  },
  {
    icon: Shield,
    title: "Zéro contrat",
    description: "Pas d'engagement, pas de paperasse. Inscrivez-vous et encaissez.",
  },
  {
    icon: Users,
    title: "Nouveaux clients",
    description: "Accédez à une communauté de sportifs motivés prêts à découvrir votre activité.",
  },
  {
    icon: Smartphone,
    title: "Simple comme un scan",
    description: "Le client présente son QR code, vous scannez, c'est encaissé.",
  },
  {
    icon: BadgeCheck,
    title: "SIRET vérifié",
    description: "Seuls les vrais professionnels du sport peuvent encaisser.",
  },
];

const steps = [
  {
    num: 1,
    title: "Le client arrive",
    description: "Un sportif vient chez vous avec sa carte Kadosport digitale.",
  },
  {
    num: 2,
    title: "Scannez le QR code",
    description: "Utilisez l'interface d'encaissement depuis votre smartphone.",
  },
  {
    num: 3,
    title: "Entrez le montant",
    description: "Saisissez le montant de la prestation à débiter de la carte.",
  },
  {
    num: 4,
    title: "Recevez votre paiement",
    description: "Virement automatique sous 48h sur votre compte bancaire.",
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
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <HandCoins className="w-4 h-4" />
              Pour les professionnels du sport
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              Encaissez les cartes Kadosport{" "}
              <span className="gradient-text">sans aucune commission</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Rejoignez le réseau Kadosport et accédez à de nouveaux clients. 
              Inscription gratuite, 0% de commission, paiement garanti sous 48h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/partner-payment">
                <Button variant="hero" size="xl" className="group w-full sm:w-auto">
                  <QrCode className="w-5 h-5 mr-2" />
                  Encaisser une carte
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/faq">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  Questions fréquentes
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-20"
          >
            <div className="inline-flex items-center gap-4 px-6 py-4 bg-card rounded-2xl border border-border shadow-lg">
              <img src={siretBadge} alt="SIRET vérifié" className="h-12 w-auto" />
              <div className="text-left">
                <p className="font-semibold text-foreground">Réseau sécurisé</p>
                <p className="text-sm text-muted-foreground">Vérification SIRET obligatoire</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Pourquoi rejoindre Kadosport ?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Un modèle économique transparent qui privilégie les professionnels du sport.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-6 rounded-2xl border ${
                    benefit.highlight 
                      ? "bg-gradient-hero text-primary-foreground border-transparent" 
                      : "bg-card border-border"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    benefit.highlight 
                      ? "bg-primary-foreground/20" 
                      : "bg-primary/10"
                  }`}>
                    <benefit.icon className={`w-6 h-6 ${
                      benefit.highlight ? "text-primary-foreground" : "text-primary"
                    }`} />
                  </div>
                  <h3 className={`font-display font-bold text-lg mb-2 ${
                    benefit.highlight ? "text-primary-foreground" : "text-foreground"
                  }`}>
                    {benefit.title}
                  </h3>
                  <p className={benefit.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}>
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
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
              <p className="text-muted-foreground max-w-xl mx-auto">
                Un processus simple et rapide pour encaisser les cartes Kadosport.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground font-display font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                      {step.num}
                    </div>
                    <h3 className="font-display font-bold text-lg mb-2 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligible Activities */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Qui peut rejoindre le réseau ?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Tous les professionnels proposant des activités sportives ou de loisirs actifs.
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

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center text-muted-foreground mt-8"
            >
              <strong className="text-foreground">Condition unique :</strong> être un professionnel déclaré avec un numéro SIRET valide.
            </motion.p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-hero rounded-3xl p-8 lg:p-12 text-center"
            >
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
                Prêt à recevoir vos premiers clients Kadosport ?
              </h2>
              <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
                Aucune inscription préalable nécessaire. Scannez votre première carte dès maintenant.
              </p>
              <Link to="/partner-payment">
                <Button 
                  variant="outline" 
                  size="xl" 
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-none group"
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  Encaisser une carte
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
