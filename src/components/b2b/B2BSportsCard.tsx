import { motion } from "framer-motion";
import { Trophy, Users, Dumbbell, Calendar, Medal, CreditCard } from "lucide-react";

const sportActivities = [
  { icon: Trophy, label: "Clubs sportifs" },
  { icon: Users, label: "Coachs indépendants" },
  { icon: Dumbbell, label: "Cours collectifs" },
  { icon: Calendar, label: "Stages sportifs" },
  { icon: Medal, label: "Événements sportifs (courses, compétitions…)" },
];

export const B2BSportsCard = () => (
  <section className="py-20 bg-card/50 border-y border-border/50">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Une carte dédiée à la <span className="text-primary">pratique sportive</span>
          </h2>
          <p className="text-muted-foreground mb-6">
            Kadosport est une carte dédiée aux activités sportives. Contrairement à une prime classique, le budget est entièrement dédié à la pratique sportive.
          </p>
          <p className="text-foreground font-semibold mb-4">Elle permet de financer :</p>
          <div className="space-y-3">
            {sportActivities.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square max-w-sm mx-auto relative">
            <div className="absolute inset-0 bg-gradient-hero rounded-3xl opacity-10" />
            <div className="absolute inset-4 bg-card rounded-2xl border border-border/50 shadow-xl p-6 flex flex-col justify-center items-center text-center">
              <CreditCard className="w-16 h-16 text-primary mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Carte Kadosport</h3>
              <p className="text-muted-foreground text-sm mb-4">100% dédiée au sport</p>
              <div className="grid grid-cols-2 gap-3 w-full">
                <div className="p-3 rounded-xl bg-muted/50">
                  <div className="font-bold text-foreground text-lg">100%</div>
                  <div className="text-xs text-muted-foreground">Dédié sport</div>
                </div>
                <div className="p-3 rounded-xl bg-muted/50">
                  <div className="font-bold text-foreground text-lg">0€</div>
                  <div className="text-xs text-muted-foreground">Commission pro</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
