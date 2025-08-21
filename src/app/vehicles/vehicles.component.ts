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
  this.loadVehicles();
}
loadVehicles(){
  this._VehiclesService.getvehicles().subscribe(
    (data:any)=>{
      console.log(data);
      this.vehicles=data;
      console.log("vehicles data:", this.vehicles);
     },(err:any)=>{
      alert("internal server error");
     }
  )
}
searchKeyword:string='';
search(){
  this._VehiclesService.getFilterdvehicles(this.searchKeyword).subscribe(
    (data:any)=>{
      console.log(data);
      this.vehicles=data;
      // console.log("vehicles data:", this.vehicles);
     },(err:any)=>{
      alert("internal server error");
     }
    )
}

columnName:string='';
sortorder:string='';
sort(){
  this._VehiclesService.getSortedvehicles(this.columnName,this.sortorder).subscribe(
    (data:any)=>{
      console.log(data);
      this.vehicles=data;
      // console.log("vehicles data:", this.vehicles);
     },(err:any)=>{
      alert("internal server error");
     }
    )
}

items:number=0;
pageNumber:number=0;
pagination(){
  this._VehiclesService.getPaginatedvehicles(this.items,this.pageNumber).subscribe(
    (data:any)=>{
      console.log(data);
      this.vehicles=data;
      // console.log("vehicles data:", this.vehicles);
     },(err:any)=>{
      alert("internal server error");
     }
    )
}





delete(id:any){

  if (confirm("Are You Sure To Delete?")==true) {
    this._VehiclesService.deleteVehicle(id).subscribe(
      (data:any)=>{
        alert("record deleted successfully")
      },(err:any)=>{
        alert("internal server error")
      })
      this.loadVehicles();
  } else {
    alert("you have cancelled the delete")
    
  }

  this._VehiclesService.deleteVehicle(id).subscribe(
    (data:any)=>{
     alert("Record Deleted successfully");
      // console.log("vehicles data:", this.vehicles);
     },(err:any)=>{
      alert("internal server error");
     }
    )
  }
}
