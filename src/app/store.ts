import { Feed } from './feed';

export interface Store {
    address: string;
    createdAt: Date;
    description: string;
    feeds: Feed[];
    id: number;
    latitude: number;
    longitude: number;
    name: string;
    openingHours: string;
    phone: string;
    postalCode: string;
}
