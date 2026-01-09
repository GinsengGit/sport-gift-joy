import { motion } from "framer-motion";
import { ArrowRight, QrCode, Store, Clock, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GiftCard3D } from "@/components/ui/GiftCard3D";
import heroSportsImage from "@/assets/hero-sports.jpg";
import sportsActivitiesImage from "@/assets/sports-activities.jpg";
import sportsStoreImage from "@/assets/sports-store.jpg";
import athleteCelebrationImage from "@/assets/athlete-celebration.jpg";
import friendsRunningImage from "@/assets/friends-running.jpg";

export const HeroSection = () => {
  const sportsImages = [
    { src: heroSportsImage, alt: "Athlète en action" },
    { src: sportsActivitiesImage, alt: "Activités sportives" },
    { src: sportsStoreImage, alt: "Magasin de sport" },
    { src: athleteCelebrationImage, alt: "Célébration sportive" },
    { src: friendsRunningImage, alt: "Course entre amis" },
  ];

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-kado-coral/5" />
      
      {/* Floating shapes */}
      <motion.div
        className="absolute top-32 left-[15%] w-3 h-3 rounded-full bg-primary/40"
        animate={{ y: [0, -20, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-48 right-[20%] w-4 h-4 rounded-full bg-kado-coral/40"
        animate={{ y: [0, -30, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 lg:py-16">
          {/* Left Content - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <QrCode className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Carte cadeau avec QR code unique
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-6">
              Le cadeau sport{" "}
              <span className="gradient-text">universel</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed">
              <strong className="text-foreground">Une carte cadeau acceptée chez tous les pros du sport.</strong>{" "}
              Le bénéficiaire présente son QR code, le partenaire encaisse : c'est simple, rapide et sécurisé.
            </p>

            {/* Use Cases Pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8"
            >
              {["Salles de sport", "Cours & coaching", "Équipement", "Événements", "E-commerce"].map((item) => (
                <span 
                  key={item}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-kado-coral/10 text-kado-coral border border-kado-coral/20"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="xl" className="group">
                Offrir une carte
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Devenir partenaire
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-6 mt-10 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <QrCode className="w-4 h-4 text-primary" />
                </div>
                <span>QR code unique</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-kado-coral/10 flex items-center justify-center">
                  <Store className="w-4 h-4 text-kado-coral" />
                </div>
                <span>0% commission</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-kado-sky/10 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-kado-sky" />
                </div>
                <span>Remboursé sous 48h</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <GiftCard3D />
          </motion.div>
        </div>

        {/* Sports Photo Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pb-16"
        >
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
              L'univers Kadosport
            </p>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
              Tout le sport, un seul cadeau
            </h2>
          </div>

          {/* Photo Mosaic */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {/* Large featured image */}
            <motion.div 
              className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={sportsImages[0].src} 
                alt={sportsImages[0].alt}
                className="w-full h-full object-cover aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <span className="px-3 py-1 bg-primary/90 rounded-full text-sm font-medium">
                  Équipement sport
                </span>
              </div>
            </motion.div>

            {/* Smaller images */}
            {sportsImages.slice(1).map((image, index) => (
              <motion.div 
                key={index}
                className="relative rounded-xl overflow-hidden group aspect-square"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 left-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-2 py-1 bg-kado-coral/90 rounded-full text-xs font-medium">
                    {["Fitness", "Shopping", "Événements", "Loisirs"][index]}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
