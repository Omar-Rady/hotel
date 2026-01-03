"use client"
import React from 'react';
import { motion, AnimatePresence } from "framer-motion"
import { Search, SlidersHorizontal } from 'lucide-react';
import UnifiedHeading from "@/components/ui/UnifiedHeading";

// Sub-components
import { HeroProps } from "./hero/types";
import { MobileSearchDrawer } from "./hero/MobileSearchDrawer";
import { DesktopSearchForm } from "./hero/DesktopSearchForm";

const Hero = ({ currentHeroImage, heroImages, date, setDate }: HeroProps) => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = React.useState(false);
  const [showFloatingButton, setShowFloatingButton] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Show floating button when scrolled past hero section (approximately 500px)
      setShowFloatingButton(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-[300px] sm:h-[350px] md:h-[500px] lg:h-[500px] w-full">
      {/* Background Images */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHeroImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentHeroImage]}
              alt="Hero background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/20 to-transparent"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="container mx-auto px-4 sm:px-6 h-full relative z-20 flex flex-col justify-center">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full mb-8 sm:mb-12 gap-4 relative top-0 md:top-[-50px] ">
          <UnifiedHeading
            variant="hero"
            title="حيا الله"
            subtitle="وين ودك تسافر؟"
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-black/30 backdrop-blur-xl border border-white/20 px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl text-white text-xs sm:text-sm font-bold shadow-2xl"
          >
            كورنيش جدة - جدة
          </motion.div>
        </div>

        {/* Search Box Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative w-full px-4 -mb-[120px] sm:mb-[-80px] md:mb-[-315px]"
        >
          {/* Mobile Search Trigger */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileFilterOpen(true)}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-white/95 backdrop-blur-2xl rounded-3xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] p-5 border border-white/50 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#38264a] to-[#090112] rounded-xl flex items-center justify-center">
                  <Search className="w-5 h-5 text-white" />
                </div>
                <div className="text-right">
                  <p className="text-[#38264a] font-bold text-base">ابحث عن وحدتك</p>
                  <p className="text-gray-400 text-xs">المدينة، النوع، التواريخ</p>
                </div>
              </div>
              <SlidersHorizontal className="w-5 h-5 text-[#38264a]" />
            </motion.button>
          </div>

          {/* Desktop Search Form */}
          <DesktopSearchForm date={date} setDate={setDate} />
        </motion.div>
      </div>

      {/* Mobile Search Drawer */}
      <MobileSearchDrawer
        isOpen={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
        date={date}
        setDate={setDate}
      />
    </div>
  );
};

export default Hero;