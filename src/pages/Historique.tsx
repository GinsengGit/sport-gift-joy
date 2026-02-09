import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const mockTransactions = [
  { id: "1", type: "payment" as const, merchant: "Fitness Park", category: "Salle de sport", amount: 45.90, date: new Date().toISOString() },
  { id: "2", type: "credit" as const, merchant: "Crédit carte cadeau", amount: 100.00, date: new Date(Date.now() - 86400000).toISOString() },
  { id: "3", type: "payment" as const, merchant: "Club de Tennis", category: "Cours & Entraînement", amount: 29.99, date: new Date(Date.now() - 86400000 * 2).toISOString() },
  { id: "4", type: "credit" as const, merchant: "Crédit carte cadeau", amount: 100.00, date: new Date(Date.now() - 86400000 * 5).toISOString() },
  { id: "5", type: "payment" as const, merchant: "Coach sportif", category: "Coaching personnel", amount: 78.50, date: new Date(Date.now() - 86400000 * 7).toISOString() },
];

const Historique = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/dashboard">
              <Button variant="ghost" size="icon" className="shrink-0">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="font-display font-bold text-xl">Historique des transactions</h1>
              <p className="text-sm text-muted-foreground">Toutes vos transactions Kadosport</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="space-y-3">
          {mockTransactions.map((tx, index) => (
            <motion.div
              key={tx.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                tx.type === "payment" ? "bg-destructive/10" : "bg-green-500/10"
              }`}>
                {tx.type === "payment" 
                  ? <ArrowUpRight className="w-5 h-5 text-destructive" />
                  : <ArrowDownRight className="w-5 h-5 text-green-600" />
                }
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground truncate">{tx.merchant}</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    {new Date(tx.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                  </span>
                  {tx.type === "payment" && tx.category && (
                    <Badge variant="outline" className="text-xs">{tx.category}</Badge>
                  )}
                </div>
              </div>
              <span className={`font-semibold ${tx.type === "payment" ? "text-foreground" : "text-green-600"}`}>
                {tx.type === "payment" ? `-${tx.amount.toFixed(2)} €` : `+${tx.amount.toFixed(2)} €`}
              </span>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Historique;
