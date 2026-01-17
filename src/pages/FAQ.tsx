import { motion } from "framer-motion";
import { ChevronLeft, HelpCircle, Gift, CreditCard, Users, Building2, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqCategories = [
  {
    id: "general",
    title: "Questions générales",
    icon: HelpCircle,
    questions: [
      {
        q: "Qu'est-ce que Kadosport ?",
        a: "Kadosport est une carte cadeau digitale 100% dédiée au sport et aux activités sportives. Elle permet d'offrir un cadeau utilisable chez tous les professionnels du sport : salles de fitness, coachs, clubs, activités outdoor, nautiques, etc."
      },
      {
        q: "Quelle est la différence avec les autres cartes cadeaux ?",
        a: "Kadosport est la seule carte cadeau exclusivement dédiée au sport. Elle fonctionne sans réseau prédéfini : tout professionnel du sport avec un SIRET peut l'accepter. Et surtout, 0% de commission est prélevée sur les professionnels."
      },
      {
        q: "Comment fonctionne le modèle économique ?",
        a: "Notre seule source de revenu sont les frais d'activation de 1€/mois payés par l'offrant. Cela nous permet de garantir 0% de commission aux professionnels du sport, qui reçoivent 100% du montant de la carte."
      },
    ]
  },
  {
    id: "offrir",
    title: "Offrir une carte",
    icon: Gift,
    questions: [
      {
        q: "Comment offrir une carte Kadosport ?",
        a: "Choisissez un montant (de 20€ à 500€), une durée de validité (6 à 24 mois), renseignez les coordonnées du destinataire et procédez au paiement. La carte est envoyée instantanément par email."
      },
      {
        q: "Quels montants puis-je offrir ?",
        a: "Vous pouvez offrir des cartes de 20€, 30€, 50€, 75€, 100€, 150€, 200€ ou 500€. Les frais d'activation de 1€/mois s'ajoutent au montant de la carte."
      },
      {
        q: "Quelle est la durée de validité ?",
        a: "Vous choisissez la durée de validité lors de l'achat : 6, 12, 18 ou 24 mois. Plus la durée est longue, plus le destinataire a de temps pour utiliser sa carte."
      },
      {
        q: "Puis-je personnaliser mon cadeau ?",
        a: "Oui ! Vous pouvez ajouter un message personnalisé qui sera inclus dans l'email envoyé au destinataire avec sa carte cadeau."
      },
      {
        q: "La carte peut-elle être prolongée ?",
        a: "Oui, le bénéficiaire peut prolonger la validité de sa carte depuis son espace personnel, au tarif de 1€/mois de prolongation."
      },
    ]
  },
  {
    id: "utiliser",
    title: "Utiliser sa carte",
    icon: CreditCard,
    questions: [
      {
        q: "Comment utiliser ma carte Kadosport ?",
        a: "Présentez le QR code de votre carte au professionnel du sport. Il scanne le code, entre le montant de votre prestation, et le montant est automatiquement débité de votre carte."
      },
      {
        q: "Où puis-je utiliser ma carte ?",
        a: "Chez tous les professionnels du sport déclarés en France : salles de fitness, coachs personnels, clubs sportifs, activités outdoor, nautiques, escalade, yoga, arts martiaux, etc. Le réseau est ouvert à tout professionnel avec un SIRET."
      },
      {
        q: "Puis-je utiliser ma carte en plusieurs fois ?",
        a: "Oui, absolument ! Votre carte fonctionne comme un porte-monnaie. Vous pouvez l'utiliser chez différents professionnels jusqu'à épuisement du solde."
      },
      {
        q: "Comment suivre mon solde ?",
        a: "Connectez-vous à votre espace personnel pour voir votre solde en temps réel, l'historique de vos transactions et la date d'expiration de votre carte."
      },
      {
        q: "Qu'est-ce que le Kadosport Score ?",
        a: "C'est un programme de fidélité qui vous récompense à chaque utilisation de votre carte. Accumulez des points pour débloquer des avantages exclusifs chez nos partenaires."
      },
    ]
  },
  {
    id: "pros",
    title: "Professionnels du sport",
    icon: Users,
    questions: [
      {
        q: "Comment accepter les cartes Kadosport ?",
        a: "Aucune inscription préalable n'est nécessaire. Rendez-vous sur la page 'Encaisser une carte', scannez le QR code du client, entrez le montant et validez. Votre SIRET sera vérifié automatiquement."
      },
      {
        q: "Quels sont les frais pour les professionnels ?",
        a: "Aucun ! Kadosport ne prélève 0% de commission. Vous recevez 100% du montant de la transaction."
      },
      {
        q: "Comment et quand suis-je payé ?",
        a: "Le paiement est effectué par virement bancaire automatique sous 48h ouvrées après la transaction."
      },
      {
        q: "Qui peut accepter les cartes Kadosport ?",
        a: "Tous les professionnels proposant des activités sportives ou de loisirs sportifs, à condition d'avoir un numéro SIRET valide. Cela exclut les commerces de vente d'équipements et le e-commerce."
      },
      {
        q: "Faut-il signer un contrat ?",
        a: "Non, aucun contrat ni engagement. Vous encaissez quand vous voulez, sans obligation de volume minimum."
      },
    ]
  },
  {
    id: "b2b",
    title: "Entreprises & CSE",
    icon: Building2,
    questions: [
      {
        q: "Pourquoi offrir des cartes Kadosport à mes salariés ?",
        a: "C'est un avantage 100% dédié au bien-être et à la santé. Les cartes sport peuvent bénéficier d'exonérations URSSAF car elles sont strictement réservées aux activités sportives."
      },
      {
        q: "Comment commander des cartes pour mon entreprise ?",
        a: "Contactez-nous via la page Entreprises pour obtenir un devis personnalisé. Nous proposons des tarifs dégressifs selon les volumes et des options de personnalisation."
      },
      {
        q: "Les cartes sont-elles exonérées de cotisations ?",
        a: "Les cartes cadeaux sport peuvent bénéficier d'exonérations URSSAF selon les conditions en vigueur. La restriction d'usage aux activités sportives facilite cette conformité. Consultez votre comptable pour les détails."
      },
    ]
  },
  {
    id: "securite",
    title: "Sécurité & données",
    icon: Shield,
    questions: [
      {
        q: "Mes données sont-elles sécurisées ?",
        a: "Oui, nous utilisons les standards de sécurité les plus élevés. Vos données de paiement sont traitées par Stripe, leader mondial du paiement en ligne."
      },
      {
        q: "Que faire si je perds ma carte ?",
        a: "Votre carte est digitale et liée à votre email. Vous pouvez toujours y accéder depuis votre espace personnel. En cas de problème, contactez notre support."
      },
      {
        q: "Comment signaler un problème ?",
        a: "Contactez notre équipe support à contact@kadosport.fr. Nous vous répondons sous 24h ouvrées."
      },
    ]
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ChevronLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <HelpCircle className="w-4 h-4" />
              Centre d'aide
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Questions fréquentes
            </h1>
            <p className="text-lg text-muted-foreground">
              Trouvez rapidement les réponses à vos questions sur Kadosport.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {faqCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              >
                <category.icon className="w-4 h-4" />
                {category.title}
              </a>
            ))}
          </motion.div>

          {/* FAQ Categories */}
          <div className="max-w-3xl mx-auto space-y-12">
            {faqCategories.map((category, catIndex) => (
              <motion.section
                key={category.id}
                id={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">
                    {category.title}
                  </h2>
                </div>

                <Accordion type="single" collapsible className="space-y-3">
                  {category.questions.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${category.id}-${index}`}
                      className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
                    >
                      <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-4">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.section>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mt-16 text-center"
          >
            <div className="bg-muted/50 rounded-2xl p-8 border border-border">
              <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Vous n'avez pas trouvé votre réponse ?
              </h3>
              <p className="text-muted-foreground mb-6">
                Notre équipe vous répond sous 24h ouvrées.
              </p>
              <Button variant="hero" asChild>
                <a href="mailto:contact@kadosport.fr">
                  Contacter le support
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
