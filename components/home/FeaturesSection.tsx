"use client"
import React from 'react';
import { motion } from "framer-motion"
import { Sparkles, Users, Star } from 'lucide-react';
import UnifiedHeading from "@/components/ui/UnifiedHeading";

const FeaturesSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#fcfaff] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-100 rounded-full blur-[100px] opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-yellow-100 rounded-full blur-[100px] opacity-30 translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center ">
          <UnifiedHeading
            variant="section"
            title="**لماذا تختار منصة Gathern؟**"
            subtitle="نحن نوفر لك أفضل تجربة حجز في المملكة العربية السعودية مع ضمان الجودة والأمان"
            badge="مميزاتنا"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6 sm:pt-8 gap-6 sm:gap-8 lg:gap-10">
            {[
              {
                icon: <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />,
                title: "أفضل الأسعار",
                desc: "عروض حصرية وخصومات يومية مدروسة بعناية لتناسب ميزانيتك في أفضل أرقى العقارات",
                color: "bg-[#38264a]",
                shadow: "shadow-purple-500/20"
              },
              {
                icon: <Star className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />,
                title: "تقييمات موثوقة",
                desc: "نظام تقييم حقيقي وشفاف 100% من ضيوف سابقين يضمن لك اختيار الوحدة المثالية بلا مفاجآت",
                color: "bg-[#4a3359]",
                shadow: "shadow-purple-800/20"
              },
              {
                icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />,
                title: "دعم 24/7",
                desc: "فريق من الخبراء متاح على مدار الساعة للرد على استفساراتك وحل أي تحديات قد تواجهك",
                color: "bg-[#1a1020]",
                shadow: "shadow-black/20"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[2.5rem] lg:rounded-[3rem] border border-gray-50 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 group text-center"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${feature.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-7 lg:mb-8 shadow-2xl ${feature.shadow} group-hover:scale-110 transition-transform mx-auto`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-gray-[#38264a] mb-3 sm:mb-4 group-hover:text-[#38264a] transition-colors">{feature.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm sm:text-base lg:text-lg">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
