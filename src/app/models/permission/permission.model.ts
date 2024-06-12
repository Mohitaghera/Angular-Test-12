export interface Permission {
  name: string;
  value: boolean;
  isDisable: boolean;
  permissions?: Permission[];
}