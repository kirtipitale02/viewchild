import { Component, OnInit, ViewChild } from '@angular/core';
import { ChangecolorDirective } from '../changecolor.directive';

@Component({
  selector: 'app-colorchange',
  templateUrl: './colorchange.component.html',
  styleUrls: ['./colorchange.component.css']
})
export class ColorchangeComponent implements OnInit {
@ViewChild(ChangecolorDirective) changecolordirective : ChangecolorDirective;
  constructor() { }

  ngOnInit() {
  }

  changeColor(color:string){
    this.changecolordirective.change(color);
  }

}
