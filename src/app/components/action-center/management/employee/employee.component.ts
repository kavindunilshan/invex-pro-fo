import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { DynamicFormDialogComponent } from "../../general/dynamic-form-dialog/dynamic-form-dialog.component";
import { InventoryService } from "../../../../services/inventory.service";
import { Overlay } from "@angular/cdk/overlay";
import { SpecificService } from "../../../../services/specific.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private overlay: Overlay,
    private inventoryService: InventoryService,
    private specificService: SpecificService,
  ) { }

  employeeFormConfig = [
    { label: 'Employee Name', name: 'employeeName', type: 'text', validators: ['required'] },
    { label: 'Title', name: 'title', type: 'text', validators: ['required'] },
    { label: 'Address', name: 'address', type: 'text', validators: ['required'] },
    { label: 'City', name: 'city', type: 'text', validators: ['required'] },
    { label: 'Postal Code', name: 'postalCode', type: 'text', validators: ['required'] },
    { label: 'Country', name: 'country', type: 'text', validators: ['required'] },
    { label: 'Phone', name: 'phone', type: 'text', validators: ['required'] },
    { label: 'Email', name: 'email', type: 'text', validators: ['required', 'email'] }
  ];

  employeeColumns = this.employeeFormConfig.map(field => ({
    key: field.name,
    label: field.label
  }));

  employeesData: Array<any> = [];

  employeeCountData: Array<number> = [];
  employeeCountLabels: Array<string> = [];
  isShowEmployeeChart: boolean = false;

  ngOnInit(): void {
    this.inventoryService.getRecords('employees').then(response => {
      this.employeesData = response.data;
    });

    this.specificService.getCounts('employees').then(response => {
      console.log('Employee count:', response.data);

      this.employeeCountData = response.data.map((item: any) => item.employeeCount);
      this.employeeCountLabels = response.data.map((item: any) => item.month + ' ' + item.year);

      console.log('Employee count values:', this.employeeCountData);
      console.log('Employee count labels:', this.employeeCountLabels);

      this.isShowEmployeeChart = true;

    }).catch(error => {
      console.error('Error getting employee count:', error);
    });
  }

  openEmployeeForm() {
    const dialogRef = this.dialog.open(DynamicFormDialogComponent, {
      width: '600px',
      height: 'auto',
      data: {
        formConfig: this.employeeFormConfig,
        title: 'Add New Employee'
      },
      panelClass: 'custom-dialog-container',
      scrollStrategy: this.overlay.scrollStrategies.close()
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.inventoryService.createRecord('employees', result)
          .then(response => {
            this.employeesData.push(response.data);
            console.log('Employee data:', response.data);
          }).catch(error => {
          console.error('Error creating employee:', error);
        });
      }
    });
  }
}
