import { motion } from "framer-motion";
import { CreditCard } from "lucide-react";

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
          {/* Chip - Gold colored like logo */}
          <div className="flex items-start justify-between">
            <div className="w-12 h-10 rounded-md overflow-hidden shadow-lg" style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 30%, #D4AF37 50%, #C5A028 100%)' }}>
              <div className="w-full h-full grid grid-cols-3 grid-rows-3 gap-px p-1">
                <div className="bg-[#B8962E]/60 rounded-sm" />
                <div className="bg-[#D4AF37]/80 rounded-sm" />
                <div className="bg-[#B8962E]/60 rounded-sm" />
                <div className="bg-[#D4AF37]/80 rounded-sm" />
                <div className="bg-[#F4D03F]/90 rounded-sm" />
                <div className="bg-[#D4AF37]/80 rounded-sm" />
                <div className="bg-[#B8962E]/60 rounded-sm" />
                <div className="bg-[#D4AF37]/80 rounded-sm" />
                <div className="bg-[#B8962E]/60 rounded-sm" />
              </div>
            </div>
          </div>

          {/* Card Number */}
          <div className="space-y-1">
            <p className="font-mono text-lg sm:text-xl tracking-[0.2em] text-white/95 font-medium">
              1234 5678 9012 3456
            </p>
            <div className="flex items-center gap-4 text-xs text-white/70">
              <span>0000</span>
              <span>1234 UTILISATEUR</span>
            </div>
          </div>

          {/* Bottom Row - Mastercard Logo */}
          <div className="flex items-end justify-end">
            {/* Mastercard circles */}
            <div className="flex items-center -space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#EB001B] opacity-90" />
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F79E1B] opacity-90" />
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
            <p className="text-xs text-muted-foreground">Bonus</p>
            <p className="font-display font-bold text-primary">x2 pts</p>
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
