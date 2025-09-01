import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehiclesService } from '../vehicles.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {

  public vehicleForm:FormGroup=new FormGroup({
           Vehicle:new FormControl(),
           manufaturer:new FormControl(),
           model:new FormControl(),
           type:new FormControl(),
           fuel:new FormControl(),
           color:new FormControl(),
           image:new FormControl(),
           cost:new FormControl(),
           tyres:new FormControl(),
});

//edit vehicle details
id:number=0;
constructor(private _vehicleService:VehiclesService, private _router:Router, private _activatedRoute:ActivatedRoute){
  _activatedRoute.params.subscribe(
    (data:any)=>{
      console.log(data);
      this.id=data.id;
      console.log(this.id);

    _vehicleService.getvehicle(this.id).subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicleForm.patchValue(data);
      }
    )

    }
  )
}

submit(){
  if(this.id){
     this._vehicleService.updateVehicle(this.id, this.vehicleForm.value).subscribe(
    (data:any)=>{
      console.log(data);
      alert("vehicle updated successfully");
      this._router.navigateByUrl
      ("dashboard/vehicles");
    },(err:any)=>{
      alert("internal server error");
    }
  )
}
else{
  console.log(this.vehicleForm.value);
  this._vehicleService
  .createVehicle(this.vehicleForm.value).subscribe(
    (data:any)=>{
      alert("vehicle added successfully");
      this._router.navigateByUrl("/dashboard/vehicles");

    },(err:any)=>{
alert("internal server error")}
  )
}
}}
