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
  Loader2,
  ArrowLeft,
  User,
  Calendar,
  Receipt
} from "lucide-react";
import siretBadge from "@/assets/siret-badge.png";

type Step = "scan" | "balance" | "info" | "confirmation";

interface FormData {
  cardCode: string;
  amount: string;
  siret: string;
  rib: string;
  email: string;
  companyName: string;
}

interface CardInfo {
  balance: number;
  holderName: string;
  expiryDate: string;
  cardNumber: string;
}

const PartnerPayment = () => {
  const [currentStep, setCurrentStep] = useState<Step>("scan");
  const [isLoading, setIsLoading] = useState(false);
  const [cardInfo, setCardInfo] = useState<CardInfo | null>(null);
  const [transactionId, setTransactionId] = useState<string>("");
  const [formData, setFormData] = useState<FormData>({
    cardCode: "",
    amount: "",
    siret: "",
    rib: "",
    email: "",
    companyName: "",
  });

  // Format card code input
  const formatCardCode = (value: string) => {
    const cleaned = value.replace(/[^A-Z0-9]/gi, "").toUpperCase();
    const chunks = cleaned.match(/.{1,4}/g) || [];
    return chunks.join("-").substring(0, 19);
  };

  // Format SIRET input
  const formatSiret = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    const chunks = [];
    if (cleaned.length > 0) chunks.push(cleaned.substring(0, 3));
    if (cleaned.length > 3) chunks.push(cleaned.substring(3, 6));
    if (cleaned.length > 6) chunks.push(cleaned.substring(6, 9));
    if (cleaned.length > 9) chunks.push(cleaned.substring(9, 14));
    return chunks.join(" ");
  };

  // Format IBAN input
  const formatIban = (value: string) => {
    const cleaned = value.replace(/[^A-Z0-9]/gi, "").toUpperCase();
    const chunks = cleaned.match(/.{1,4}/g) || [];
    return chunks.join(" ").substring(0, 34);
  };

  const handleCardVerification = async () => {
    setIsLoading(true);
    // Simulation de vérification avec délai réaliste
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simulation des données de la carte
    setCardInfo({
      balance: 150,
      holderName: "Marie Dupont",
      expiryDate: "12/2025",
      cardNumber: formData.cardCode,
    });
    
    setIsLoading(false);
    setCurrentStep("balance");
  };

  const handleAmountSubmit = () => {
    const amount = parseFloat(formData.amount);
    if (amount > 0 && amount <= (cardInfo?.balance || 0)) {
      setCurrentStep("info");
    }
  };

  const handleFinalSubmit = async () => {
    setIsLoading(true);
    // Simulation d'envoi avec vérifications
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    // Générer un ID de transaction fictif
    setTransactionId(`KS-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`);
    
    setIsLoading(false);
    setCurrentStep("confirmation");
  };

  const resetForm = () => {
    setCurrentStep("scan");
    setFormData({
      cardCode: "",
      amount: "",
      siret: "",
      rib: "",
      email: "",
      companyName: "",
    });
    setCardInfo(null);
    setTransactionId("");
  };

  const goBack = () => {
    if (currentStep === "balance") setCurrentStep("scan");
    else if (currentStep === "info") setCurrentStep("balance");
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
              Encaisser une carte Kadosport
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-6">
              Vous êtes un professionnel du sport ? Grâce à votre activité sportive déclarée, vous pouvez encaisser cette carte cadeau et être remboursé rapidement, sans commission.
            </p>
            
            {/* Badge SIRET Vérifié */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center"
            >
              <img 
                src={siretBadge} 
                alt="SIRET Vérifié - Professionnel du Sport" 
                className="h-36 sm:h-48 object-contain"
              />
            </motion.div>
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
                      Entrez le code unique situé sous le QR code de la carte Kadosport
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="cardCode">Code carte (16 caractères)</Label>
                      <Input
                        id="cardCode"
                        placeholder="ABCD-1234-EFGH-5678"
                        value={formData.cardCode}
                        onChange={(e) => setFormData({ ...formData, cardCode: formatCardCode(e.target.value) })}
                        className="text-center text-lg tracking-widest font-mono h-14"
                        maxLength={19}
                      />
                      <p className="text-xs text-muted-foreground text-center">
                        Le code se trouve sous le QR code sur la carte du client
                      </p>
                    </div>
                    
                    {/* Visual hint */}
                    <div className="bg-muted/50 rounded-xl p-4 flex items-center gap-4">
                      <div className="w-16 h-16 bg-white rounded-lg border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
                        <QrCode className="w-8 h-8 text-muted-foreground/50" />
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <p className="font-medium text-foreground">Où trouver le code ?</p>
                        <p>Demandez au client de vous montrer sa carte Kadosport. Le code est imprimé sous le QR code.</p>
                      </div>
                    </div>

                    <Button 
                      className="w-full" 
                      size="lg"
                      onClick={handleCardVerification}
                      disabled={formData.cardCode.replace(/-/g, "").length < 16 || isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Vérification de la carte...
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
            {currentStep === "balance" && cardInfo && (
              <motion.div
                key="balance"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <Card className="border-2">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <CardTitle className="text-green-600">Carte vérifiée ✓</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Card Info Display */}
                    <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6">
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-muted-foreground" />
                          <div>
                            <p className="text-xs text-muted-foreground">Titulaire</p>
                            <p className="font-medium">{cardInfo.holderName}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <div>
                            <p className="text-xs text-muted-foreground">Expiration</p>
                            <p className="font-medium">{cardInfo.expiryDate}</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-center pt-4 border-t border-primary/20">
                        <p className="text-sm text-muted-foreground mb-1">Solde disponible</p>
                        <p className="text-5xl font-bold text-primary">{cardInfo.balance}€</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="amount" className="text-base">Montant de la prestation</Label>
                      <div className="relative">
                        <Input
                          id="amount"
                          type="number"
                          placeholder="0"
                          value={formData.amount}
                          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                          className="text-center text-3xl font-bold pr-12 h-16"
                          max={cardInfo.balance}
                          min={0}
                          step={0.01}
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-muted-foreground">€</span>
                      </div>
                      {parseFloat(formData.amount) > cardInfo.balance && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-sm text-destructive flex items-center gap-1 justify-center"
                        >
                          <AlertCircle className="w-4 h-4" />
                          Le montant dépasse le solde disponible ({cardInfo.balance}€)
                        </motion.p>
                      )}
                      {formData.amount && parseFloat(formData.amount) > 0 && parseFloat(formData.amount) <= cardInfo.balance && (
                        <motion.p 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-sm text-green-600 text-center"
                        >
                          Solde restant après débit : {(cardInfo.balance - parseFloat(formData.amount)).toFixed(2)}€
                        </motion.p>
                      )}
                    </div>

                    <div className="flex gap-3">
                      <Button variant="outline" size="lg" onClick={goBack} className="gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        Retour
                      </Button>
                      <Button 
                        className="flex-1" 
                        size="lg"
                        onClick={handleAmountSubmit}
                        disabled={!formData.amount || parseFloat(formData.amount) <= 0 || parseFloat(formData.amount) > cardInfo.balance}
                      >
                        Continuer
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
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
                      Pour recevoir votre virement de <strong className="text-primary">{formData.amount}€</strong> sous 48h
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="companyName" className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        Nom de l'établissement
                      </Label>
                      <Input
                        id="companyName"
                        placeholder="Ex: Salle Fitness Plus, Coach Sportif Martin..."
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="siret" className="flex items-center gap-2">
                        <Receipt className="w-4 h-4" />
                        Numéro SIRET
                      </Label>
                      <Input
                        id="siret"
                        placeholder="123 456 789 00012"
                        value={formData.siret}
                        onChange={(e) => setFormData({ ...formData, siret: formatSiret(e.target.value) })}
                        maxLength={17}
                        className="font-mono"
                      />
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Shield className="w-3 h-3" />
                        Nous vérifions automatiquement que votre activité est bien sportive
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="rib" className="flex items-center gap-2">
                        <Banknote className="w-4 h-4" />
                        IBAN
                      </Label>
                      <Input
                        id="rib"
                        placeholder="FR76 1234 5678 9012 3456 7890 123"
                        value={formData.rib}
                        onChange={(e) => setFormData({ ...formData, rib: formatIban(e.target.value) })}
                        maxLength={34}
                        className="font-mono"
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
                        Vous recevrez la confirmation et le justificatif à cette adresse
                      </p>
                    </div>

                    <div className="pt-4 space-y-3">
                      {/* Badge de confiance */}
                      <div className="flex items-center justify-center mb-4">
                        <img 
                          src={siretBadge} 
                          alt="SIRET Vérifié - Professionnel du Sport" 
                          className="h-24 object-contain"
                        />
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 bg-green-500/5 border border-green-500/20 rounded-lg">
                        <Shield className="w-5 h-5 text-green-600 mt-0.5" />
                        <div className="text-sm">
                          <p className="font-medium text-green-700">0% de commission</p>
                          <p className="text-muted-foreground">Vous recevez 100% du montant : {formData.amount}€</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-blue-500/5 border border-blue-500/20 rounded-lg">
                        <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div className="text-sm">
                          <p className="font-medium text-blue-700">Virement sous 48h ouvrées</p>
                          <p className="text-muted-foreground">Après vérification automatique de votre SIRET</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button variant="outline" size="lg" onClick={goBack} className="gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        Retour
                      </Button>
                      <Button 
                        className="flex-1" 
                        size="lg"
                        onClick={handleFinalSubmit}
                        disabled={!formData.siret || !formData.rib || !formData.email || !formData.companyName || isLoading}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Vérification en cours...
                          </>
                        ) : (
                          <>
                            Valider le débit de {formData.amount}€
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Step 4: Confirmation */}
            {currentStep === "confirmation" && cardInfo && (
              <motion.div
                key="confirmation"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <Card className="border-2 border-green-500/30 bg-gradient-to-br from-green-500/5 to-transparent overflow-hidden">
                  {/* Success animation overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                      initial={{ scale: 0, opacity: 0.5 }}
                      animate={{ scale: 4, opacity: 0 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-green-500"
                    />
                  </div>
                  
                  <CardHeader className="text-center relative">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2, stiffness: 200 }}
                      className="mx-auto w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center mb-4"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.4, stiffness: 200 }}
                      >
                        <CheckCircle2 className="w-12 h-12 text-green-500" />
                      </motion.div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <CardTitle className="text-2xl text-green-600">Transaction validée !</CardTitle>
                      <CardDescription className="text-base mt-2">
                        Votre demande de virement a été enregistrée avec succès
                      </CardDescription>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="space-y-6 relative">
                    {/* Transaction Summary */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="bg-white dark:bg-card rounded-xl p-6 space-y-4 border"
                    >
                      <div className="text-center pb-4 border-b">
                        <p className="text-sm text-muted-foreground mb-1">Montant du virement</p>
                        <p className="text-4xl font-bold text-primary">{formData.amount}€</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Établissement</p>
                          <p className="font-medium">{formData.companyName}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Carte débitée</p>
                          <p className="font-medium font-mono">{cardInfo.cardNumber}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Titulaire carte</p>
                          <p className="font-medium">{cardInfo.holderName}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Solde restant</p>
                          <p className="font-medium">{(cardInfo.balance - parseFloat(formData.amount)).toFixed(2)}€</p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Transaction ID */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="bg-muted/50 rounded-xl p-4 text-center"
                    >
                      <p className="text-xs text-muted-foreground mb-1">Référence transaction</p>
                      <p className="font-mono font-bold text-lg">{transactionId}</p>
                    </motion.div>

                    {/* Timeline */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center gap-3 p-3 bg-green-500/10 rounded-lg">
                        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-green-700 text-sm">Transaction enregistrée</p>
                          <p className="text-xs text-muted-foreground">Maintenant</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-blue-500/10 rounded-lg">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <Shield className="w-4 h-4 text-blue-500" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-blue-700 text-sm">Vérification SIRET</p>
                          <p className="text-xs text-muted-foreground">En cours (automatique)</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                          <Banknote className="w-4 h-4 text-muted-foreground" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">Virement bancaire</p>
                          <p className="text-xs text-muted-foreground">Sous 48h ouvrées</p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Email notification */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                      className="p-4 bg-primary/5 rounded-lg text-center border border-primary/10"
                    >
                      <Mail className="w-5 h-5 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Un email de confirmation a été envoyé à
                      </p>
                      <p className="font-medium text-primary">{formData.email}</p>
                    </motion.div>

                    <Button 
                      variant="outline" 
                      className="w-full" 
                      size="lg"
                      onClick={resetForm}
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
              🔒 Paiements sécurisés • Aucun contrat requis • Ouvert à tous les pros du sport
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PartnerPayment;
