import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DynamicFormDialogComponent} from "../../general/dynamic-form-dialog/dynamic-form-dialog.component";
import {InventoryService} from "../../../../services/inventory.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  // store suppliers
  suppliers: any[] = [];


  constructor(private dialog: MatDialog, private inventoryService: InventoryService) {
  }

  ngOnInit() {
    this.inventoryService.getRecords('suppliers')
      .then(response => {
        this.suppliers = response.data;
      })
  }

  openProductForm() {
    const productFormConfig = [
      { label: 'Product Name', name: 'name', type: 'text', validators: ['required'] },
      { label: 'Description', name: 'description', type: 'text', validators: ['required'] },
      { label: 'Category', name: 'category', type: 'text', validators: ['required'] },
      { label: 'Supplier', name: 'supplier', type: 'select', validators: ['required'] },
      { label: 'Quantity In Stock', name: 'quantityInStock', type: 'number', validators: ['required'] },
      { label: 'Unit Price', name: 'unitPrice', type: 'number', validators: ['required'] },
      { label: 'Reorder Level', name: 'reorderLevel', type: 'number', validators: ['required'] }
    ];

    const dialogRef = this.dialog.open(DynamicFormDialogComponent, {
      width: '600px',
      height: 'auto',
      data: {
        formConfig: productFormConfig,
        title: 'Add New Product'
      },
      panelClass: 'custom-dialog-container',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Product data:', result);
      }
    });
  }

}
