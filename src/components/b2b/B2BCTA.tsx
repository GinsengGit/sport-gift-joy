import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Gift, Mail, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const summary = [
  "Financer la pratique sportive des salariés",
  "Simplifier la gestion administrative",
  "Proposer un avantage concret et utile",
];

export const B2BCTA = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-3xl bg-gradient-hero p-8 md:p-12 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Kadosport : la solution pour financer le sport en entreprise
          </h2>
          <p className="text-white/80 mb-6">
            Kadosport permet aux entreprises et aux CSE de :
          </p>

          <div className="flex flex-col items-center gap-3 mb-8">
            {summary.map((s) => (
              <div key={s} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-white/90 shrink-0" />
                <span className="text-white font-medium">{s}</span>
              </div>
            ))}
          </div>

          <p className="text-white/90 font-semibold mb-8">
            👉 Une solution simple pour encourager le sport en entreprise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/offrir-carte">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto"
              >
                <Gift className="w-5 h-5 mr-2" />
                Commander des cartes
              </Button>
            </Link>
            <a href="mailto:contact@kadosport.fr">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white/20 text-white hover:bg-white/30 border border-white/30 w-full sm:w-auto"
              >
                <Mail className="w-5 h-5 mr-2" />
                Lancer un test
              </Button>
            </a>
          </div>
        </div>

        <div className="absolute right-8 bottom-8 opacity-20">
          <Gift className="w-32 h-32 text-white" />
        </div>
      </motion.div>
    </div>
  </section>
);
