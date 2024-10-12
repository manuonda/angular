import { Timestamp } from "@angular/fire/firestore";

export type ColumnKey<T> = Array<keyof T>;

export interface Contact{
    id: number;
    name: string;
    email: string;
    phone: string;
    action: string;
    created: Timestamp;
    updated: Timestamp;
}