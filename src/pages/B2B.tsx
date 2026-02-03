import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Users, 
  Heart, 
  TrendingUp, 
  Shield, 
  Gift, 
  CreditCard,
  CheckCircle,
  Euro,
  Zap,
  BarChart3,
  Headphones,
  Target,
  Sparkles,
  Trophy,
  Rocket,
  LayoutDashboard
} from "lucide-react";
import { Link } from "react-router-dom";

const idealFor = [
  {
    icon: Heart,
    text: "Encourager le sport et le bien-être"
  },
  {
    icon: Gift,
    text: "Offrir un avantage salarié utile et valorisant"
  },
  {
    icon: Shield,
    text: "Maîtriser l'usage grâce à la restriction sport"
  }
];

const whyChoose = [
  "Carte cadeau 100 % sport",
  "Utilisable auprès de milliers d'acteurs sportifs",
  "Aucun risque d'usage détourné",
  "Expérience digitale moderne",
  "Programme de récompenses engageant",
  "Solution adaptée aux particuliers et aux entreprises"
];

const moreThanCard = [
  { icon: CreditCard, text: "Un pass sport annuel" },
  { icon: Target, text: "Un outil de motivation" },
  { icon: Heart, text: "Un levier de bien-être" },
  { icon: Sparkles, text: "Une nouvelle façon d'offrir le sport" }
];

const features = [
  "Distribution de cartes en masse par email",
  "Personnalisation aux couleurs de l'entreprise",
  "Gestion centralisée des budgets",
  "Rapports d'utilisation détaillés",
  "Support dédié entreprise",
  "API d'intégration SIRH"
];

const stats = [
  { value: "100%", label: "Digital" },
  { value: "-27%", label: "Absentéisme" },
  { value: "+35%", label: "Engagement" },
  { value: "500+", label: "Pros du sport" }
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
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
              >
                Une solution idéale pour les{" "}
                <span className="text-transparent bg-clip-text bg-gradient-hero">
                  entreprises et CSE
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              >
                La carte Kadosport permet aux entreprises d'allouer un budget sport 
                à leurs salariés, en toute simplicité et conformité.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button variant="hero" size="lg" className="text-base">
                  Demander une démo
                </Button>
                <Link to="/plaquette-cse">
                  <Button variant="outline" size="lg" className="text-base w-full sm:w-auto">
                    Télécharger la plaquette
                  </Button>
                </Link>
                <Link to="/dashboard-cse">
                  <Button variant="outline" size="lg" className="text-base w-full sm:w-auto">
                    <LayoutDashboard className="w-4 h-4 mr-2" />
                    Tableau de bord RH
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Ideal For Section */}
        <section className="py-16 bg-card/50 border-y border-border/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                La carte Kadosport est particulièrement adaptée aux entreprises qui souhaitent
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {idealFor.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center p-6 rounded-2xl bg-background border border-border/50"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* URSSAF Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative rounded-3xl bg-gradient-to-br from-primary/10 via-background to-coral/10 border border-border/50 p-8 md:p-12 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                    <Euro className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Exonération URSSAF</span>
                  </div>
                  
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Un avantage exonéré de cotisations sociales
                  </h2>
                  
                  <p className="text-muted-foreground mb-6 max-w-2xl">
                    Lorsqu'elle est attribuée dans le cadre des règles URSSAF (événement éligible 
                    et respect des plafonds), la carte Kadosport peut bénéficier d'une exonération 
                    de cotisations sociales, comme les cartes cadeaux sportives existantes.
                  </p>
                  
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <Shield className="w-6 h-6 text-primary shrink-0" />
                    <p className="text-foreground font-medium">
                      La restriction d'usage exclusivement sportif renforce la conformité de l'avantage.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-card/50 border-y border-border/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Pourquoi nous choisir</span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4"
              >
                💡 Pourquoi choisir Kadosport ?
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {whyChoose.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* More Than a Card Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-transparent">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral/10 border border-coral/20 mb-6"
              >
                <Rocket className="w-4 h-4 text-coral" />
                <span className="text-sm font-medium text-coral">Plus qu'une carte</span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4"
              >
                🚀 Kadosport, bien plus qu'une carte cadeau
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {moreThanCard.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-hero flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-foreground font-semibold">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
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
                
                <div className="space-y-4">
                  {features.map((feature, index) => (
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
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                  <Headphones className="w-4 h-4 text-white" />
                  <span className="text-sm font-medium text-white">Support dédié</span>
                </div>
                
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                  Prêt à booster le bien-être de vos équipes ?
                </h2>
                <p className="text-white/80 mb-8 max-w-xl">
                  Nos experts vous accompagnent dans la mise en place de votre programme 
                  sport. Démo personnalisée et devis sous 24h.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    Demander une démo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    Nous contacter
                  </Button>
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
