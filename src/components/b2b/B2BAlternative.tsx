import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, FileText, UserCheck, Banknote, Clock } from "lucide-react";

const oldSystemPains = [
  { icon: FileText, label: "Collecte de justificatifs" },
  { icon: UserCheck, label: "Gestion des demandes individuelles" },
  { icon: Banknote, label: "Virements manuels" },
  { icon: Clock, label: "Suivi administratif chronophage" },
];

const newSystemBenefits = [
  "L'entreprise définit un budget sport par salarié",
  "Le salarié utilise sa carte pour financer ses activités sportives",
  "La gestion est centralisée et simplifiée",
];

export const B2BAlternative = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-center"
        >
          Une alternative simple au <span className="text-primary">remboursement</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
        >
          De nombreux CSE proposent déjà un remboursement des activités sportives. Ce fonctionnement implique souvent :
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Old system */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-muted/50 border border-border/50"
          >
            <h3 className="font-display text-lg font-bold text-muted-foreground mb-4">Fonctionnement classique</h3>
            <div className="space-y-3">
              {oldSystemPains.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-destructive" />
                  </div>
                  <span className="text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* New system */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-primary/5 border border-primary/20"
          >
            <h3 className="font-display text-lg font-bold text-primary mb-4">Avec Kadosport</h3>
            <div className="space-y-3">
              {newSystemBenefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 rounded-xl bg-primary/10">
              <p className="text-sm font-semibold text-primary">
                Résultat : moins de gestion pour le CSE, plus de liberté pour les salariés.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);
