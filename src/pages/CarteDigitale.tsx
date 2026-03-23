import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { QrCode, Shield, Dumbbell, Users, Mountain, Trophy, Building2, Clock, Download, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import QRCodeLib from "qrcode";
import siretBadge from "@/assets/siret-badge.png";

const CarteDigitale = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name") || "Bénéficiaire";
  const balance = parseFloat(searchParams.get("balance") || "100");
  const cardCode = searchParams.get("code") || "KDS-2024-7X9F";
  const cardNumber = searchParams.get("card") || "4532789012345678";
  const expiration = searchParams.get("exp") || "2026-12-31";
  const [qrUrl, setQrUrl] = useState("");
  const printRef = useRef<HTMLDivElement>(null);

  const partnerPaymentUrl = `https://sport-gift-joy.lovable.app/partner-payment?card=${cardCode}`;

  useEffect(() => {
    QRCodeLib.toDataURL(partnerPaymentUrl, {
      width: 400,
      margin: 1,
      color: { dark: "#0f3219", light: "#ffffff" },
      errorCorrectionLevel: "H",
    }).then(setQrUrl);
  }, [partnerPaymentUrl]);

  const formatCardNumber = (num: string) => num.replace(/(.{4})/g, "$1 ").trim();
  const expDate = new Date(expiration);
  const formattedExp = expDate.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

  const handlePrint = () => window.print();

  const activities = [
    { icon: Dumbbell, label: "Salles de sport" },
    { icon: Users, label: "Coachs sportifs" },
    { icon: Mountain, label: "Activités outdoor" },
    { icon: Trophy, label: "Centres sportifs" },
    { icon: Building2, label: "Clubs & Associations" },
  ];

  const steps = [
    { num: "1", title: "Scannez le QR code", desc: "Ou rendez-vous sur kadosport.fr/encaisser-une-carte" },
    { num: "2", title: "Déclarez le montant", desc: "0% de commission — 100% du montant pour vous" },
    { num: "3", title: "Recevez votre virement", desc: "Remboursement garanti sous 48h ouvrées" },
  ];

  return (
    <>
      {/* Print styles */}
      <style>{`
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
          .print-page { 
            padding: 0 !important; 
            margin: 0 !important;
            min-height: auto !important;
          }
          .print-card {
            box-shadow: none !important;
            border-radius: 0 !important;
            max-width: 100% !important;
            margin: 0 !important;
          }
          @page { size: A4 portrait; margin: 10mm; }
        }
      `}</style>

      {/* Top bar - not printed */}
      <div className="no-print fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between max-w-3xl">
          <Link to="/dashboard">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Mon espace
            </Button>
          </Link>
          <Button onClick={handlePrint} size="sm" className="bg-primary text-primary-foreground">
            <Download className="w-4 h-4 mr-2" />
            Télécharger / Imprimer
          </Button>
        </div>
      </div>

      <div className="print-page min-h-screen bg-muted/30 pt-20 pb-12 no-print:pt-20">
        <div ref={printRef} className="print-card container mx-auto px-4 max-w-2xl">
          
          {/* === CARD HEADER === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-t-3xl bg-gradient-to-br from-[#0f3219] via-[#153d22] to-[#1a5c2e] p-8 text-white relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full blur-2xl" />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="font-display text-3xl font-bold tracking-tight">Kadosport</h1>
                  <p className="text-white/60 text-sm mt-1">Carte cadeau sport & loisirs sportifs</p>
                </div>
                <div className="text-right">
                  <p className="text-white/50 text-xs mb-1">Solde disponible</p>
                  <p className="font-display text-4xl font-bold">{balance.toFixed(2)} €</p>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-white/15 pt-4">
                <div>
                  <p className="text-white/50 text-xs">Bénéficiaire</p>
                  <p className="font-semibold text-lg">{name}</p>
                </div>
                <div className="text-right">
                  <p className="text-white/50 text-xs">N° carte</p>
                  <p className="font-mono text-sm text-white/80">{formatCardNumber(cardNumber)}</p>
                </div>
              </div>

              <div className="flex items-center justify-end mt-3">
                <div className="text-right">
                  <p className="text-white/50 text-xs">Valable jusqu'au</p>
                  <p className="text-sm text-white/80">{formattedExp}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* === SECTION PRO === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card border-x border-border px-6 py-8 space-y-6"
          >
            {/* Header with SIRET badge */}
            <div className="flex items-center gap-4">
              <img src={siretBadge} alt="SIRET vérifié" className="h-20 w-auto flex-shrink-0 drop-shadow-md" />
              <div>
                <h2 className="font-display text-xl font-bold text-foreground leading-snug">
                  Vous êtes un professionnel du sport déclaré ?
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Encaissez cette carte <strong className="text-primary">sans aucune commission</strong>
                </p>
              </div>
            </div>

            {/* Accroche */}
            <div className="bg-primary/5 border border-primary/15 rounded-2xl p-5">
              <p className="text-sm text-muted-foreground text-center mb-4">
                (salle fitness, coach sportif, centre sportif, association sportive...)
              </p>
              <div className="grid grid-cols-5 gap-2">
                {activities.map((a) => (
                  <div key={a.label} className="flex flex-col items-center gap-1.5">
                    <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                      <a.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-[10px] text-muted-foreground text-center leading-tight font-medium">{a.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* QR + Steps */}
            <div className="flex gap-6 items-start">
              {/* QR Code */}
              <div className="flex-shrink-0">
                <div className="bg-white rounded-2xl p-3 shadow-lg border border-border">
                  {qrUrl ? (
                    <img src={qrUrl} alt="QR Code encaissement" className="w-32 h-32" />
                  ) : (
                    <div className="w-32 h-32 flex items-center justify-center">
                      <QrCode className="w-16 h-16 text-muted-foreground/30" />
                    </div>
                  )}
                </div>
                <p className="text-[10px] text-muted-foreground text-center mt-2 font-medium">
                  Scannez pour encaisser
                </p>
              </div>

              {/* Steps */}
              <div className="flex-1 space-y-3">
                {steps.map((step) => (
                  <div key={step.num} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-sm font-bold text-primary-foreground">
                      {step.num}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-foreground">{step.title}</p>
                      <p className="text-xs text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Guarantees */}
            <div className="flex items-center justify-center gap-6 pt-2 border-t border-border">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground font-medium">0% commission</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground font-medium">Remboursement 48h</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground font-medium">100% sécurisé</span>
              </div>
            </div>
          </motion.div>

          {/* === FOOTER === */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="rounded-b-3xl bg-[#0f3219] px-6 py-4 flex items-center justify-between"
          >
            <p className="text-white/50 text-xs">kadosport.fr</p>
            <p className="text-white/50 text-xs">Dispositif de financement de la pratique sportive</p>
          </motion.div>

        </div>
      </div>
    </>
  );
};

export default CarteDigitale;
