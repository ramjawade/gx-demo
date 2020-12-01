import { Component, Input, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
