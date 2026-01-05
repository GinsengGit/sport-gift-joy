import { motion } from "framer-motion";
import { Activity, Link2, CheckCircle2, Clock, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ConnectedApp {
  id: string;
  name: string;
  icon: string;
  isConnected: boolean;
  lastSync?: string;
}

interface RecentActivity {
  id: string;
  type: string;
  duration: number; // in minutes
  date: string;
  pointsEarned: number;
  source: string;
}

interface ActivityTrackerProps {
  connectedApps: ConnectedApp[];
  recentActivities: RecentActivity[];
  weeklyHours: number;
  maxWeeklyHours: number;
}

const ActivityTracker = ({ 
  connectedApps, 
  recentActivities, 
  weeklyHours, 
  maxWeeklyHours 
}: ActivityTrackerProps) => {
  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h${mins > 0 ? mins : ""}` : `${mins}min`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) return "Aujourd'hui";
    if (date.toDateString() === yesterday.toDateString()) return "Hier";
    return date.toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="rounded-2xl bg-card border border-border p-6 shadow-kado"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-kado-coral/10 rounded-xl">
            <Activity className="h-5 w-5 text-kado-coral" />
          </div>
          <h3 className="font-display font-semibold text-lg">Suivi d'activité</h3>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium">{weeklyHours}h / {maxWeeklyHours}h</p>
          <p className="text-xs text-muted-foreground">cette semaine</p>
        </div>
      </div>

      {/* Connected apps */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-muted-foreground mb-3">Applications connectées</h4>
        <div className="flex flex-wrap gap-2">
          {connectedApps.map((app) => (
            <div
              key={app.id}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors ${
                app.isConnected 
                  ? "bg-primary/5 border-primary/20" 
                  : "bg-muted/50 border-border hover:border-primary/30 cursor-pointer"
              }`}
            >
              <span className="text-lg">{app.icon}</span>
              <span className="text-sm font-medium">{app.name}</span>
              {app.isConnected ? (
                <CheckCircle2 className="h-4 w-4 text-primary" />
              ) : (
                <Link2 className="h-4 w-4 text-muted-foreground" />
              )}
            </div>
          ))}
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-dashed border-muted-foreground/30 text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors">
            <Plus className="h-4 w-4" />
            <span className="text-sm">Ajouter</span>
          </button>
        </div>
      </div>

      {/* Recent activities */}
      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-3">Activités récentes</h4>
        <div className="space-y-2">
          {recentActivities.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-4">
              Connectez une app pour suivre vos activités
            </p>
          ) : (
            recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between p-3 bg-muted/30 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-background rounded-lg">
                    <Activity className="h-4 w-4 text-kado-coral" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{activity.type}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{formatDuration(activity.duration)}</span>
                      <span>•</span>
                      <span>{formatDate(activity.date)}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-primary">+{activity.pointsEarned} pts</span>
                  <p className="text-xs text-muted-foreground">{activity.source}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {weeklyHours >= maxWeeklyHours && (
        <div className="mt-4 p-3 bg-kado-gold/10 border border-kado-gold/20 rounded-xl">
          <p className="text-sm text-kado-gold">
            🎉 Bravo ! Vous avez atteint le max de points activité cette semaine !
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default ActivityTracker;
