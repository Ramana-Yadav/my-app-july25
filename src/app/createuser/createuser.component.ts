import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent {
  public userForm:FormGroup=new FormGroup({
    name:new FormControl('', [Validators.required,Validators.minLength(6), Validators.maxLength(10)]),
    email:new FormControl(),
    password:new FormControl(),
    mobile:new FormControl(),
    address:new FormGroup({
      city:new FormControl(),
      state:new FormControl(),
      pincode:new FormControl(),
    }),

 
//DynamicForms
type: new FormControl(),



cards:new FormArray([])  //Form Array

 })
//Form Array
get cardsFormArray(){
  return this.userForm.get('cards') as FormArray;
}

addcard(){
  this.cardsFormArray.push(
    new FormGroup({
      cardnumber:new FormControl(),
      expiry:new FormControl(),
      cvv:new FormControl(),
    })
  )
}

delete(index:any){
  this.cardsFormArray.removeAt(index);
}





 constructor(){
this.userForm.get('type')?.valueChanges.subscribe((data:any)=>
{
  if(data=='residential'){
    this.userForm.addControl('hostelfee',new FormControl);
    this.userForm.removeControl('busfee');
  }else{
     this.userForm.addControl('busfee',new FormControl);
    this.userForm.removeControl('hostelfee');

  }

}
)


 }
  submit(){
    console.log(this.userForm.value)
  }

}
