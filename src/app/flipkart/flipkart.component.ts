import { Component } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
  flipkart:any[]=[];
  constructor(private  _flipkartservices:FlipkartService){
  _flipkartservices.getflipkart().subscribe(
    (data:any)=>{
      console.log(data);
      this.flipkart=data;
       console.log("flipkart data:", this.flipkart);
     },(err:any)=>{
      alert("internal server error");
     })
    }
}

