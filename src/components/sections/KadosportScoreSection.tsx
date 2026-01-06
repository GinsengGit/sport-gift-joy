import { motion } from "framer-motion";
import { Trophy, ShoppingBag, Activity, Gift, Medal, Star } from "lucide-react";
import athleteCelebrationImage from "@/assets/athlete-celebration.jpg";

const features = [
  {
    icon: ShoppingBag,
    title: "Achats sportifs",
    description: "1€ dépensé = 10 points",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Activity,
    title: "Activité physique",
    description: "1h d'activité = 10 points",
    color: "bg-kado-coral/10 text-kado-coral",
  },
  {
    icon: Medal,
    title: "Médailles à débloquer",
    description: "Bronze, Argent, Or, Diamant",
    color: "bg-kado-gold/10 text-kado-gold",
  },
  {
    icon: Gift,
    title: "Récompenses exclusives",
    description: "Codes promo, goodies, tirages",
    color: "bg-kado-sky/10 text-kado-sky",
  },
];

const medals = [
  { name: "Bronze", points: 500, icon: "🥉" },
  { name: "Argent", points: 1500, icon: "🥈" },
  { name: "Or", points: 3000, icon: "🥇" },
  { name: "Diamant", points: 5000, icon: "💎" },
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

export const KadosportScoreSection = () => {
  return (
    <section id="kadosport-score" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background with sports image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 lg:opacity-30">
          <img 
            src={athleteCelebrationImage} 
            alt="Athlète célébrant" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kado-gold/10 text-kado-gold text-sm font-medium mb-4">
            <Trophy className="w-4 h-4" />
            Nouveau système de récompenses
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Le Kadosport Score
          </h2>
          <p className="text-lg text-muted-foreground">
            Gagnez des points en achetant ET en faisant du sport. 
            Débloquez des médailles et des récompenses exclusives !
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-kado transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Medal Progress Preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-kado-gold/10 flex items-center justify-center">
                <Star className="w-6 h-6 text-kado-gold" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  Progression des médailles
                </h3>
                <p className="text-sm text-muted-foreground">Exemple de parcours</p>
              </div>
            </div>

            <div className="space-y-4">
              {medals.map((medal, index) => (
                <motion.div
                  key={medal.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="text-2xl">{medal.icon}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-foreground">{medal.name}</span>
                      <span className="text-sm text-muted-foreground">{medal.points} pts</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Math.min((index + 1) * 25, 100)}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                        className="h-full bg-gradient-to-r from-primary to-kado-gold rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                Connectez Strava ou Decathlon Coach pour valider vos activités
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
