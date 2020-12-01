import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() theme: ThemePalette = 'primary';

  @Input() name: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
