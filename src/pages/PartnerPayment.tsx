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
  Receipt,
  BadgeCheck,
  FileCheck,
  Users,
  Zap
} from "lucide-react";
import siretBadge from "@/assets/siret-badge.png";

type Step = "landing" | "scan" | "returning-pro" | "balance" | "info" | "confirmation";

interface FormData {
  cardCode: string;
  amount: string;
  siret: string;
  rib: string;
  email: string;
  companyName: string;
}

interface VerifiedPro {
  email: string;
  siret: string;
  rib: string;
  companyName: string;
  verified: boolean;
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
  const [isReturningPro, setIsReturningPro] = useState(false);
  const [returningProEmail, setReturningProEmail] = useState("");
  const [verifiedPro, setVerifiedPro] = useState<VerifiedPro | null>(null);
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
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setCardInfo({
      balance: 150,
      holderName: "Marie Dupont",
      expiryDate: "12/2025",
      cardNumber: formData.cardCode,
    });
    
    setIsLoading(false);
    setCurrentStep("balance");
  };

  // Simulate fetching verified pro data
  const handleReturningProLogin = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simulated verified pro data - in real app, this would come from database
    const mockVerifiedPro: VerifiedPro = {
      email: returningProEmail,
      siret: "123 456 789 00012",
      rib: "FR76 1234 5678 9012 3456 7890 123",
      companyName: "Fitness Club Pro",
      verified: true,
    };
    
    setVerifiedPro(mockVerifiedPro);
    setFormData(prev => ({
      ...prev,
      email: mockVerifiedPro.email,
      siret: mockVerifiedPro.siret,
      rib: mockVerifiedPro.rib,
      companyName: mockVerifiedPro.companyName,
    }));
    setIsReturningPro(true);
    setIsLoading(false);
    setCurrentStep("scan");
  };

  const handleAmountSubmit = () => {
    const amount = parseFloat(formData.amount);
    if (amount > 0 && amount <= (cardInfo?.balance || 0)) {
      // Skip info step if returning verified pro
      if (isReturningPro && verifiedPro) {
        handleFinalSubmit();
      } else {
        setCurrentStep("info");
      }
    }
  };

  const handleFinalSubmit = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2500));
    
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
    setIsReturningPro(false);
    setVerifiedPro(null);
    setReturningProEmail("");
  };

  const goBack = () => {
    if (currentStep === "returning-pro") setCurrentStep("scan");
    else if (currentStep === "balance") setCurrentStep("scan");
    else if (currentStep === "info") setCurrentStep("balance");
  };

  const processSteps = [
    { id: "scan", label: "Carte", icon: QrCode },
    { id: "balance", label: "Montant", icon: CreditCard },
    { id: "info", label: isReturningPro ? "Vérifié" : "Informations", icon: isReturningPro ? BadgeCheck : Building2 },
    { id: "confirmation", label: "Confirmation", icon: CheckCircle2 },
  ];

  const currentStepIndex = processSteps.findIndex(s => s.id === currentStep || (currentStep === "returning-pro" && s.id === "scan"));

  // Landing page steps
  const howItWorksSteps = [
    {
      number: "1",
      title: "Un client arrive avec Kadosport",
      description: "Le client vous présente sa carte Kadosport avec son QR code unique.",
      icon: Users,
    },
    {
      number: "2",
      title: "Vous déclarez l'encaissement",
      description: "Scannez ou saisissez le code carte, indiquez le montant de la prestation.",
      icon: QrCode,
    },
    {
      number: "3",
      title: "Vérification SIRET et activité sportive",
      description: "Validation requise pour le premier remboursement. Automatique ensuite.",
      icon: FileCheck,
    },
    {
      number: "4",
      title: "Remboursement par virement bancaire sous 48h ouvrées",
      description: "Le montant est viré directement sur votre compte bancaire professionnel.",
      icon: Banknote,
    },
  ];

  const keyPoints = [
    { text: "Réservé aux professionnels du sport", icon: Users },
    { text: "Vérification administrative", icon: FileCheck },
    { text: "Remboursement bancaire", icon: Banknote },
    { text: "Zéro commission", icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <AnimatePresence mode="wait">
          {/* Landing Page */}
          {currentStep === "landing" && (
            <motion.div
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Hero Header */}
              <section className="container mx-auto px-4 max-w-4xl mb-16">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                    <Building2 className="w-4 h-4" />
                    Espace professionnel
                  </div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Professionnels du sport : encaissez Kadosport
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Dispositif de remboursement réservé aux professionnels du sport disposant d'un SIRET valide.
                  </p>
                </motion.div>
              </section>

              {/* Comment ça fonctionne */}
              <section className="container mx-auto px-4 max-w-5xl mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-10">
                    Comment ça fonctionne
                  </h2>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {howItWorksSteps.map((step, index) => (
                      <motion.div
                        key={step.number}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 + index * 0.1 }}
                        className="relative"
                      >
                        {/* Connector line */}
                        {index < howItWorksSteps.length - 1 && (
                          <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                        )}
                        
                        <Card className="h-full border-2 hover:border-primary/30 transition-colors">
                          <CardContent className="pt-6">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                                {step.number}
                              </div>
                              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                <step.icon className="w-5 h-5 text-primary" />
                              </div>
                            </div>
                            <h3 className="font-semibold text-foreground mb-2">
                              {step.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {step.description}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  {/* Commission highlight */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 text-center"
                  >
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-green-700">Aucune commission prélevée</span>
                    </div>
                  </motion.div>
                </motion.div>
              </section>

              {/* Vérification & Sécurité */}
              <section className="container mx-auto px-4 max-w-4xl mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-shrink-0">
                          <img 
                            src={siretBadge} 
                            alt="SIRET Vérifié" 
                            className="h-32 sm:h-40 object-contain"
                          />
                        </div>
                        <div className="text-center md:text-left">
                          <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
                            <Shield className="w-6 h-6 text-primary" />
                            <h3 className="text-xl font-bold text-foreground">
                              Vérification & sécurité
                            </h3>
                          </div>
                          <p className="text-muted-foreground mb-4">
                            <strong className="text-foreground">Vérification SIRET automatique.</strong><br />
                            Les remboursements sont réservés aux professionnels du sport.<br />
                            L'entreprise est vérifiée avant le premier remboursement.
                          </p>
                          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
                            <BadgeCheck className="w-5 h-5" />
                            SIRET vérifié
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </section>

              {/* À retenir */}
              <section className="container mx-auto px-4 max-w-4xl mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h2 className="text-2xl font-bold text-foreground text-center mb-8">
                    À retenir
                  </h2>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {keyPoints.map((point, index) => (
                      <motion.div
                        key={point.text}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.45 + index * 0.05 }}
                        className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border"
                      >
                        <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="font-medium text-foreground">{point.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* CTA Button */}
              <section className="container mx-auto px-4 max-w-md">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-center"
                >
                  <Button 
                    size="xl" 
                    variant="coral"
                    className="w-full gap-3 text-lg"
                    onClick={() => setCurrentStep("scan")}
                  >
                    <CreditCard className="w-6 h-6" />
                    Encaisser Kadosport
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </motion.div>
              </section>
            </motion.div>
          )}

          {/* Process Steps (scan, balance, info, confirmation) */}
          {currentStep !== "landing" && (
            <motion.div
              key="process"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="container mx-auto px-4 max-w-2xl"
            >
              {/* Header */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-8"
              >
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                  Encaisser une carte Kadosport
                </h1>
              </motion.div>

              {/* Progress Steps */}
              <div className="flex items-center justify-center gap-2 mb-12">
                {processSteps.map((step, index) => (
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
                    {index < processSteps.length - 1 && (
                      <div className={`w-8 h-0.5 mx-1 ${
                        index < currentStepIndex ? "bg-primary" : "bg-muted"
                      }`} />
                    )}
                  </div>
                ))}
              </div>

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
                      {/* Returning Pro Access - TOP */}
                      {!isReturningPro && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-gradient-to-r from-green-500/10 to-primary/10 border border-green-500/30 rounded-xl p-4"
                        >
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                                <BadgeCheck className="w-5 h-5 text-green-600" />
                              </div>
                              <div>
                                <p className="font-medium text-foreground">Professionnel du sport déjà vérifié ?</p>
                                <p className="text-sm text-muted-foreground">Accédez directement au débit</p>
                              </div>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              className="gap-2 border-green-500/30 text-green-700 hover:bg-green-500/10"
                              onClick={() => setCurrentStep("returning-pro")}
                            >
                              <Zap className="w-4 h-4" />
                              Accès rapide
                            </Button>
                          </div>
                        </motion.div>
                      )}

                      {/* Returning Pro Banner */}
                      {isReturningPro && verifiedPro && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 flex items-center gap-3"
                        >
                          <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                            <BadgeCheck className="w-5 h-5 text-green-600" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-green-700">{verifiedPro.companyName}</p>
                            <p className="text-sm text-green-600">Pro vérifié • Parcours simplifié</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              setIsReturningPro(false);
                              setVerifiedPro(null);
                              setFormData(prev => ({ ...prev, siret: "", rib: "", email: "", companyName: "" }));
                            }}
                            className="text-muted-foreground hover:text-foreground"
                          >
                            Changer
                          </Button>
                        </motion.div>
                      )}

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
                      
                      <div className="bg-muted/50 rounded-xl p-4 flex items-center gap-4">
                        <div className="w-16 h-16 bg-white rounded-lg border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
                          <QrCode className="w-8 h-8 text-muted-foreground/50" />
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <p className="font-medium text-foreground">Où trouver le code ?</p>
                          <p>Demandez au client de vous montrer sa carte Kadosport. Le code est imprimé sous le QR code.</p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button 
                          className="flex-1" 
                          size="lg"
                          onClick={handleCardVerification}
                          disabled={formData.cardCode.replace(/-/g, "").length < 16 || isLoading}
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
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Returning Pro Login */}
              {currentStep === "returning-pro" && (
                <motion.div
                  key="returning-pro"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <Card className="border-2">
                    <CardHeader className="text-center">
                      <div className="mx-auto w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                        <BadgeCheck className="w-8 h-8 text-green-600" />
                      </div>
                      <CardTitle>Accès professionnel vérifié</CardTitle>
                      <CardDescription>
                        Entrez l'email utilisé lors de votre première vérification
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="returningEmail" className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Email professionnel
                        </Label>
                        <Input
                          id="returningEmail"
                          type="email"
                          placeholder="contact@votreentreprise.fr"
                          value={returningProEmail}
                          onChange={(e) => setReturningProEmail(e.target.value)}
                          className="h-12"
                        />
                      </div>

                      <div className="bg-muted/50 rounded-xl p-4 space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Zap className="w-4 h-4 text-primary" />
                          <span><strong className="text-foreground">Parcours simplifié :</strong> plus besoin de ressaisir vos informations</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          <span>Débit carte → Confirmation directe par email</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>Remboursement toujours sous 48h ouvrées</span>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button variant="outline" size="lg" onClick={goBack} className="gap-2">
                          <ArrowLeft className="w-4 h-4" />
                          Retour
                        </Button>
                        <Button 
                          className="flex-1" 
                          size="lg"
                          onClick={handleReturningProLogin}
                          disabled={!returningProEmail || !returningProEmail.includes("@") || isLoading}
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Vérification...
                            </>
                          ) : (
                            <>
                              Accéder
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </>
                          )}
                        </Button>
                      </div>

                      <p className="text-xs text-center text-muted-foreground">
                        Première fois ? <button 
                          onClick={() => setCurrentStep("scan")} 
                          className="text-primary hover:underline"
                        >
                          Continuez normalement
                        </button>, vous serez vérifié lors de votre premier encaissement.
                      </p>
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

                      {/* Verified Pro Info Banner */}
                      {isReturningPro && verifiedPro && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-green-500/10 border border-green-500/20 rounded-xl p-4"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <BadgeCheck className="w-5 h-5 text-green-600" />
                            <span className="font-medium text-green-700">Pro vérifié - Parcours rapide</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <span className="text-muted-foreground">Établissement:</span>
                              <p className="font-medium text-foreground">{verifiedPro.companyName}</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Email:</span>
                              <p className="font-medium text-foreground">{verifiedPro.email}</p>
                            </div>
                          </div>
                          <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                            <Zap className="w-3 h-3" />
                            Confirmation directe après validation du montant
                          </p>
                        </motion.div>
                      )}
                      
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
                          variant={isReturningPro ? "coral" : "default"}
                          onClick={handleAmountSubmit}
                          disabled={!formData.amount || parseFloat(formData.amount) <= 0 || parseFloat(formData.amount) > cardInfo.balance || isLoading}
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Traitement...
                            </>
                          ) : isReturningPro ? (
                            <>
                              Confirmer l'encaissement
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </>
                          ) : (
                            <>
                              Continuer
                          <ArrowRight className="w-4 h-4 ml-2" />
                            </>
                          )}
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
                          IBAN (RIB)
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
                          placeholder="contact@votreentreprise.fr"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        <p className="text-xs text-muted-foreground">
                          Pour recevoir la confirmation et le justificatif de virement
                        </p>
                      </div>

                      <div className="bg-green-500/10 rounded-xl p-4 flex items-center gap-3 border border-green-500/20">
                        <Clock className="w-5 h-5 text-green-600" />
                        <div>
                          <p className="font-medium text-green-700">Remboursement sous 48h ouvrées</p>
                          <p className="text-sm text-green-600/80">0% de commission prélevée</p>
                        </div>
                      </div>

                      <div className="flex gap-3 pt-2">
                        <Button variant="outline" size="lg" onClick={goBack} className="gap-2">
                          <ArrowLeft className="w-4 h-4" />
                          Retour
                        </Button>
                        <Button 
                          className="flex-1" 
                          size="lg"
                          variant="coral"
                          onClick={handleFinalSubmit}
                          disabled={
                            !formData.siret || 
                            !formData.rib || 
                            !formData.email || 
                            !formData.companyName ||
                            isLoading
                          }
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Traitement en cours...
                            </>
                          ) : (
                            <>
                              Confirmer l'encaissement
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
              {currentStep === "confirmation" && (
                <motion.div
                  key="confirmation"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Card className="border-2 border-green-500/30 bg-gradient-to-br from-green-500/5 to-transparent">
                    <CardContent className="pt-8 text-center space-y-6">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className="mx-auto w-20 h-20 rounded-full bg-green-500 flex items-center justify-center"
                      >
                        <CheckCircle2 className="w-10 h-10 text-white" />
                      </motion.div>

                      <div>
                        <h2 className="text-2xl font-bold text-green-600 mb-2">
                          Encaissement confirmé !
                        </h2>
                        <p className="text-muted-foreground">
                          Votre demande de remboursement a été enregistrée avec succès.
                        </p>
                      </div>

                      <div className="bg-card rounded-xl p-6 border text-left space-y-4">
                        <div className="flex justify-between items-center pb-4 border-b">
                          <span className="text-muted-foreground">Montant</span>
                          <span className="text-2xl font-bold text-primary">{formData.amount}€</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Référence</span>
                          <span className="font-mono font-medium">{transactionId}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Établissement</span>
                          <span className="font-medium">{formData.companyName}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Délai de virement</span>
                          <span className="font-medium text-green-600">48h ouvrées</span>
                        </div>
                      </div>

                      <div className="bg-muted/50 rounded-xl p-4 text-sm text-muted-foreground">
                        <p>
                          Un email de confirmation a été envoyé à <strong className="text-foreground">{formData.email}</strong>
                        </p>
                      </div>

                      <Button 
                        onClick={resetForm}
                        size="lg"
                        className="w-full"
                      >
                        Nouvel encaissement
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default PartnerPayment;
