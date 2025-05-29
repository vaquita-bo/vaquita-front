import { Component, OnInit } from '@angular/core';
import { CustomerNavbarComponent } from '../customer-navbar/customer-navbar.component';
import { PurchaseGroupService } from '../../services/purchase-group.service';
import { ActivatedRoute } from '@angular/router';
import { PurchaseGroup } from '../../models/purchase-group-model';

@Component({
  selector: 'app-purchase-group-detail',
  imports: [CustomerNavbarComponent],
  templateUrl: './purchase-group-detail.component.html',
  styleUrl: './purchase-group-detail.component.css'
})
export class PurchaseGroupDetailComponent implements OnInit {
  purchaseGroup!: PurchaseGroup;
  
  constructor(private purchaseGroupService: PurchaseGroupService, private route: ActivatedRoute){}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.purchaseGroupService.getGroup(id).subscribe((data: PurchaseGroup) => {
      this.purchaseGroup = data;
    });
  }
}