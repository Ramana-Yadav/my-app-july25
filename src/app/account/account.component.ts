import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

   account:any[]=[];
  
constructor(private  _accountServices:AccountService){
  this.loadaccount();
}
loadaccount(){
  this._accountServices.getaccount().subscribe(
    (data:any)=>{
      console.log(data);
      this.account=data;
      console.log("account data:", this.account);
     },(err:any)=>{
      alert("internal server error");
     }
  )
}
searchKeyword:string='';
search(){
  this._accountServices.getFilterdaccount(this.searchKeyword).subscribe(
    (data:any)=>{
      console.log(data);
      this.account=data;
      console.log("account data:", this.account);
     },(err:any)=>{
      alert("internal server error");
     }
    )
}


columnName:string='';
sortorder:string='';
sort(){
  this._accountServices.getSortedaccount(this.columnName,this.sortorder).subscribe(
    (data:any)=>{
      console.log(data);
      this.account=data;
      // console.log("account data:", this.account);
     },(err:any)=>{
      alert("internal server error");
     }
    )
}

items:number=0;
pageNumber:number=0;
pagination(){
  this._accountServices.getPaginatedaccount(this.items,this.pageNumber).subscribe(
    (data:any)=>{
      console.log(data);
      this.account=data;
      // console.log("account data:", this.account);
     },(err:any)=>{
      alert("internal server error");
     }
    )
  }
    
delete(id:any){

  if (confirm("Are You Sure To Delete?")==true) {
    this._accountServices.deleteaccount(id).subscribe(
      (data:any)=>{
        alert("record deleted successfully");
        
      },(err:any)=>{
        alert("internal server error");
         this.loadaccount();
      })
     
  } else {
    alert("you have cancelled the delete");
    
  }
}
}

