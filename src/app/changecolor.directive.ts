import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective implements AfterViewInit {


  constructor(private elementref: ElementRef) { }
  ngAfterViewInit() {
    this.elementref.nativeElement.style.color = "red";
  }

  change(changecolor:string){
    this.elementref.nativeElement.style.color=changecolor;
  }

}
