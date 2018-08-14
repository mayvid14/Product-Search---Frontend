import { Feed } from './feed';

export interface Product {
    color?: string;
    createdAt?: Date;
    description?: string;
    feeds?: Feed[];
    id: number;
    imageUrl?: string;
    name: string;
    rank: number;
    size?: string;
}
