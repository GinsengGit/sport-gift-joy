import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  CreditCard, 
  Euro, 
  Calendar, 
  Download, 
  Search,
  Filter,
  ChevronDown,
  BadgeCheck,
  Clock,
  CheckCircle2,
  FileText,
  TrendingUp,
  Building2,
  Mail,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for demonstration
const mockProData = {
  companyName: "Fitness Park Lyon",
  siret: "123 456 789 00012",
  email: "contact@fitnesspark-lyon.fr",
  phone: "04 78 12 34 56",
  iban: "FR76 •••• •••• •••• •••• •••• 123",
  verifiedSince: "15 janvier 2024",
  totalEncaissements: 4750.00,
  totalTransactions: 47,
  pendingAmount: 180.00,
};

const mockTransactions = [
  {
    id: "TRX-001",
    cardCode: "KADO-XXXX-1234",
    amount: 50.00,
    date: "2024-01-15T14:30:00",
    status: "reimbursed",
    reimbursementDate: "2024-01-17T10:00:00",
    receiptId: "REC-2024-001"
  },
  {
    id: "TRX-002",
    cardCode: "KADO-XXXX-5678",
    amount: 80.00,
    date: "2024-01-14T11:15:00",
    status: "reimbursed",
    reimbursementDate: "2024-01-16T09:30:00",
    receiptId: "REC-2024-002"
  },
  {
    id: "TRX-003",
    cardCode: "KADO-XXXX-9012",
    amount: 120.00,
    date: "2024-01-13T16:45:00",
    status: "pending",
    reimbursementDate: null,
    receiptId: null
  },
  {
    id: "TRX-004",
    cardCode: "KADO-XXXX-3456",
    amount: 60.00,
    date: "2024-01-13T09:20:00",
    status: "pending",
    reimbursementDate: null,
    receiptId: null
  },
  {
    id: "TRX-005",
    cardCode: "KADO-XXXX-7890",
    amount: 200.00,
    date: "2024-01-12T15:00:00",
    status: "reimbursed",
    reimbursementDate: "2024-01-14T11:00:00",
    receiptId: "REC-2024-003"
  },
  {
    id: "TRX-006",
    cardCode: "KADO-XXXX-2345",
    amount: 45.00,
    date: "2024-01-11T10:30:00",
    status: "reimbursed",
    reimbursementDate: "2024-01-13T14:00:00",
    receiptId: "REC-2024-004"
  },
];

const ProDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "pending" | "reimbursed">("all");

  const filteredTransactions = mockTransactions.filter(tx => {
    const matchesSearch = tx.cardCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tx.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === "all" || tx.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatDateShort = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short'
    });
  };

  const handleDownloadReceipt = (receiptId: string) => {
    // TODO: Implement receipt download
    console.log("Downloading receipt:", receiptId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-card rounded-xl flex items-center justify-center shadow-kado">
                  <span className="text-white font-display font-bold text-lg">K</span>
                </div>
                <div>
                  <span className="font-display font-bold text-xl text-foreground hidden sm:block">
                    Espace Pro
                  </span>
                  <span className="text-xs text-muted-foreground hidden sm:block">
                    Tableau de bord
                  </span>
                </div>
              </div>
            </div>

            <Link to="/partner-payment">
              <Button variant="default" className="gap-2">
                <CreditCard className="h-4 w-4" />
                Encaisser une carte
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Pro Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Card className="bg-gradient-to-br from-primary/5 to-green-500/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/10 rounded-xl">
                    <BadgeCheck className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="text-xl font-display font-bold">{mockProData.companyName}</h2>
                      <Badge className="bg-green-500/10 text-green-700 border-green-500/20">
                        Vérifié
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">SIRET : {mockProData.siret}</p>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Mail className="h-3 w-3" />
                        {mockProData.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Building2 className="h-3 w-3" />
                        IBAN : {mockProData.iban}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Vérifié depuis</p>
                  <p className="font-medium">{mockProData.verifiedSince}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total encaissé</p>
                  <p className="text-2xl font-bold text-foreground">
                    {mockProData.totalEncaissements.toFixed(2)} €
                  </p>
                </div>
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Euro className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="mt-2 flex items-center gap-1 text-xs text-green-600">
                <TrendingUp className="h-3 w-3" />
                <span>+12% ce mois</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Transactions</p>
                  <p className="text-2xl font-bold text-foreground">
                    {mockProData.totalTransactions}
                  </p>
                </div>
                <div className="p-3 bg-secondary/10 rounded-xl">
                  <CreditCard className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                Cartes encaissées
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">En attente</p>
                  <p className="text-2xl font-bold text-kado-gold">
                    {mockProData.pendingAmount.toFixed(2)} €
                  </p>
                </div>
                <div className="p-3 bg-kado-gold/10 rounded-xl">
                  <Clock className="h-6 w-6 text-kado-gold" />
                </div>
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                Remboursement sous 48h
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Transactions Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Historique des encaissements
                </CardTitle>
                <div className="flex items-center gap-2">
                  <div className="relative flex-1 md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Rechercher..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Filter Tabs */}
              <Tabs value={filterStatus} onValueChange={(v) => setFilterStatus(v as typeof filterStatus)} className="mb-4">
                <TabsList>
                  <TabsTrigger value="all">Tout</TabsTrigger>
                  <TabsTrigger value="pending">En attente</TabsTrigger>
                  <TabsTrigger value="reimbursed">Remboursé</TabsTrigger>
                </TabsList>
              </Tabs>

              {/* Transactions List */}
              <div className="space-y-3">
                {filteredTransactions.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-3">
                      <CreditCard className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground">Aucune transaction trouvée</p>
                  </div>
                ) : (
                  filteredTransactions.map((tx, index) => (
                    <motion.div
                      key={tx.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center justify-between p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-xl ${
                          tx.status === 'reimbursed' 
                            ? 'bg-green-500/10 text-green-600' 
                            : 'bg-kado-gold/10 text-kado-gold'
                        }`}>
                          {tx.status === 'reimbursed' 
                            ? <CheckCircle2 className="h-5 w-5" />
                            : <Clock className="h-5 w-5" />
                          }
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-medium">{tx.cardCode}</p>
                            <Badge variant={tx.status === 'reimbursed' ? 'default' : 'secondary'} className={
                              tx.status === 'reimbursed' 
                                ? 'bg-green-500/10 text-green-700 border-green-500/20'
                                : 'bg-kado-gold/10 text-kado-gold border-kado-gold/20'
                            }>
                              {tx.status === 'reimbursed' ? 'Remboursé' : 'En attente'}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {formatDate(tx.date)}
                            {tx.reimbursementDate && (
                              <span className="ml-2">
                                • Remboursé le {formatDateShort(tx.reimbursementDate)}
                              </span>
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-semibold text-lg">{tx.amount.toFixed(2)} €</p>
                          <p className="text-xs text-muted-foreground">{tx.id}</p>
                        </div>
                        {tx.receiptId && (
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => handleDownloadReceipt(tx.receiptId!)}
                            className="text-primary hover:text-primary hover:bg-primary/10"
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Pagination / Load More */}
              {filteredTransactions.length > 0 && (
                <div className="mt-6 text-center">
                  <Button variant="outline" className="gap-2">
                    Voir plus
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Receipts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Reçus de remboursement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mockTransactions
                  .filter(tx => tx.receiptId)
                  .slice(0, 6)
                  .map((tx, index) => (
                    <motion.div
                      key={tx.receiptId}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="p-4 rounded-xl border border-border bg-card hover:shadow-md transition-all cursor-pointer group"
                      onClick={() => handleDownloadReceipt(tx.receiptId!)}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <Download className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <p className="font-medium">{tx.receiptId}</p>
                      <p className="text-sm text-muted-foreground">
                        {formatDateShort(tx.reimbursementDate!)}
                      </p>
                      <p className="text-lg font-semibold mt-2 text-primary">
                        {tx.amount.toFixed(2)} €
                      </p>
                    </motion.div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Une question sur vos remboursements ?
          </p>
          <Button variant="outline" className="gap-2">
            <Mail className="h-4 w-4" />
            Contacter le support
          </Button>
        </motion.div>
      </main>
    </div>
  );
};

export default ProDashboard;
