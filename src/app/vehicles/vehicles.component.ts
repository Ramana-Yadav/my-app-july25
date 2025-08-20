import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
  vehicles:any[]=[];
constructor(private  _VehiclesService:VehiclesService){
  _VehiclesService.getvehicles().subscribe(
    (data:any)=>{
      console.log(data);
      this.vehicles=data;
      console.log("vehicles data:", this.vehicles);
     },(err:any)=>{
      alert("internal server error");
     }
  )
}
}
