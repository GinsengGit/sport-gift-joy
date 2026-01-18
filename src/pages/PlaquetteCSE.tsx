import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Users, 
  Heart, 
  Shield, 
  Gift, 
  CreditCard,
  CheckCircle,
  Euro,
  Zap,
  Target,
  Sparkles,
  Trophy,
  Download,
  Phone,
  Mail,
  MapPin,
  QrCode,
  Percent,
  Clock,
  Award,
  TrendingUp,
  Briefcase,
  Star,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import kadosportLogo from "@/assets/kadosport-logo.png";
import siretBadge from "@/assets/siret-badge.png";

const avantages = [
  {
    icon: Euro,
    title: "Exonération URSSAF",
    description: "Jusqu'à 193€/an/salarié exonérés de cotisations sociales",
    highlight: true
  },
  {
    icon: Percent,
    title: "0% de commission",
    description: "Aucune commission prélevée sur les paiements aux pros du sport"
  },
  {
    icon: Shield,
    title: "Usage 100% sport",
    description: "Garantie d'utilisation exclusivement pour les activités sportives"
  },
  {
    icon: Zap,
    title: "100% digital",
    description: "Activation instantanée, gestion simplifiée, zéro papier"
  },
  {
    icon: Users,
    title: "Réseau étendu",
    description: "500+ professionnels du sport partenaires partout en France"
  },
  {
    icon: Heart,
    title: "Bien-être salarié",
    description: "Encouragez la pratique sportive et la santé au travail"
  }
];

const usageCases = [
  { icon: Award, label: "Salles de sport" },
  { icon: Users, label: "Coachs sportifs" },
  { icon: Target, label: "Clubs & associations" },
  { icon: Sparkles, label: "Activités outdoor" },
  { icon: Heart, label: "Bien-être & yoga" },
  { icon: Trophy, label: "Sports nautiques" }
];

const tarifActivation = [
  { duree: "6 mois", prix: "6€", detail: "1€/mois" },
  { duree: "12 mois", prix: "12€", detail: "1€/mois" },
  { duree: "18 mois", prix: "18€", detail: "1€/mois" },
  { duree: "24 mois", prix: "24€", detail: "1€/mois" }
];

const chiffres = [
  { value: "193€", label: "Plafond URSSAF/an" },
  { value: "0%", label: "Commission pro" },
  { value: "500+", label: "Pros partenaires" },
  { value: "100%", label: "Digital" }
];

const etapes = [
  { num: "1", title: "Commandez", desc: "Choisissez le montant et la durée des cartes" },
  { num: "2", title: "Distribuez", desc: "Envoi automatique par email à vos salariés" },
  { num: "3", title: "Profitez", desc: "Vos équipes utilisent leur budget sport" },
  { num: "4", title: "Suivez", desc: "Tableau de bord RH pour le suivi en temps réel" }
];

const PlaquetteCSE = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="print:pt-0">
        {/* Print-only Header */}
        <div className="hidden print:flex items-center justify-between p-8 border-b border-border">
          <img src={kadosportLogo} alt="Kadosport" className="h-12" />
          <div className="text-right">
            <p className="font-semibold text-primary">Plaquette CSE & Entreprises</p>
            <p className="text-sm text-muted-foreground">La carte cadeau 100% sport</p>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden print:pt-8 print:pb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 print:hidden" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl print:hidden" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 print:mb-4"
                >
                  <Building2 className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">CSE & Entreprises</span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 print:text-4xl print:mb-4"
                >
                  Offrez le{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-hero">
                    sport
                  </span>{" "}
                  à vos équipes
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl print:text-base print:mb-4"
                >
                  La carte cadeau 100% sport, exonérée de charges sociales, 
                  pour encourager le bien-être de vos collaborateurs.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start print:hidden"
                >
                  <Button variant="hero" size="lg" onClick={handlePrint} className="text-base gap-2">
                    <Download className="w-5 h-5" />
                    Télécharger la plaquette
                  </Button>
                  <Link to="/b2b">
                    <Button variant="outline" size="lg" className="text-base gap-2 w-full sm:w-auto">
                      Demander une démo
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </motion.div>
              </div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="flex-1 max-w-md"
              >
                <div className="bg-card rounded-3xl border border-border/50 p-8 shadow-lg print:shadow-none print:p-6">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-hero mb-4">
                      <Gift className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground">Kadosport</h3>
                    <p className="text-sm text-muted-foreground">La carte cadeau dédiée aux activités sportives</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {chiffres.map((item, index) => (
                      <div key={index} className="text-center p-4 rounded-xl bg-muted/50">
                        <div className="font-display text-2xl font-bold text-primary mb-1">{item.value}</div>
                        <div className="text-xs text-muted-foreground">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Avantages Section */}
        <section className="py-16 bg-card/50 border-y border-border/50 print:py-8 print:break-inside-avoid">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 print:mb-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 print:text-2xl">
                Les avantages Kadosport
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto print:text-sm">
                Une solution complète pour promouvoir le sport en entreprise
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto print:gap-4">
              {avantages.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-6 rounded-2xl border ${
                    item.highlight 
                      ? "bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30" 
                      : "bg-background border-border/50"
                  } print:p-4 print:rounded-lg`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    item.highlight ? "bg-gradient-hero" : "bg-primary/10"
                  } print:w-10 print:h-10 print:mb-3`}>
                    <item.icon className={`w-6 h-6 ${item.highlight ? "text-white" : "text-primary"} print:w-5 print:h-5`} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 print:text-sm">{item.title}</h3>
                  <p className="text-sm text-muted-foreground print:text-xs">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* URSSAF Section */}
        <section className="py-16 print:py-8 print:break-inside-avoid">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative rounded-3xl bg-gradient-to-br from-primary/10 via-background to-accent/10 border border-primary/20 p-8 md:p-12 overflow-hidden print:p-6 print:rounded-xl"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl print:hidden" />
                
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 print:mb-4">
                      <Euro className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">Exonération URSSAF</span>
                    </div>
                    
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 print:text-xl">
                      Jusqu'à 193€/an exonérés
                    </h2>
                    
                    <p className="text-muted-foreground mb-6 print:text-sm print:mb-4">
                      Les cartes cadeaux liées à des événements URSSAF (rentrée scolaire, Noël, etc.) 
                      et respectant le plafond de 193€ sont exonérées de cotisations sociales.
                    </p>
                    
                    <div className="space-y-3 print:space-y-2">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-foreground text-sm">Usage exclusivement sportif = conformité renforcée</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-foreground text-sm">Traçabilité complète des dépenses</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-foreground text-sm">Justificatifs automatiques pour comptabilité</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <div className="w-40 h-40 rounded-2xl bg-card border border-border/50 flex items-center justify-center p-6 print:w-32 print:h-32">
                      <img src={siretBadge} alt="Badge SIRET" className="w-full h-full object-contain opacity-80" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Usage Cases */}
        <section className="py-16 bg-card/50 border-y border-border/50 print:py-8 print:break-inside-avoid">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 print:mb-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 print:text-2xl">
                Où utiliser la carte Kadosport ?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto print:text-sm">
                Valable auprès de tous les professionnels du sport partenaires
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto print:gap-3">
              {usageCases.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex flex-col items-center p-4 rounded-xl bg-background border border-border/50 print:p-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 print:w-8 print:h-8 print:mb-2">
                    <item.icon className="w-5 h-5 text-primary print:w-4 print:h-4" />
                  </div>
                  <span className="text-sm font-medium text-foreground text-center print:text-xs">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tarification */}
        <section className="py-16 print:py-8 print:break-inside-avoid">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 print:mb-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 print:text-2xl">
                Frais d'activation carte
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto print:text-sm">
                Seulement 1€/mois de frais d'activation. Aucune commission sur les paiements.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto print:gap-3">
              {tarifActivation.map((item, index) => (
                <motion.div
                  key={item.duree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border/50 text-center hover:border-primary/30 transition-colors print:p-4 print:rounded-lg"
                >
                  <div className="font-display text-3xl font-bold text-primary mb-1 print:text-2xl">{item.prix}</div>
                  <div className="font-semibold text-foreground mb-2 print:text-sm">{item.duree}</div>
                  <div className="text-xs text-muted-foreground">({item.detail})</div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 text-center print:mt-6">
              <p className="text-sm text-muted-foreground print:text-xs">
                + Montant de la carte (ex: 50€, 100€, 150€...) rechargé sur le compte du bénéficiaire
              </p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-card/50 border-y border-border/50 print:py-8 print:break-inside-avoid">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 print:mb-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 print:text-2xl">
                Comment ça marche ?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto print:gap-4">
              {etapes.map((item, index) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center print:text-left"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-hero text-white font-bold text-xl flex items-center justify-center mx-auto mb-4 print:mx-0 print:w-10 print:h-10 print:text-lg print:mb-3">
                    {item.num}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 print:text-sm">{item.title}</h3>
                  <p className="text-sm text-muted-foreground print:text-xs">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 print:py-8 print:break-inside-avoid">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto bg-gradient-hero rounded-3xl p-8 md:p-12 text-white print:p-6 print:rounded-xl"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 print:text-xl">
                    Prêt à offrir le sport à vos équipes ?
                  </h2>
                  <p className="text-white/80 mb-6 print:text-sm print:mb-4">
                    Contactez-nous pour une démonstration personnalisée ou une offre sur mesure.
                  </p>
                  
                  <div className="space-y-3 print:space-y-2">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-white/70" />
                      <span className="print:text-sm">contact@kadosport.fr</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-white/70" />
                      <span className="print:text-sm">01 23 45 67 89</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-4 print:hidden">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90 border-white"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Demander un devis
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    onClick={handlePrint}
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Imprimer la plaquette
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Print Footer */}
        <div className="hidden print:block p-8 border-t border-border text-center text-sm text-muted-foreground">
          <p className="font-semibold text-foreground mb-2">Kadosport - La carte cadeau 100% sport</p>
          <p>contact@kadosport.fr | www.kadosport.fr</p>
        </div>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 1cm;
          }
          
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          .print\\:hidden {
            display: none !important;
          }
          
          .print\\:flex {
            display: flex !important;
          }
          
          .print\\:block {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PlaquetteCSE;
