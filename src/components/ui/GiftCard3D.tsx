import { motion } from "framer-motion";
import { QrCode } from "lucide-react";

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
        className="relative w-[320px] sm:w-[380px] lg:w-[420px] aspect-[1.6/1] rounded-2xl overflow-hidden shadow-2xl"
        animate={{ 
          rotateY: [0, 5, 0, -5, 0],
          rotateX: [0, -3, 0, 3, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Card Background - Dark green gradient like logo */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(120,50%,18%)] via-[hsl(120,60%,22%)] to-[hsl(120,70%,28%)]" />
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }} />
        </div>

        {/* Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10" />

        {/* Card Content */}
        <div className="relative h-full p-5 sm:p-6 flex flex-col justify-between text-white">
          {/* Top Row - Logo and Amount */}
          <div className="flex items-start justify-between">
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl sm:text-2xl text-white">Kadosport</span>
              <span className="text-xs text-white/70">Carte cadeau sport</span>
            </div>
            <div className="text-right">
              <span className="font-display font-bold text-2xl sm:text-3xl text-white">100€</span>
            </div>
          </div>

          {/* Center - QR Code */}
          <div className="flex items-center justify-center flex-1">
            <div className="bg-white rounded-xl p-3 sm:p-4 shadow-lg">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center relative">
                {/* Fake QR pattern */}
                <div className="absolute inset-2 grid grid-cols-6 grid-rows-6 gap-0.5">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`rounded-sm ${Math.random() > 0.4 ? 'bg-foreground' : 'bg-transparent'}`}
                    />
                  ))}
                </div>
                {/* Corner squares */}
                <div className="absolute top-2 left-2 w-4 h-4 border-2 border-foreground rounded-sm bg-white">
                  <div className="absolute inset-1 bg-foreground rounded-sm" />
                </div>
                <div className="absolute top-2 right-2 w-4 h-4 border-2 border-foreground rounded-sm bg-white">
                  <div className="absolute inset-1 bg-foreground rounded-sm" />
                </div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-2 border-foreground rounded-sm bg-white">
                  <div className="absolute inset-1 bg-foreground rounded-sm" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex items-end justify-between">
            <div className="text-xs text-white/70">
              <p>Valable 24 mois</p>
              <p className="font-mono">KDS-2024-XXXX</p>
            </div>
            <div className="flex items-center gap-1.5 text-white/80">
              <QrCode className="w-4 h-4" />
              <span className="text-xs font-medium">Scannez pour payer</span>
            </div>
          </div>
        </div>

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
          animate={{ translateX: ["-100%", "200%"] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
        />
      </motion.div>

      {/* Floating Badge - QR Code info */}
      <motion.div
        className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-card rounded-2xl p-3 sm:p-4 shadow-xl border border-border/50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <QrCode className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Paiement</p>
            <p className="font-display font-bold text-primary">QR unique</p>
          </div>
        </div>
      </motion.div>

      {/* Second Floating Badge */}
      <motion.div
        className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-primary rounded-2xl px-4 py-2 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <p className="text-sm font-semibold text-primary-foreground">🎁 100% Sport</p>
      </motion.div>
    </div>
  );
};
