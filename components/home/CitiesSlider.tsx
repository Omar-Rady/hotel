"use client"
import React from 'react';
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import UnifiedHeading from "@/components/ui/UnifiedHeading";

interface City {
  name: string;
  image: string;
  properties: number;
  highlighted?: boolean;
}

interface CitiesSliderProps {
  cities: City[];
  setSelectedCity: (city: string) => void;
}

const CitiesSlider = ({ cities, setSelectedCity }: CitiesSliderProps) => {
  return (
    <section className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-14 lg:pb-16">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-10 lg:mb-12 gap-4"
      >
        <UnifiedHeading
          variant="cities"
          title="**استكشف أجمل وجهاتنا**"
          subtitle="اكتشف بيت أحلامك في قلب أجمل مدن المملكة"
          badge="جديد"
          icon={true}
        />
        <div className="flex gap-2 sm:gap-3">
          <button
            className="cities-prev p-2 sm:p-3 bg-white border border-gray-100 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 group z-10"
            aria-label="Previous"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-[#38264a] transition-colors" />
          </button>
          <button
            className="cities-next p-2 sm:p-3 bg-white border border-gray-100 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 group z-10"
            aria-label="Next"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-[#38264a] transition-colors" />
          </button>
        </div>
      </motion.div>

      <div className="relative px-1 sm:px-2 pb-4 rtl">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={16}
          slidesPerView={1.3}
          navigation={{
            prevEl: '.cities-prev',
            nextEl: '.cities-next',
          }}
          breakpoints={{
            480: { slidesPerView: 1.8, spaceBetween: 20 },
            640: { slidesPerView: 2.5, spaceBetween: 24 },
            1024: { slidesPerView: 4.5, spaceBetween: 24 },
            1280: { slidesPerView: 5, spaceBetween: 24 },
          }}
          className="w-full"
          dir="rtl"
        >
          {cities.map((city, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className="group cursor-pointer relative"
                  onClick={() => setSelectedCity(city.name)}
                >
                  <div className={`relative w-full aspect-[5/5] rounded-2xl sm:rounded-[2rem] overflow-hidden mb-4 sm:mb-5 transition-all duration-500 ${city.highlighted ? 'ring-4 ring-[#4a3359]/20 shadow-2xl' : 'shadow-xl hover:shadow-2xl'}`}>
                    <img
                      src={city.image}
                      alt={city.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                    {city.highlighted && (
                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/20 backdrop-blur-md text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[9px] sm:text-[10px] font-bold z-10 border border-white/30 uppercase tracking-widest">
                        إيجارات شهرية
                      </div>
                    )}

                    <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 px-4 sm:px-6 text-white text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-xs sm:text-sm font-medium opacity-80 mb-1">{city.properties} عقار متاح</p>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-wide">{city.name}</h3>
                    </div>
                  </div>

                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CitiesSlider;
