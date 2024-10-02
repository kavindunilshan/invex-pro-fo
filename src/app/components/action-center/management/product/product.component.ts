import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DynamicFormDialogComponent} from "../../general/dynamic-form-dialog/dynamic-form-dialog.component";
import {InventoryService} from "../../../../services/inventory.service";
import {SpecificService} from "../../../../services/specific.service";
import { Overlay } from '@angular/cdk/overlay';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  suppliers: any[] = [];
  supplierNames: any[] = ["a", "b", "c"];

  categories: any[] = [];
  categoryNames: any[] = ["a", "b", "c"];


  constructor(
    private dialog: MatDialog,
    private inventoryService: InventoryService,
    private overlay: Overlay,
    private specificService: SpecificService,
    private viewContainerRef: ViewContainerRef,
  ) {
  }

  ngOnInit() {
    this.inventoryService.getRecords('suppliers')
      .then(response => {
        this.supplierNames = response.data.map(supplier => supplier.supplierName);
        this.suppliers = response.data;
      });

    this.inventoryService.getRecords('categories')
      .then(response => {
        this.categoryNames = response.data.map(category => category.categoryName);
        this.categories = response.data;
      });
  }

  openProductForm() {
    const productFormConfig = [
      { label: 'Product Name', name: 'name', type: 'text', validators: ['required'] },
      { label: 'Description', name: 'description', type: 'text', validators: ['required'] },
      { label: 'Category', name: 'category', type: 'select', validators: ['required'], options: this.categoryNames },
      { label: 'Supplier', name: 'supplier', type: 'select', validators: ['required'], options: this.supplierNames },
      { label: 'Quantity In Stock', name: 'quantityInStock', type: 'number', validators: ['required'] },
      { label: 'Unit Price', name: 'unitPrice', type: 'number', validators: ['required'] },
      { label: 'Reorder Level', name: 'reorderLevel', type: 'number', validators: ['required'] }
    ];

    const dialogRef = this.dialog.open(DynamicFormDialogComponent, {
      viewContainerRef: this.viewContainerRef,
      width: '600px',
      height: 'auto',
      data: {
        formConfig: productFormConfig,
        title: 'Add New Product'
      },
      panelClass: 'custom-dialog-container',
      scrollStrategy: this.overlay.scrollStrategies.close()
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const supplier = this.suppliers.find(supplier => supplier.supplierName === result.supplier);
        const category = this.categories.find(category => category.categoryName === result.category);
        delete result.supplierName;
        delete result.categoryName;
        this.inventoryService.createRecord('products',{
          ...result,
          supplierId: supplier.id,
          categoryId: category.id,
        }).then(response => {
          console.log('Product added:', response);
        });
      }
    });
  }

}
