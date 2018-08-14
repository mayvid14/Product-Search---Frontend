import { Feed } from './feed';
import { Product } from './product';
import { Store } from './store';

export interface Merchant {
    createdAt?: Date;
    displayName: string;
    feeds?: Feed[];
    id: number;
    mailId?: string;
    mobileNo: string;
    name: string;
    products?: Product[];
    status?: string;
    stores?: Store[];
}
