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

// Tilted collage images configuration
const collageImages = [
  { src: fitnessImage, className: "top-4 left-4 w-40 h-52 lg:w-56 lg:h-72 -rotate-6", delay: 0.1 },
  { src: outdoorImage, className: "top-8 left-1/4 w-36 h-48 lg:w-48 lg:h-64 rotate-3", delay: 0.2 },
  { src: padelImage, className: "top-2 right-1/4 w-40 h-52 lg:w-52 lg:h-68 -rotate-3", delay: 0.3 },
  { src: coachingImage, className: "top-6 right-4 w-38 h-50 lg:w-52 lg:h-72 rotate-6", delay: 0.4 },
  { src: waterSportsImage, className: "top-1/3 left-8 w-36 h-44 lg:w-44 lg:h-56 rotate-4", delay: 0.5 },
  { src: climbingImage, className: "top-1/3 right-8 w-36 h-44 lg:w-44 lg:h-56 -rotate-4", delay: 0.6 },
  { src: friendsRunning, className: "bottom-1/4 left-4 w-40 h-52 lg:w-52 lg:h-64 -rotate-3", delay: 0.7 },
  { src: gymFitness, className: "bottom-1/4 right-4 w-38 h-48 lg:w-48 lg:h-60 rotate-5", delay: 0.8 },
  { src: padelImage, className: "bottom-8 left-1/4 w-36 h-44 lg:w-44 lg:h-52 rotate-2 scale-x-[-1]", delay: 0.9 },
  { src: outdoorImage, className: "bottom-8 right-1/4 w-36 h-44 lg:w-44 lg:h-52 -rotate-2 scale-x-[-1]", delay: 1.0 },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Tilted Sports Collage Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {collageImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: img.delay }}
            className={`absolute rounded-lg overflow-hidden shadow-xl border-2 border-white/30 ${img.className}`}
          >
            <img 
              src={img.src} 
              alt="Sport" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
        
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/50" />
      </div>

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
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-4">
              OFFREZ DU SPORT
            </h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8"
            >
              KADOSPORT est la 1ère carte cadeau 100% sportive
            </motion.p>

            {/* Introduction text */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              <p>
                Une carte sport qui permet de financer la pratique sportive librement,
                chez tous les professionnels du sport déclarés, partout en France.
              </p>
            </motion.div>

            {/* Les + Kadosport */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-3 items-center mb-10"
            >
              {[
                "Encaissable chez tous les professionnels du sport déclarés",
                "Zéro commission pour les structures sportives",
                "Remboursement simple et garanti",
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full"
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm sm:text-base font-medium text-white">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
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
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
            >
              {sportCategories.map((category, index) => (
                <motion.div
                  key={category.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex flex-col items-center gap-2 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-white text-center">{category.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
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
