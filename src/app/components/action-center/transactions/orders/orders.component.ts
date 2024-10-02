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

  constructor(
    private dialog: MatDialog,
    private inventoryService: InventoryService,
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
  ) {}

  ngOnInit() {
    // Fetch customer data to populate the customer select options
    this.inventoryService.getRecords('customers')
      .then(response => {
        this.customerNames = response.data.map(customer => customer.customerName);
        this.customers = response.data;
      });
  }

  openOrderForm() {
    const orderFormConfig = [
      { label: 'Customer', name: 'customer', type: 'select', validators: ['required'], options: this.customerNames },
      { label: 'Order Date', name: 'orderDate', type: 'date', validators: ['required'] },
      { label: 'Shipping Date', name: 'shippingDate', type: 'date', validators: ['required'] },
      { label: 'Shipping Address', name: 'shippingAddress', type: 'text', validators: ['required'] },
      { label: 'Total Amount', name: 'totalAmount', type: 'number', validators: ['required'] }
    ];

    const dialogRef = this.dialog.open(DynamicFormDialogComponent, {
      viewContainerRef: this.viewContainerRef,
      width: '600px',
      height: 'auto',
      data: {
        formConfig: orderFormConfig,
        title: 'Add New Order'
      },
      panelClass: 'custom-dialog-container',
      scrollStrategy: this.overlay.scrollStrategies.close()
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const customer = this.customers.find(customer => customer.customerName === result.customer);
        delete result.customer;

        this.inventoryService.createRecord('orders', {
          ...result,
          customerID: customer.id
        }).then(response => {
          console.log('Order added:', response);
        });
      }
    });
  }
}
