import React from 'react';

export const HeroSkeleton = () => {
    return (
        <div className="relative h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] w-full bg-gray-200 animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-200"></div>

            <div className="container mx-auto px-4 sm:px-6 h-full relative z-20 flex flex-col justify-center">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full mb-8 sm:mb-12 gap-4">
                    {/* Title skeleton */}
                    <div className="space-y-3">
                        <div className="h-12 sm:h-16 w-48 sm:w-64 bg-white/30 rounded-2xl"></div>
                        <div className="h-6 sm:h-8 w-64 sm:w-80 bg-white/20 rounded-xl"></div>
                    </div>
                    {/* Badge skeleton */}
                    <div className="h-10 w-40 bg-white/20 rounded-xl"></div>
                </div>

                {/* Search box skeleton - Mobile */}
                <div className="md:hidden absolute bottom-[-120px] sm:bottom-[-80px] left-1/2 -translate-x-1/2 w-full px-4">
                    <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl p-4 space-y-3">
                        <div className="bg-gray-100 rounded-2xl p-4 h-20 animate-pulse"></div>
                        <div className="bg-gray-100 rounded-2xl p-4 h-20 animate-pulse"></div>
                        <div className="bg-gray-100 rounded-2xl p-4 h-20 animate-pulse"></div>
                        <div className="bg-gray-200 rounded-2xl h-14 animate-pulse"></div>
                    </div>
                </div>

                {/* Search box skeleton - Desktop */}
                <div className="hidden md:block absolute bottom-[-45px] left-1/2 -translate-x-1/2 w-full px-4">
                    <div className="bg-white/95 backdrop-blur-2xl rounded-[3rem] shadow-2xl h-[100px] animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

export const CitiesSliderSkeleton = () => {
    return (
        <section className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-14 lg:pb-16">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-10 lg:mb-12 gap-4">
                {/* Heading skeleton */}
                <div className="space-y-3">
                    <div className="h-10 w-64 bg-gray-200 rounded-xl animate-pulse"></div>
                    <div className="h-6 w-96 bg-gray-100 rounded-lg animate-pulse"></div>
                </div>
                {/* Navigation buttons skeleton */}
                <div className="flex gap-2 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-xl animate-pulse"></div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-xl animate-pulse"></div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="animate-pulse">
                        <div className="relative w-full aspect-square bg-gray-200 rounded-2xl sm:rounded-[2rem] mb-4 sm:mb-5"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export const PropertiesSliderSkeleton = () => {
    return (
        <section className="bg-[#fcfaff] py-16 sm:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-10 lg:mb-12 gap-4 sm:gap-6">
                    {/* Heading skeleton */}
                    <div className="space-y-3">
                        <div className="h-10 w-72 bg-gray-200 rounded-xl animate-pulse"></div>
                        <div className="h-6 w-96 bg-gray-100 rounded-lg animate-pulse"></div>
                    </div>
                    {/* Navigation buttons skeleton */}
                    <div className="flex gap-2 sm:gap-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-xl animate-pulse"></div>
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-xl animate-pulse"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="bg-white rounded-2xl sm:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-xl animate-pulse">
                            <div className="h-52 sm:h-60 lg:h-64 bg-gray-200"></div>
                            <div className="p-5 sm:p-6 lg:p-7 space-y-4">
                                <div className="h-6 w-24 bg-gray-200 rounded-lg"></div>
                                <div className="h-8 w-full bg-gray-200 rounded-lg"></div>
                                <div className="h-5 w-3/4 bg-gray-100 rounded-lg"></div>
                                <div className="flex justify-between items-center pt-4">
                                    <div className="h-10 w-24 bg-gray-200 rounded-lg"></div>
                                    <div className="h-8 w-32 bg-gray-200 rounded-lg"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const DiscoverSectionSkeleton = () => {
    return (
        <section className="bg-white pt-16 sm:pt-20 lg:pt-24">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-10 lg:mb-12 gap-4">
                    {/* Heading skeleton */}
                    <div className="space-y-3">
                        <div className="h-10 w-56 bg-gray-200 rounded-xl animate-pulse"></div>
                        <div className="h-6 w-80 bg-gray-100 rounded-lg animate-pulse"></div>
                    </div>
                    {/* Navigation buttons skeleton */}
                    <div className="flex gap-2 sm:gap-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-xl animate-pulse"></div>
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-xl animate-pulse"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pb-10 sm:pb-12">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="bg-white rounded-2xl sm:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-lg border border-gray-50 animate-pulse">
                            <div className="h-52 sm:h-60 lg:h-64 bg-gray-200"></div>
                            <div className="p-5 sm:p-6 lg:p-7 space-y-4">
                                <div className="flex justify-between">
                                    <div className="h-6 w-32 bg-gray-200 rounded-lg"></div>
                                    <div className="h-6 w-16 bg-gray-200 rounded-lg"></div>
                                </div>
                                <div className="h-8 w-full bg-gray-200 rounded-lg"></div>
                                <div className="h-5 w-2/3 bg-gray-100 rounded-lg"></div>
                                <div className="flex justify-between items-center pt-4">
                                    <div className="h-8 w-28 bg-gray-200 rounded-lg"></div>
                                    <div className="h-10 w-28 bg-gray-200 rounded-xl"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const FeaturesSectionSkeleton = () => {
    return (
        <section className="bg-gradient-to-b from-white to-[#fcfaff] py-16 sm:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center ">
                    {/* Heading skeleton */}
                    <div className="flex flex-col items-center space-y-4 mb-8">
                        <div className="h-12 w-96 bg-gray-200 rounded-xl animate-pulse"></div>
                        <div className="h-6 w-[600px] bg-gray-100 rounded-lg animate-pulse"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[2.5rem] lg:rounded-[3rem] shadow-xl animate-pulse">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-200 rounded-xl sm:rounded-2xl mb-6 sm:mb-7 lg:mb-8 mx-auto"></div>
                                <div className="h-8 w-48 bg-gray-200 rounded-lg mb-4 mx-auto"></div>
                                <div className="space-y-2">
                                    <div className="h-4 w-full bg-gray-100 rounded"></div>
                                    <div className="h-4 w-full bg-gray-100 rounded"></div>
                                    <div className="h-4 w-3/4 bg-gray-100 rounded mx-auto"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
