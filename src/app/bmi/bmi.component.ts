import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
 weight:number=0;
  hight:number=0;
  result=0;
bmi(){
          this.result=this.weight/(this.hight*this.hight);
          console.log(this.result);
  
}}
