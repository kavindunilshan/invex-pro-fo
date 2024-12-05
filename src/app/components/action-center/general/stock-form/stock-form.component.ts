import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FormFieldConfig} from "../../../../types/invex-pro-types";

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnChanges {
  @Input() formConfig: FormFieldConfig[] = [];
  @Input() addedItems: any[] = [];
  @Output() openItemForm = new EventEmitter<void>();
  @Output() stockItemAdded = new EventEmitter<any>();
  @Output() stockSubmitted = new EventEmitter<any>();

  stockForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['formConfig'] && this.formConfig) {
      this.createForm();
    }
  }

  private createForm() {
    const formControls: any = {};
    this.formConfig.forEach(field => {
      formControls[field.key] = [
        field.value[0],
        field.value[1] || []
      ];
    });

    this.stockForm = this.fb.group(formControls);
  }

  submitStock() {
    if (this.stockForm.valid) {
      const result = this.stockForm.value;
      this.stockSubmitted.emit(result);
      this.stockForm.reset();
    }
  }
}
