import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdCardService } from '../id-card.service';

@Component({
  selector: 'app-id-carddetals',
  templateUrl: './id-carddetals.component.html',
  styleUrls: ['./id-carddetals.component.css']
})
export class IdCarddetalsComponent {
  id:number=0;
idCards:any={};
constructor(private  _activatedRoute:ActivatedRoute, private idCardsService:IdCardService){
_activatedRoute.params.subscribe(
  (data:any)=>{
    console.log(data);
    this.id=data.id;
    console.log(this.id);

  idCardsService.getidCards(this.id).subscribe(
    (data:any)=>{
      console.log(data);
      this.idCards=data;
     },(err:any)=>{
      alert("internal server ")
     }
  )


  }
)

}
}


