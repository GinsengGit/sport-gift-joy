import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Loader2, Send, CheckCircle2 } from "lucide-react";

const schema = z.object({
  beneficiary_first_name: z.string().trim().min(1, "Prénom requis").max(100),
  beneficiary_last_name: z.string().trim().min(1, "Nom requis").max(100),
  beneficiary_email: z.string().trim().email("Email invalide").max(255),
  beneficiary_phone: z.string().trim().max(30).optional().or(z.literal("")),
  pro_name: z.string().trim().min(1, "Nom du professionnel requis").max(200),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

type Props = {
  listingId?: string;
  defaultProName?: string;
  defaultProActivity?: string;
  defaultProCity?: string;
};

export const UseCardForm = ({ listingId, defaultProName, defaultProActivity, defaultProCity }: Props) => {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    const form = new FormData(e.currentTarget);
    const raw = {
      beneficiary_first_name: String(form.get("beneficiary_first_name") || ""),
      beneficiary_last_name: String(form.get("beneficiary_last_name") || ""),
      beneficiary_email: String(form.get("beneficiary_email") || ""),
      beneficiary_phone: String(form.get("beneficiary_phone") || ""),
      pro_name: String(form.get("pro_name") || ""),
      message: String(form.get("message") || ""),
    };

    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.errors.forEach(err => {
        if (err.path[0]) fieldErrors[String(err.path[0])] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("card_usage_requests").insert({
      listing_id: listingId ?? null,
      beneficiary_first_name: parsed.data.beneficiary_first_name,
      beneficiary_last_name: parsed.data.beneficiary_last_name,
      beneficiary_email: parsed.data.beneficiary_email,
      beneficiary_phone: parsed.data.beneficiary_phone || null,
      pro_name: parsed.data.pro_name,
      pro_activity: defaultProActivity ?? null,
      pro_city: defaultProCity ?? null,
      message: parsed.data.message || null,
    });
    setSubmitting(false);

    if (error) {
      toast.error("Erreur lors de l'envoi", { description: error.message });
      return;
    }
    setDone(true);
    toast.success("Votre demande a bien été envoyée !");
  };

  if (done) {
    return (
      <div className="text-center py-10 px-6 bg-green-500/5 border border-green-500/20 rounded-2xl">
        <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">Demande envoyée !</h3>
        <p className="text-muted-foreground">
          Notre équipe revient rapidement vers vous pour faciliter les démarches avec le professionnel.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <p className="text-sm text-muted-foreground">
        Vous êtes libre de choisir votre activité. Renseignez ci-dessous le professionnel souhaité — Kadosport
        s'occupe ensuite des démarches avec lui pour que vous puissiez profiter pleinement de ses services.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="beneficiary_first_name">Prénom *</Label>
          <Input id="beneficiary_first_name" name="beneficiary_first_name" maxLength={100} />
          {errors.beneficiary_first_name && <p className="text-xs text-destructive mt-1">{errors.beneficiary_first_name}</p>}
        </div>
        <div>
          <Label htmlFor="beneficiary_last_name">Nom *</Label>
          <Input id="beneficiary_last_name" name="beneficiary_last_name" maxLength={100} />
          {errors.beneficiary_last_name && <p className="text-xs text-destructive mt-1">{errors.beneficiary_last_name}</p>}
        </div>
        <div>
          <Label htmlFor="beneficiary_email">Email *</Label>
          <Input id="beneficiary_email" name="beneficiary_email" type="email" maxLength={255} />
          {errors.beneficiary_email && <p className="text-xs text-destructive mt-1">{errors.beneficiary_email}</p>}
        </div>
        <div>
          <Label htmlFor="beneficiary_phone">Téléphone</Label>
          <Input id="beneficiary_phone" name="beneficiary_phone" maxLength={30} />
        </div>
      </div>

      <div>
        <Label htmlFor="pro_name">Nom du professionnel *</Label>
        <Input id="pro_name" name="pro_name" defaultValue={defaultProName} maxLength={200} />
        {errors.pro_name && <p className="text-xs text-destructive mt-1">{errors.pro_name}</p>}
      </div>

      <div>
        <Label htmlFor="message">Message (optionnel)</Label>
        <Textarea id="message" name="message" rows={4} maxLength={2000} placeholder="Précisez votre demande, l'activité souhaitée, vos disponibilités..." />
      </div>

      <Button type="submit" disabled={submitting} variant="hero" className="w-full">
        {submitting ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Send className="w-4 h-4 mr-2" />}
        Envoyer ma demande
      </Button>
    </form>
  );
};
