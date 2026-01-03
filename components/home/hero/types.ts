import { DateRange } from "react-day-picker";

export interface HeroProps {
    currentHeroImage: number;
    heroImages: string[];
    date: DateRange | undefined;
    setDate: (date: DateRange | undefined) => void;
}

export interface SearchOption {
    value: string;
    label: string;
}
