import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
massege:string="";
counter:number=0;
  constructor() { }
increaseByOne(){
  this.counter = this.counter + 1;
  this.massege = "The counter Value is : "+this.counter;
}

decreaseByOne(){
  this.counter = this.counter - 1;
  this.massege = "The counter Value is : "+this.counter;

}

  ngOnInit() {
  }

}
