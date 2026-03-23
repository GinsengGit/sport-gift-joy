import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Users, 
  Heart, 
  Gift, 
  CreditCard,
  CheckCircle,
  BarChart3,
  Mail,
  Smartphone,
  TrendingUp,
  Star,
  Euro
} from "lucide-react";
import { Link } from "react-router-dom";

const advantageBlocks = [
  {
    icon: Gift,
    title: "Laissez votre salarié choisir son prochain défi sportif",
    description: "Fitness, coaching sportif, centres sportifs, clubs et associations sportives... La carte Kadosport est encaissable par chaque professionnel du sport déclaré."
  },
  {
    icon: Smartphone,
    title: "Facilité d'utilisation",
    description: "Choisissez la e-carte dématérialisée ! Plus de chèque papier que l'on risque de perdre : la carte KADOSPORT est sur votre smartphone. Votre salarié peut dépenser le montant de sa carte cadeau en une ou plusieurs fois et consulter en temps réel le solde disponible."
  },
  {
    icon: TrendingUp,
    title: "Développez votre productivité et le bien-être de vos salariés",
    description: "La pratique d'une activité sportive permet de réduire le stress et de prévenir des maladies. Proposer à vos salariés de pratiquer du sport améliore la performance de votre entreprise.",
    quote: "« Un esprit sain dans un corps sain »"
  },
  {
    icon: Star,
    title: "Développez l'attractivité de votre entreprise",
    description: "Motivez et fidélisez vos salariés en leur facilitant l'accès à la pratique sportive ! Démarquez-vous en véhiculant des valeurs saines de santé et de dépassement de soi !"
  },
  {
    icon: Euro,
    title: "Bénéficiez d'une exonération totale",
    description: "La distribution des cartes KADOSPORT auprès de vos salariés est exonérée de cotisations sociales selon la réglementation URSSAF."
  }
];

const B2B = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-coral/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              >
                <Building2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Entreprises & CSE</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
              >
                Vous êtes une entreprise, un CSE, vous souhaitez développer la pratique sportive de vos salariés ?
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl font-bold text-foreground mb-8 max-w-2xl mx-auto"
              >
                La carte <span className="text-transparent bg-clip-text bg-gradient-hero">KADOSPORT</span> est LA SOLUTION
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link to="/offrir-carte">
                  <Button variant="hero" size="lg" className="text-base w-full sm:w-auto">
                    <Gift className="w-5 h-5 mr-2" />
                    Commander des cartes cadeaux
                  </Button>
                </Link>
                <a href="mailto:contact@kadosport.fr">
                  <Button variant="outline" size="lg" className="text-base w-full sm:w-auto">
                    <Mail className="w-5 h-5 mr-2" />
                    Nous contacter
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>
        </section>


        {/* Avantages Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4"
              >
                Les avantages <span className="text-primary">KADOSPORT</span> pour votre entreprise
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {advantageBlocks.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors ${index === 0 ? 'md:col-span-2' : ''}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  {item.quote && (
                    <p className="mt-3 text-primary font-semibold italic">{item.quote}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Visual Section */}
        <section className="py-20 bg-card/50 border-y border-border/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Une plateforme pensée pour les{" "}
                  <span className="text-primary">équipes RH</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  Gérez facilement l'attribution des budgets sport, suivez l'utilisation 
                  en temps réel et générez vos rapports en quelques clics.
                </p>
                
                <div className="space-y-3">
                  {[
                    "Distribution de cartes en masse par email",
                    "Personnalisation aux couleurs de l'entreprise",
                    "Gestion centralisée des budgets",
                    "Rapports d'utilisation détaillés",
                    "Support dédié entreprise"
                  ].map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-foreground">{feature}</span>
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
                <div className="aspect-square max-w-md mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-hero rounded-3xl opacity-10" />
                  <div className="absolute inset-4 bg-card rounded-2xl border border-border/50 shadow-xl p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Tableau de bord RH</div>
                        <div className="text-xs text-muted-foreground">Vue d'ensemble</div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-muted/50">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-muted-foreground">Budget alloué</span>
                          <span className="font-semibold text-foreground">45 000 €</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full w-3/4 bg-gradient-hero rounded-full" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-muted/50">
                          <Users className="w-5 h-5 text-primary mb-2" />
                          <div className="font-semibold text-foreground">127</div>
                          <div className="text-xs text-muted-foreground">Collaborateurs</div>
                        </div>
                        <div className="p-4 rounded-xl bg-muted/50">
                          <CreditCard className="w-5 h-5 text-coral mb-2" />
                          <div className="font-semibold text-foreground">89%</div>
                          <div className="text-xs text-muted-foreground">Taux d'usage</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl bg-gradient-hero p-8 md:p-12 overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30" />
              
              <div className="relative z-10 max-w-2xl">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                  Prêt à booster le bien-être de vos équipes ?
                </h2>
                <p className="text-white/80 mb-8 max-w-xl">
                  Nos experts vous accompagnent dans la mise en place de votre programme sport. Contactez-nous pour un devis personnalisé.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/offrir-carte">
                    <Button 
                      variant="secondary" 
                      size="lg" 
                      className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto"
                    >
                      <Gift className="w-5 h-5 mr-2" />
                      Commander des cartes cadeaux
                    </Button>
                  </Link>
                  <a href="mailto:contact@kadosport.fr">
                    <Button 
                      variant="secondary" 
                      size="lg" 
                      className="bg-white/20 text-white hover:bg-white/30 border border-white/30 w-full sm:w-auto"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Nous contacter
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
      </main>

      <Footer />
    </div>
  );
};

export default B2B;
