"use client"
import React from 'react';
import { Search, ChevronLeft, X } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
} from "@/components/ui/select"
import { cities } from "./constants";

export const CitySelect = () => {
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
                <div className="flex items-center justify-between gap-3 text-[#38264a] text-[15px] font-black w-full">
                    <span>{selectedCity?.label}</span>
                    <div className="p-1 bg-purple-50 rounded-lg group-hover:bg-purple-100 transition-colors">
                        <ChevronLeft className="w-4 h-4 transform -rotate-90 text-[#38264a]/60" />
                    </div>
                </div>
            </SelectTrigger>
            <SelectContent dir="rtl" className="p-2 bg-white">
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
