import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { DynamicFormDialogComponent } from "../../general/dynamic-form-dialog/dynamic-form-dialog.component";
import {InventoryService} from "../../../../services/inventory.service";

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent {

  constructor(private dialog: MatDialog, private inventoryService: InventoryService) {}

  openSupplierForm() {
    const supplierFormConfig = [
      { label: 'Supplier Name', name: 'supplierName', type: 'text', validators: ['required'] },
      { label: 'Contact Name', name: 'contactName', type: 'text', validators: ['required'] },
      { label: 'Address', name: 'address', type: 'text', validators: ['required'] },
      { label: 'City', name: 'city', type: 'text', validators: ['required'] },
      { label: 'Postal Code', name: 'postalCode', type: 'text', validators: ['required'] },
      { label: 'Country', name: 'country', type: 'text', validators: ['required'] },
      { label: 'Phone', name: 'phone', type: 'text', validators: ['required'] },
      { label: 'Email', name: 'email', type: 'text', validators: ['required'] }
    ];

    const dialogRef = this.dialog.open(DynamicFormDialogComponent, {
      width: '600px',
      height: 'auto',
      data: {
        formConfig: supplierFormConfig,
        title: 'Add New Supplier'
      },
      panelClass: 'custom-dialog-container',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.inventoryService.createRecord('suppliers', result)
          .then(response => {
          console.log('Supplier data:', response.data);
        }).catch(error => {
          console.error('Error creating supplier:', error);
        })
      }
    });
  }
}
