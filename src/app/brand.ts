import { Product } from './product';

export interface Brand {
    createdAt?: Date;
    description?: string;
    id: number;
    name?: string;
    products?: Product[];
}
