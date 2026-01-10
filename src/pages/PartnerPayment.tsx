import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  QrCode, 
  CheckCircle2, 
  CreditCard, 
  Building2, 
  Banknote, 
  Mail, 
  ArrowRight, 
  Shield, 
  Clock,
  AlertCircle,
  Loader2
} from "lucide-react";

type Step = "scan" | "balance" | "info" | "confirmation";

interface FormData {
  cardCode: string;
  amount: string;
  siret: string;
  rib: string;
  email: string;
  companyName: string;
}

const PartnerPayment = () => {
  const [currentStep, setCurrentStep] = useState<Step>("scan");
  const [isLoading, setIsLoading] = useState(false);
  const [cardBalance, setCardBalance] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormData>({
    cardCode: "",
    amount: "",
    siret: "",
    rib: "",
    email: "",
    companyName: "",
  });

  const handleCardVerification = async () => {
    setIsLoading(true);
    // Simulation de vérification
    await new Promise(resolve => setTimeout(resolve, 1500));
    setCardBalance(150); // Solde simulé
    setIsLoading(false);
    setCurrentStep("balance");
  };

  const handleAmountSubmit = () => {
    const amount = parseFloat(formData.amount);
    if (amount > 0 && amount <= (cardBalance || 0)) {
      setCurrentStep("info");
    }
  };

  const handleFinalSubmit = async () => {
    setIsLoading(true);
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setCurrentStep("confirmation");
  };

  const steps = [
    { id: "scan", label: "Carte", icon: QrCode },
    { id: "balance", label: "Montant", icon: CreditCard },
    { id: "info", label: "Informations", icon: Building2 },
    { id: "confirmation", label: "Confirmation", icon: CheckCircle2 },
  ];

  const currentStepIndex = steps.findIndex(s => s.id === currentStep);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              Espace professionnel
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Débiter une carte Kadosport
            </h1>
            <p className="text-muted-foreground text-lg">
              Encaissez vos prestations et recevez votre virement sous 48h
            </p>
          </motion.div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-2 mb-12">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div 
                  className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all ${
                    index <= currentStepIndex 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <step.icon className="w-4 h-4" />
                  <span className="text-sm font-medium hidden sm:inline">{step.label}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-8 h-0.5 mx-1 ${
                    index < currentStepIndex ? "bg-primary" : "bg-muted"
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          <AnimatePresence mode="wait">
            {/* Step 1: Scan Card */}
            {currentStep === "scan" && (
              <motion.div
                key="scan"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <Card className="border-2">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <QrCode className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle>Scannez ou saisissez le code carte</CardTitle>
                    <CardDescription>
                      Entrez le code unique de la carte Kadosport du client
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="cardCode">Code carte (16 caractères)</Label>
                      <Input
                        id="cardCode"
                        placeholder="XXXX-XXXX-XXXX-XXXX"
                        value={formData.cardCode}
                        onChange={(e) => setFormData({ ...formData, cardCode: e.target.value })}
                        className="text-center text-lg tracking-widest font-mono"
                        maxLength={19}
                      />
                    </div>
                    <Button 
                      className="w-full" 
                      size="lg"
                      onClick={handleCardVerification}
                      disabled={formData.cardCode.length < 16 || isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Vérification...
                        </>
                      ) : (
                        <>
                          Vérifier la carte
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Step 2: Balance & Amount */}
            {currentStep === "balance" && (
              <motion.div
                key="balance"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <Card className="border-2">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <CardTitle>Carte vérifiée</CardTitle>
                    <CardDescription>
                      Solde disponible sur cette carte
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center py-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl">
                      <p className="text-sm text-muted-foreground mb-1">Solde disponible</p>
                      <p className="text-4xl font-bold text-primary">{cardBalance}€</p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="amount">Montant à débiter</Label>
                      <div className="relative">
                        <Input
                          id="amount"
                          type="number"
                          placeholder="0"
                          value={formData.amount}
                          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                          className="text-center text-2xl font-bold pr-12"
                          max={cardBalance || 0}
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl font-bold text-muted-foreground">€</span>
                      </div>
                      {parseFloat(formData.amount) > (cardBalance || 0) && (
                        <p className="text-sm text-destructive flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          Le montant dépasse le solde disponible
                        </p>
                      )}
                    </div>

                    <Button 
                      className="w-full" 
                      size="lg"
                      onClick={handleAmountSubmit}
                      disabled={!formData.amount || parseFloat(formData.amount) <= 0 || parseFloat(formData.amount) > (cardBalance || 0)}
                    >
                      Continuer
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Step 3: Partner Info */}
            {currentStep === "info" && (
              <motion.div
                key="info"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <Card className="border-2">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Building2 className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle>Vos informations professionnelles</CardTitle>
                    <CardDescription>
                      Pour recevoir votre virement sous 48h
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Nom de l'établissement</Label>
                      <Input
                        id="companyName"
                        placeholder="Ex: Salle Fitness Plus"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="siret" className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        Numéro SIRET
                      </Label>
                      <Input
                        id="siret"
                        placeholder="123 456 789 00012"
                        value={formData.siret}
                        onChange={(e) => setFormData({ ...formData, siret: e.target.value })}
                        maxLength={17}
                      />
                      <p className="text-xs text-muted-foreground">
                        Nous vérifions automatiquement votre activité sportive
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="rib" className="flex items-center gap-2">
                        <Banknote className="w-4 h-4" />
                        IBAN
                      </Label>
                      <Input
                        id="rib"
                        placeholder="FR76 XXXX XXXX XXXX XXXX XXXX XXX"
                        value={formData.rib}
                        onChange={(e) => setFormData({ ...formData, rib: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email professionnel
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="contact@votresalle.fr"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      <p className="text-xs text-muted-foreground">
                        Vous recevrez la confirmation de virement à cette adresse
                      </p>
                    </div>

                    <div className="pt-4 space-y-3">
                      <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                        <Shield className="w-5 h-5 text-primary mt-0.5" />
                        <div className="text-sm">
                          <p className="font-medium">0% de commission</p>
                          <p className="text-muted-foreground">Vous recevez 100% du montant débité</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                        <Clock className="w-5 h-5 text-primary mt-0.5" />
                        <div className="text-sm">
                          <p className="font-medium">Virement sous 48h</p>
                          <p className="text-muted-foreground">Après vérification de votre SIRET</p>
                        </div>
                      </div>
                    </div>

                    <Button 
                      className="w-full" 
                      size="lg"
                      onClick={handleFinalSubmit}
                      disabled={!formData.siret || !formData.rib || !formData.email || !formData.companyName || isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Traitement en cours...
                        </>
                      ) : (
                        <>
                          Valider le débit de {formData.amount}€
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Step 4: Confirmation */}
            {currentStep === "confirmation" && (
              <motion.div
                key="confirmation"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <Card className="border-2 border-green-500/20 bg-gradient-to-br from-green-500/5 to-transparent">
                  <CardHeader className="text-center">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="mx-auto w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-4"
                    >
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </motion.div>
                    <CardTitle className="text-2xl text-green-600">Transaction validée !</CardTitle>
                    <CardDescription>
                      Votre demande de virement a été enregistrée
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-white/50 dark:bg-white/5 rounded-xl p-6 space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Montant débité</span>
                        <span className="text-2xl font-bold text-primary">{formData.amount}€</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Établissement</span>
                        <span className="font-medium">{formData.companyName}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Virement prévu</span>
                        <span className="font-medium text-green-600">Sous 48h</span>
                      </div>
                    </div>

                    <div className="p-4 bg-primary/5 rounded-lg text-center">
                      <p className="text-sm text-muted-foreground">
                        Un email de confirmation a été envoyé à
                      </p>
                      <p className="font-medium text-primary">{formData.email}</p>
                    </div>

                    <Button 
                      variant="outline" 
                      className="w-full" 
                      size="lg"
                      onClick={() => {
                        setCurrentStep("scan");
                        setFormData({
                          cardCode: "",
                          amount: "",
                          siret: "",
                          rib: "",
                          email: "",
                          companyName: "",
                        });
                        setCardBalance(null);
                      }}
                    >
                      Nouvelle transaction
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Trust badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-muted-foreground mb-4">
              Paiements sécurisés • Aucun contrat requis • Ouvert à tous les pros du sport
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PartnerPayment;
