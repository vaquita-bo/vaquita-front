import { Group } from "./group.model";

export interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    stock?: number;
    group?: Group;

    description: string;
    categoria: string;
    minAmount: number;
    maxAmount: number;
    status: string;
    startDate: string;
    endDate: string;
}