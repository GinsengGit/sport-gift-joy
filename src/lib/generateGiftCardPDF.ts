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
  // A5 landscape for more space
  const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: [148, 210] });

  const partnerPaymentUrl = `https://sport-gift-joy.lovable.app/partner-payment?card=${data.cardCode}`;

  const qrDataUrl = await QRCode.toDataURL(partnerPaymentUrl, {
    width: 400,
    margin: 1,
    color: { dark: "#1a1a1a", light: "#ffffff" },
    errorCorrectionLevel: "H",
  });

  const W = 210;
  const H = 148;

  // === BACKGROUND ===
  doc.setFillColor(15, 50, 25);
  doc.rect(0, 0, W, H, "F");

  // Top accent bar
  doc.setFillColor(25, 75, 35);
  doc.rect(0, 0, W, 38, "F");

  // Gold accent line
  doc.setFillColor(200, 170, 50);
  doc.rect(0, 37.5, W, 1, "F");

  // === HEADER ===
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(28);
  doc.setFont("helvetica", "bold");
  doc.text("Kadosport", 12, 16);

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(180, 210, 180);
  doc.text("Carte cadeau sport & loisirs sportifs", 12, 23);

  // Amount top right
  doc.setFontSize(32);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  doc.text(`${data.balance.toFixed(2)} €`, W - 12, 18, { align: "right" });

  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(160, 190, 160);
  doc.text("Solde disponible", W - 12, 25, { align: "right" });

  // Beneficiary
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(220, 240, 220);
  doc.text(`Bénéficiaire : ${data.recipientName}`, 12, 33);

  // Card info right
  doc.setFontSize(8);
  doc.setFont("courier", "normal");
  doc.setTextColor(160, 190, 160);
  doc.text(`N° ${formatCardDisplay(data.cardNumber)}`, W - 12, 33, { align: "right" });

  // ===========================
  // SECTION PRO — main content
  // ===========================
  const contentY = 44;

  // --- QR CODE ---
  const qrSize = 38;
  const qrX = 12;
  const qrY = contentY;

  // White bg for QR
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(qrX, qrY, qrSize + 4, qrSize + 4, 3, 3, "F");
  doc.addImage(qrDataUrl, "PNG", qrX + 2, qrY + 2, qrSize, qrSize);

  // Small label under QR
  doc.setFontSize(6.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(160, 190, 160);
  doc.text("Scannez pour encaisser", qrX + (qrSize + 4) / 2, qrY + qrSize + 8, { align: "center" });

  // === RIGHT SIDE: PRO MESSAGE ===
  const proX = qrX + qrSize + 12;
  const proW = W - proX - 12;

  // --- GOLD BADGE ---
  const badgeY = contentY;
  const badgeH = 18;

  // Outer gold border
  doc.setFillColor(200, 170, 50);
  doc.roundedRect(proX, badgeY, proW, badgeH, 3, 3, "F");
  // Inner dark
  doc.setFillColor(20, 55, 25);
  doc.roundedRect(proX + 1, badgeY + 1, proW - 2, badgeH - 2, 2.5, 2.5, "F");
  // Inner gold
  doc.setFillColor(200, 170, 50);
  doc.roundedRect(proX + 2, badgeY + 2, proW - 4, badgeH - 4, 2, 2, "F");

  // Badge icon (shield)
  doc.setFontSize(10);
  doc.setTextColor(20, 55, 25);
  doc.text("🛡️", proX + 6, badgeY + 10);

  // Badge text
  doc.setFontSize(8);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(20, 55, 25);
  doc.text("SIRET VÉRIFIÉ", proX + 14, badgeY + 9);

  doc.setFontSize(7);
  doc.text("ENCAISSEMENT RÉSERVÉ AUX PROFESSIONNELS DU SPORT", proX + 14, badgeY + 14);

  // === ACCROCHE MESSAGE ===
  const accrocheY = badgeY + badgeH + 5;

  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  doc.text("Vous êtes un professionnel du sport déclaré ?", proX, accrocheY);

  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(200, 220, 200);
  const exemples = "(salle fitness, coach sportif, centre sportif, association sportive...)";
  doc.text(exemples, proX, accrocheY + 5);

  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(76, 200, 100);
  doc.text("Encaissez cette carte sans aucune commission !", proX, accrocheY + 12);

  // === 3 ÉTAPES ===
  const stepsY = accrocheY + 20;
  const stepSpacing = 30;

  // Step backgrounds
  for (let i = 0; i < 3; i++) {
    const sx = proX + i * stepSpacing;
    doc.setFillColor(25, 70, 35);
    doc.roundedRect(sx, stepsY, 27, 28, 2, 2, "F");
  }

  // Step 1
  doc.setFontSize(16);
  doc.setTextColor(76, 200, 100);
  doc.text("📱", proX + 13.5, stepsY + 9, { align: "center" });
  doc.setFontSize(7);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  doc.text("1. Scannez", proX + 13.5, stepsY + 16, { align: "center" });
  doc.setFontSize(6);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(180, 210, 180);
  doc.text("le QR code", proX + 13.5, stepsY + 20, { align: "center" });
  doc.text("ci-contre", proX + 13.5, stepsY + 24, { align: "center" });

  // Step 2
  const s2x = proX + stepSpacing + 13.5;
  doc.setFontSize(16);
  doc.setTextColor(76, 200, 100);
  doc.text("✅", s2x, stepsY + 9, { align: "center" });
  doc.setFontSize(7);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  doc.text("2. Déclarez", s2x, stepsY + 16, { align: "center" });
  doc.setFontSize(6);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(180, 210, 180);
  doc.text("0% de", s2x, stepsY + 20, { align: "center" });
  doc.text("commission", s2x, stepsY + 24, { align: "center" });

  // Step 3
  const s3x = proX + 2 * stepSpacing + 13.5;
  doc.setFontSize(16);
  doc.setTextColor(76, 200, 100);
  doc.text("💸", s3x, stepsY + 9, { align: "center" });
  doc.setFontSize(7);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  doc.text("3. Recevez", s3x, stepsY + 16, { align: "center" });
  doc.setFontSize(6);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(180, 210, 180);
  doc.text("Remboursé", s3x, stepsY + 20, { align: "center" });
  doc.text("sous 48h", s3x, stepsY + 24, { align: "center" });

  // === BOTTOM BAR ===
  doc.setFillColor(10, 35, 18);
  doc.rect(0, H - 14, W, 14, "F");

  // Gold line above
  doc.setFillColor(200, 170, 50);
  doc.rect(0, H - 14.5, W, 0.5, "F");

  // Card code
  doc.setFontSize(8);
  doc.setFont("courier", "bold");
  doc.setTextColor(76, 200, 100);
  doc.text(`Code : ${data.cardCode}`, 12, H - 7);

  // Expiration
  const expDate = new Date(data.expirationDate);
  const expFormatted = expDate.toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
  doc.setFont("courier", "normal");
  doc.setTextColor(140, 170, 140);
  doc.text(`Valable jusqu'en ${expFormatted}`, W / 2, H - 7, { align: "center" });

  // Website
  doc.setFont("helvetica", "normal");
  doc.setTextColor(140, 170, 140);
  doc.text("kadosport.fr", W - 12, H - 7, { align: "right" });

  // === SAVE ===
  doc.save(`carte-kadosport-${data.cardCode}.pdf`);
}

function formatCardDisplay(num: string): string {
  return num.replace(/(.{4})/g, "$1 ").trim();
}
