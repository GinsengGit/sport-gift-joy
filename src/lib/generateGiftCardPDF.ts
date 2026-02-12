import jsPDF from "jspdf";
import QRCode from "qrcode";

interface GiftCardData {
  recipientName: string;
  balance: number;
  cardNumber: string;
  expirationDate: string;
  cardCode: string;
}

export async function generateGiftCardPDF(data: GiftCardData) {
  const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: [90, 145] });

  const partnerPaymentUrl = `https://sport-gift-joy.lovable.app/partner-payment?card=${data.cardCode}`;

  // Generate QR code as data URL
  const qrDataUrl = await QRCode.toDataURL(partnerPaymentUrl, {
    width: 300,
    margin: 1,
    color: { dark: "#1a1a1a", light: "#ffffff" },
    errorCorrectionLevel: "H",
  });

  // === CARD BACKGROUND ===
  // Dark green gradient simulation
  doc.setFillColor(20, 60, 30);
  doc.roundedRect(0, 0, 145, 90, 0, 0, "F");

  // Lighter green accent strip
  doc.setFillColor(30, 90, 40);
  doc.roundedRect(0, 0, 145, 32, 0, 0, "F");

  // Subtle accent line
  doc.setFillColor(76, 175, 80);
  doc.rect(0, 31.5, 145, 1, "F");

  // === HEADER ===
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text("Kadosport", 8, 14);

  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(200, 220, 200);
  doc.text("Carte cadeau sport & loisirs sportifs", 8, 20);

  // Amount
  doc.setFontSize(26);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  doc.text(`${data.balance.toFixed(2)} €`, 137, 16, { align: "right" });

  doc.setFontSize(7);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(180, 200, 180);
  doc.text("Solde initial", 137, 22, { align: "right" });

  // === BENEFICIARY NAME ===
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  doc.text(`Bénéficiaire : ${data.recipientName}`, 8, 42);

  // === QR CODE ===
  // White background for QR
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(8, 47, 30, 30, 2, 2, "F");
  doc.addImage(qrDataUrl, "PNG", 9.5, 48.5, 27, 27);

  // === PRO REASSURANCE TEXT (next to QR) ===
  const proTextX = 44;
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(76, 175, 80);
  doc.text("Professionnel du sport ?", proTextX, 51);

  doc.setFontSize(7);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(220, 230, 220);

  const proLines = [
    "Scannez ce QR code pour encaisser cette carte.",
    "",
    "✓ 0% de commission — vous recevez 100% du montant",
    "✓ Virement sous 48h ouvrées sur votre compte",
    "✓ Vérification SIRET simple et rapide",
    "✓ Aucun terminal de paiement nécessaire",
    "",
    "Kadosport est un réseau de paiement dédié au sport.",
  ];

  let lineY = 56;
  proLines.forEach((line) => {
    if (line === "") {
      lineY += 2;
    } else {
      doc.text(line, proTextX, lineY);
      lineY += 3.5;
    }
  });

  // === BOTTOM BAR ===
  doc.setFillColor(15, 45, 25);
  doc.rect(0, 80, 145, 10, "F");

  // Card number
  doc.setFontSize(7);
  doc.setFont("courier", "normal");
  doc.setTextColor(150, 170, 150);
  doc.text(`N° ${formatCardDisplay(data.cardNumber)}`, 8, 86);

  // Expiration
  const expDate = new Date(data.expirationDate);
  const expFormatted = expDate.toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
  doc.text(`Valable jusqu'en ${expFormatted}`, 75, 86);

  // Code
  doc.setFont("courier", "bold");
  doc.setTextColor(76, 175, 80);
  doc.text(data.cardCode, 137, 86, { align: "right" });

  // === SAVE ===
  doc.save(`carte-kadosport-${data.cardCode}.pdf`);
}

function formatCardDisplay(num: string): string {
  return num.replace(/(.{4})/g, "$1 ").trim();
}
