import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { DynamicFormDialogComponent } from "../../general/dynamic-form-dialog/dynamic-form-dialog.component";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  constructor(private dialog: MatDialog) {}

  openCustomerForm() {
    const customerFormConfig = [
      { label: 'Customer Name', name: 'customerName', type: 'text', validators: ['required'] },
      { label: 'Contact Name', name: 'contactName', type: 'text', validators: ['required'] },
      { label: 'Address', name: 'address', type: 'text', validators: ['required'] },
      { label: 'City', name: 'city', type: 'text', validators: ['required'] },
      { label: 'Postal Code', name: 'postalCode', type: 'text', validators: ['required'] },
      { label: 'Country', name: 'country', type: 'text', validators: ['required'] },
      { label: 'Phone', name: 'phone', type: 'text', validators: ['required'] },
      { label: 'Email', name: 'email', type: 'text', validators: ['required'] },
      { label: 'Pos Code', name: 'posCode', type: 'text', validators: ['required'] },
    ];

    const dialogRef = this.dialog.open(DynamicFormDialogComponent, {
      width: '600px',
      height: 'auto',
      data: {
        formConfig: customerFormConfig,
        title: 'Add New Customer'
      },
      panelClass: 'custom-dialog-container',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Customer data:', result);
        // Handle the result, such as sending data to the backend
      }
    });
  }
}
