import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DynamicFormDialogComponent} from "../../general/dynamic-form-dialog/dynamic-form-dialog.component";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  constructor(private dialog: MatDialog) {}

  openProductForm() {
    const productFormConfig = [
      { label: 'Product Name', name: 'name', type: 'text', validators: ['required'] },
      { label: 'Description', name: 'description', type: 'text', validators: ['required'] },
      { label: 'Category', name: 'categoryId', type: 'select', validators: ['required'] },
      { label: 'Supplier', name: 'supplierId', type: 'select', validators: ['required'] },
      { label: 'Quantity In Stock', name: 'quantityInStock', type: 'number', validators: ['required'] },
      { label: 'Unit Price', name: 'unitPrice', type: 'number', validators: ['required'] },
      { label: 'Reorder Level', name: 'reorderLevel', type: 'number', validators: ['required'] }
    ];

    const dialogRef = this.dialog.open(DynamicFormDialogComponent, {
      width: '500px',
      data: {
        formConfig: productFormConfig,
        title: 'Add New Product'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Product data:', result);
      }
    });
  }

}
