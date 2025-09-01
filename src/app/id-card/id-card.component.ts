import { Component } from '@angular/core';
import { IdCardService } from '../id-card.service';

@Component({
  selector: 'app-id-card',
  templateUrl: './id-card.component.html',
  styleUrls: ['./id-card.component.css']
})
export class IdCardComponent {
 Cards:any[]=[];
   constructor(private  idCardservices:IdCardService){
    this.loadstudentdetails();
   }
   loadstudentdetails(){
   this.idCardservices.getidCard().subscribe(
     (data:any)=>{
       console.log(data);
       this.Cards=data;
        console.log("data:", this.Cards);
      },(err:any)=>{
       alert("internal server error");
      })
     }

//filtered IdCards

searchKeyword:string='';
search(){
  this.idCardservices.getFilterdidCard(this.searchKeyword).subscribe(
    (data:any)=>{
      console.log(data);
      this.Cards=data;
      // console.log("vehicles data:", this.vehicles);
     },(err:any)=>{
      alert("internal server error");
     }
    )
}
//sorting

columnName:string='';
sortorder:string='';
sort(){
  this.idCardservices.getSortedidCard(this.columnName,this.sortorder).subscribe(
    (data:any)=>{
      console.log(data);
      this.Cards=data;
      // console.log("vehicles data:", this.vehicles);
     },(err:any)=>{
      alert("internal server error");
     }
    )
}

//paginated
items:number=0;
pageNumber:number=0;
pagination(){
  this.idCardservices.getPaginatedidCard(this.items,this.pageNumber).subscribe(
    (data:any)=>{
      console.log(data);
      this.Cards=data;
      // console.log("account data:", this.account);
     },(err:any)=>{
      alert("internal server error");
     }
    )
  }




//deleting by id

delete(id:any){

  if (confirm("Are You Sure To Delete?")==true) {
    this.idCardservices.deleteidCard(id).subscribe(
      (data:any)=>{
        alert("record deleted successfully")
        
      },(err:any)=>{
        alert("internal server error")
         this.loadstudentdetails();
      })
     
  } else {
    alert("you have cancelled the delete")
    
  }
}
}
