"use client"
import React from 'react';
import { motion } from "framer-motion"
import { Sparkles, Users, Star } from 'lucide-react';
import UnifiedHeading from "@/components/ui/UnifiedHeading";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Sparkles className="w-7 h-7 text-[#c2985a]" />,
      title: "أفضل الأسعار",
      desc: "عروض حصرية وخصومات يومية مدروسة بعناية لتناسب ميزانيتك في أرقى العقارات والمنتجعات",
      offset: "lg:mt-0",
      lineHeight: 80
    },
    {
      icon: <Star className="w-7 h-7 text-[#c2985a]" />,
      title: "تقييمات موثوقة",
      desc: "نظام تقييم حقيقي وشفاف 100% من ضيوف سابقين يضمن لك اختيار الوحدة المثالية بلا مفاجآت",
      offset: "lg:mt-24",
      lineHeight: 140
    },
    {
      icon: <Users className="w-7 h-7 text-[#c2985a]" />,
      title: "دعم 24/7",
      desc: "فريق من الخبراء متاح على مدار الساعة للرد على استفساراتك وحل أي تحديات قد تواجهك بسرعة",
      offset: "lg:mt-0",
      lineHeight: 80
    }
  ];

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative Brand Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-50 rounded-full blur-[120px] opacity-40 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-50 rounded-full blur-[100px] opacity-30 translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-20">
          <UnifiedHeading
            variant="section"
            title="**لماذا تختار منصة Gathern؟**"
            subtitle="نحن نوفر لك أفضل تجربة حجز في المملكة العربية السعودية مع ضمان الجودة والأمان"
            badge="مميزاتنا الحصرية"
            align="center"
          />
        </div>

        {/* Infographic Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20 max-w-6xl mx-auto pt-10">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col items-center group relative text-center">
              {/* Icon Holder */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 260, damping: 20 }}
                className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center shadow-xl shadow-[#38264a]/5 border border-purple-50 group-hover:scale-110 group-hover:border-[#c2985a]/20 transition-all duration-500 z-20"
              >
                <div className="text-[#c2985a]">{feature.icon}</div>
              </motion.div>

              {/* Connector Line (Desktop Only) */}
              <div className="hidden lg:flex flex-col items-center">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: feature.lineHeight }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 1, ease: "easeOut" }}
                  className="w-[2px] border-r-2 border-dashed border-[#c2985a]/20"
                />
                <div className="w-2.5 h-2.5 rounded-full bg-[#c2985a]/30"></div>
              </div>

              {/* Content Box */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 + i * 0.1, duration: 0.8 }}
                className={`relative p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-2xl shadow-gray-200/40 transition-all duration-500 group-hover:shadow-[0_40px_80px_-20px_rgba(56,38,74,0.12)] group-hover:-translate-y-2 ${feature.offset}`}
              >
                <h3 className="text-xl sm:text-2xl font-black text-[#38264a] mb-4 group-hover:text-[#c2985a] transition-colors">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
