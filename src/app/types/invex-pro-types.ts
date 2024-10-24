import {ValidatorFn} from "@angular/forms";

export interface FormFieldConfig {
  key: string;
  value: any;
  name: string;
  type: string;
  validators?: ValidatorFn[];
}
