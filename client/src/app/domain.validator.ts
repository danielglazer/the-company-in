import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function domainValidator(): ValidatorFn {
  const domainReg = new RegExp('^(?!.* .*)(?:[a-z0-9][a-z0-9-]{0,61}[a-z0-9]\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$');
  return (control: AbstractControl): ValidationErrors | null => {
    const valid = domainReg.test(control.value);
    return valid ? null : { forbiddenDomain: { value: control.value } };
  };
}
