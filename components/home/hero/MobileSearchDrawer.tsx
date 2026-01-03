"use client"
import React from 'react';
import { motion, AnimatePresence } from "framer-motion"
import { Search, X, ChevronLeft } from 'lucide-react';
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CitySelect } from "./CitySelect";
import { UnitTypeSelect } from "./UnitTypeSelect";
import { DateRange } from "react-day-picker";

interface MobileSearchDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    date: DateRange | undefined;
    setDate: (date: DateRange | undefined) => void;
}

export const MobileSearchDrawer = ({ isOpen, onClose, date, setDate }: MobileSearchDrawerProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200] md:hidden"
                    />

                    {/* Drawer - Bottom Sheet */}
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[2rem] z-[250] max-h-[85vh] overflow-hidden md:hidden shadow-2xl"
                    >
                        {/* Drag Handle */}
                        <div className="w-full flex justify-center pt-3 pb-2">
                            <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
                        </div>

                        {/* Header */}
                        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between">
                            <button
                                onClick={onClose}
                                className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-600" />
                            </button>
                            <h3 className="text-[#38264a] font-bold text-base">خيارات البحث</h3>
                            <div className="w-9" />
                        </div>

                        {/* Content - Scrollable */}
                        <div className="overflow-y-auto max-h-[calc(85vh-80px)] p-6 space-y-5">
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
                                onClick={onClose}
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
    );
};
