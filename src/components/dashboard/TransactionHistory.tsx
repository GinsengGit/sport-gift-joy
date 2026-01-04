import { motion } from "framer-motion";
import { 
  ShoppingBag, 
  TrendingDown, 
  TrendingUp, 
  Calendar,
  Filter,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Transaction {
  id: string;
  type: 'payment' | 'credit' | 'cashback';
  merchant: string;
  category?: string;
  amount: number;
  date: string;
  cashbackEarned?: number;
}

interface TransactionHistoryProps {
  transactions: Transaction[];
}

const TransactionHistory = ({ transactions }: TransactionHistoryProps) => {
  const [filter, setFilter] = useState<'all' | 'payment' | 'credit' | 'cashback'>('all');

  const filteredTransactions = transactions.filter(t => 
    filter === 'all' || t.type === filter
  );

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'payment':
        return <ShoppingBag className="h-4 w-4" />;
      case 'credit':
        return <TrendingUp className="h-4 w-4" />;
      case 'cashback':
        return <TrendingUp className="h-4 w-4" />;
      default:
        return <ShoppingBag className="h-4 w-4" />;
    }
  };

  const getTransactionColor = (type: string) => {
    switch (type) {
      case 'payment':
        return 'bg-destructive/10 text-destructive';
      case 'credit':
        return 'bg-primary/10 text-primary';
      case 'cashback':
        return 'bg-kado-gold/10 text-kado-gold';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return "Aujourd'hui";
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "Hier";
    } else {
      return date.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'short'
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="rounded-2xl bg-card border border-border shadow-kado"
    >
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-secondary/10 rounded-xl">
              <Calendar className="h-5 w-5 text-secondary" />
            </div>
            <h3 className="font-display font-semibold text-lg">Historique</h3>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="h-4 w-4" />
            Filtrer
            <ChevronDown className="h-3 w-3" />
          </Button>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {[
            { key: 'all', label: 'Tout' },
            { key: 'payment', label: 'Paiements' },
            { key: 'credit', label: 'Crédits' },
            { key: 'cashback', label: 'Cashback' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key as typeof filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                filter === tab.key
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="divide-y divide-border">
        {filteredTransactions.length === 0 ? (
          <div className="p-8 text-center">
            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-3">
              <ShoppingBag className="h-6 w-6 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground">Aucune transaction</p>
          </div>
        ) : (
          filteredTransactions.map((transaction, index) => (
            <motion.div
              key={transaction.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="p-4 hover:bg-muted/30 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl ${getTransactionColor(transaction.type)}`}>
                    {getTransactionIcon(transaction.type)}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{transaction.merchant}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">
                        {formatDate(transaction.date)}
                      </span>
                      {transaction.category && (
                        <>
                          <span className="text-muted-foreground">•</span>
                          <span className="text-xs text-muted-foreground">
                            {transaction.category}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${
                    transaction.type === 'payment' 
                      ? 'text-foreground' 
                      : 'text-primary'
                  }`}>
                    {transaction.type === 'payment' ? '-' : '+'}
                    {Math.abs(transaction.amount).toFixed(2)} €
                  </p>
                  {transaction.cashbackEarned && (
                    <p className="text-xs text-kado-gold">
                      +{transaction.cashbackEarned.toFixed(2)} € cashback
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {filteredTransactions.length > 0 && (
        <div className="p-4 border-t border-border">
          <Button variant="ghost" className="w-full text-muted-foreground hover:text-foreground">
            Voir tout l'historique
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </div>
      )}
    </motion.div>
  );
};

export default TransactionHistory;
