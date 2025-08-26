import { Component } from '@angular/core';
import { IdCardService } from '../id-card.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addid-card',
  templateUrl: './addid-card.component.html',
  styleUrls: ['./addid-card.component.css']
})
export class AddidCardComponent {

    public idCardForm:FormGroup=new FormGroup({
           name:new FormControl,
           phone:new FormControl(),
           city:new FormControl(),
           dob:new FormControl(),
           email:new FormControl(),
           id:new FormControl(),
           profile_picture:new FormControl(),
           
});

constructor(private idCardservices:IdCardService, private _router:Router){}

submit(){
  console.log(this.idCardForm.value);
  this.idCardservices.createidCard(this.idCardForm.value).subscribe(
    (data:any)=>{
      alert(" added successfully");
      this._router.navigateByUrl
      ("dashboard/idCard");
    },(err:any)=>{
      alert("internal server error");
    }
  )
}

}
