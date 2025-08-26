import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

 constructor(private _httpClient:HttpClient) { }
      getaccount():Observable<any>{
        return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals');
      }

//filter idCard

 getFilterdaccount(term:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter='+term);
  }

  //sorting
   getSortedaccount(column:any,order:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortby='+column+'&order='+order);
  }

  //paginated

  getPaginatedaccount(limit:any,page:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit='+limit+'&page='+page);
  }



  
  //delete
  deleteaccount(id:any):Observable<any>{
    return this._httpClient.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/principals/' +id);
  }

//create new

//  createaccount(data:any):Observable<any>{
//     return this._httpClient.post('https://6128991386a213001729f9df.mockapi.io/test/v1/principals/',data);
//   }


}
