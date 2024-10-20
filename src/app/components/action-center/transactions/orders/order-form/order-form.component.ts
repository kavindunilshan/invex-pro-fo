import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {DynamicFormDialogComponent} from "../../../general/dynamic-form-dialog/dynamic-form-dialog.component";
import {Overlay} from "@angular/cdk/overlay";
import {InventoryService} from "../../../../../services/inventory.service";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.css'
})
export class OrderFormComponent {

  @Output() orderSubmitted = new EventEmitter<void>();

  orderTotal: number = 0;
  orderForm: FormGroup;
  orderItemConfig = [
    { label: 'Product ID', name: 'product_id', type: 'text', validators: ['required'] },
    { label: 'Quantity', name: 'quantity', type: 'number', validators: ['required', 'min:1'] },
    { label: 'Price', name: 'price', type: 'number', validators: ['required', 'min:0'] },
  ];

  addedOrderItems: any[] = []; // Array to hold added order items

  constructor(private fb: FormBuilder,
              private inventoryService: InventoryService,
              private dialog: MatDialog,
              private overlay: Overlay,) {
    this.orderForm = this.fb.group({
      customerID: ['', Validators.required],
      orderDate: ['', Validators.required],
      shippingDate: ['', Validators.required],
      shippingAddress: ['', Validators.required],
      totalAmount: [this.orderTotal, [Validators.required, Validators.min(0)]],
      orderStatus: ['', Validators.required],
    });
  }

  submitOrder() {
    if (this.orderForm.valid) {
      const orderData = { ...this.orderForm.value, orderItems: this.addedOrderItems };
      this.inventoryService.createRecord('orders', orderData);
      console.log('Order Submitted')
      this.orderSubmitted.emit();
      this.orderForm.reset();
      this.addedOrderItems = [];
    }
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

}
