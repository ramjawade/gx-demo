import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

function validateEmptyField(control: FormControl) {
  return control.value &&
    typeof control.value === 'string' &&
    !control.value.trim()
    ? {
      required: {
        valid: false,
      },
    }
    : null;
}
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  /**
 * Value of input
 */
  @Input() value: number | string = "";

  /**
   * Mat appearance of input
   */
  @Input() appearance: MatFormFieldAppearance = "outline";

  @Input() lable = "";

  @Input() type: 'text' | 'number' | 'email' = 'text';

  @Input() required = false;

  @Input() formGroup: FormGroup = null;
  @Input() control: FormControl = new FormControl();
  @Input() formControlKey: string = null;

  @Output() valueChange = new EventEmitter();

  validators: ValidatorFn[] = [];

  constructor() { }

  ngOnInit(): void {
    if (this.required) {
      this.validators.push(Validators.required);
      this.validators.push(validateEmptyField);
    }

    if (this.type === 'email') {
      this.validators.push(Validators.email);
    }

    if (this.value) {
      this.control.setValue(this.value);
    }

    if (this.control) {
      this.control.setValidators(this.validators)
    }

    if (this.formGroup && this.formControlKey) {
      this.formGroup.addControl(this.formControlKey, this.control);
    }
  }

  onValueChange(evt) {
    this.valueChange.emit(evt)
  }
}
