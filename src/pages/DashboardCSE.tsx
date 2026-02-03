import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  Building2,
  Users,
  CreditCard,
  Euro,
  TrendingUp,
  Download,
  Search,
  Filter,
  Calendar,
  BarChart3,
  PieChart,
  Activity,
  CheckCircle,
  Clock,
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
  RefreshCw
} from "lucide-react";

// Mock data for the HR dashboard
const companyInfo = {
  name: "TechCorp France",
  siret: "123 456 789 00012",
  totalBudget: 50000,
  usedBudget: 37500,
  totalCards: 150,
  activeCards: 142,
  avgUsageRate: 78
};

const cardData = [
  { id: "KS-2024-001", holder: "Marie Dupont", email: "m.dupont@techcorp.fr", amount: 350, used: 280, status: "active", lastUsed: "2024-01-28" },
  { id: "KS-2024-002", holder: "Pierre Martin", email: "p.martin@techcorp.fr", amount: 350, used: 350, status: "consumed", lastUsed: "2024-01-25" },
  { id: "KS-2024-003", holder: "Sophie Bernard", email: "s.bernard@techcorp.fr", amount: 350, used: 175, status: "active", lastUsed: "2024-01-30" },
  { id: "KS-2024-004", holder: "Julien Petit", email: "j.petit@techcorp.fr", amount: 350, used: 0, status: "unused", lastUsed: "-" },
  { id: "KS-2024-005", holder: "Claire Moreau", email: "c.moreau@techcorp.fr", amount: 350, used: 320, status: "active", lastUsed: "2024-01-29" },
  { id: "KS-2024-006", holder: "Lucas Roux", email: "l.roux@techcorp.fr", amount: 350, used: 150, status: "active", lastUsed: "2024-01-27" },
  { id: "KS-2024-007", holder: "Emma Leroy", email: "e.leroy@techcorp.fr", amount: 350, used: 350, status: "consumed", lastUsed: "2024-01-20" },
  { id: "KS-2024-008", holder: "Thomas Girard", email: "t.girard@techcorp.fr", amount: 350, used: 50, status: "active", lastUsed: "2024-01-15" },
];

const monthlyStats = [
  { month: "Sep", usage: 45 },
  { month: "Oct", usage: 58 },
  { month: "Nov", usage: 65 },
  { month: "Dec", usage: 72 },
  { month: "Jan", usage: 78 },
];

const categoryUsage = [
  { category: "Coaching fitness", percentage: 35, color: "bg-primary" },
  { category: "Clubs sportifs", percentage: 28, color: "bg-coral" },
  { category: "Sports outdoor", percentage: 22, color: "bg-kado-emerald" },
  { category: "Centres sportifs", percentage: 15, color: "bg-amber-500" },
];

const DashboardCSE = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<string | null>(null);

  const filteredCards = cardData.filter(card => {
    const matchesSearch = card.holder.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          card.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          card.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus ? card.status === filterStatus : true;
    return matchesSearch && matchesFilter;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-primary/10 text-primary border-primary/20">Active</Badge>;
      case "consumed":
        return <Badge className="bg-kado-emerald/10 text-kado-emerald border-kado-emerald/20">Consommée</Badge>;
      case "unused":
        return <Badge className="bg-amber-500/10 text-amber-600 border-amber-500/20">Non utilisée</Badge>;
      case "expired":
        return <Badge className="bg-destructive/10 text-destructive border-destructive/20">Expirée</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const usagePercentage = (companyInfo.usedBudget / companyInfo.totalBudget) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                      {companyInfo.name}
                    </h1>
                    <p className="text-sm text-muted-foreground">SIRET: {companyInfo.siret}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Actualiser
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Exporter CSV
                </Button>
                <Button variant="hero" size="sm">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Commander des cartes
                </Button>
              </div>
            </div>
          </motion.div>

          {/* KPIs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          >
            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Budget total</p>
                    <p className="text-2xl font-bold text-foreground">{companyInfo.totalBudget.toLocaleString()} €</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {companyInfo.usedBudget.toLocaleString()} € utilisés
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Euro className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <Progress value={usagePercentage} className="mt-4 h-2" />
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Cartes actives</p>
                    <p className="text-2xl font-bold text-foreground">{companyInfo.activeCards}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      sur {companyInfo.totalCards} cartes
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-kado-emerald/10 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-kado-emerald" />
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <ArrowUpRight className="w-4 h-4 text-kado-emerald" />
                  <span className="text-sm text-kado-emerald font-medium">+12 ce mois</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Taux d'utilisation</p>
                    <p className="text-2xl font-bold text-foreground">{companyInfo.avgUsageRate}%</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      moyenne par carte
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-coral/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-coral" />
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <ArrowUpRight className="w-4 h-4 text-kado-emerald" />
                  <span className="text-sm text-kado-emerald font-medium">+5% vs mois dernier</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Collaborateurs</p>
                    <p className="text-2xl font-bold text-foreground">{companyInfo.totalCards}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      bénéficiaires
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-amber-600" />
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">95% activées</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Charts Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-6 mb-8"
          >
            {/* Usage Evolution */}
            <Card className="border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">Évolution du taux d'utilisation</CardTitle>
                    <CardDescription>5 derniers mois</CardDescription>
                  </div>
                  <BarChart3 className="w-5 h-5 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between h-40 gap-4">
                  {monthlyStats.map((stat, index) => (
                    <div key={stat.month} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-muted rounded-t-lg relative" style={{ height: "100%" }}>
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${stat.usage}%` }}
                          transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                          className="absolute bottom-0 w-full bg-gradient-to-t from-primary to-primary/70 rounded-t-lg"
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">{stat.month}</span>
                      <span className="text-sm font-semibold text-foreground">{stat.usage}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Category Distribution */}
            <Card className="border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">Répartition par catégorie</CardTitle>
                    <CardDescription>Types de dépenses sport</CardDescription>
                  </div>
                  <PieChart className="w-5 h-5 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {categoryUsage.map((cat, index) => (
                    <motion.div
                      key={cat.category}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-foreground">{cat.category}</span>
                        <span className="text-sm font-semibold text-foreground">{cat.percentage}%</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${cat.percentage}%` }}
                          transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                          className={`h-full ${cat.color} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Cards Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-border/50">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-lg">Détail des cartes</CardTitle>
                    <CardDescription>Suivi individuel de chaque bénéficiaire</CardDescription>
                  </div>
                  <div className="flex gap-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="Rechercher..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-9 w-64"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant={filterStatus === null ? "default" : "outline"}
                        size="sm"
                        onClick={() => setFilterStatus(null)}
                      >
                        Tous
                      </Button>
                      <Button
                        variant={filterStatus === "active" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setFilterStatus("active")}
                      >
                        Actives
                      </Button>
                      <Button
                        variant={filterStatus === "unused" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setFilterStatus("unused")}
                      >
                        Non utilisées
                      </Button>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border border-border/50 overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead>N° Carte</TableHead>
                        <TableHead>Bénéficiaire</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead className="text-right">Montant</TableHead>
                        <TableHead className="text-right">Utilisé</TableHead>
                        <TableHead className="text-center">Taux</TableHead>
                        <TableHead className="text-center">Statut</TableHead>
                        <TableHead>Dernière utilisation</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredCards.map((card) => {
                        const usageRate = Math.round((card.used / card.amount) * 100);
                        return (
                          <TableRow key={card.id} className="hover:bg-muted/30">
                            <TableCell className="font-mono text-sm">{card.id}</TableCell>
                            <TableCell className="font-medium">{card.holder}</TableCell>
                            <TableCell className="text-muted-foreground">{card.email}</TableCell>
                            <TableCell className="text-right">{card.amount} €</TableCell>
                            <TableCell className="text-right">{card.used} €</TableCell>
                            <TableCell>
                              <div className="flex items-center justify-center gap-2">
                                <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-primary rounded-full" 
                                    style={{ width: `${usageRate}%` }}
                                  />
                                </div>
                                <span className="text-xs text-muted-foreground w-8">{usageRate}%</span>
                              </div>
                            </TableCell>
                            <TableCell className="text-center">{getStatusBadge(card.status)}</TableCell>
                            <TableCell className="text-muted-foreground">{card.lastUsed}</TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>
                
                <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
                  <span>{filteredCards.length} carte(s) affichée(s)</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" disabled>Précédent</Button>
                    <Button variant="outline" size="sm">Suivant</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Stats Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
          >
            <div className="p-4 rounded-xl bg-card border border-border/50 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-kado-emerald/10 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-kado-emerald" />
              </div>
              <div>
                <p className="text-lg font-bold text-foreground">
                  {cardData.filter(c => c.status === "consumed").length}
                </p>
                <p className="text-xs text-muted-foreground">Cartes 100% utilisées</p>
              </div>
            </div>
            
            <div className="p-4 rounded-xl bg-card border border-border/50 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Activity className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-lg font-bold text-foreground">
                  {cardData.filter(c => c.status === "active").length}
                </p>
                <p className="text-xs text-muted-foreground">Cartes en cours</p>
              </div>
            </div>
            
            <div className="p-4 rounded-xl bg-card border border-border/50 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="text-lg font-bold text-foreground">
                  {cardData.filter(c => c.status === "unused").length}
                </p>
                <p className="text-xs text-muted-foreground">À activer</p>
              </div>
            </div>
            
            <div className="p-4 rounded-xl bg-card border border-border/50 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-coral/10 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-coral" />
              </div>
              <div>
                <p className="text-lg font-bold text-foreground">3</p>
                <p className="text-xs text-muted-foreground">Expirent bientôt</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DashboardCSE;
