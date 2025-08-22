import { Component } from '@angular/core';
import { PinInterestService } from '../pin-interest.service';

@Component({
  selector: 'app-pin-interest',
  templateUrl: './pin-interest.component.html',
  styleUrls: ['./pin-interest.component.css']
})
export class PinInterestComponent {
 pinInterest:any[]=[];
  constructor(private _PinInterestServices:PinInterestService){
  _PinInterestServices.getpinInterest().subscribe(
    (data:any)=>{
      console.log(data);
      this.pinInterest=data;
       console.log(" pinterest data:", this.pinInterest);
     },(err:any)=>{
      alert("internal server error");
     })
    }

}
