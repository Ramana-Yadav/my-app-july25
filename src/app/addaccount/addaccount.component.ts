import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addaccount',
  templateUrl: './addaccount.component.html',
  styleUrls: ['./addaccount.component.css']
})
export class AddaccountComponent {


  public accountForm:FormGroup=new FormGroup({
           account_name:new FormControl,
           account_number:new FormControl(),
           ifsc_code:new FormControl(),
           available_balance:new FormControl(),
           profie_picture:new FormControl(),
           
});

constructor(private _accountServices:AccountService, private _router:Router){}

submit(){
  console.log(this.accountForm.value);
  this._accountServices.createaccount(this.accountForm.value).subscribe(
    (data:any)=>{
      alert(" added successfully");
      this._router.navigateByUrl
      ("dashboard/account");
    },(err:any)=>{
      alert("internal server error");
    }
  )
}



}
