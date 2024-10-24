import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.css'
})
export class OrderFormComponent implements OnChanges {
  @Input() formConfig: any = {};
  @Input() addedOrderItems: any[] = [];
  @Output() openItemForm = new EventEmitter<void>();
  @Output() orderItemAdded = new EventEmitter<any>();
  @Output() orderSubmitted = new EventEmitter<any>();

  orderForm: FormGroup;


  constructor(private fb: FormBuilder,) {
    this.orderForm = this.fb.group(this.formConfig);
  }

  ngOnChanges() {
    this.orderForm = this.fb.group(this.formConfig);
  }

  submitOrder() {
    if (this.orderForm.valid) {
      this.orderSubmitted.emit(this.orderForm.value);
      this.orderForm.reset();
    }
  }

}
