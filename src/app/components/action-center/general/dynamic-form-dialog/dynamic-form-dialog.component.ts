import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface FormField {
  label: string;
  name: string;
  type: string;
  validators: string[];
  options?: { value: any; viewValue: string }[]; // for select fields
}

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
    @Inject(MAT_DIALOG_DATA) public data: { formConfig: FormField[], title?: string }
  ) {
    this.form = this.fb.group({});
    this.buildForm(data.formConfig);
  }

  buildForm(fields: FormField[]): void {
    fields.forEach(field => {
      this.form.addControl(
        field.name,
        this.fb.control('', this.getValidators(field))
      );
    });
  }

  getValidators(field: FormField): any[] {
    const validators = [];
    if (field.validators.includes('required')) {
      validators.push(Validators.required);
    }
    // Add other validators as needed (e.g., minLength, maxLength)
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
