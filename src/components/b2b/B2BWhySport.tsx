import { motion } from "framer-motion";
import { TrendingDown, Heart, Users } from "lucide-react";

const reasons = [
  { icon: TrendingDown, text: "Réduire l'absentéisme" },
  { icon: Heart, text: "Améliorer le bien-être" },
  { icon: Users, text: "Renforcer la cohésion" },
];

export const B2BWhySport = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4"
        >
          Pourquoi mettre en place un <span className="text-primary">avantage sport</span> aujourd'hui ?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground mb-8"
        >
          La pratique sportive est un enjeu croissant en entreprise. Elle contribue directement à :
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.text}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-primary/5 border border-primary/20"
            >
              <r.icon className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">{r.text}</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-foreground font-semibold"
        >
          Kadosport permet de structurer cet avantage de manière <span className="text-primary">simple, accessible et efficace</span>.
        </motion.p>
      </div>
    </div>
  </section>
);
