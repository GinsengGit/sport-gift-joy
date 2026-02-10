import { motion } from "framer-motion";
import { Check, QrCode, Clock, Shield, Smartphone, Zap, Users, Percent, Lock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import coachingImage from "@/assets/coaching-fitness.jpg";
import climbingImage from "@/assets/climbing-adventure.jpg";
import waterSportsImage from "@/assets/water-sports.jpg";
import gymImage from "@/assets/gym-fitness.jpg";
import { Badge } from "@/components/ui/badge";

const benefits = [
  {
    icon: QrCode,
    title: "QR code universel",
    description: "Un seul code pour payer chez tous les professionnels du sport. Pas besoin de réseau fermé.",
  },
  {
    icon: Zap,
    title: "Réseau ouvert",
    description: "Tout professionnel du sport peut accepter Kadosport, sans contrat préalable ni adhésion.",
  },
  {
    icon: Clock,
    title: "Valable 24 mois",
    description: "Prenez votre temps pour profiter de votre cadeau. Renouvelable si besoin.",
  },
  {
    icon: Shield,
    title: "100% sécurisé",
    description: "Vérification automatique du SIRET, de l'activité sportive et du solde à chaque transaction.",
  },
  {
    icon: Users,
    title: "Cadeau commun",
    description: "Créez une cagnotte et laissez plusieurs personnes contribuer au même cadeau.",
  },
  {
    icon: Percent,
    title: "Avantages exclusifs",
    description: "Réservé aux bénéficiaires : profitez de remises négociées sur l'équipement et le matériel sportif.",
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
              Pour les bénéficiaires
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Une liberté totale{" "}
              <span className="text-primary">sans limites</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              La carte Kadosport ouvre les portes de tout l'univers sportif. 
              Pas de réseau fermé, pas de liste à consulter : 
              tout professionnel du sport peut l'accepter.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              {[
                "Salles de sport et fitness",
                "Coachs et cours particuliers",
                "Clubs sportifs et associations",
                "Événements : marathons, courses, compétitions",
                "Loisirs sportifs : escalade, paddle, ski...",
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

            <Link to="/offrir-carte">
              <Button variant="hero" size="lg">
                Offrir une carte
              </Button>
            </Link>
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
                  src={coachingImage} 
                  alt="Coaching sportif" 
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
                  src={climbingImage} 
                  alt="Escalade aventure" 
                  className="w-full h-64 object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="rounded-2xl overflow-hidden shadow-kado"
              >
                <img 
                  src={waterSportsImage} 
                  alt="Sports nautiques" 
                  className="w-full h-64 object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="rounded-2xl overflow-hidden shadow-kado mt-8"
              >
                <img 
                  src={gymImage} 
                  alt="Salle de fitness" 
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
                  <QrCode className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display font-bold text-2xl text-foreground">∞</p>
                  <p className="text-sm text-muted-foreground">pros du sport acceptés</p>
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
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-16"
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

        {/* Exclusive Offers Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-kado-gold/10 via-primary/5 to-kado-coral/10 border border-kado-gold/20 p-8 lg:p-12"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-kado-gold/20 rounded-xl">
                <Percent className="h-6 w-6 text-kado-gold" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  🎁 Avantages exclusifs Kadosport
                </h3>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8 space-y-3">
            <p className="text-foreground font-medium">
              En plus de votre crédit sport, profitez d'offres privilégiées sur l'équipement et le matériel sportif.
            </p>
            <p className="text-muted-foreground">
              Running, fitness, outdoor, bien-être… Des conditions avantageuses accessibles uniquement aux bénéficiaires Kadosport, depuis leur espace personnel.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Lock className="h-4 w-4 text-kado-gold flex-shrink-0" />
              <span>Offres proposées par des enseignes du sport, achat réalisé directement chez le commerçant.</span>
            </div>
          </div>

          {/* Category tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {["Running", "Fitness", "Outdoor", "Bien-être", "Vélo", "Sports collectifs"].map((cat) => (
              <Badge key={cat} variant="secondary" className="text-sm px-3 py-1">
                {cat}
              </Badge>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Activez votre carte pour découvrir toutes les offres dans votre espace personnel.
            </p>
            <Link to="/offrir-carte">
              <Button variant="hero" size="lg" className="group">
                Obtenir ma carte Kadosport
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
