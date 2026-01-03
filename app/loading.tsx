import {
    HeroSkeleton,
    CitiesSliderSkeleton,
    PropertiesSliderSkeleton,
    DiscoverSectionSkeleton,
    FeaturesSectionSkeleton
} from '@/components/ui/Skeletons';

export default function Loading() {
    return (
        <>
            <HeroSkeleton />
            <CitiesSliderSkeleton />
            <PropertiesSliderSkeleton />
            <DiscoverSectionSkeleton />
            <FeaturesSectionSkeleton />
        </>
    );
}
