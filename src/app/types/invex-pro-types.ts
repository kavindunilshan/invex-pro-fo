import {ValidatorFn} from "@angular/forms";

export interface FormFieldConfig {
  key: string;
  value: any;
  name: string;
  type: string;
  options?: { label: string; value: any }[];
  validators?: ValidatorFn[];
}
