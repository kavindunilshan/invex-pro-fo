import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DynamicFormDialogComponent} from "../../general/dynamic-form-dialog/dynamic-form-dialog.component";
import {InventoryService} from "../../../../services/inventory.service";
import {Overlay} from "@angular/cdk/overlay";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private overlay: Overlay,
    private inventoryService: InventoryService
  ) {}

  categoryFormConfig = [
    { label: 'Category Name', name: 'name', type: 'text', validators: ['required'] },
    { label: 'Description', name: 'description', type: 'text', validators: ['required'] }
  ];

  categoriesData: Array<any> = [];

  categoriesColumns = this.categoryFormConfig.map(field => ({
    key: field.name,
    label: field.label
  }));


  ngOnInit(): void {
    this.inventoryService.getRecords('categories').then(response => {
      this.categoriesData = response.data;
      console.log('Categories working:', this.categoriesData);
    });
  }

  openCategoryForm() {

    const dialogRef = this.dialog.open(DynamicFormDialogComponent, {
      width: '600px',
      height: 'auto',
      data: {
        formConfig: this.categoryFormConfig,
        title: 'Add New Category'
      },
      panelClass: 'custom-dialog-container',
      scrollStrategy: this.overlay.scrollStrategies.close()
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.inventoryService.createRecord('categories', result)
          .then(response => {
            this.categoriesData.push(response.data);
          console.log('Category data:', response.data);
        }).catch(error => {
          console.error('Error creating category:', error);
        })
      }
    });
  }
}
