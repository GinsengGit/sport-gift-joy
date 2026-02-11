import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  CreditCard, Users, Building2, LogOut, Search, TrendingUp,
  Clock, CheckCircle2, XCircle, AlertCircle, Euro, Gift, RefreshCw
} from "lucide-react";
import kadosportLogo from "@/assets/kadosport-logo.png";

// Mock data
const mockGiftCards = [
  { id: "KS-2024-001", buyer: "Marie Dupont", beneficiary: "Lucas Dupont", amount: 150, balance: 80, status: "active", createdAt: "2024-12-15", expiresAt: "2025-12-15" },
  { id: "KS-2024-002", buyer: "CSE Airbus", beneficiary: "Sophie Martin", amount: 200, balance: 200, status: "active", createdAt: "2025-01-10", expiresAt: "2026-01-10" },
  { id: "KS-2024-003", buyer: "Jean Moreau", beneficiary: "Emma Moreau", amount: 100, balance: 0, status: "used", createdAt: "2024-06-01", expiresAt: "2025-06-01" },
  { id: "KS-2024-004", buyer: "CSE TotalEnergies", beneficiary: "Pierre Leroy", amount: 250, balance: 250, status: "active", createdAt: "2025-02-01", expiresAt: "2026-02-01" },
  { id: "KS-2024-005", buyer: "Anne Richard", beneficiary: "Tom Richard", amount: 75, balance: 30, status: "active", createdAt: "2024-11-20", expiresAt: "2025-11-20" },
  { id: "KS-2024-006", buyer: "CSE Renault", beneficiary: "Julie Petit", amount: 180, balance: 180, status: "expired", createdAt: "2023-08-01", expiresAt: "2024-08-01" },
];

const mockPros = [
  { id: 1, name: "FitClub Paris", siret: "123 456 789 00012", type: "Fitness", email: "contact@fitclub.fr", status: "verified", totalEncaisse: 2450, pending: 0 },
  { id: 2, name: "Outdoor Adventures", siret: "987 654 321 00034", type: "Outdoor", email: "info@outdoor-adv.fr", status: "verified", totalEncaisse: 1800, pending: 350 },
  { id: 3, name: "AquaSport Center", siret: "456 789 123 00056", type: "Activités aquatiques", email: "aqua@sport.fr", status: "pending", totalEncaisse: 0, pending: 120 },
  { id: 4, name: "Coach Martin", siret: "321 654 987 00078", type: "Coaching sportif", email: "martin@coach.fr", status: "verified", totalEncaisse: 890, pending: 0 },
  { id: 5, name: "Escalade & Co", siret: "789 123 456 00090", type: "Centre sportif", email: "hello@escalade.fr", status: "rejected", totalEncaisse: 0, pending: 0 },
];

const mockCSE = [
  { id: 1, company: "Airbus", contact: "RH - Claire Dubois", email: "cse@airbus.com", cards: 150, budget: 30000, used: 18500, status: "active" },
  { id: 2, company: "TotalEnergies", contact: "CSE - Marc Fontaine", email: "cse@total.com", cards: 85, budget: 17000, used: 12300, status: "active" },
  { id: 3, company: "Renault", contact: "RH - Isabelle Blanc", email: "rh@renault.com", cards: 200, budget: 40000, used: 40000, status: "completed" },
  { id: 4, company: "Decathlon Corporate", contact: "CSE - Paul Girard", email: "cse@decathlon.com", cards: 50, budget: 10000, used: 3200, status: "active" },
];

const mockReimbursements = [
  { id: "RMB-001", pro: "FitClub Paris", amount: 120, cardId: "KS-2024-001", date: "2025-02-08", status: "paid" },
  { id: "RMB-002", pro: "Outdoor Adventures", amount: 350, cardId: "KS-2024-005", date: "2025-02-09", status: "pending" },
  { id: "RMB-003", pro: "Coach Martin", amount: 90, cardId: "KS-2024-002", date: "2025-02-07", status: "paid" },
  { id: "RMB-004", pro: "AquaSport Center", amount: 120, cardId: "KS-2024-004", date: "2025-02-10", status: "pending" },
];

const statusBadge = (status: string) => {
  const map: Record<string, { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
    active: { label: "Active", variant: "default" },
    used: { label: "Épuisée", variant: "secondary" },
    expired: { label: "Expirée", variant: "destructive" },
    verified: { label: "Vérifié", variant: "default" },
    pending: { label: "En attente", variant: "outline" },
    rejected: { label: "Refusé", variant: "destructive" },
    paid: { label: "Remboursé", variant: "default" },
    completed: { label: "Terminé", variant: "secondary" },
  };
  const info = map[status] || { label: status, variant: "outline" as const };
  return <Badge variant={info.variant}>{info.label}</Badge>;
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("kadosport_admin") !== "true") {
      navigate("/admin-login");
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("kadosport_admin");
    navigate("/admin-login");
  };

  const totalCards = mockGiftCards.length;
  const totalActive = mockGiftCards.filter(c => c.status === "active").length;
  const totalVolume = mockGiftCards.reduce((s, c) => s + c.amount, 0);
  const pendingReimbursements = mockReimbursements.filter(r => r.status === "pending");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={kadosportLogo} alt="Kadosport" className="h-10 w-auto" />
            <Badge variant="outline" className="text-xs">Back-office</Badge>
          </div>
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Déconnexion
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <CreditCard className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{totalCards}</p>
                  <p className="text-xs text-muted-foreground">Cartes émises</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-green-500/10">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{totalActive}</p>
                  <p className="text-xs text-muted-foreground">Cartes actives</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Euro className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{totalVolume.toLocaleString()}€</p>
                  <p className="text-xs text-muted-foreground">Volume total</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-orange-500/10">
                  <Clock className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{pendingReimbursements.length}</p>
                  <p className="text-xs text-muted-foreground">Remboursements en attente</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="cards" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="cards" className="gap-2">
              <CreditCard className="w-4 h-4 hidden sm:block" />
              Cartes
            </TabsTrigger>
            <TabsTrigger value="pros" className="gap-2">
              <Users className="w-4 h-4 hidden sm:block" />
              Pros
            </TabsTrigger>
            <TabsTrigger value="reimbursements" className="gap-2">
              <RefreshCw className="w-4 h-4 hidden sm:block" />
              Remboursements
            </TabsTrigger>
            <TabsTrigger value="cse" className="gap-2">
              <Building2 className="w-4 h-4 hidden sm:block" />
              CSE
            </TabsTrigger>
          </TabsList>

          {/* Cartes cadeaux */}
          <TabsContent value="cards" className="space-y-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Gestion des cartes cadeaux</CardTitle>
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Rechercher une carte..." className="pl-9" value={search} onChange={e => setSearch(e.target.value)} />
              </div>
            </div>
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Référence</TableHead>
                    <TableHead>Acheteur</TableHead>
                    <TableHead>Bénéficiaire</TableHead>
                    <TableHead className="text-right">Montant</TableHead>
                    <TableHead className="text-right">Solde</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Expiration</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockGiftCards
                    .filter(c => !search || c.id.toLowerCase().includes(search.toLowerCase()) || c.beneficiary.toLowerCase().includes(search.toLowerCase()))
                    .map(card => (
                    <TableRow key={card.id}>
                      <TableCell className="font-mono text-sm">{card.id}</TableCell>
                      <TableCell>{card.buyer}</TableCell>
                      <TableCell className="font-medium">{card.beneficiary}</TableCell>
                      <TableCell className="text-right">{card.amount}€</TableCell>
                      <TableCell className="text-right font-semibold">{card.balance}€</TableCell>
                      <TableCell>{statusBadge(card.status)}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{card.expiresAt}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          {/* Professionnels */}
          <TabsContent value="pros" className="space-y-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Professionnels du sport</CardTitle>
              <Badge variant="outline">{mockPros.length} inscrits</Badge>
            </div>
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Établissement</TableHead>
                    <TableHead>SIRET</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead className="text-right">Total encaissé</TableHead>
                    <TableHead className="text-right">En attente</TableHead>
                    <TableHead>Statut</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockPros.map(pro => (
                    <TableRow key={pro.id}>
                      <TableCell className="font-medium">{pro.name}</TableCell>
                      <TableCell className="font-mono text-sm">{pro.siret}</TableCell>
                      <TableCell>{pro.type}</TableCell>
                      <TableCell className="text-sm">{pro.email}</TableCell>
                      <TableCell className="text-right">{pro.totalEncaisse}€</TableCell>
                      <TableCell className="text-right">{pro.pending > 0 ? `${pro.pending}€` : "-"}</TableCell>
                      <TableCell>{statusBadge(pro.status)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          {/* Remboursements */}
          <TabsContent value="reimbursements" className="space-y-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Remboursements professionnels</CardTitle>
              <Badge variant="outline" className="border-orange-500/50 text-orange-600">
                {pendingReimbursements.length} en attente
              </Badge>
            </div>
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Référence</TableHead>
                    <TableHead>Professionnel</TableHead>
                    <TableHead>Carte débitée</TableHead>
                    <TableHead className="text-right">Montant</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockReimbursements.map(r => (
                    <TableRow key={r.id}>
                      <TableCell className="font-mono text-sm">{r.id}</TableCell>
                      <TableCell className="font-medium">{r.pro}</TableCell>
                      <TableCell className="font-mono text-sm">{r.cardId}</TableCell>
                      <TableCell className="text-right font-semibold">{r.amount}€</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{r.date}</TableCell>
                      <TableCell>{statusBadge(r.status)}</TableCell>
                      <TableCell>
                        {r.status === "pending" && (
                          <Button size="sm" variant="outline" className="text-xs">
                            Valider
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          {/* CSE Entreprises */}
          <TabsContent value="cse" className="space-y-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Comptes CSE Entreprises</CardTitle>
              <Badge variant="outline">{mockCSE.length} entreprises</Badge>
            </div>
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Entreprise</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead className="text-right">Cartes</TableHead>
                    <TableHead className="text-right">Budget</TableHead>
                    <TableHead className="text-right">Utilisé</TableHead>
                    <TableHead>Statut</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockCSE.map(cse => (
                    <TableRow key={cse.id}>
                      <TableCell className="font-medium">{cse.company}</TableCell>
                      <TableCell className="text-sm">{cse.contact}</TableCell>
                      <TableCell className="text-sm">{cse.email}</TableCell>
                      <TableCell className="text-right">{cse.cards}</TableCell>
                      <TableCell className="text-right">{cse.budget.toLocaleString()}€</TableCell>
                      <TableCell className="text-right">{cse.used.toLocaleString()}€</TableCell>
                      <TableCell>{statusBadge(cse.status)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;
