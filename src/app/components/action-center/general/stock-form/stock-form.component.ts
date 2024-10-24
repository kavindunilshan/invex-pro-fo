import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrl: './stock-form.component.css'
})
export class StockFormComponent implements OnChanges {
  @Input() formConfig: FormConfig = {};
  @Input() addedItems: any[] = [];
  @Output() openItemForm = new EventEmitter<void>();
  @Output() stockItemAdded = new EventEmitter<any>();
  @Output() stockSubmitted = new EventEmitter<any>();

  stockForm: FormGroup;


  constructor(private fb: FormBuilder,) {
    this.stockForm = this.fb.group(this.formConfig);
  }

  ngOnChanges() {
    this.stockForm = this.fb.group(this.formConfig);
  }

  submitStock() {
    if (this.stockForm.valid) {
      this.stockSubmitted.emit(this.stockForm.value);
      this.stockForm.reset();
    }
  }

}
