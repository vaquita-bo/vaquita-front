import { Injectable } from '@angular/core';
import { GroupPurchaseStatus, PurchaseGroup } from "../models/purchase-group-model";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseGroupService {
  products: PurchaseGroup[] = [];

  constructor() { }

  getProducts(): Observable<PurchaseGroup[]> {
    return new Observable(observer => {
      observer.next(this.purchaseGroupsList);
      observer.complete();
    })
  }

  purchaseGroupsList: PurchaseGroup[] = [
    {
      id: 1,
      status: GroupPurchaseStatus.ACTIVE,
      createdAt: '2023-08-20T12:00:00Z',
      startsAt: '2023-08-21T10:00:00Z',
      updatedAt: '2023-08-20T14:30:00Z',
      endsAt: '2023-08-22T18:00:00Z',
      estimatedDeliveryDate: '2023-08-23T12:00:00Z',
      minBuyers: 5,
      maxBuyers: 10,
      productId: 1,
      productName: 'Poleras',
      productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfr4kFPHrL-0tvj_2fVtN9brjbngr_nNKOdw&s",
      productPrice: 29.99,
      productCategory: 'Ropa',
      productDescription: 'Description of Product A'
    },
    {
      id: 2,
      status: GroupPurchaseStatus.ACTIVE,
      createdAt: '2023-08-20T12:00:00Z',
      startsAt: '2023-08-21T10:00:00Z',
      updatedAt: '2023-08-20T14:30:00Z',
      endsAt: '2023-08-22T18:00:00Z',
      estimatedDeliveryDate: '2023-08-23T12:00:00Z',
      minBuyers: 5,
      maxBuyers: 10,
      productId: 2,
      productName: 'Product B',
      productImage: 'https://amarket.com.bo/cdn/shop/files/900252.jpg?v=1712346166',
      productPrice: 19.99,
      productCategory: 'Category B',
      productDescription: 'Description of Product B'
    }
  ];
}
