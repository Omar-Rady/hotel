"use client"
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import CitiesSlider from '@/components/home/CitiesSlider';
import PropertiesSlider from '@/components/home/PropertiesSlider';
import DiscoverSection from '@/components/home/DiscoverSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import Footer from '@/components/layout/Footer';
import { DateRange } from "react-day-picker";

export interface City {
  name: string;
  image: string;
  properties: number;
  highlighted?: boolean;
}

export interface Property {
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

interface HomeClientProps {
  heroImages: string[];
  cities: City[];
  properties: Property[];
}

const HomeClient = ({ heroImages, cities, properties }: HomeClientProps) => {
  const [selectedCity, setSelectedCity] = useState<string>('الرياض');
  const [currentHeroImage, setCurrentHeroImage] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 1)),
  });

  const handleDateSelect = (newRange: DateRange | undefined) => {
    if (date?.from && date?.to && newRange?.from && !newRange.to) {
      // If we had a complete range and user selects a single new date,
      // explicitly reset to only that date to ensure a fresh start.
      setDate({ from: newRange.from, to: undefined });
    } else {
      setDate(newRange);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#38264a] selection:text-white" dir="rtl">
      <Navbar isScrolled={isScrolled} />
      <Hero
        currentHeroImage={currentHeroImage}
        heroImages={heroImages}
        date={date}
        setDate={handleDateSelect}
      />
      <CitiesSlider cities={cities} setSelectedCity={setSelectedCity} />
      <PropertiesSlider properties={properties} />
      <DiscoverSection properties={properties} />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default HomeClient;
