import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {DynamicFormDialogComponent} from "../../general/dynamic-form-dialog/dynamic-form-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {InventoryService} from "../../../../services/inventory.service";
import {Overlay} from "@angular/cdk/overlay";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit {
  customers: any[] = [];
  customerNames: any[] = [];

  isOrderFormOpen: boolean = false;

  constructor(
    private inventoryService: InventoryService,
  ) {}

  ngOnInit() {
    this.inventoryService.getRecords('orders')
      .then(response => {
        this.customerNames = response.data.map(customer => customer.customerName);
        this.customers = response.data;
      });
  }

  toggleOrderForm() {
    this.isOrderFormOpen = !this.isOrderFormOpen;
    console.log('Order Form Toggled')
  }

}
