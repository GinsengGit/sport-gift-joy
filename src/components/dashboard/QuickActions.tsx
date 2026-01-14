import { motion } from "framer-motion";
import { 
  Gift, 
  RefreshCw, 
  HelpCircle, 
  CreditCard,
  ArrowRight
} from "lucide-react";

const QuickActions = () => {
  const actions = [
    {
      icon: Gift,
      label: "Offrir une carte",
      description: "Faites plaisir à un proche",
      color: "bg-kado-coral/10 text-kado-coral",
      href: "/offrir"
    },
    {
      icon: RefreshCw,
      label: "Prolonger ma carte",
      description: "1€/mois",
      color: "bg-primary/10 text-primary",
      href: "/prolonger"
    },
    {
      icon: CreditCard,
      label: "Détails de la carte",
      description: "Numéro, CVV, validité",
      color: "bg-kado-sky/10 text-kado-sky",
      href: "/carte"
    },
    {
      icon: HelpCircle,
      label: "Aide & Support",
      description: "Questions fréquentes",
      color: "bg-secondary/10 text-secondary",
      href: "/aide"
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="rounded-2xl bg-card border border-border p-6 shadow-kado"
    >
      <h3 className="font-display font-semibold text-lg mb-4">Actions rapides</h3>
      
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => (
          <motion.a
            key={action.label}
            href={action.href}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
            className="group p-4 rounded-xl bg-muted/50 hover:bg-muted transition-all hover:shadow-md"
          >
            <div className={`w-10 h-10 ${action.color} rounded-xl flex items-center justify-center mb-3`}>
              <action.icon className="h-5 w-5" />
            </div>
            <p className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
              {action.label}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {action.description}
            </p>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default QuickActions;
