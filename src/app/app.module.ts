import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MywebsiteComponent } from './mywebsite/mywebsite.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CalculateComponent } from './calculate/calculate.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductTaskComponent } from './product-task/product-task.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { HttpClientModule } from '@angular/common/http';
import { MailComponent } from './mail/mail.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { PinInterestComponent } from './pin-interest/pin-interest.component';
import { WeatherreportComponent } from './weatherreport/weatherreport.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { IdCardComponent } from './id-card/id-card.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { AddidCardComponent } from './addid-card/addid-card.component';
import { AccountComponent } from './account/account.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { AddaccountComponent } from './addaccount/addaccount.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import { IdCarddetalsComponent } from './id-carddetals/id-carddetals.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ErrorComponent,
    HomeComponent,
    GalleryComponent,
    MywebsiteComponent,
    WelcomeComponent,
    DatabindingComponent,
    CalculateComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    LogoutComponent,
    DirectivesComponent,
    EmployeeComponent,
    ProductTaskComponent,
    VehiclesComponent,
    MailComponent,
    FlipkartComponent,
    PinInterestComponent,
    WeatherreportComponent,
    CreateVehicleComponent,
    IdCardComponent,
    CreateuserComponent,
    AddidCardComponent,
    AccountComponent,
    VehicleDetailsComponent,
    AddaccountComponent,
    AccountdetailsComponent,
    IdCarddetalsComponent,
    Sibling1Component,
    Sibling2Component,
    ParentComponent,
    ChildComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
