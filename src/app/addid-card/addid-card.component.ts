import { Component } from '@angular/core';
import { IdCardService } from '../id-card.service';
import { ActivatedRoute, Router } from '@angular/router';
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
           profile_picture:new FormControl(),
           
});

id:number=0;
constructor(private idCardsservice:IdCardService, private _router:Router, private _activatedRoute:ActivatedRoute){
  _activatedRoute.params.subscribe(
    (data:any)=>{
      console.log(data);
      this.id=data.id;
      console.log(this.id);

    idCardsservice.getidCards(this.id).subscribe(
      (data:any)=>{
        console.log(data);
        this.idCardForm.patchValue(data);
      }
    )

    }
  )
}

submit(){
  if(this.id){
     this.idCardsservice.updateidCards(this.id, this.idCardForm.value).subscribe(
    (data:any)=>{
      console.log(data);
      alert("idCard updated successfully");
      this._router.navigateByUrl
      ("dashboard/idCard");
    },(err:any)=>{
      alert("internal server error");
    }
  )
}
else{
  console.log(this.idCardForm.value);
  this.idCardsservice
  .createidCard(this.idCardForm.value).subscribe(
    (data:any)=>{
      alert("idCard added successfully");
      this._router.navigateByUrl("/dashboard/idCard");

    },(err:any)=>{
alert("internal server error")}
  )
}
}}

