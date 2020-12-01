import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';

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

  @Output() valueChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
