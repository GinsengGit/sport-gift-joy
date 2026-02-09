import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Check, Gift, ArrowRight, Mail, User, MessageSquare, ChevronLeft, QrCode, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const amounts = [20, 30, 50, 75, 100, 150, 200, 500];
const durations = [6, 12, 18, 24] as const;
const monthlyFeeEUR = 1;

const OffrirCarte = () => {
  const { toast } = useToast();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedAmount, setSelectedAmount] = useState<number>(100);
  const [selectedDuration, setSelectedDuration] = useState<(typeof durations)[number]>(6);
  
  // Recipient info
  const [recipientName, setRecipientName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [personalMessage, setPersonalMessage] = useState("");
  
  // Sender info
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");

  const feesTotal = useMemo(() => monthlyFeeEUR * selectedDuration, [selectedDuration]);
  const total = useMemo(() => selectedAmount + feesTotal, [selectedAmount, feesTotal]);

  const handleStep1Submit = () => {
    setStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!recipientName.trim() || !recipientEmail.trim()) {
      toast({
        title: "Champs requis",
        description: "Veuillez remplir le nom et l'email du destinataire.",
        variant: "destructive",
      });
      return;
    }
    setStep(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStep3Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !senderEmail.trim()) {
      toast({
        title: "Champs requis",
        description: "Veuillez remplir vos informations.",
        variant: "destructive",
      });
      return;
    }
    // TODO: Integrate payment
    toast({
      title: "Fonctionnalité à venir",
      description: "Le paiement sera disponible prochainement.",
    });
  };

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

          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Gift className="w-4 h-4 inline mr-2" />
              Offrir une carte
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Offrez un budget sport, pas un catalogue.
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Avec Kadosport, vous offrez un budget dédié à la pratique sportive.
              Le bénéficiaire utilise sa carte chez le professionnel du sport de son choix
              (salle de sport, coach, club, association, structure indépendante…).
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/20 rounded-full">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Liberté totale d'utilisation</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/20 rounded-full">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Soutien direct aux professionnels du sport</span>
              </div>
            </div>
          </motion.div>

          {/* Progress Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="flex items-center justify-between">
              {[
                { num: 1, label: "Montant" },
                { num: 2, label: "Destinataire" },
                { num: 3, label: "Paiement" },
              ].map((s, idx) => (
                <div key={s.num} className="flex items-center flex-1">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                        step >= s.num
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {step > s.num ? <Check className="w-5 h-5" /> : s.num}
                    </div>
                    <span className={`mt-2 text-xs font-medium ${step >= s.num ? "text-primary" : "text-muted-foreground"}`}>
                      {s.label}
                    </span>
                  </div>
                  {idx < 2 && (
                    <div className={`flex-1 h-0.5 mx-4 ${step > s.num ? "bg-primary" : "bg-muted"}`} />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Main Form Area */}
              <div className="lg:col-span-3">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card rounded-3xl border border-border shadow-xl overflow-hidden"
                >
                  {/* Step 1: Amount & Duration */}
                  {step === 1 && (
                    <div className="p-6 lg:p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Gift className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h2 className="font-display text-xl font-bold text-foreground">Choisissez le montant</h2>
                          <p className="text-sm text-muted-foreground">Sélectionnez le montant et la durée de validité</p>
                        </div>
                      </div>

                      {/* Amount Selection */}
                      <div className="mb-8">
                        <Label className="mb-4 block">Montant de la carte</Label>
                        <div className="grid grid-cols-4 gap-2 lg:gap-3">
                          {amounts.map((amount) => (
                            <button
                              key={amount}
                              type="button"
                              onClick={() => setSelectedAmount(amount)}
                              className={`py-3 lg:py-4 rounded-xl font-bold text-sm lg:text-base transition-all duration-200 ${
                                amount === selectedAmount
                                  ? "bg-primary text-primary-foreground shadow-kado"
                                  : "bg-muted text-foreground hover:bg-primary/10 hover:text-primary"
                              }`}
                            >
                              {amount}€
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Duration Selection */}
                      <div className="mb-8">
                        <Label className="mb-4 block">Durée de validité</Label>
                        <div className="grid grid-cols-4 gap-2 lg:gap-3">
                          {durations.map((months) => (
                            <button
                              key={months}
                              type="button"
                              onClick={() => setSelectedDuration(months)}
                              className={`py-3 lg:py-4 rounded-xl font-bold text-sm lg:text-base transition-all duration-200 ${
                                months === selectedDuration
                                  ? "bg-primary text-primary-foreground shadow-kado"
                                  : "bg-muted text-foreground hover:bg-primary/10 hover:text-primary"
                              }`}
                            >
                              {months} mois
                            </button>
                          ))}
                        </div>
                        {/* Transparency note */}
                        <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-xl">
                          <p className="text-sm text-muted-foreground">
                            <span className="font-semibold text-foreground">Transparence totale :</span> les frais d'activation de 1€/mois sont notre seule source de revenu pour faire fonctionner le réseau Kadosport. 
                            <span className="text-primary font-medium"> Aucune commission n'est prélevée sur les professionnels du sport</span>, qui reçoivent 100% du montant de la carte.
                          </p>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-3 mb-8">
                        {[
                          "Livraison instantanée par email",
                          "Avantages exclusifs sur le matériel et l'équipement sportif",
                          "Option cadeau commun disponible",
                        ].map((feature) => (
                          <div key={feature} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                              <Check className="w-3 h-3 text-primary" />
                            </div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button onClick={handleStep1Submit} variant="hero" size="xl" className="w-full group">
                        Continuer
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  )}

                  {/* Step 2: Recipient Info */}
                  {step === 2 && (
                    <form onSubmit={handleStep2Submit} className="p-6 lg:p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <User className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h2 className="font-display text-xl font-bold text-foreground">Destinataire</h2>
                          <p className="text-sm text-muted-foreground">Qui recevra cette carte cadeau ?</p>
                        </div>
                      </div>

                      <div className="space-y-5">
                        <div>
                          <Label htmlFor="recipientName">Prénom du destinataire *</Label>
                          <div className="relative mt-2">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                              id="recipientName"
                              value={recipientName}
                              onChange={(e) => setRecipientName(e.target.value)}
                              placeholder="Marie"
                              className="pl-11"
                              required
                              maxLength={100}
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="recipientEmail">Email du destinataire *</Label>
                          <div className="relative mt-2">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                              id="recipientEmail"
                              type="email"
                              value={recipientEmail}
                              onChange={(e) => setRecipientEmail(e.target.value)}
                              placeholder="marie@exemple.fr"
                              className="pl-11"
                              required
                              maxLength={255}
                            />
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">La carte sera envoyée à cette adresse</p>
                        </div>

                        <div>
                          <Label htmlFor="personalMessage">Message personnalisé (optionnel)</Label>
                          <div className="relative mt-2">
                            <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                            <Textarea
                              id="personalMessage"
                              value={personalMessage}
                              onChange={(e) => setPersonalMessage(e.target.value)}
                              placeholder="Joyeux anniversaire ! Profite bien de ce cadeau sportif 🎉"
                              className="pl-11 min-h-[100px]"
                              maxLength={500}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3 mt-8">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setStep(1)}
                          className="flex-1"
                        >
                          <ChevronLeft className="w-4 h-4 mr-2" />
                          Retour
                        </Button>
                        <Button type="submit" variant="hero" className="flex-1 group">
                          Continuer
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </form>
                  )}

                  {/* Step 3: Sender Info & Payment */}
                  {step === 3 && (
                    <form onSubmit={handleStep3Submit} className="p-6 lg:p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Sparkles className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h2 className="font-display text-xl font-bold text-foreground">Vos informations</h2>
                          <p className="text-sm text-muted-foreground">Finalisez votre commande</p>
                        </div>
                      </div>

                      <div className="space-y-5">
                        <div>
                          <Label htmlFor="senderName">Votre prénom *</Label>
                          <div className="relative mt-2">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                              id="senderName"
                              value={senderName}
                              onChange={(e) => setSenderName(e.target.value)}
                              placeholder="Jean"
                              className="pl-11"
                              required
                              maxLength={100}
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="senderEmail">Votre email *</Label>
                          <div className="relative mt-2">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                              id="senderEmail"
                              type="email"
                              value={senderEmail}
                              onChange={(e) => setSenderEmail(e.target.value)}
                              placeholder="jean@exemple.fr"
                              className="pl-11"
                              required
                              maxLength={255}
                            />
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">Vous recevrez une confirmation de paiement</p>
                        </div>
                      </div>

                      <div className="flex gap-3 mt-8">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setStep(2)}
                          className="flex-1"
                        >
                          <ChevronLeft className="w-4 h-4 mr-2" />
                          Retour
                        </Button>
                        <Button type="submit" variant="hero" className="flex-1 group">
                          Payer {total.toFixed(2).replace(".", ",")} €
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </form>
                  )}
                </motion.div>
              </div>

              {/* Summary Sidebar */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-card rounded-3xl border border-border shadow-xl p-6 sticky top-32"
                >
                  <h3 className="font-display text-lg font-bold text-foreground mb-6">Récapitulatif</h3>

                  {/* Mini Card Preview */}
                  <div className="relative mb-6">
                    <div className="w-full aspect-[1.6/1] rounded-xl overflow-hidden bg-gradient-to-br from-[hsl(120,50%,18%)] via-[hsl(120,60%,22%)] to-[hsl(120,70%,28%)] p-4 flex flex-col justify-between text-white">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-display font-bold text-sm">Kadosport</p>
                          <p className="text-[10px] text-white/70">Carte cadeau sport</p>
                        </div>
                        <span className="font-display font-bold text-xl">{selectedAmount}€</span>
                      </div>
                      <div className="flex items-center justify-center flex-1">
                        <div className="bg-white/90 rounded-lg p-2">
                          <QrCode className="w-10 h-10 text-foreground" />
                        </div>
                      </div>
                      <div className="flex justify-between items-end text-[10px] text-white/70">
                        <span>Valable {selectedDuration} mois</span>
                        {recipientName && <span>Pour {recipientName}</span>}
                      </div>
                    </div>
                  </div>

                  {/* Price Summary */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Montant carte</span>
                      <span className="font-semibold text-foreground">
                        {selectedAmount.toFixed(2).replace(".", ",")} €
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Activation (1€/mois × {selectedDuration})</span>
                      <span className="font-semibold text-foreground">
                        {feesTotal.toFixed(2).replace(".", ",")} €
                      </span>
                    </div>
                    <div className="h-px bg-border my-4" />
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-foreground">Total</span>
                      <span className="font-display text-2xl font-bold text-primary">
                        {total.toFixed(2).replace(".", ",")} €
                      </span>
                    </div>
                  </div>

                  {/* Order Details */}
                  {(recipientName || recipientEmail) && (
                    <div className="bg-muted/50 rounded-xl p-4 space-y-2">
                      <p className="text-xs font-medium text-muted-foreground uppercase">Destinataire</p>
                      {recipientName && <p className="text-sm font-medium text-foreground">{recipientName}</p>}
                      {recipientEmail && <p className="text-sm text-muted-foreground">{recipientEmail}</p>}
                      {personalMessage && (
                        <p className="text-xs text-muted-foreground italic mt-2">"{personalMessage}"</p>
                      )}
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OffrirCarte;
