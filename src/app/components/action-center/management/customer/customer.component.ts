import {Component, OnInit} from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { DynamicFormDialogComponent } from "../../general/dynamic-form-dialog/dynamic-form-dialog.component";
import {InventoryService} from "../../../../services/inventory.service";
import {Overlay} from "@angular/cdk/overlay";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private overlay: Overlay,
    private inventoryService: InventoryService
  ) {}

  customerFormConfig = [
    { label: 'Customer Name', name: 'customerName', type: 'text', validators: ['required'] },
    { label: 'Contact Name', name: 'contactName', type: 'text', validators: ['required'] },
    { label: 'Address', name: 'address', type: 'text', validators: ['required'] },
    { label: 'City', name: 'city', type: 'text', validators: ['required'] },
    { label: 'Region', name: 'region', type: 'date', validators: ['required'] },
    { label: 'Postal Code', name: 'postalCode', type: 'text', validators: ['required'] },
    { label: 'Country', name: 'country', type: 'text', validators: ['required'] },
    { label: 'Phone', name: 'phone', type: 'text', validators: ['required'] },
    { label: 'Email', name: 'email', type: 'text', validators: ['required'] },
  ];

  customersData: Array<any> = [];

  customersColumns = this.customerFormConfig.map(field => ({
    key: field.name,
    label: field.label
  }));

  ngOnInit(): void {
    this.inventoryService.getRecords('customers').then(response => {
      this.customersData = response.data;
      console.log('Customers working:', this.customersData);
    });
  }


  openCustomerForm() {
    const dialogRef = this.dialog.open(DynamicFormDialogComponent, {
      width: '600px',
      height: 'auto',
      data: {
        formConfig: this.customerFormConfig,
        title: 'Add New Customer'
      },
      panelClass: 'custom-dialog-container',
      scrollStrategy: this.overlay.scrollStrategies.close()
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Customer data:', result);
        // Create a new customer record in the backend
        this.inventoryService.createRecord('customers', result)
          .then(response => {
            this.customersData.push(response.data);
            console.log('Customer data:', response.data);
          }).catch(error => {
            console.error('Error creating customer:', error);
          });
      }
    });
  }
}
