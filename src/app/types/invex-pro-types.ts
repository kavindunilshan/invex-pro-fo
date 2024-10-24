interface FormFieldConfig {
  value: any;
  name: string;
  type: string;
}

interface FormConfig {
  [key: string]: FormFieldConfig;
}
