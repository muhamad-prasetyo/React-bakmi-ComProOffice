export interface Outlet {
    id: number;
    price: number;
    duration: number;
    name: string;
    slug: string;
    description: string;
    city: string;
    thumbnail: string;
    photos: string[];
    benefits: string[];
    about: string;
    
}

interface Photo {
    id: number;
    photo: string;
}

interface Benefit {
    id: number;
    benefit: string;
}

export interface City {
    id: string | number;
    name: string;
    slug: string;
    province: string;
    image: string;
    outlets: any[];
    outletSpace_count?: number;
    isRecommended?: boolean;
    isPopular?: boolean;
}

export interface BookingDetails {
    id: number;
    name: string;
    phone_number: string;
    booking_trx_id: string;
    is_paid: boolean;
    duraiton: number;
    total_amount: number;
    started_at: string;
    ended_at: string;
    outlet: Outlet;
}

