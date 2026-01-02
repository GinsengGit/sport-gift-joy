import { motion } from "framer-motion";
import { CreditCard, Wifi } from "lucide-react";

export const GiftCard3D = () => {
  return (
    <div className="relative perspective-1000">
      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-hero rounded-3xl blur-3xl opacity-30"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      {/* Main Card */}
      <motion.div
        className="relative w-[320px] sm:w-[380px] lg:w-[420px] aspect-[1.6/1] rounded-3xl overflow-hidden shadow-2xl"
        animate={{ 
          rotateY: [0, 5, 0, -5, 0],
          rotateX: [0, -3, 0, 3, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Card Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-kado-emerald via-kado-emerald-light to-kado-sky" />
        
        {/* Card Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 400 250">
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20" />

        {/* Card Content */}
        <div className="relative h-full p-6 sm:p-8 flex flex-col justify-between text-primary-foreground">
          {/* Top Row */}
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-display font-bold text-xl sm:text-2xl tracking-wide">
                KADOSPORT
              </h3>
              <p className="text-sm opacity-80 mt-1">Carte Cadeau Sport</p>
            </div>
            <Wifi className="w-8 h-8 opacity-80 rotate-90" />
          </div>

          {/* Chip */}
          <div className="absolute top-1/2 left-8 -translate-y-1/2">
            <div className="w-12 h-9 rounded-lg bg-kado-gold/80 shadow-inner">
              <div className="w-full h-full grid grid-cols-2 gap-0.5 p-1">
                <div className="bg-kado-gold/60 rounded-sm" />
                <div className="bg-kado-gold/40 rounded-sm" />
                <div className="bg-kado-gold/40 rounded-sm" />
                <div className="bg-kado-gold/60 rounded-sm" />
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs opacity-60 mb-1">SOLDE</p>
              <p className="font-display text-2xl sm:text-3xl font-bold">100 €</p>
            </div>
            <div className="text-right">
              <p className="text-xs opacity-60 mb-1">VALABLE</p>
              <p className="font-semibold">12/2026</p>
            </div>
          </div>
        </div>

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
          animate={{ translateX: ["100%", "200%"] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
        />
      </motion.div>

      {/* Floating Badge */}
      <motion.div
        className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-card rounded-2xl p-3 sm:p-4 shadow-xl border border-border/50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <CreditCard className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Cashback</p>
            <p className="font-display font-bold text-primary">+5%</p>
          </div>
        </div>
      </motion.div>

      {/* Second Floating Badge */}
      <motion.div
        className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-kado-coral rounded-2xl px-4 py-2 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <p className="text-sm font-semibold text-primary-foreground">🎁 Cadeau idéal</p>
      </motion.div>
    </div>
  );
};
