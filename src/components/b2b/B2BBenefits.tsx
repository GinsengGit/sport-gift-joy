import { motion } from "framer-motion";
import { Heart, TrendingUp, Users, Award, Scaling } from "lucide-react";

const employeeBenefits = [
  { icon: Heart, text: "Améliorer la santé des salariés" },
  { icon: TrendingUp, text: "Renforcer l'engagement" },
  { icon: Users, text: "Développer la qualité de vie au travail (QVT)" },
  { icon: Award, text: "Valoriser la marque employeur" },
];

const flexBenefits = [
  { icon: Scaling, text: "Test sur une population pilote" },
  { icon: Scaling, text: "Budget ajustable" },
  { icon: Scaling, text: "Déploiement progressif" },
];

export const B2BBenefits = () => (
  <section className="py-20 bg-card/50 border-y border-border/50">
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
        >
          Un avantage <span className="text-primary">utile et valorisant</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Employee benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-card border border-border/50"
          >
            <h3 className="font-display text-lg font-bold text-foreground mb-4">Pour les salariés</h3>
            <div className="space-y-3">
              {employeeBenefits.map((b) => (
                <div key={b.text} className="flex items-center gap-3">
                  <b.icon className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{b.text}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground italic">
              Le sport devient un levier concret de bien-être et de performance collective.
            </p>
          </motion.div>

          {/* For pros */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl bg-card border border-border/50"
          >
            <h3 className="font-display text-lg font-bold text-foreground mb-4">Pour les professionnels</h3>
            <p className="text-sm text-muted-foreground mb-4">
              La solution s'intègre naturellement dans l'écosystème sportif existant.
            </p>
            <div className="space-y-3">
              {prosBenefits.map((b) => (
                <div key={b.text} className="flex items-center gap-3">
                  <b.icon className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{b.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Flexibility */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-2xl bg-card border border-border/50"
          >
            <h3 className="font-display text-lg font-bold text-foreground mb-4">Approche flexible</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Démarrez simplement, sans engagement lourd.
            </p>
            <div className="space-y-3">
              {flexBenefits.map((b) => (
                <div key={b.text} className="flex items-center gap-3">
                  <b.icon className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{b.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);
