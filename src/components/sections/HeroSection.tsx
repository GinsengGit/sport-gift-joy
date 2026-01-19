import { motion } from "framer-motion";
import { ArrowRight, QrCode, Gift, Dumbbell, Mountain, Waves, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GiftCard3D } from "@/components/ui/GiftCard3D";

// New dynamic sports images
import heroCollage from "@/assets/hero-sports-collage.jpg";
import coachingImage from "@/assets/coaching-fitness.jpg";
import climbingImage from "@/assets/climbing-adventure.jpg";
import waterSportsImage from "@/assets/water-sports.jpg";
import runningImage from "@/assets/outdoor-running.jpg";
import gymImage from "@/assets/gym-fitness.jpg";

const sportCategories = [
  { icon: Dumbbell, label: "Salles & Fitness", color: "primary" },
  { icon: Users, label: "Coaching sportif", color: "kado-coral" },
  { icon: Mountain, label: "Sports outdoor", color: "kado-sky" },
  { icon: Waves, label: "Activités nautiques", color: "primary" },
  { icon: Zap, label: "Sensations fortes", color: "kado-coral" },
  { icon: Gift, label: "Clubs & Associations", color: "kado-sky" },
];

const sportsGallery = [
  { src: coachingImage, label: "Coaching", category: "Personnel" },
  { src: climbingImage, label: "Escalade", category: "Aventure" },
  { src: waterSportsImage, label: "Nautique", category: "Outdoor" },
  { src: runningImage, label: "Running", category: "Collectif" },
  { src: gymImage, label: "Fitness", category: "Salle" },
];

// Hero sports collage images for dynamic background
const heroSportsImages = [
  { src: coachingImage, label: "Coaching", position: "top-20 left-0", size: "w-48 h-64 lg:w-64 lg:h-80", rotate: "-rotate-6", delay: 0 },
  { src: climbingImage, label: "Escalade", position: "top-40 right-0", size: "w-44 h-56 lg:w-56 lg:h-72", rotate: "rotate-6", delay: 0.1 },
  { src: waterSportsImage, label: "Nautique", position: "bottom-32 left-8", size: "w-40 h-52 lg:w-52 lg:h-68", rotate: "rotate-3", delay: 0.2 },
  { src: runningImage, label: "Running", position: "bottom-20 right-4", size: "w-44 h-56 lg:w-56 lg:h-72", rotate: "-rotate-3", delay: 0.15 },
  { src: gymImage, label: "Fitness", position: "top-60 left-20 lg:left-40", size: "w-36 h-48 lg:w-48 lg:h-64", rotate: "rotate-12", delay: 0.25 },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Floating Sports Images - Left Side */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left floating images */}
        <motion.div
          initial={{ opacity: 0, x: -100, rotate: -15 }}
          animate={{ opacity: 1, x: 0, rotate: -6 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-20 -left-8 lg:left-0 w-44 h-56 lg:w-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl transform -rotate-6 z-0 border border-white/20"
        >
          <img src={coachingImage} alt="Coaching sportif" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -80, rotate: 20 }}
          animate={{ opacity: 1, x: 0, rotate: 12 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-[45%] -left-4 lg:left-12 w-40 h-52 lg:w-56 lg:h-72 rounded-2xl overflow-hidden shadow-2xl transform rotate-12 z-0 border border-white/20"
        >
          <img src={gymImage} alt="Fitness en salle" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80, rotate: -10 }}
          animate={{ opacity: 1, y: 0, rotate: 3 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-24 -left-6 lg:left-4 w-44 h-56 lg:w-60 lg:h-76 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 z-0 border border-white/20"
        >
          <img src={waterSportsImage} alt="Sports nautiques" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>

        {/* Right floating images */}
        <motion.div
          initial={{ opacity: 0, x: 100, rotate: 15 }}
          animate={{ opacity: 1, x: 0, rotate: 6 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute top-24 -right-8 lg:right-0 w-48 h-60 lg:w-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl transform rotate-6 z-0 border border-white/20"
        >
          <img src={climbingImage} alt="Escalade aventure" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80, rotate: -15 }}
          animate={{ opacity: 1, x: 0, rotate: -8 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-[50%] -right-4 lg:right-8 w-44 h-56 lg:w-60 lg:h-76 rounded-2xl overflow-hidden shadow-2xl transform -rotate-8 z-0 border border-white/20"
        >
          <img src={runningImage} alt="Running outdoor" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80, rotate: 10 }}
          animate={{ opacity: 1, y: 0, rotate: -3 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute bottom-20 -right-6 lg:right-4 w-40 h-52 lg:w-56 lg:h-72 rounded-2xl overflow-hidden shadow-2xl transform -rotate-3 z-0 border border-white/20"
        >
          <img src={heroCollage} alt="Sports collectifs" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
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
            {/* Sport Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kado-coral/15 border border-kado-coral/30 mb-6"
            >
              <Zap className="w-4 h-4 text-kado-coral" />
              <span className="text-sm font-bold text-kado-coral uppercase tracking-wide">
                La carte cadeau 100% sport
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[1.1] mb-4 sm:mb-6">
              Offrez le{" "}
              <span className="gradient-text">sport</span>, sans limite
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-medium mb-6">
              La carte cadeau dédiée aux activités sportives
            </p>

            {/* Clear value proposition */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed"
            >
              <strong className="text-foreground">Coaching, fitness, sports outdoor, nautique, escalade, associations sportives...</strong>{" "}
              Le bénéficiaire choisit librement son activité !
            </motion.p>

            {/* Sport Categories Pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-2 justify-center mb-8"
            >
              {sportCategories.map((category) => (
                <span 
                  key={category.label}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg 
                    ${category.color === 'primary' ? 'bg-primary/10 text-primary border border-primary/20' : 
                      category.color === 'kado-coral' ? 'bg-kado-coral/10 text-kado-coral border border-kado-coral/20' : 
                      'bg-kado-sky/10 text-kado-sky border border-kado-sky/20'}`}
                >
                  <category.icon className="w-3.5 h-3.5" />
                  {category.label}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <Link to="/offrir-carte">
                <Button variant="hero" size="xl" className="group text-lg w-full sm:w-auto">
                  <Gift className="w-5 h-5 mr-2" />
                  Offrir une carte Kadosport
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/partner-payment">
                <Button variant="outline" size="xl" className="gap-2 text-lg w-full sm:w-auto">
                  <QrCode className="w-5 h-5" />
                  J'encaisse une carte
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
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4"
          >
            {sportsGallery.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative rounded-2xl overflow-hidden aspect-square group cursor-pointer shadow-lg"
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
