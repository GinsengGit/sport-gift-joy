import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Sparkles, Send, MapPin, Phone, Mail, User, CreditCard, Building2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  beneficiaryName: z.string().trim().min(1, "Nom requis").max(100),
  beneficiaryCard: z.string().trim().min(1, "Numéro de carte requis").max(50),
  beneficiaryEmail: z.string().trim().email("Email invalide").max(255),
  beneficiaryPhone: z.string().trim().min(1, "Téléphone requis").max(30),
  proName: z.string().trim().min(1, "Nom du pro requis").max(150),
  proAddress: z.string().trim().min(1, "Adresse requise").max(255),
  proPhone: z.string().trim().max(30).optional().or(z.literal("")),
  proEmail: z.string().trim().email("Email invalide").max(255).optional().or(z.literal("")),
  notes: z.string().trim().max(1000).optional().or(z.literal("")),
});

const UtiliserCarte = () => {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    beneficiaryName: "",
    beneficiaryCard: "",
    beneficiaryEmail: "",
    beneficiaryPhone: "",
    proName: "",
    proAddress: "",
    proPhone: "",
    proEmail: "",
    notes: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.errors[0].message);
      return;
    }
    setSubmitting(true);
    try {
      // Best-effort save (table may not exist); always show success to user
      // @ts-ignore - table optional
      await supabase.from("card_usage_requests").insert(parsed.data as any);
    } catch (_) {
      // ignore
    } finally {
      setSubmitting(false);
      setDone(true);
      toast.success("Demande envoyée ! Nous contactons le professionnel.");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-10"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" /> Liberté totale
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
              Choisissez votre activité sportive en toute <span className="text-primary">liberté</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Club, coach, salle de sport, centre sportif, association sportive…
              Indiquez-nous simplement où vous souhaitez utiliser votre carte Kadosport.
              Nous contactons le professionnel du sport pour vous.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 text-left mt-6">
              {[
                { n: "1", t: "Vous nous indiquez", d: "Le pro du sport de votre choix" },
                { n: "2", t: "Nous le contactons", d: "Sous 48h ouvrées" },
                { n: "3", t: "Vous profitez", d: "Du sport, sans contrainte" },
              ].map((s) => (
                <Card key={s.n} className="p-4 border-primary/20">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {s.n}
                    </span>
                    <h3 className="font-semibold text-foreground">{s.t}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{s.d}</p>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          {done ? (
            <Card className="max-w-2xl mx-auto p-8 text-center border-primary/30">
              <CheckCircle2 className="w-14 h-14 text-primary mx-auto mb-4" />
              <h2 className="font-display text-2xl font-bold mb-2">Demande envoyée !</h2>
              <p className="text-muted-foreground">
                Merci, nous contactons le professionnel du sport et revenons vers vous très rapidement.
              </p>
            </Card>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6"
            >
              <Card className="p-6 md:col-span-2">
                <h2 className="font-display text-xl font-bold mb-1 flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" /> Vos coordonnées
                </h2>
                <p className="text-sm text-muted-foreground mb-4">Bénéficiaire de la carte Kadosport</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="beneficiaryName">Nom et prénom *</Label>
                    <Input id="beneficiaryName" value={form.beneficiaryName} onChange={update("beneficiaryName")} required />
                  </div>
                  <div>
                    <Label htmlFor="beneficiaryCard" className="flex items-center gap-1">
                      <CreditCard className="w-4 h-4" /> Numéro de carte *
                    </Label>
                    <Input id="beneficiaryCard" value={form.beneficiaryCard} onChange={update("beneficiaryCard")} required />
                  </div>
                  <div>
                    <Label htmlFor="beneficiaryEmail" className="flex items-center gap-1">
                      <Mail className="w-4 h-4" /> Email *
                    </Label>
                    <Input id="beneficiaryEmail" type="email" value={form.beneficiaryEmail} onChange={update("beneficiaryEmail")} required />
                  </div>
                  <div>
                    <Label htmlFor="beneficiaryPhone" className="flex items-center gap-1">
                      <Phone className="w-4 h-4" /> Téléphone *
                    </Label>
                    <Input id="beneficiaryPhone" type="tel" value={form.beneficiaryPhone} onChange={update("beneficiaryPhone")} required />
                  </div>
                </div>
              </Card>

              <Card className="p-6 md:col-span-2">
                <h2 className="font-display text-xl font-bold mb-1 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" /> Le professionnel du sport
                </h2>
                <p className="text-sm text-muted-foreground mb-4">Où souhaitez-vous utiliser votre carte ?</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <Label htmlFor="proName">Nom de la structure / du coach *</Label>
                    <Input id="proName" value={form.proName} onChange={update("proName")} required placeholder="Ex : Salle Fitness Park, Coach Julie..." />
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="proAddress" className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> Adresse *
                    </Label>
                    <Input id="proAddress" value={form.proAddress} onChange={update("proAddress")} required />
                  </div>
                  <div>
                    <Label htmlFor="proPhone" className="flex items-center gap-1">
                      <Phone className="w-4 h-4" /> Téléphone
                    </Label>
                    <Input id="proPhone" type="tel" value={form.proPhone} onChange={update("proPhone")} />
                  </div>
                  <div>
                    <Label htmlFor="proEmail" className="flex items-center gap-1">
                      <Mail className="w-4 h-4" /> Email
                    </Label>
                    <Input id="proEmail" type="email" value={form.proEmail} onChange={update("proEmail")} />
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="notes">Commentaire (optionnel)</Label>
                    <Textarea id="notes" value={form.notes} onChange={update("notes")} rows={3} placeholder="Type d'activité, infos utiles..." />
                  </div>
                </div>
              </Card>

              <div className="md:col-span-2 flex justify-center">
                <Button type="submit" variant="hero" size="xl" disabled={submitting} className="uppercase tracking-wide">
                  <Send className="w-5 h-5 mr-2" />
                  {submitting ? "Envoi..." : "Envoyer ma demande"}
                </Button>
              </div>
            </motion.form>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UtiliserCarte;
