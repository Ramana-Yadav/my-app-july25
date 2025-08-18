import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  isMorning:boolean=true;

  state:string="telangana";
  states:string[]=["andhra pradesh",'telangana','kerala','karnataka','tamilnadu','delhi'];
  prices:number[]=[10,76,45,87,43,898];


  products:string[]=['fruits','vegetables','electronics','mobiles'];


}
