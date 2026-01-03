import { SearchOption } from "./types";

export const cities: SearchOption[] = [
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

export const unitTypes: SearchOption[] = [
    { value: "all", label: "شقق، استوديو، غرف، فلل" },
    { value: "apartment", label: "شقق" },
    { value: "studio", label: "استوديو" },
    { value: "room", label: "غرف" },
    { value: "villa", label: "فلل" },
    { value: "chalet", label: "شاليهات" },
    { value: "penthouse", label: "بنتهاوس" },
    { value: "duplex", label: "دوبلكس" },
];
