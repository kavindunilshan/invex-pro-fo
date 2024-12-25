import { Component, OnInit } from '@angular/core';
import { DynamicFormDialogComponent } from "../../general/dynamic-form-dialog/dynamic-form-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { InventoryService } from "../../../../services/inventory.service";
import { Overlay } from "@angular/cdk/overlay";
import { Validators } from "@angular/forms";
import { FormFieldConfig } from "../../../../types/invex-pro-types";

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  suppliers: any[] = [];
  supplierNames: any[] = [];

  isPurchaseFormOpen: boolean = true;

  purchaseTotal: number = 0;
  addedPurchaseItems: any[] = [];

  constructor(
    private dialog: MatDialog,
    private overlay: Overlay,
    private inventoryService: InventoryService,
  ) {}

  ngOnInit() {
    this.inventoryService.getRecords('suppliers')
      .then(response => {
        this.supplierNames = response.data.map(supplier => ({label:supplier.supplierName, value: supplier._id}));
        console.log('Supplier Names', this.supplierNames);
        console.log('Suppliers', response.data);
        this.updatePurchaseFormConfig();
        this.suppliers = response.data;
      });
  }

  private updatePurchaseFormConfig() {
    this.purchaseFormConfig = [
      { key: 'supplier', value: ['', Validators.required], type: 'select', name: 'Supplier ID', options: this.supplierNames },
      { key: 'purchaseDate', value: ['', Validators.required], type: 'date', name: 'Purchase Date' },
      { key: 'expectedArrivalDate', value: ['', Validators.required], type: 'date', name: 'Expected Arrival Date' },
      { key: 'totalCost', value: [this.purchaseTotal, [Validators.required, Validators.min(0)]], type: 'number', name: 'Total Cost' },
      { key: 'status', value: ['', Validators.required], type: 'text', name: 'Status' },
    ];
  }

  purchaseItemConfig = [
    { label: 'Product ID', name: 'product_id', type: 'text', validators: ['required'] },
    { label: 'Quantity', name: 'quantity', type: 'number', validators: ['required', 'min:1'] },
    { label: 'Price', name: 'price', type: 'number', validators: ['required', 'min:0'] },
  ];

  purchaseFormConfig: FormFieldConfig[] = [
    { key: 'supplier', value: ['', Validators.required], type: 'select', name: 'Supplier ID', options: this.supplierNames },
    { key: 'purchaseDate', value: ['', Validators.required], type: 'date', name: 'Purchase Date' },
    { key: 'expectedArrivalDate', value: ['', Validators.required], type: 'date', name: 'Expected Arrival Date' },
    { key: 'totalCost', value: [this.purchaseTotal, [Validators.required, Validators.min(0)]], type: 'number', name: 'Total Cost' },
    { key: 'status', value: ['', Validators.required], type: 'text', name: 'Status' },
  ];

  togglePurchaseForm() {
    this.isPurchaseFormOpen = !this.isPurchaseFormOpen;
    console.log('Purchase Form Toggled');
  }

  addPurchaseItem() {
    const dialogRef = this.dialog.open(DynamicFormDialogComponent, {
      width: '600px',
      height: 'auto',
      data: {
        formConfig: this.purchaseItemConfig,
        title: 'Add New Purchase Item'
      },
      panelClass: 'custom-dialog-container',
      scrollStrategy: this.overlay.scrollStrategies.close()
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.totalPrice = result.quantity * result.price;
        this.purchaseTotal += result.totalPrice;
        this.addedPurchaseItems.push(result);
      }
    });
  }

  handlePurchaseSubmit(purchase: any) {
    this.inventoryService.createManyRecords('purchase_items', this.addedPurchaseItems || [])
      .then(data => {

        console.log("Here", purchase);
        const purchaseData = { ...purchase, purchaseItems: data};
        this.inventoryService.createRecord('purchases', purchaseData)
          .then(r => {
          });
      });

    this.addedPurchaseItems = [];
    this.purchaseTotal = 0;
    this.togglePurchaseForm();
  }
}
