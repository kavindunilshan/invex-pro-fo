import {Component, OnInit} from '@angular/core';
import {DynamicFormDialogComponent} from "../../general/dynamic-form-dialog/dynamic-form-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {InventoryService} from "../../../../services/inventory.service";
import {Overlay} from "@angular/cdk/overlay";
import {Validators} from "@angular/forms";
import {FormFieldConfig} from "../../../../types/invex-pro-types";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit {
  customers: any[] = [];
  customerNames: any[] = [];

  isOrderFormOpen: boolean = false;

  orderTotal: number = 0;
  addedOrderItems: any[] = [];



  constructor(
    private dialog: MatDialog,
    private overlay: Overlay,
    private inventoryService: InventoryService,
  ) {}

  orderItemConfig = [
    { label: 'Product ID', name: 'product_id', type: 'text', validators: ['required'] },
    { label: 'Quantity', name: 'quantity', type: 'number', validators: ['required', 'min:1'] },
    { label: 'Price', name: 'price', type: 'number', validators: ['required', 'min:0'] },
  ];

  orderFormConfig: FormFieldConfig[] = [
    { key: 'customerID', value: ['', Validators.required], type: 'text', name: 'Customer ID' },
    { key: 'orderDate', value: ['', Validators.required], type: 'date', name: 'Order Date' },
    { key: 'shippingDate', value: ['', Validators.required], type: 'date', name: 'Shipping Date' },
    { key: 'shippingAddress', value: ['', Validators.required], type: 'text', name: 'Shipping Address' },
    { key: 'totalAmount', value: [this.orderTotal, [Validators.required, Validators.min(0)]], type: 'number', name: 'Total Amount' },
    { key: 'orderStatus', value: ['', Validators.required], type: 'text', name: 'Order Status' },
  ];

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

  addOrderItem() {
    const dialogRef = this.dialog.open(DynamicFormDialogComponent, {
      width: '600px',
      height: 'auto',
      data: {
        formConfig: this.orderItemConfig,
        title: 'Add New Order Item'
      },
      panelClass: 'custom-dialog-container',
      scrollStrategy: this.overlay.scrollStrategies.close()
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.totalPrice = result.quantity * result.price;
        this.orderTotal += result.totalPrice;
        this.addedOrderItems.push(result);
      }
    });
  }

  handleOrderSubmit(order: any) {
    const orderData = { ...order, orderItems: this.addedOrderItems };
    this.inventoryService.createRecord('orders', orderData);
    this.addedOrderItems = [];
    this.orderTotal = 0;
    this.toggleOrderForm();
  }

}
