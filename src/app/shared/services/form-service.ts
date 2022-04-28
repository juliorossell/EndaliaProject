import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable()
export class FormService {
  /**
   * Marks all controls in a form group as touched
   * @param formGroup - The form group to touch
   */
  markFormGroupAsTouched(formGroup: FormGroup): void {
    (<any>Object).values(formGroup.controls).forEach((control: any) => {
      if (control instanceof FormControl && control.status !== 'VALID') {
        control.markAsTouched();
      }
      if (control.controls) {
        this.markFormGroupAsTouched(control);
      }
    });
  }
}
