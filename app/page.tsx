import React, { Suspense } from 'react';
import HomeClient, { City, Property } from '@/components/home/HomeClient';
import {
  HeroSkeleton,
  CitiesSliderSkeleton,
  PropertiesSliderSkeleton,
  DiscoverSectionSkeleton,
  FeaturesSectionSkeleton
} from '@/components/ui/Skeletons';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const GathernHomepage = (): React.JSX.Element => {
  const heroImages = [
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=80",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&q=80",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1600&q=80"
  ];

  const cities: City[] = [
    { name: 'تبوك', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop', properties: 167 },
    { name: 'جدة', image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=300&h=300&fit=crop', properties: 567 },
    { name: 'العلا', image: 'https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?w=300&h=300&fit=crop', properties: 156 },
    { name: 'أبها', image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=300&h=300&fit=crop', properties: 203 },
    { name: 'الخبر', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=300&h=300&fit=crop', properties: 312 },
    { name: 'حائل', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=300&h=300&fit=crop', properties: 134 },
    { name: 'جدة', image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=300&h=300&fit=crop', properties: 567 },
    { name: 'الدمام', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=300&fit=crop', properties: 278 },
  ];

  const properties: Property[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop',
      rating: 10.0,
      reviews: 417,
      title: 'استديو أنيق بجانب البوليفارد',
      location: 'الرياض، حي العقيق',
      price: 455,
      oldPrice: 650,
      discount: 30,
      guests: 2,
      badge: 'مضيف محترف'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop',
      rating: 10.0,
      reviews: 134,
      title: 'شقة غرفة معيشة وغرفة نوم',
      location: 'الرياض، حي النرجس',
      price: 399,
      oldPrice: 798,
      discount: 50,
      guests: 4,
      badge: 'الأكثر حجزاً'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=600&h=400&fit=crop',
      rating: 10.0,
      reviews: 113,
      title: 'استديو بسرير مريح ودخول ذاتي',
      location: 'الرياض، حي الملقا',
      price: 340,
      oldPrice: 400,
      discount: 15,
      guests: 2,
      badge: 'دخول ذاتي'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop',
      rating: 10.0,
      reviews: 101,
      title: 'استديو أنيق بمعدل خاص',
      location: 'الرياض، حي القادسية',
      price: 314,
      oldPrice: 333,
      discount: 5,
      guests: 3,
      badge: 'جديد'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop',
      rating: 10.0,
      reviews: 94,
      title: 'استديو بسرير ماستر وجلسة',
      location: 'الرياض، حي الملقا',
      price: 424,
      oldPrice: 530,
      discount: 20,
      guests: 2,
      badge: 'مضيف محترف'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop',
      rating: 10.0,
      reviews: 84,
      title: 'استديو هادئ بدخول ذاتي',
      location: 'الرياض، حي الياسمين',
      price: 302,
      oldPrice: 318,
      discount: 4,
      guests: 2,
      badge: 'توصية خاصة'
    }
  ];

  return (
    <Suspense fallback={
      <>
        <HeroSkeleton />
        <CitiesSliderSkeleton />
        <PropertiesSliderSkeleton />
        <DiscoverSectionSkeleton />
        <FeaturesSectionSkeleton />
      </>
    }>
      <HomeClient
        heroImages={heroImages}
        cities={cities}
        properties={properties}
      />
    </Suspense>
  );
};

export default GathernHomepage;