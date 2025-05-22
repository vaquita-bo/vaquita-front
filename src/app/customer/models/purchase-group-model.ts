export interface PurchaseGroup {
    id: number;
    status: GroupPurchaseStatus;
    createdAt: string;
    startsAt: string;
    updatedAt: string;
    endsAt: string;
    estimatedDeliveryDate: string;

    minBuyers: number;
    maxBuyers: number;
    // buyers: User[];

    productId: number;
    productName: string;
    productImage: string;
    productPrice: number;
    productCategory: string;
    productDescription: string;
}

export enum GroupPurchaseStatus {
    INACTIVE = 'INACTIVE',
    ACTIVE = 'ACTIVE',
    MIN_REACHED = 'MIN_REACHED',
    MAX_REACHED = 'MAX_REACHED',
    CONFIRMED = 'CONFIRMED',
    DELIVERING = 'DELIVERING',
    COMPLETED = 'COMPLETED',
    CANCELLED = 'CANCELLED',
    EXPIRED = 'EXPIRED'
}