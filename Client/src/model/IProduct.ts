export interface IProduct {
    id: number;
    name: string;
    price: number;
    isActive: boolean;
    imageUrl?: string;
    description?: string;
    stock?: number;
}