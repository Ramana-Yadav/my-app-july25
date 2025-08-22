import { Component } from '@angular/core';
import { WeatherreportService } from '../weatherreport.service';

@Component({
  selector: 'app-weatherreport',
  templateUrl: './weatherreport.component.html',
  styleUrls: ['./weatherreport.component.css']
})
export class WeatherreportComponent {
  //   weatherreport:any='';
  // constructor(private _wetherreportservices:WeatherreportService){
  // _wetherreportservices.getweatherreport().subscribe(
  //   (data:any)=>{
  //     console.log(data);
  //     this.weatherreport=data;
  //      console.log(" weatherreport data:", this.weatherreport);
  //    },(err:any)=>{
  //     alert("internal server error");
  //    })
  //   }
}
