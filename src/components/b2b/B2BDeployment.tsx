import { motion } from "framer-motion";
import { Zap, Settings, BarChart3, Wallet, Users, Eye } from "lucide-react";

const deployFeatures = [
  { icon: Zap, text: "Aucune intégration technique complexe" },
  { icon: Zap, text: "Mise en place en quelques jours" },
  { icon: Settings, text: "Gestion via un espace dédié CSE / RH" },
];

const controlFeatures = [
  { icon: Wallet, text: "Le budget alloué" },
  { icon: Users, text: "Les bénéficiaires" },
  { icon: Eye, text: "Le suivi des dépenses" },
];

export const B2BDeployment = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
        >
          Un dispositif <span className="text-primary">simple à déployer</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-card border border-border/50"
          >
            <h3 className="font-display text-lg font-bold text-foreground mb-4">Déploiement rapide</h3>
            <div className="space-y-3">
              {deployFeatures.map((f) => (
                <div key={f.text} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <f.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{f.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl bg-card border border-border/50"
          >
            <h3 className="font-display text-lg font-bold text-foreground mb-4">Contrôle total</h3>
            <p className="text-muted-foreground mb-4">L'entreprise conserve le contrôle sur :</p>
            <div className="space-y-3">
              {controlFeatures.map((f) => (
                <div key={f.text} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <f.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{f.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);
