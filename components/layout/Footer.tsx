"use client"
import React from 'react';
import { Sparkles, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-10">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Unified Grid Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 sm:gap-x-8 lg:gap-12 mb-10 sm:mb-12 lg:mb-16">

          {/* 1. Brand Section - Full Width on Mobile (col-span-2) */}
          <div className="col-span-2 lg:col-span-1 flex flex-col items-start text-right">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#38264a] rounded-[1rem] sm:rounded-[1.25rem] flex items-center justify-center shadow-lg transform -rotate-6">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-[#38264a] tracking-tighter">Gathern</span>
            </div>
            <div className="space-y-2 sm:space-y-3 text-gray-400 font-light text-sm sm:text-base">
              <div className="flex items-center gap-2 justify-start">
                <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
                مرخصة من وزارة السياحة
              </div>
              <div className="text-xs sm:text-sm bg-gray-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-gray-500 font-medium inline-block">ترخيص رقم: 73102999</div>
            </div>
          </div>

          {/* 2. Units Links - 1 column on Mobile */}
          <div className="col-span-1 lg:col-span-1 text-right">
            <h4 className="text-sm sm:text-base lg:text-lg font-black mb-4 sm:mb-6 text-gray-[#38264a] relative inline-block">
              استكشف الوحدات
              <div className="absolute -bottom-2 right-0 w-8 h-1 bg-[#38264a] rounded-full"></div>
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 font-light text-sm sm:text-base">
              {['شقق وفلل', 'شاليهات ومنتجعات', 'مزارع واستراحات', 'مخيمات برية', 'شقق محدودة'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-[#38264a] hover:mr-2 transition-all duration-300 flex items-center justify-start gap-2">
                    <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Quick Links - 1 column on Mobile */}
          <div className="col-span-1 lg:col-span-1 text-right">
            <h4 className="text-sm sm:text-base lg:text-lg font-black mb-4 sm:mb-6 text-gray-[#38264a] relative inline-block">
              روابط سريعة
              <div className="absolute -bottom-2 right-0 w-8 h-1 bg-[#38264a] rounded-full"></div>
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 font-light text-sm sm:text-base">
              {['عن المنصة', 'الأسئلة المتكررة', 'المدونة', 'بوابة المضيفين', 'اتصل بنا'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-[#38264a] hover:mr-2 transition-all duration-300 flex items-center justify-start gap-2">
                    <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Social & Apps Section - Full Width on Mobile (col-span-2) */}
          <div className="col-span-2 lg:col-span-1 flex flex-col items-start text-right">
            <h4 className="text-sm sm:text-base lg:text-lg font-black mb-4 sm:mb-6 text-gray-[#38264a] relative inline-block">
              تابعنا
              <div className="absolute -bottom-2 right-0 w-8 h-1 bg-[#38264a] rounded-full"></div>
            </h4>
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
              {[
                { icon: <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>, color: 'bg-black' },
                { icon: <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>, color: 'bg-gradient-to-br from-[#38264a] to-pink-600' },
                { icon: <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>, color: 'bg-black' },
                { icon: <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0014.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" /></svg>, color: 'bg-blue-600' }
              ].map((social, idx) => (
                <div key={idx} className={`w-9 h-9 sm:w-10 sm:h-10 ${social.color} rounded-xl flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform shadow-md`}>
                  {social.icon}
                </div>
              ))}
            </div>

            <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 font-light">حمل التطبيق الآن</p>
            <div className="flex   gap-2 sm:gap-3 mt-2 w-full">
              <div className="flex-1 w-fit bg-black text-white px-3 sm:px-4 py-2 rounded-xl flex items-center gap-2 cursor-pointer hover:bg-gray-900 transition shadow-lg justify-start">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
                <div className="flex flex-col items-start">
                  <span className="text-[9px] sm:text-[10px] opacity-80">حمله من</span>
                  <span className="text-xs sm:text-sm font-bold">App Store</span>
                </div>
              </div>
              <div className="flex-1  w-fit  bg-black text-white px-3 sm:px-4 py-2 rounded-xl flex items-center gap-2 cursor-pointer hover:bg-gray-900 transition shadow-lg justify-start">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" /></svg>
                <div className="flex flex-col items-start">
                  <span className="text-[9px] sm:text-[10px] opacity-80">حمله من</span>
                  <span className="text-xs sm:text-sm font-bold">Google Play</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-100 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
          <p className="font-light">© 2024 Gathern. جميع الحقوق محفوظة</p>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
            <a href="#" className="hover:text-[#38264a] transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-[#38264a] transition-colors">الشروط والأحكام</a>
            <a href="#" className="hover:text-[#38264a] transition-colors">سياسة الاسترجاع</a>
          </div>
          <div className="flex gap-3 sm:gap-4">
            <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2 text-gray-600 font-medium">
              <Globe className="w-4 h-4" />
              <span>العربية</span>
            </button>
            <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#38264a] text-white rounded-lg hover:bg-[#4a3359] transition-colors font-medium">
              بوابة المضيفين
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
