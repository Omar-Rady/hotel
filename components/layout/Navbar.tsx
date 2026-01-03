"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import { Globe, Users, Menu, X, } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-500 ease-in-out ${isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_2px_20px_-10px_rgba(0,0,0,0.1)] py-2'
          : 'bg-gradient-to-b from-[#090112] via-[#38264aad] to-transparent py-3 sm:py-4'
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 sm:gap-3 cursor-pointer group"
              >
                <span className={`text-xl sm:text-2xl font-black transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Gathern</span>
              </motion.div>

              <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                {['شاليهات واستراحات', 'مزارع', 'مخيمات', 'شقق وفلل'].map((item, idx) => (
                  <motion.a
                    key={idx}
                    href="#"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    className={`text-sm font-bold transition-all duration-300 hover:scale-105 ${isScrolled ? 'text-gray-600 hover:text-[#38264a]' : 'text-white/80 hover:text-white'
                      }`}
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`hidden md:block px-4 lg:px-6 py-2 lg:py-2.5 rounded-xl lg:rounded-2xl text-xs lg:text-sm font-black border transition-all duration-300 ${isScrolled
                  ? 'border-[#38264a] text-[#38264a] hover:bg-[#38264a] hover:text-white shadow-sm'
                  : 'border-white/30 text-white bg-white/10 backdrop-blur-md hover:bg-white hover:text-gray-900'
                  }`}
              >
                بوابة المضيفين
              </motion.button>

              <div className="hidden sm:flex items-center gap-2">

                <button
                  className={`flex items-center gap-2 lg:gap-3 p-1.5 pr-3 lg:pr-4 rounded-xl lg:rounded-2xl shadow-sm border transition-all duration-300 ${isScrolled
                    ? 'bg-white border-gray-100 text-gray-[#38264a] hover:shadow-md'
                    : 'bg-white/10 border-white/20 text-white backdrop-blur-md hover:bg-white/20'
                    }`}
                >
                  <span className="text-xs lg:text-sm font-bold">حسابي</span>
                  <div className={`w-7 h-7 lg:w-8 lg:h-8 rounded-lg lg:rounded-xl flex items-center justify-center ${isScrolled ? 'bg-gray-50' : 'bg-white/20'}`}>
                    <Users className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                  </div>
                </button>

                {mounted && (
                  <button className={`p-2 flex items-center gap-2 lg:p-2.5 rounded-xl lg:rounded-2xl transition-all duration-300 ${isScrolled ? 'hover:bg-gray-100 text-gray-700' : 'hover:bg-white/10 text-white'}`}>
                    <Globe className="w-4 h-4 lg:w-5 lg:h-5" />
                    <span className="text-xs lg:text-sm font-bold">AR</span>
                  </button>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                  }`}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-[95] lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-black text-gray-900">Gathern</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-600" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto p-6">
                  <div className="space-y-2">
                    {['شاليهات واستراحات', 'مزارع', 'مخيمات', 'شقق وفلل'].map((item, idx) => (
                      <motion.a
                        key={idx}
                        href="#"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-3 text-right text-gray-700 hover:bg-purple-50 hover:text-[#38264a] rounded-xl font-bold transition-all"
                      >
                        {item}
                      </motion.a>
                    ))}
                  </div>

                  {/* Mobile-only sections */}
                  <div className="mt-8 pt-8 border-t border-gray-100 space-y-3">
                    <button className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
                      <span className="font-bold text-gray-700">حسابي</span>
                      <Users className="w-5 h-5 text-gray-500" />
                    </button>
                    <button className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
                      <span className="font-bold text-gray-700">تغيير اللغة</span>
                      <Globe className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>
                </nav>

                {/* Footer CTA */}
                <div className="p-6 border-t border-gray-100">
                  <button className="w-full bg-gradient-to-br from-[#38264a] to-[#090112] text-white py-4 rounded-2xl font-black shadow-lg shadow-purple-900/20 hover:shadow-purple-900/30 transition-all">
                    بوابة المضيفين
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
