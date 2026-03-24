import { motion } from "framer-motion";
import { ArrowRight, QrCode, Gift, Check, Dumbbell, Users, Mountain, Trophy, Heart, Bike } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Dynamic sports images for collage background
import fitnessImage from "@/assets/fitness-gym-dynamic.jpg";
import outdoorImage from "@/assets/outdoor-sport-dynamic.jpg";
import padelImage from "@/assets/padel-sport.jpg";
import coachingImage from "@/assets/coaching-fitness.jpg";
import waterSportsImage from "@/assets/water-sports.jpg";
import climbingImage from "@/assets/climbing-adventure.jpg";
import friendsRunning from "@/assets/friends-running.jpg";
import gymFitness from "@/assets/gym-fitness.jpg";

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32 pb-16">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-4">
            LA CARTE CADEAU QUI FINANCE LA <span className="text-primary">PRATIQUE SPORTIVE</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Encaissable exclusivement par les professionnels du sport déclarés en France
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            {[
              { icon: Dumbbell, label: "Salles de sport & fitness" },
              { icon: Users, label: "Coachs sportifs indépendants" },
              { icon: Mountain, label: "Activités outdoor & nature" },
              { icon: Trophy, label: "Clubs & associations sportives" },
              { icon: Heart, label: "Centres bien-être & yoga" },
              { icon: Bike, label: "Centres sportifs & loisirs" },
            ].map((tag) => (
              <span
                key={tag.label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary"
              >
                <tag.icon className="w-3.5 h-3.5" />
                {tag.label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Tilted Photo Collage Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto mb-12"
        >
          <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-6 md:p-8 border border-primary/20 shadow-xl overflow-hidden">
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
                  <img src={sport.src} alt={sport.label} className="w-full h-full object-cover" />
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

        {/* Key points */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
            Vous êtes à la recherche d'une idée cadeau pour un sportif/ve ? Vous voulez être certain de lui faire plaisir ?
          </p>
          <p className="text-lg sm:text-xl font-semibold text-foreground mb-4">
            Offrez une carte KADOSPORT, <span className="text-primary">LA PLUS SPORTIVE</span> des cartes cadeaux.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
            La première carte cadeau digitale universelle, dédiée au sport et aux activités sportives.
          </p>
          
          <div className="flex flex-col gap-3 items-center">
            {[
              "Encaissable exclusivement par les professionnels du sport déclarés",
              "Zéro commission pour les structures sportives",
              "Financement direct de la pratique sportive",
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
          className="flex flex-col sm:flex-row gap-4 justify-center"
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
      </div>
    </section>
  );
};
