import { Product } from './product';

export interface Category {
    createdAt: Date;
    featuredRank: number;
    id: number;
    name: string;
    parentId: number;
    products: Product[];
}
