import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, RefreshCw, Calendar, CreditCard, Check, Shield, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import kadosportLogo from "@/assets/kadosport-logo.png";

const durationOptions = [
  { months: 6, price: 6, popular: false },
  { months: 12, price: 12, popular: true },
  { months: 18, price: 18, popular: false },
  { months: 24, price: 24, popular: false },
];

// Mock card data - would come from API
const mockCardData = {
  cardNumber: "4532789012345678",
  currentExpiration: "2026-01-15",
  balance: 127.50,
};

const ExtendCard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [selectedDuration, setSelectedDuration] = useState<number | null>(12);
  const [isProcessing, setIsProcessing] = useState(false);

  const selectedOption = durationOptions.find(opt => opt.months === selectedDuration);

  const calculateNewExpiration = () => {
    if (!selectedDuration) return "";
    const currentExp = new Date(mockCardData.currentExpiration);
    const today = new Date();
    const startDate = currentExp > today ? currentExp : today;
    const newDate = new Date(startDate);
    newDate.setMonth(newDate.getMonth() + selectedDuration);
    return newDate.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    setStep(3);
    toast({
      title: "Prolongation réussie ! 🎉",
      description: `Votre carte est maintenant valide jusqu'au ${calculateNewExpiration()}`,
    });
  };

  const formatCardNumber = (num: string) => {
    return num.replace(/(.{4})/g, '$1 ').trim();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/dashboard" className="flex items-center gap-2">
              <img src={kadosportLogo} alt="Kadosport" className="h-8 w-auto" />
            </Link>
            <Link to="/dashboard">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour au tableau de bord
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Progress indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <motion.div
                animate={{
                  scale: step === s ? 1.1 : 1,
                  backgroundColor: step >= s ? "hsl(var(--primary))" : "hsl(var(--muted))",
                }}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                  step >= s ? "text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                {step > s ? <Check className="h-5 w-5" /> : s}
              </motion.div>
              {s < 3 && (
                <div 
                  className={`w-12 h-1 mx-2 rounded-full transition-colors ${
                    step > s ? "bg-primary" : "bg-muted"
                  }`} 
                />
              )}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {/* Step 1: Choose duration */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <RefreshCw className="h-8 w-8 text-primary" />
                </div>
                <h1 className="font-display text-3xl font-bold text-foreground mb-2">
                  Prolonger ma carte
                </h1>
                <p className="text-muted-foreground">
                  Choisissez la durée de prolongation souhaitée
                </p>
              </div>

              {/* Current card info */}
              <Card className="mb-6 bg-gradient-card text-primary-foreground">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/70">Votre carte</p>
                      <p className="font-display font-semibold">{formatCardNumber(mockCardData.cardNumber)}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-white/70">Expire le</p>
                      <p className="font-semibold">
                        {new Date(mockCardData.currentExpiration).toLocaleDateString('fr-FR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/70">Solde actuel</span>
                      <span className="font-display font-bold text-2xl">{mockCardData.balance.toFixed(2)} €</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Duration options */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {durationOptions.map((option) => (
                  <motion.button
                    key={option.months}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedDuration(option.months)}
                    className={`relative p-6 rounded-2xl border-2 transition-all text-left ${
                      selectedDuration === option.months
                        ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                        : "border-border bg-card hover:border-primary/50"
                    }`}
                  >
                    {option.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-kado-coral text-white text-xs font-bold rounded-full">
                        Populaire
                      </span>
                    )}
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="font-display font-bold text-2xl text-foreground">{option.months} mois</span>
                    </div>
                    <p className="text-3xl font-bold text-primary">{option.price} €</p>
                    <p className="text-sm text-muted-foreground">soit 1€/mois</p>
                  </motion.button>
                ))}
              </div>

              {/* Info box */}
              <div className="bg-primary/5 rounded-xl p-4 mb-6 border border-primary/20">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">Prolongation garantie</p>
                    <p className="text-sm text-muted-foreground">
                      Votre solde est conservé et votre carte reste utilisable immédiatement après prolongation.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full"
                onClick={handleNext}
                disabled={!selectedDuration}
              >
                Continuer
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </motion.div>
          )}

          {/* Step 2: Payment */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <CreditCard className="h-8 w-8 text-primary" />
                </div>
                <h1 className="font-display text-3xl font-bold text-foreground mb-2">
                  Paiement
                </h1>
                <p className="text-muted-foreground">
                  Finalisez la prolongation de votre carte
                </p>
              </div>

              {/* Order summary */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Récapitulatif</h3>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Carte</span>
                      <span className="font-medium">{formatCardNumber(mockCardData.cardNumber)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Durée de prolongation</span>
                      <span className="font-medium">{selectedDuration} mois</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Nouvelle date d'expiration</span>
                      <span className="font-medium text-primary">{calculateNewExpiration()}</span>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-lg">Total</span>
                      <span className="font-display font-bold text-3xl text-primary">
                        {selectedOption?.price} €
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment form */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Informations de paiement</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="card-number">Numéro de carte</Label>
                      <Input
                        id="card-number"
                        placeholder="1234 5678 9012 3456"
                        className="mt-1"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Date d'expiration</Label>
                        <Input
                          id="expiry"
                          placeholder="MM/AA"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvc">CVC</Label>
                        <Input
                          id="cvc"
                          placeholder="123"
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Security badges */}
                  <div className="flex items-center gap-4 mt-6 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="h-4 w-4 text-primary" />
                      <span>Paiement sécurisé</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Zap className="h-4 w-4 text-kado-coral" />
                      <span>Activation immédiate</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleBack}
                  className="flex-1"
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Retour
                </Button>
                <Button
                  size="lg"
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="flex-1"
                >
                  {isProcessing ? (
                    <>
                      <RefreshCw className="h-5 w-5 mr-2 animate-spin" />
                      Traitement...
                    </>
                  ) : (
                    <>
                      Payer {selectedOption?.price} €
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6"
              >
                <Check className="h-12 w-12 text-primary" />
              </motion.div>

              <h1 className="font-display text-3xl font-bold text-foreground mb-2">
                Prolongation réussie ! 🎉
              </h1>
              <p className="text-muted-foreground mb-8">
                Votre carte Kadosport a été prolongée avec succès
              </p>

              {/* Updated card info */}
              <Card className="mb-8 bg-gradient-card text-primary-foreground">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Clock className="h-6 w-6" />
                    <span className="font-semibold">Nouvelle validité</span>
                  </div>
                  <p className="font-display text-4xl font-bold mb-2">
                    {calculateNewExpiration()}
                  </p>
                  <p className="text-white/70">
                    Soit {selectedDuration} mois supplémentaires
                  </p>
                </CardContent>
              </Card>

              {/* Summary */}
              <div className="bg-muted/50 rounded-xl p-6 mb-8 text-left">
                <h3 className="font-semibold mb-4">Récapitulatif de la transaction</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Carte prolongée</span>
                    <span>{formatCardNumber(mockCardData.cardNumber)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Durée ajoutée</span>
                    <span>{selectedDuration} mois</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Montant payé</span>
                    <span className="font-semibold text-primary">{selectedOption?.price} €</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Solde conservé</span>
                    <span className="font-semibold">{mockCardData.balance.toFixed(2)} €</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1"
                  onClick={() => navigate("/dashboard")}
                >
                  Retour au tableau de bord
                </Button>
                <Button
                  size="lg"
                  className="flex-1"
                  onClick={() => navigate("/")}
                >
                  Découvrir les partenaires
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default ExtendCard;
