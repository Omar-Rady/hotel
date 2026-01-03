"use client"
import React from 'react';
import { motion } from "framer-motion"
import { Search, ChevronLeft } from 'lucide-react';
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CitySelect } from "./CitySelect";
import { UnitTypeSelect } from "./UnitTypeSelect";
import { DateRange } from "react-day-picker";

interface DesktopSearchFormProps {
    date: DateRange | undefined;
    setDate: (date: DateRange | undefined) => void;
}

export const DesktopSearchForm = ({ date, setDate }: DesktopSearchFormProps) => {
    return (
        <div className="hidden md:flex bg-white/95 backdrop-blur-2xl rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] items-center p-3 h-[100px] w-full border border-white/50">
            {/* City Selection */}
            <div className="flex-1 border-l border-gray-100 last:border-0 h-full flex flex-col justify-center">
                <CitySelect />
            </div>

            {/* Unit Type Selection */}
            <div className="flex-1 border-l border-gray-100 last:border-0 h-full flex flex-col justify-center">
                <UnitTypeSelect />
            </div>

            {/* Booking Dates */}
            <Popover>
                <PopoverTrigger asChild>
                    <div className="flex-[1.8] flex h-full">
                        {/* Check-in */}
                        <div className="flex-1 px-4 lg:px-8 text-right border-l border-gray-100 group cursor-pointer hover:bg-gray-50/80 h-full flex flex-col justify-center transition-all duration-300">
                            <label className="text-gray-400 text-xs font-black mb-1 block uppercase tracking-widest opacity-60">
                                تاريخ الحجز
                            </label>
                            <div className="flex items-center justify-between gap-2 text-[#38264a] text-sm lg:text-[15px] font-black">
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
                            <div className="flex items-center justify-between gap-2 text-[#38264a] text-sm lg:text-[15px] font-black">
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
    );
};
