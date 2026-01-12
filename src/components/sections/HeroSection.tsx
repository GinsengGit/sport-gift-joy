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

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Full-width sports background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroCollage} 
          alt="Univers sportif Kadosport" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
      </div>


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 lg:pt-32">
        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Content - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
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

            {/* Headline - User focused */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-4 sm:mb-6">
              Offrez le{" "}
              <span className="gradient-text">plaisir du sport</span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-muted-foreground font-medium">
                sans limite d'activité
              </span>
            </h1>

            {/* Clear value proposition */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-4 sm:mb-6 leading-relaxed px-2 sm:px-0"
            >
              <strong className="text-foreground">Une carte cadeau pour pratiquer toutes les activités sportives et de loisirs.</strong>{" "}
              Coaching, fitness, sports outdoor, nautique, escalade, associations sportives... 
              Le bénéficiaire choisit librement son activité !
            </motion.p>

            {/* Sport Categories Pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8"
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
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="xl" className="group text-lg">
                <Gift className="w-5 h-5 mr-2" />
                Offrir une carte Kadosport
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/partner-payment">
                <Button variant="outline" size="xl" className="gap-2 text-lg w-full sm:w-auto">
                  <QrCode className="w-5 h-5" />
                  J'encaisse une carte
                </Button>
              </Link>
            </motion.div>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center gap-8 mt-10 justify-center lg:justify-start"
            >
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-primary">∞</p>
                <p className="text-xs text-muted-foreground font-medium">Activités possibles</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-kado-coral">0%</p>
                <p className="text-xs text-muted-foreground font-medium">Commission partenaire</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-kado-sky">24</p>
                <p className="text-xs text-muted-foreground font-medium">Mois de validité</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <GiftCard3D />
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
