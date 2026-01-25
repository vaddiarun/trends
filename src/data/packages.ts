import menHaircut from '../assets/images/men_haircut.png';
import menFacial from '../assets/images/men_facial.png';
import menBeard from '../assets/images/men_beard.png';
import menPedicure from '../assets/images/men_pedicure.png';
import menColor from '../assets/images/men_color.png';

import womenHair from '../assets/images/women_hair.png';
import womenFacial from '../assets/images/women_facial.png';
import womenWaxing from '../assets/images/women_waxing.png';
import womenPedicure from '../assets/images/women_pedicure.png';
import womenColor from '../assets/images/women_color.png';
import womenThreading from '../assets/images/women_threading.png';

export interface PackageData {
    services: string[];
    total: number;
    offer: number;
    image: string;
    category: 'hair' | 'facial' | 'spa' | 'waxing';
}

export const MEN_PACKAGES: PackageData[] = [
    {
        services: ["Hair Cut", "Beard", "D-Tan"],
        total: 720,
        offer: 599,
        image: menBeard,
        category: 'hair'
    },
    {
        services: ["Hair Cut", "Beard", "Hair Spa"],
        total: 820,
        offer: 699,
        image: menHaircut,
        category: 'hair'
    },
    {
        services: ["Hair Wash", "Hair Cut", "Beard", "Manicure", "Pedicure"],
        total: 1270,
        offer: 999,
        image: menPedicure,
        category: 'spa'
    },
    {
        services: ["Hair Cut", "Beard", "Hair Spa", "D-Tan", "Head Massage"],
        total: 1620,
        offer: 1199,
        image: menHaircut,
        category: 'spa'
    },
    {
        services: ["Hair Wash", "Hair Cut", "Beard", "Hair Color", "Beard Color"],
        total: 870,
        offer: 750,
        image: menColor,
        category: 'hair'
    },
    {
        services: ["Hair Wash", "Hair Cut", "Beard", "Head Massage", "D-Tan Clean Up", "Peel Off Mask"],
        total: 1770,
        offer: 1499,
        image: menFacial,
        category: 'facial'
    },
    {
        services: ["Hair Wash", "Hair Cut", "Beard", "Hair Color (L’Oreal)", "D-Tan", "Head Massage"],
        total: 1970,
        offer: 1499,
        image: menColor,
        category: 'hair'
    },
    {
        services: ["Hair Wash", "Hair Cut", "Beard", "Nose Wax", "D-Tan"],
        total: 820,
        offer: 699,
        image: menBeard,
        category: 'facial'
    },
    {
        services: ["Hair Wash", "Hair Cut", "Beard", "D-Tan", "Fruit Facial"],
        total: 1570,
        offer: 1299,
        image: menFacial,
        category: 'facial'
    }
];

export const WOMEN_PACKAGES: PackageData[] = [
    {
        services: ["Upper Lips / Threading", "Basic Cleanup", "Full Arms Wax (Normal)", "Basic Pedicure"],
        total: 1370,
        offer: 999,
        image: womenWaxing,
        category: 'waxing'
    },
    {
        services: ["Hair Wash", "Advance Hair Cut", "D-Tan", "Threading"],
        total: 1550,
        offer: 1299,
        image: womenHair,
        category: 'hair'
    },
    {
        services: ["Threading", "Upper Lips", "Pedicure", "D-Tan", "Basic Facial"],
        total: 1920,
        offer: 1499,
        image: womenThreading,
        category: 'facial'
    },
    {
        services: ["Threading", "Bleach", "Gold Facial", "Full Hand Wax", "Half Leg Wax"],
        total: 2050,
        offer: 1599,
        image: womenFacial,
        category: 'waxing'
    },
    {
        services: ["Head Massage", "D-Tan", "Full Arms Wax (Rica)", "Clean Up", "Basic Pedicure"],
        total: 2500,
        offer: 1999,
        image: womenPedicure,
        category: 'spa'
    },
    {
        services: ["Face & Neck Bleach", "D-Tan Facial", "Full Arms Wax (Rica)", "Full Leg Wax (Rica)"],
        total: 2750,
        offer: 2199,
        image: womenWaxing,
        category: 'waxing'
    },
    {
        services: ["Root Touchup", "Spa Pedicure", "Haircut", "Threading", "Full Arms Wax"],
        total: 2850,
        offer: 2199,
        image: womenColor,
        category: 'hair'
    },
    {
        services: ["Threading", "One Length Haircut", "Basic Hair Spa", "Basic Pedicure", "Clean Up", "Head Massage"],
        total: 2700,
        offer: 1999,
        image: womenHair,
        category: 'spa'
    },
    {
        services: ["Threading", "D-Tan Clean Up", "Back Massage", "Full Arms Wax"],
        total: 1750,
        offer: 1399,
        image: womenWaxing,
        category: 'spa'
    }
];
