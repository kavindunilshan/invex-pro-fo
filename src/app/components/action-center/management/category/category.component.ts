import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { DynamicFormDialogComponent } from "../../general/dynamic-form-dialog/dynamic-form-dialog.component";
import {InventoryService} from "../../../../services/inventory.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  constructor(private dialog: MatDialog, private inventoryService: InventoryService) {}

  openCategoryForm() {
    const categoryFormConfig = [
      { label: 'Category Name', name: 'name', type: 'text', validators: ['required'] },
      { label: 'Description', name: 'description', type: 'text', validators: ['required'] }
    ];

    const dialogRef = this.dialog.open(DynamicFormDialogComponent, {
      width: '600px',
      height: 'auto',
      data: {
        formConfig: categoryFormConfig,
        title: 'Add New Category'
      },
      panelClass: 'custom-dialog-container',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.inventoryService.createRecord('categories', result)
          .then(response => {
          console.log('Category data:', response.data);
        }).catch(error => {
          console.error('Error creating category:', error);
        })
      }
    });
  }
}
