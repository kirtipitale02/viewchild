import { Component, OnInit, ViewChild , ElementRef, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements AfterViewInit {
@ViewChild('name') eleName:ElementRef;
@ViewChild('state') eleState:ElementRef;

  constructor() { }

  ngAfterViewInit(){
    this.eleName.nativeElement.style.backgroundColor ="Black";
    this.eleName.nativeElement.style.color ="white";

    this.eleState.nativeElement.style.backgroundColor ="cyan";
    this.eleState.nativeElement.style.color ="red";

  }
  ngOnInit() {
  }

}
