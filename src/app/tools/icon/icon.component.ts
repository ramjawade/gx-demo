import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  /**
   * theme 
   */
  @Input() theme: ThemePalette = 'primary';

  /**
   * Icon name
   */
  @Input() name: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
