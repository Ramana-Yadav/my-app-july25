import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdCardService {

  constructor(private _httpClient:HttpClient) { }
      getidCard():Observable<any>{
        return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student');
      }

  //view details

getidCards(id:any):Observable<any>{
        return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student/'+id);
      }


//filter idCard

 getFilterdidCard(term:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter='+term);
  }

  //sorting
   getSortedidCard(column:any,order:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortby='+column+'&order='+order);
  }
  
  //delete
  deleteidCard(id:any):Observable<any>{
    return this._httpClient.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/student/'+id);
  }

//create new

 createidCard(data:any):Observable<any>{
    return this._httpClient.post('https://6128991386a213001729f9df.mockapi.io/test/v1/student/',data);
  }
//paginated

getPaginatedidCard(limit:any,page:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit='+limit+'&page='+page);
  }

//update/edit the details

updateidCards(id:any, data:any):Observable<any>{
    return this._httpClient.put('https://6128991386a213001729f9df.mockapi.io/test/v1/student/'+id,data);
  }


}


