import { motion } from "framer-motion";
import { ArrowRight, QrCode, Gift, Dumbbell, Mountain, Waves, Zap, Users, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GiftCard3D } from "@/components/ui/GiftCard3D";

// New dynamic sports images
import fitnessImage from "@/assets/fitness-gym-dynamic.jpg";
import outdoorImage from "@/assets/outdoor-sport-dynamic.jpg";
import padelImage from "@/assets/padel-sport.jpg";

const sportCategories = [
  { icon: Dumbbell, label: "Salles & Fitness", color: "primary" },
  { icon: Users, label: "Coaching sportif", color: "kado-coral" },
  { icon: Mountain, label: "Sports outdoor", color: "kado-sky" },
  { icon: Waves, label: "Activités nautiques", color: "primary" },
  { icon: Zap, label: "Sensations fortes", color: "kado-coral" },
  { icon: Gift, label: "Clubs & Associations", color: "kado-sky" },
];

const sportsGallery = [
  { src: fitnessImage, label: "Fitness", category: "Salle" },
  { src: outdoorImage, label: "Outdoor", category: "Aventure" },
  { src: padelImage, label: "Padel", category: "Raquette" },
];

const heroSportsImages = [
  { src: fitnessImage, label: "Fitness", position: "left" },
  { src: outdoorImage, label: "Outdoor", position: "center" },
  { src: padelImage, label: "Padel", position: "right" },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* 3 Dynamic Floating Sports Images */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left - Fitness */}
        <motion.div
          initial={{ opacity: 0, x: -100, rotate: -15 }}
          animate={{ opacity: 1, x: 0, rotate: -6 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-32 -left-6 lg:left-4 w-52 h-72 lg:w-72 lg:h-96 rounded-2xl overflow-hidden shadow-2xl transform -rotate-6 z-0 border border-white/20"
        >
          <img src={fitnessImage} alt="Fitness en salle" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-sm font-semibold rounded-full">Fitness</span>
          </div>
        </motion.div>

        {/* Center Top - Outdoor */}
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-20 left-1/2 -translate-x-1/2 w-48 h-64 lg:w-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl z-0 border border-white/20 hidden lg:block"
        >
          <img src={outdoorImage} alt="Sport outdoor" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 bg-kado-sky/90 text-white text-sm font-semibold rounded-full">Outdoor</span>
          </div>
        </motion.div>

        {/* Right - Padel */}
        <motion.div
          initial={{ opacity: 0, x: 100, rotate: 15 }}
          animate={{ opacity: 1, x: 0, rotate: 6 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute top-32 -right-6 lg:right-4 w-52 h-72 lg:w-72 lg:h-96 rounded-2xl overflow-hidden shadow-2xl transform rotate-6 z-0 border border-white/20"
        >
          <img src={padelImage} alt="Padel sport de raquette" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 bg-kado-coral/90 text-white text-sm font-semibold rounded-full">Padel</span>
          </div>
        </motion.div>
      </div>

      {/* Central gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-background/70 to-background/30 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/60 z-[1]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 lg:pt-32">
        {/* Main Hero Content - Centered */}
        <div className="flex flex-col items-center justify-center min-h-[85vh] text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[1.1] mb-6 sm:mb-8">
              Offrez du{" "}
              <span className="gradient-text">sport</span>
            </h1>

            {/* Introduction text */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              <p className="mb-4">
                <strong className="text-foreground">Kadosport</strong> est une carte sport qui permet de financer la pratique sportive librement,
                chez tous les professionnels du sport déclarés, partout en France.
              </p>
              <p className="text-muted-foreground/80">
                Sans catalogue, sans contrainte, sans commission pour les professionnels.
              </p>
            </motion.div>

            {/* Les + Kadosport */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-3 items-center mb-8"
            >
              {[
                "Encaissable chez tous les professionnels du sport déclarés",
                "Zéro commission pour les structures sportives",
                "Remboursement simple et garanti",
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="inline-flex items-center gap-3 px-4 py-2 bg-primary/5 border border-primary/20 rounded-full"
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm sm:text-base font-medium text-foreground">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <Link to="/offrir-carte">
                <Button variant="hero" size="xl" className="group text-lg w-full sm:w-auto">
                  <Gift className="w-5 h-5 mr-2" />
                  Offrir une carte sport
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/partner-payment">
                <Button variant="outline" size="xl" className="gap-2 text-lg w-full sm:w-auto">
                  <QrCode className="w-5 h-5" />
                  Encaisser une carte
                  <span className="text-muted-foreground text-sm">(pro du sport)</span>
                </Button>
              </Link>
            </motion.div>

            {/* 3D Gift Card - Centered */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex justify-center mb-8"
            >
              <GiftCard3D />
            </motion.div>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center gap-8 justify-center"
            >
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">∞</p>
                <p className="text-xs text-muted-foreground font-medium">Activités possibles</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-kado-coral">0%</p>
                <p className="text-xs text-muted-foreground font-medium">Commission pro du sport</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-kado-sky">6-24</p>
                <p className="text-xs text-muted-foreground font-medium">Mois de validité</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Sports Gallery Section */}
      <div className="relative z-10 bg-gradient-to-b from-transparent via-background to-background pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 uppercase tracking-wide">
              Tout l'univers sportif
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Des milliers d'<span className="gradient-text">expériences</span> à vivre
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Coaching personnalisé, salles de fitness, sports extrêmes, activités nautiques, 
              clubs sportifs... La carte Kadosport ouvre toutes les portes du sport !
            </p>
          </motion.div>

          {/* Dynamic Photo Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto"
          >
            {sportsGallery.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative rounded-2xl overflow-hidden aspect-[4/5] group cursor-pointer shadow-lg"
              >
                <img 
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Category tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                    {item.category}
                  </span>
                </div>

                {/* Label */}
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white font-bold text-lg">{item.label}</p>
                  <div className="w-8 h-1 bg-primary rounded-full mt-1 group-hover:w-16 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to action after gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-10"
          >
            <p className="text-muted-foreground mb-4">
              Et bien plus encore : padel, yoga, tennis, golf, ski, surf, marathon, crossfit...
            </p>
            <Button variant="coral" size="lg" className="group">
              Découvrir toutes les possibilités
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
