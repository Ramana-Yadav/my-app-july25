import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculateComponent } from './calculate/calculate.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductTaskComponent } from './product-task/product-task.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { MailComponent } from './mail/mail.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { PinInterestComponent } from './pin-interest/pin-interest.component';
import { WeatherreportComponent } from './weatherreport/weatherreport.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { IdCardComponent } from './id-card/id-card.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { AddidCardComponent } from './addid-card/addid-card.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
            {path:'',component:LoginComponent},//default routing
            {path:'dashboard',component:DashboardComponent,children:[
              //child routing
              {path:'home',component:HomeComponent},
            {path:'gallery',component:GalleryComponent},
            {path:'welcome',component:WelcomeComponent},
            {path:'databinding',component:DatabindingComponent},
            {path:'calculate',component:CalculateComponent},
            {path:'rectangle',component:RectangleComponent},
            {path:'circle',component:CircleComponent},
            {path:'bmi',component:BmiComponent},
             {path:'directives',component:DirectivesComponent},
             {path:'employee',component:EmployeeComponent},
             {path:'product-task',component:ProductTaskComponent},
             {path:'vehicles',component:VehiclesComponent},
             {path:'mail',component:MailComponent},
              {path:'flipkart',component:FlipkartComponent},
              {path:'pinInterest',component:PinInterestComponent},
              {path:'weatherreport',component:WeatherreportComponent},
              {path:'create-vehicle',component:CreateVehicleComponent},
              {path:'idCard',component:IdCardComponent},
              {path:'createuser',component:CreateuserComponent},
              {path:'addidCard',component:AddidCardComponent},
              {path:'account',component:AccountComponent},

             ]},//parent routing
            {path:'**',component:ErrorComponent},
            //wild card/error routing
            ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
