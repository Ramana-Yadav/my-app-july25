import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehiclesService } from '../vehicles.service';
import { Router } from '@angular/router';

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

constructor(private _vehicleServices:VehiclesService, private _router:Router){}

submit(){
  console.log(this.vehicleForm.value);
  this._vehicleServices.createVehicle(this.vehicleForm.value).subscribe(
    (data:any)=>{
      alert("vehicle added successfully");
      this._router.navigateByUrl
      ("dashboard/vehicles");
    },(err:any)=>{
      alert("internal server error");
    }
  )
}

}
