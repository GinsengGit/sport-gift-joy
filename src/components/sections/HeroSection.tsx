import { motion } from "framer-motion";
import { ArrowRight, QrCode, Gift, Dumbbell, Mountain, Building2, Users, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GiftCard3D } from "@/components/ui/GiftCard3D";

// Dynamic sports images for collage background
import fitnessImage from "@/assets/fitness-gym-dynamic.jpg";
import outdoorImage from "@/assets/outdoor-sport-dynamic.jpg";
import padelImage from "@/assets/padel-sport.jpg";
import coachingImage from "@/assets/coaching-fitness.jpg";
import waterSportsImage from "@/assets/water-sports.jpg";
import climbingImage from "@/assets/climbing-adventure.jpg";
import friendsRunning from "@/assets/friends-running.jpg";
import gymFitness from "@/assets/gym-fitness.jpg";

const sportCategories = [
  { icon: Dumbbell, label: "Coaching fitness", color: "primary" },
  { icon: Mountain, label: "Sports outdoor", color: "kado-sky" },
  { icon: Building2, label: "Centres sportifs", color: "kado-coral" },
  { icon: Users, label: "Clubs & associations", color: "primary" },
];

// Featured sport images for the tilted collage box
const featuredSports = [
  { src: fitnessImage, label: "Fitness", rotation: "-rotate-3" },
  { src: coachingImage, label: "Coaching", rotation: "rotate-2" },
  { src: outdoorImage, label: "Outdoor", rotation: "-rotate-2" },
  { src: padelImage, label: "Padel", rotation: "rotate-3" },
  { src: waterSportsImage, label: "Aquatique", rotation: "-rotate-1" },
  { src: climbingImage, label: "Escalade", rotation: "rotate-2" },
  { src: friendsRunning, label: "Running", rotation: "-rotate-2" },
  { src: gymFitness, label: "Musculation", rotation: "rotate-1" },
];

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-primary/5 via-background to-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32 pb-8">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-4">
            OFFREZ DU <span className="text-primary">SPORT</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            KADOSPORT est la 1ère carte cadeau 100% sportive
          </p>
        </motion.div>

        {/* Tilted Photo Collage Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto mb-12"
        >
          {/* Photo grid with tilted images */}
          <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-6 md:p-8 border border-primary/20 shadow-xl overflow-hidden">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-kado-coral/10 opacity-50" />
            
            <div className="relative grid grid-cols-4 md:grid-cols-8 gap-3 md:gap-4">
              {featuredSports.map((sport, index) => (
                <motion.div
                  key={sport.label}
                  initial={{ opacity: 0, y: 20, rotate: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={`relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg border-2 border-white/80 transform ${sport.rotation} hover:scale-105 hover:rotate-0 transition-all duration-300 cursor-pointer group`}
                >
                  <img 
                    src={sport.src} 
                    alt={sport.label}
                    className="w-full h-full object-cover"
                  />
                  {/* Hover overlay with label */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="absolute bottom-2 left-2 right-2 text-white text-xs font-semibold text-center">
                      {sport.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Explanatory text BELOW photos */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
            Une carte sport pour financer la pratique sportive librement,
            chez tous les professionnels du sport déclarés, partout en France.
            Elle donne aussi accès à des <span className="font-semibold text-primary">avantages exclusifs</span> sur le matériel et l'équipement sportif.
          </p>
          
          {/* Les + Kadosport */}
          <div className="flex flex-col gap-3 items-center">
            {[
              "Encaissable chez tous les professionnels du sport déclarés",
              "Zéro commission pour les structures sportives",
              "Remboursement simple et garanti",
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full"
              >
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base font-medium text-foreground">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link to="/offrir-carte">
            <Button variant="hero" size="xl" className="group text-lg w-full sm:w-auto uppercase tracking-wide">
              <Gift className="w-5 h-5 mr-2" />
              J'offre une carte Kadosport
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/partner-payment">
            <Button variant="hero" size="xl" className="group text-lg w-full sm:w-auto uppercase tracking-wide">
              <QrCode className="w-5 h-5 mr-2" />
              J'encaisse une carte
            </Button>
          </Link>
        </motion.div>

        {/* Sport Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {sportCategories.map((category, index) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="flex flex-col items-center gap-2 p-4 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-semibold text-foreground text-center">{category.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 3D Gift Card Section */}
      <div className="relative z-10 bg-gradient-to-b from-transparent via-background/80 to-background pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center py-8"
          >
            <GiftCard3D />
          </motion.div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-8 justify-center mt-8"
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
        </div>
      </div>
    </section>
  );
};
