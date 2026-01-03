"use client"
import React, { useState } from 'react';
import { motion } from "framer-motion"
import { ChevronRight, ChevronLeft, Sparkles, Heart, Users, Star, MapPin } from 'lucide-react';
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

interface PropertiesSliderProps {
  properties: Property[];
}

const PropertiesSlider = ({ properties }: PropertiesSliderProps) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  return (
    <section className="bg-[#fcfaff] py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-10 lg:mb-12 gap-4 sm:gap-6"
        >
          <UnifiedHeading
            variant="properties"
            title="**عروضنا اليومية الحصرية**"
            subtitle="اغتنم الفرصة مع خصومات تصل إلى 50% لفترة محدودة جداً"
            badge="عروض اليوم"
          />
          <div className="flex gap-2 sm:gap-3">
            <button
              className="prop-prev p-2 sm:p-3 bg-white border border-purple-50 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group z-10"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-[#38264a]" />
            </button>
            <button
              className="prop-next p-2 sm:p-3 bg-white border border-purple-50 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group z-10"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-[#38264a]" />
            </button>
          </div>
        </motion.div>
        <div className="relative px-1 sm:px-2 pb-8 sm:pb-10 rtl">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.1}
            navigation={{
              prevEl: '.prop-prev',
              nextEl: '.prop-next',
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
            {properties.map((property, idx) => (
              <SwiperSlide key={property.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="bg-white rounded-2xl sm:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_-15px_rgba(56,38,74,0.15)] transition-all duration-500 group border border-purple-50/50">
                    <div className="relative h-52 sm:h-60 lg:h-64 overflow-hidden">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                      <button
                        onClick={() => toggleFavorite(property.id)}
                        className="absolute top-3 sm:top-4 lg:top-5 right-3 sm:right-4 lg:right-5 p-2 sm:p-2.5 lg:p-3 bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg hover:bg-white transition-all transform hover:scale-110 z-10"
                      >
                        <Heart className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${favorites.includes(property.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                      </button>

                      <div className="absolute top-5 left-5 flex flex-col gap-2 z-10">
                        <div className="bg-red-500 text-white text-center px-4 py-1.5 rounded-xl text-xs font-black shadow-lg shadow-red-500/30">
                          -{property.discount}%
                        </div>
                        <div className="bg-[#38264a]/90 backdrop-blur-md text-white text-center px-4 py-1.5 rounded-xl text-[10px] font-bold shadow-lg uppercase tracking-wider">
                          {property.badge}
                        </div>
                      </div>

                      <div className="absolute bottom-5 right-5 flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <Users className="w-4 h-4 text-[#38264a]" />
                        <span className="text-xs font-bold text-gray-900">{property.guests} ضيوف</span>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 lg:p-7">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1.5 bg-yellow-400 text-white px-2.5 py-1 rounded-lg shadow-sm">
                          <Star className="w-4 h-4 fill-white" />
                          <span className="font-black text-sm">{property.rating.toFixed(1)}</span>
                        </div>
                        <span className="text-gray-400 text-xs font-medium">({property.reviews} تقييم)</span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-[#38264a] mb-3 group-hover:text-[#38264a] transition-colors line-clamp-1">{property.title}</h3>

                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
                        <MapPin className="w-4 h-4 text-[#4a3359]" />
                        <p className="line-clamp-1 font-light italic">{property.location}</p>
                      </div>

                      <div className="flex items-end justify-between pt-6 border-t border-purple-50">
                        <div className="flex flex-col">
                          <span className="text-[#38264a] font-black text-3xl leading-none">{property.price}<span className="text-sm font-medium text-gray-400 mr-2 italic">ر.س</span></span>
                          <span className="text-sm text-gray-400 font-light mt-1">لكل ليلة</span>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-gray-300 line-through text-lg font-light">{property.oldPrice}</span>
                          <button className="text-sm font-bold text-[#38264a] mt-2 group-hover:underline flex items-center gap-1">
                            عرض التفاصيل
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                        </div>
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

export default PropertiesSlider;
