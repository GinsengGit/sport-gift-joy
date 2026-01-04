import { motion } from "framer-motion";
import { Bell, Settings, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface DashboardHeaderProps {
  userName: string;
}

const DashboardHeader = ({ userName }: DashboardHeaderProps) => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Bonjour";
    if (hour < 18) return "Bon après-midi";
    return "Bonsoir";
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-card rounded-xl flex items-center justify-center shadow-kado">
                <span className="text-white font-display font-bold text-lg">K</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground hidden sm:block">
                Kadosport
              </span>
            </Link>
          </div>

          <div className="hidden md:block text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-sm text-muted-foreground">{getGreeting()},</p>
              <p className="font-display font-semibold text-foreground">{userName}</p>
            </motion.div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-kado-coral rounded-full" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5 text-muted-foreground" />
            </Button>
            <div className="w-px h-6 bg-border mx-2 hidden sm:block" />
            <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive hover:bg-destructive/10">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default DashboardHeader;
