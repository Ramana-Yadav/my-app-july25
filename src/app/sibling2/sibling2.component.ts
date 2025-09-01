import { Component } from '@angular/core';
import { CommonsiblingService } from '../commonsibling.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component {

  count:number=0;

  constructor(private _commonsiblingService:CommonsiblingService){
    _commonsiblingService.countSubject.subscribe(
      (data:any)=>{
        //console.log(data);
        this.count=data;
      }
    )
  }

}
