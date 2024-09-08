import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dynamic-form-dialog',
  templateUrl: './dynamic-form-dialog.component.html',
  styleUrls: ['./dynamic-form-dialog.component.css']
})
export class DynamicFormDialogComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DynamicFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({});
    this.buildForm(data.formFields);
  }

  buildForm(fields: any[]): void {
    fields.forEach(field => {
      this.form.addControl(
        field.name,
        this.fb.control(field.value || '', this.getValidators(field))
      );
    });
  }

  getValidators(field: any): any[] {
    const validators = [];
    if (field.required) {
      validators.push(Validators.required);
    }
    if (field.minLength) {
      validators.push(Validators.minLength(field.minLength));
    }
    if (field.maxLength) {
      validators.push(Validators.maxLength(field.maxLength));
    }
    return validators;
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
