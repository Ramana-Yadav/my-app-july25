import { Component } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent {

  num1:number=0;
  num2:number=0;
  result:number=0;


  addition(){
    this.result=this.num1+this.num2;
  }

    subtraction(){
    this.result=this.num1-this.num2;
  }

    multiplication(){
    this.result=this.num1*this.num2;
  }

    division(){
    this.result=this.num1/this.num2;
  }

}
