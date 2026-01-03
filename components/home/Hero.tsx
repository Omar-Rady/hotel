"use client"
import React from 'react';
import { motion, AnimatePresence } from "framer-motion"
import { Search, ChevronLeft, Sparkles, X, SlidersHorizontal } from 'lucide-react';
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import { DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import UnifiedHeading from "@/components/ui/UnifiedHeading";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface HeroProps {
  currentHeroImage: number;
  heroImages: string[];
  date: DateRange | undefined;
  setDate: (date: DateRange | undefined) => void;
}

// Cities data for searchable select
const cities = [
  { value: "الرياض", label: "الرياض" },
  { value: "جدة", label: "جدة" },
  { value: "مكة", label: "مكة" },
  { value: "الدمام", label: "الدمام" },
  { value: "الطائف", label: "الطائف" },
  { value: "تبوك", label: "تبوك" },
  { value: "أبها", label: "أبها" },
  { value: "حائل", label: "حائل" },
  { value: "بريدة", label: "بريدة" },
  { value: "ينبع", label: "ينبع" },
];

// Unit types data for searchable select
const unitTypes = [
  { value: "all", label: "شقق، استوديو، غرف، فلل" },
  { value: "apartment", label: "شقق" },
  { value: "studio", label: "استوديو" },
  { value: "room", label: "غرف" },
  { value: "villa", label: "فلل" },
  { value: "chalet", label: "شاليهات" },
  { value: "penthouse", label: "بنتهاوس" },
  { value: "duplex", label: "دوبلكس" },
];

// Custom searchable select component for cities
const CitySelect = () => {
  const [search, setSearch] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("الرياض");

  const filteredCities = cities.filter(city =>
    city.label.includes(search) || city.value.includes(search)
  );

  const selectedCity = cities.find(city => city.value === selectedValue);

  return (
    <Select open={open} onOpenChange={setOpen} value={selectedValue} onValueChange={setSelectedValue} dir='rtl'>
      <SelectTrigger className="w-full h-full border-0 bg-transparent focus:ring-0 focus:ring-offset-0 px-0 md:px-8 text-right flex-col items-end [&>svg]:hidden group">
        <span className="text-gray-400 text-xs font-black mb-1 block uppercase tracking-widest opacity-60 w-full text-right">
          أختر المدينة
        </span>
        <div className="flex items-center justify-between gap-3 text-[#38264a] text-lg font-black w-full">
          <span>{selectedCity?.label}</span>
          <div className="p-1 bg-purple-50 rounded-lg group-hover:bg-purple-100 transition-colors">
            <ChevronLeft className="w-4 h-4 transform -rotate-90 text-[#38264a]/60" />
          </div>
        </div>
      </SelectTrigger>
      <SelectContent dir="rtl" className="p-2 bg-white">
        {/* Search input */}
        <div className="relative mb-2">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="ابحث عن مدينة..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pr-9 pl-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#38264a] focus:border-transparent bg-white text-right"
            dir="rtl"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
            >
              <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
            </button>
          )}
        </div>

        {/* Results */}
        <div className="max-h-[200px] overflow-y-auto">
          {filteredCities.length > 0 ? (
            filteredCities.map((city) => (
              <SelectItem
                key={city.value}
                value={city.value}
                className="text-right cursor-pointer hover:bg-gray-100 rounded px-3 py-2 text-sm"
              >
                {city.label}
              </SelectItem>
            ))
          ) : (
            <div className="text-center py-3 text-gray-500 text-sm">
              لا توجد نتائج
            </div>
          )}
        </div>
      </SelectContent>
    </Select>
  );
};

// Custom searchable select component for unit types
const UnitTypeSelect = () => {
  const [search, setSearch] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("all");

  const filteredUnits = unitTypes.filter(unit =>
    unit.label.includes(search) || unit.value.includes(search)
  );

  const selectedUnit = unitTypes.find(unit => unit.value === selectedValue);

  return (
    <Select open={open} onOpenChange={setOpen} value={selectedValue} onValueChange={setSelectedValue} dir='rtl'>
      <SelectTrigger className="w-full h-full border-0 bg-transparent focus:ring-0 focus:ring-offset-0 px-0 md:px-8 text-right flex-col items-end [&>svg]:hidden group">
        <span className="text-gray-400 text-xs font-black mb-1 block uppercase tracking-widest opacity-60 w-full text-right">
          نوع الوحدة
        </span>
        <div className="flex items-center justify-between gap-3 text-[#38264a] text-lg font-black w-full">
          <span>{selectedUnit?.label}</span>
          <div className="p-1 bg-purple-50 rounded-lg group-hover:bg-purple-100 transition-colors">
            <ChevronLeft className="w-4 h-4 transform -rotate-90 text-[#38264a]/60" />
          </div>
        </div>
      </SelectTrigger>
      <SelectContent dir="rtl" className="p-2 bg-white">
        {/* Search input */}
        <div className="relative mb-2">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="ابحث عن نوع وحدة..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pr-9 pl-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#38264a] focus:border-transparent bg-white text-right"
            dir="rtl"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
            >
              <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
            </button>
          )}
        </div>

        {/* Results */}
        <div className="max-h-[200px] overflow-y-auto">
          {filteredUnits.length > 0 ? (
            filteredUnits.map((unit) => (
              <SelectItem
                key={unit.value}
                value={unit.value}
                className="text-right cursor-pointer hover:bg-gray-100 rounded px-3 py-2 text-sm"
              >
                {unit.label}
              </SelectItem>
            ))
          ) : (
            <div className="text-center py-3 text-gray-500 text-sm">
              لا توجد نتائج
            </div>
          )}
        </div>
      </SelectContent>
    </Select>
  );
};

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
    <div className="relative h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] w-full">
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
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full mb-8 sm:mb-12 gap-4">
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

        {/* Responsive Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative w-full px-4 -mb-[120px] sm:-mb-[80px] md:-mb-[45px]"
        >
          {/* Mobile Layout - Simple Search Bar */}
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

          {/* Mobile Filter Drawer */}
          <AnimatePresence>
            {isMobileFilterOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] md:hidden"
                />

                {/* Drawer - Bottom Sheet */}
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ type: "spring", damping: 30, stiffness: 300 }}
                  className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[2rem] z-[200] max-h-[70vh] overflow-hidden md:hidden shadow-2xl"
                >
                  {/* Drag Handle */}
                  <div className="w-full flex justify-center pt-3 pb-2">
                    <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
                  </div>

                  {/* Header */}
                  <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between">
                    <button
                      onClick={() => setIsMobileFilterOpen(false)}
                      className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      <X className="w-5 h-5 text-gray-600" />
                    </button>
                    <h3 className="text-[#38264a] font-bold text-base">خيارات البحث</h3>
                    <div className="w-9" /> {/* Spacer */}
                  </div>

                  {/* Content - Scrollable */}
                  <div className="overflow-y-auto max-h-[calc(70vh-80px)] p-6 space-y-5">
                    {/* City Selection */}
                    <div>
                      <label className="text-[#38264a] font-bold text-sm mb-2 block">المدينة</label>
                      <div className="bg-gray-50 rounded-xl p-3">
                        <CitySelect />
                      </div>
                    </div>

                    {/* Unit Type Selection */}
                    <div>
                      <label className="text-[#38264a] font-bold text-sm mb-2 block">نوع الوحدة</label>
                      <div className="bg-gray-50 rounded-xl p-3">
                        <UnitTypeSelect />
                      </div>
                    </div>

                    {/* Dates */}
                    <div>
                      <label className="text-[#38264a] font-bold text-sm mb-2 block">تواريخ الحجز</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <div className="bg-gray-50 rounded-xl p-4 cursor-pointer hover:bg-gray-100 transition-colors">
                            <div className="flex items-center justify-between gap-2 text-[#38264a] font-bold text-sm">
                              <span className="truncate">
                                {date?.from && date?.to
                                  ? `${format(date.from, "d MMM", { locale: ar })} - ${format(date.to, "d MMM", { locale: ar })}`
                                  : "اختر التواريخ"}
                              </span>
                              <ChevronLeft className="w-5 h-5 transform -rotate-90 text-[#38264a]/60 flex-shrink-0" />
                            </div>
                          </div>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 border-none bg-transparent shadow-none" align="center" sideOffset={10}>
                          <div className="bg-white/95 backdrop-blur-2xl p-2 rounded-2xl shadow-2xl border border-white/50">
                            <Calendar
                              initialFocus
                              mode="range"
                              defaultMonth={date?.from}
                              selected={date}
                              onSelect={setDate}
                              numberOfMonths={1}
                              locale={ar}
                            />
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>

                    {/* Search Button */}
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsMobileFilterOpen(false)}
                      className="w-full bg-gradient-to-br from-[#38264a] to-[#090112] rounded-xl py-3.5 flex items-center justify-center gap-2 text-white shadow-lg shadow-purple-900/20 font-bold text-base mt-4"
                    >
                      <Search className="w-5 h-5" />
                      <span>ابحث الآن</span>
                    </motion.button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Desktop Layout (Horizontal) */}
          <div className="hidden md:flex bg-white/95 backdrop-blur-2xl rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] items-center p-3 h-[100px] w-full border border-white/50">
            {/* City Selection with Search */}
            <div className="flex-1 border-l border-gray-100 last:border-0 h-full flex flex-col justify-center">
              <CitySelect />
            </div>

            {/* Unit Type Selection with Search */}
            <div className="flex-1 border-l border-gray-100 last:border-0 h-full flex flex-col justify-center">
              <UnitTypeSelect />
            </div>

            {/* Booking Dates Split */}
            <Popover>
              <PopoverTrigger asChild>
                <div className="flex-[1.8] flex h-full">
                  {/* Check-in */}
                  <div className="flex-1 px-4 lg:px-8 text-right border-l border-gray-100 group cursor-pointer hover:bg-gray-50/80 h-full flex flex-col justify-center transition-all duration-300">
                    <label className="text-gray-400 text-xs font-black mb-1 block uppercase tracking-widest opacity-60">
                      تاريخ الحجز
                    </label>
                    <div className="flex items-center justify-between gap-2 text-[#38264a] text-base lg:text-lg font-black">
                      <span className="truncate">{date?.from ? format(date.from, "eeee، d MMMM", { locale: ar }) : "تاريخ الحجز"}</span>
                      <div className="p-1 bg-purple-50 rounded-lg group-hover:bg-purple-100 transition-colors flex-shrink-0">
                        <ChevronLeft className="w-4 h-4 transform -rotate-90 text-[#38264a]/60" />
                      </div>
                    </div>
                  </div>

                  {/* Check-out */}
                  <div className="flex-1 px-4 lg:px-8 text-right group cursor-pointer hover:bg-gray-50/80 h-full flex flex-col justify-center transition-all duration-300">
                    <label className="text-gray-400 text-xs font-black mb-1 block uppercase tracking-widest opacity-60">
                      تاريخ المغادرة
                    </label>
                    <div className="flex items-center justify-between gap-2 text-[#38264a] text-base lg:text-lg font-black">
                      <span className="truncate">{date?.to ? format(date.to, "eeee، d MMMM", { locale: ar }) : "تاريخ المغادرة"}</span>
                      <div className="p-1 bg-purple-50 rounded-lg group-hover:bg-purple-100 transition-colors flex-shrink-0">
                        <ChevronLeft className="w-4 h-4 transform -rotate-90 text-[#38264a]/60" />
                      </div>
                    </div>
                  </div>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 border-none bg-transparent shadow-none" align="center" sideOffset={20}>
                <div className="bg-white/80 backdrop-blur-2xl p-2 rounded-[3rem] shadow-2xl border border-white/50">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={2}
                    locale={ar}
                  />
                </div>
              </PopoverContent>
            </Popover>

            {/* Search Button */}
            <div className="pr-4 lg:pr-6 pl-3">
              <motion.button
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#38264a] to-[#090112] rounded-[1.5rem] flex items-center justify-center text-white shadow-2xl shadow-purple-900/30 group hover:shadow-purple-900/40 transition-all duration-500"
              >
                <Search className="w-6 h-6 lg:w-7 lg:h-7 group-hover:scale-110 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;