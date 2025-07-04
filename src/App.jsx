import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'
import hero1 from "./assets/hero1.jpg";
import hero2 from "./assets/hero2.jpg";
import hero3 from "./assets/hero3.jpg";
import ambulanceMedicaliseeImg from "./assets/ambulance-medicalisee.jpg";
import locationMaterielMedicalImg from "./assets/location-materiel-medical.jpg";
import medecinADomicileImg from "./assets/medecin-a-domicile.jpg";
import oxygeneADomicileImg from "./assets/oxygene-a-domicile.jpg";
import infirmiereADomicileImg from "./assets/infirmiere-a-domicile.jpg";
import transportAccompagneImg from "./assets/transport-accompagne.jpg";

const servicesData = [
  {
    title: "Ambulances Médicalisées 24h/7",
    subtitle: "Transport sécurisé avec surveillance médicale continue",
    description: "Nos ambulances sont équipées pour gérer tous types de transferts médicaux, avec personnel formé au SAMU.",
    image: ambulanceMedicaliseeImg
  },
  {
    title: "Location de Matériel Médical",
    subtitle: "Lits, fauteuils roulants, oxygène, etc.",
    description: "Nous proposons la location de matériel médical à domicile avec livraison rapide et installation complète.",
    image: locationMaterielMedicalImg
  },
  {
    title: "Médecins à domicile",
    subtitle: "Consultations à domicile 24h/24",
    description: "Nos médecins généralistes ou urgentistes interviennent rapidement à domicile.",
    image: medecinADomicileImg
  },
  {
    title: "Oxygène à domicile",
    subtitle: "Fourniture et installation d'oxygène médical",
    description: "Livraison rapide et sécurisée d'oxygène médical pour les patients ayant des besoins respiratoires.",
    image: oxygeneADomicileImg
  },
  {
    title: "Infirmière à domicile",
    subtitle: "Soins infirmiers disponibles 7j/7",
    description: "Nous assurons les soins : injections, perfusions, pansements et suivi régulier.",
    image: infirmiereADomicileImg
  },
  {
    title: "Transport accompagné",
    subtitle: "Transport médicalisé avec accompagnement",
    description: "Pour patients dépendants ou personnes âgées, avec une équipe dédiée pour leur sécurité.",
    image: transportAccompagneImg
  }
]

const ServiceCard = ({ title, subtitle, description, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      onClick={() => setIsExpanded(!isExpanded)}
      className="relative rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer min-h-[260px] flex flex-col justify-end group"
      whileHover={{ scale: 1.02 }}
      style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300 z-0" />
      {/* Card Content */}
      <div className="relative z-10 p-6 text-white">
        <h3 className="text-xl font-bold text-red-500 mb-2 drop-shadow-lg">{title}</h3>
        <p className="text-white/90 text-sm mb-1 drop-shadow">{subtitle}</p>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-white/30"
            >
              <p className="text-white/90 text-sm">{description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

function HeroSection() {
  const images = [hero1, hero2, hero3];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="h-screen w-full relative overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[index]})` }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-bold text-4xl md:text-6xl mb-6 text-white drop-shadow-lg"
        >
          First Ambulance Casablanca
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl mb-8 text-white drop-shadow"
        >
          Ambulance Privée & Médicalisée 24h/24 à Casablanca
        </motion.p>
        <motion.a
          href="tel:0666858569"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 inline-block bg-red-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-700 transition text-lg font-semibold"
        >
          📞 Appeler maintenant
        </motion.a>
      </div>
    </section>
  );
}

function AboutSection() {
  // Import images
  const aboutImages = [
    ambulanceMedicaliseeImg,
    locationMaterielMedicalImg,
    medecinADomicileImg,
    oxygeneADomicileImg,
    infirmiereADomicileImg,
    transportAccompagneImg
  ];
  const [index, setIndex] = useState(0);

  // Auto-rotate images every 2.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % aboutImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [aboutImages.length]);

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-blue-900 text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        À propos de nous
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 justify-center">
        {/* Text */}
        <motion.p
          className="text-gray-700 text-lg leading-relaxed text-center md:text-left max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          First Ambulance est un service d’ambulance privée et médicalisée disponible 24h/24 et 7j/7 dans tout le Maroc.<br className="hidden sm:block" />
          Notre mission est de garantir un transport sanitaire sécurisé, rapide et humain, que ce soit pour une urgence médicale, un transfert hospitalier, ou une assistance à domicile.<br className="hidden sm:block" />
          <br />
          Nous proposons une large gamme de services : ambulances médicalisées, médecins et infirmières à domicile, oxygène médical à domicile, transport accompagné, ainsi que la location de matériel médical.<br className="hidden sm:block" />
          Grâce à une équipe formée aux normes SAMU et un matériel de pointe, nous assurons une prise en charge optimale sur tout le territoire marocain.
        </motion.p>
        {/* Image Slider */}
        <div className="w-full max-w-md flex-shrink-0 overflow-hidden rounded-xl shadow-lg h-64 sm:h-80 bg-gray-100 relative">
          <AnimatePresence initial={false}>
            <motion.img
              key={aboutImages[index]}
              src={aboutImages[index]}
              alt="Aperçu First Ambulance"
              className="w-full h-64 sm:h-80 object-cover rounded-xl absolute top-0 left-0"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.7 }}
              draggable={false}
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function EngagementsSection() {
  // Engagements content
  const leftEngagements = [
    {
      title: "Disponibilité 24h/7",
      desc: "Nous sommes disponibles à toute heure pour répondre à vos besoins urgents et transports médicaux."
    },
    {
      title: "Matériel Médical à la Pointe",
      desc: "Nos ambulances sont équipées de dispositifs modernes pour une sécurité maximale."
    },
    {
      title: "Écoute & Humanité",
      desc: "Chaque patient est au cœur de notre attention : respect, empathie et bienveillance."
    },
    {
      title: "Adaptabilité des Prestations",
      desc: "Des solutions personnalisées selon les besoins spécifiques de chaque client."
    },
    {
      title: "Confidentialité",
      desc: "Nous garantissons le respect total de la vie privée et des données médicales."
    }
  ];
  const rightEngagements = [
    {
      title: "Professionnalisme Certifié",
      desc: "Une équipe formée qui agit avec rigueur, éthique et expertise."
    },
    {
      title: "Réactivité & Ponctualité",
      desc: "Intervention rapide avec un transport sécurisé et optimisé."
    },
    {
      title: "Couverture Nationale",
      desc: "Casablanca et toutes les régions du Maroc. Transport fiable et efficace."
    },
    {
      title: "Sécurité Avant Tout",
      desc: "Respect strict des normes sanitaires pour garantir la protection de nos patients."
    }
  ];

  return (
    <section className="relative z-10 py-20 px-4 max-w-7xl mx-auto" id="engagements">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-fixed bg-center z-0 opacity-80" style={{ backgroundImage: "url('/src/assets/website-bg.jpg')" }} />
      <div className="relative z-10">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center text-blue-900 mb-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          Nos Engagements
        </motion.h2>
        <p className="text-center text-blue-900 font-medium mb-12 max-w-2xl mx-auto">
          Notre promesse : un service fiable, humain et professionnel pour tous vos besoins en transport sanitaire et assistance médicale.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Engagements */}
          <div className="flex flex-col gap-6">
            {leftEngagements.map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl shadow-md p-6 text-blue-900"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3 className="font-bold text-lg mb-1 text-blue-900">{item.title}</h3>
                <p className="text-blue-900/80 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          {/* Center Logo + Contact */}
          <div className="flex flex-col items-center gap-6">
            <img src="/src/assets/logo.png" alt="First Ambulance Logo" className="w-32 sm:w-40 mx-auto drop-shadow-xl" />
            <div className="bg-red-600 text-white font-bold text-center rounded-lg px-6 py-3 text-lg shadow-lg">
              📞 0666 85 85 69
            </div>
            <p className="text-blue-900 mt-2 text-center text-sm sm:text-base font-medium">
              INTERVENTION RAPIDE 24H/24 – PARTOUT AU MAROC
            </p>
          </div>
          {/* Right Engagements */}
          <div className="flex flex-col gap-6">
            {rightEngagements.map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl shadow-md p-6 text-blue-900"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3 className="font-bold text-lg mb-1 text-blue-900">{item.title}</h3>
                <p className="text-blue-900/80 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Main Nav Bar */}
      <header className="w-full sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between bg-white/70 backdrop-blur-md shadow-lg rounded-b-2xl border-b border-white/40 transition-all duration-300">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img src="/src/assets/logo.png" alt="First Ambulance Logo" className="h-12 w-auto drop-shadow-md transition-transform duration-200 hover:scale-105" />
          </a>
          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-blue-900 font-semibold text-lg px-2 py-1 rounded-lg transition-all duration-200 hover:bg-red-50 hover:text-red-600 focus:bg-red-100 focus:text-red-700">Accueil</a>
            <a href="#engagements" className="text-blue-900 font-semibold text-lg px-2 py-1 rounded-lg transition-all duration-200 hover:bg-red-50 hover:text-red-600 focus:bg-red-100 focus:text-red-700">Nos Engagements</a>
            <a href="#about" className="text-blue-900 font-semibold text-lg px-2 py-1 rounded-lg transition-all duration-200 hover:bg-red-50 hover:text-red-600 focus:bg-red-100 focus:text-red-700">A propos de nous</a>
            <a href="#services" className="text-blue-900 font-semibold text-lg px-2 py-1 rounded-lg transition-all duration-200 hover:bg-red-50 hover:text-red-600 focus:bg-red-100 focus:text-red-700">Services</a>
          </div>
          {/* Call to Action Button */}
          <a href="tel:0666858569" className="hidden md:inline-block ml-6 bg-red-600 text-white px-5 py-2 rounded-xl shadow-md font-semibold text-base transition-all duration-200 hover:bg-red-700 hover:scale-105 focus:ring-2 focus:ring-red-300">Appeler</a>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-blue-900 focus:outline-none ml-2 p-2 rounded-lg hover:bg-blue-100 transition-all duration-200"
            aria-label="Ouvrir le menu"
          >
            <svg className="w-7 h-7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </nav>
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-72 h-full bg-white/90 backdrop-blur-lg shadow-2xl z-50 flex flex-col pt-24 px-6 gap-6 rounded-l-2xl border-l border-white/40"
            >
              <a href="#home" className="text-blue-900 font-semibold text-lg px-2 py-2 rounded-lg transition-all duration-200 hover:bg-red-50 hover:text-red-600">Accueil</a>
              <a href="#engagements" className="text-blue-900 font-semibold text-lg px-2 py-2 rounded-lg transition-all duration-200 hover:bg-red-50 hover:text-red-600">Nos Engagements</a>
              <a href="#about" className="text-blue-900 font-semibold text-lg px-2 py-2 rounded-lg transition-all duration-200 hover:bg-red-50 hover:text-red-600">A propos de nous</a>
              <a href="#services" className="text-blue-900 font-semibold text-lg px-2 py-2 rounded-lg transition-all duration-200 hover:bg-red-50 hover:text-red-600">Services</a>
              <a href="tel:0666858569" className="mt-4 bg-red-600 text-white px-5 py-2 rounded-xl shadow-md font-semibold text-base transition-all duration-200 hover:bg-red-700 hover:scale-105">Appeler</a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      {/* Page Content */}
      <main className="pt-0">
        {/* Add an anchor for Accueil (home) */}
        <div id="home" />
        <HeroSection />
        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-12"
            >
              Nos Services
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesData.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ServiceCard {...service} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <EngagementsSection />
        {/* Add an anchor for About section */}
        <div id="about" />
        <AboutSection />
        {/* Floating Contact Buttons */}
        <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50 items-end">
          <motion.a
            href="tel:0666858569"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.3
            }}
            className="bg-red-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-700 hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
          >
            <span>📞 Appeler maintenant</span>
          </motion.a>
          <motion.a
            href="https://wa.me/212666858569"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.4
            }}
            className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
          >
            <span>💬 WhatsApp</span>
          </motion.a>
        </div>
      </main>
      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.7 }}
        className="bg-blue-900 text-white pt-16 pb-8 px-4 mt-12 shadow-inner rounded-t-3xl"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About/Logo */}
          <div>
            <img src="/src/assets/logo.png" alt="First Ambulance Logo" className="h-20 mb-6 drop-shadow-xl transition-transform duration-300 hover:scale-105" />
            <p className="text-lg leading-relaxed text-white/90 font-light">
              FIRST AMBULANCE, votre partenaire de confiance pour des services d'ambulance rapide et médicalisée à Casablanca et région.
            </p>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 tracking-wide">CONTACT</h3>
            <ul className="space-y-2 text-white/90 text-lg font-medium">
              <li className="transition-colors duration-200 hover:text-red-400">Casablanca, Maroc</li>
              <li className="transition-colors duration-200 hover:text-red-400">ambulance.first.maroc@gmail.com</li>
              <li className="transition-colors duration-200 hover:text-red-400">0666858569</li>
            </ul>
          </div>
          {/* Useful Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4 tracking-wide">LIENS UTILES</h3>
            <ul className="space-y-2 text-white/90 text-lg font-medium">
              <li><a href="#home" className="hover:text-red-400 transition-colors duration-200">Accueil</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors duration-200">Services</a></li>
              <li><a href="#engagements" className="hover:text-red-400 transition-colors duration-200">Nos Engagements</a></li>
              <li><a href="#about" className="hover:text-red-400 transition-colors duration-200">A propos de nous</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center text-white/60 text-sm tracking-wide">© {new Date().getFullYear()} First Ambulance. Tous droits réservés.</div>
      </motion.footer>
    </div>
  )
}

export default App

// --- GLOBAL MODERNIZATION ---
// 1. Add smooth transitions to all links and buttons
// 2. Use rounded-2xl, shadow-xl, font-medium, tracking-wide, and modern spacing
// 3. Add subtle hover/active effects to nav, cards, and buttons
// 4. Use Framer Motion fade/slide-in for main sections
// 5. Consistent color palette and font weights
// 6. Responsive and visually clean
// (Already applied above and in previous code)
