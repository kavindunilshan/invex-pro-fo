import {Component, OnInit} from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { DynamicFormDialogComponent } from "../../general/dynamic-form-dialog/dynamic-form-dialog.component";
import {InventoryService} from "../../../../services/inventory.service";
import {Overlay} from "@angular/cdk/overlay";
import {SpecificService} from "../../../../services/specific.service";

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private overlay: Overlay,
    private inventoryService: InventoryService,
    private specificService: SpecificService,
  ) {}

  supplierFormConfig = [
    { label: 'Supplier Name', name: 'supplierName', type: 'text', validators: ['required'] },
    { label: 'Contact Name', name: 'contactName', type: 'text', validators: ['required'] },
    { label: 'Address', name: 'address', type: 'text', validators: ['required'] },
    { label: 'City', name: 'city', type: 'text', validators: ['required'] },
    { label: 'Postal Code', name: 'postalCode', type: 'text', validators: ['required'] },
    { label: 'Country', name: 'country', type: 'text', validators: ['required'] },
    { label: 'Phone', name: 'phone', type: 'text', validators: ['required'] },
    { label: 'Email', name: 'email', type: 'text', validators: ['required'] }
  ];

  supplierColumns = this.supplierFormConfig.map(field => ({
    key: field.name,
    label: field.label
  }));

  suppliersData: Array<any> = [];

  supplierCountData: Array<number> = [];
  supplierCountLabels: Array<string> = [];
  isShowSupplierChart: boolean = false;

  ngOnInit(): void {
      this.inventoryService.getRecords('suppliers').then(response => {
          this.suppliersData = response.data;
      });

      this.specificService.getCounts('suppliers').then(response => {
          console.log('Suppliers count:', response.data);

          this.supplierCountData = response.data.map((item: any) => item.supplierCount);
          this.supplierCountLabels = response.data.map((item: any) => item.month + ' ' + item.year);

          console.log('Supplier count values:', this.supplierCountData);
          console.log('Supplier count labels:', this.supplierCountLabels);

          this.isShowSupplierChart = true;


      }).catch(error => {
          console.error('Error getting suppliers count:', error);
      });
  }

  openSupplierForm() {
    const dialogRef = this.dialog.open(DynamicFormDialogComponent, {
      width: '600px',
      height: 'auto',
      data: {
        formConfig: this.supplierFormConfig,
        title: 'Add New Supplier'
      },
      panelClass: 'custom-dialog-container',
      scrollStrategy: this.overlay.scrollStrategies.close()
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.inventoryService.createRecord('suppliers', result)
          .then(response => {
            this.suppliersData.push(response.data);
          console.log('Supplier data:', response.data);
        }).catch(error => {
          console.error('Error creating supplier:', error);
        })
      }
    });
  }
}
