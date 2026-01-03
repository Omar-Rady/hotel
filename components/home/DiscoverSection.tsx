"use client"
import React, { useState } from 'react';
import { motion } from "framer-motion"
import { Sparkles, Star, ChevronRight, ChevronLeft, Heart, MapPin } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import UnifiedHeading from "@/components/ui/UnifiedHeading";

interface Property {
  id: number;
  image: string;
  rating: number;
  reviews: number;
  title: string;
  location: string;
  price: number;
  oldPrice: number;
  discount: number;
  guests: number;
  badge: string;
}

interface DiscoverSectionProps {
  properties: Property[];
}

const DiscoverSection = ({ properties }: DiscoverSectionProps) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  return (
    <section className="bg-white pt-16 sm:pt-20 lg:pt-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-10 lg:mb-12 gap-4"
        >
          <UnifiedHeading
            variant="discover"
            title="**اكتشف الجديد**"
            subtitle="مجموعة منتقاة بعناية من أفخم العقارات لتجربة استثنائية"
            badge="مختاراتنا لك"
          />
          <div className="flex gap-2 sm:gap-3">
            <button
              className="disc-prev p-2 sm:p-3 bg-[#fcfaff] border border-purple-50 rounded-xl sm:rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 group z-10"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-[#38264a]" />
            </button>
            <button
              className="disc-next p-2 sm:p-3 bg-[#fcfaff] border border-purple-50 rounded-xl sm:rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 group z-10"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-[#38264a]" />
            </button>
          </div>
        </motion.div>

        <div className="relative px-1 sm:px-2 pb-10 sm:pb-12 rtl">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.1}
            navigation={{
              prevEl: '.disc-prev',
              nextEl: '.disc-next',
            }}
            breakpoints={{
              480: { slidesPerView: 1.2, spaceBetween: 24 },
              640: { slidesPerView: 1.5, spaceBetween: 28 },
              1024: { slidesPerView: 2.5, spaceBetween: 32 },
              1280: { slidesPerView: 3, spaceBetween: 32 },
            }}
            className="w-full"
            dir="rtl"
          >
            {[...properties].reverse().map((property, idx) => (
              <SwiperSlide key={`${property.id}-discover`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="bg-white rounded-2xl sm:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 group border border-gray-50">
                    <div className="relative h-52 sm:h-60 lg:h-64 overflow-hidden">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 opacity-60 group-hover:opacity-80 transition-opacity"></div>

                      <button
                        onClick={() => toggleFavorite(property.id)}
                        className="absolute top-5 right-5 p-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg hover:bg-white transition-all transform hover:scale-110 z-10"
                      >
                        <Heart className={`w-5 h-5 transition-colors ${favorites.includes(property.id) ? 'fill-red-500 text-red-500' : 'text-white'}`} />
                      </button>

                      <div className="absolute bottom-6 right-6 z-10">
                        <div className="bg-white/90 backdrop-blur-md text-[#38264a] px-4 py-1.5 rounded-xl text-[10px] font-black shadow-xl border border-white/50">
                          {property.badge}
                        </div>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 lg:p-7">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className="flex -space-x-2 rtl:space-x-reverse">
                            {[1, 2, 3].map(i => (
                              <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" />
                              </div>
                            ))}
                          </div>
                          <span className="text-gray-400 text-[10px] font-medium">+150 رضي عن إقامته</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[#38264a]">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="font-black text-sm">{property.rating}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-[#38264a] mb-3 line-clamp-1">{property.title}</h3>

                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
                        <MapPin className="w-4 h-4 text-[#c2985a]" />
                        <p className="line-clamp-1 font-light italic">{property.location}</p>
                      </div>

                      <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-black text-gray-900">{property.price}</span>
                          <span className="text-xs text-gray-400 font-medium">ريال / ليلة</span>
                        </div>
                        <button className="bg-[#38264a] text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-purple-900/10 hover:shadow-purple-900/20 hover:scale-105 transition-all">
                          احجز الآن
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
