import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

//api Url optimization
apiUrl:string='https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction';

  constructor(private _httpClient:HttpClient) { }
  getvehicles():Observable<any>{
    return this._httpClient.get(this.apiUrl);
  }
   
  getvehicle(id:any):Observable<any>{
    return this._httpClient.get(this.apiUrl+'/'+id);
  }




   getFilterdvehicles(term:any):Observable<any>{
    return this._httpClient.get(this.apiUrl+'?filter='+term);
  }

   getSortedvehicles(column:any,order:any):Observable<any>{
    return this._httpClient.get(this.apiUrl+'?sortby='+column+'&order='+order);
  }

  

getPaginatedvehicles(limit:any,page:any):Observable<any>{
    return this._httpClient.get(this.apiUrl+'?limit='+limit+'&page='+page);
  }
  

deleteVehicle(id:any):Observable<any>{
    return this._httpClient.delete(this.apiUrl+'/'+id);
  }

  createVehicle(data:any):Observable<any>{
    return this._httpClient.post('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/',data);
  }

  updateVehicle(id:any, data:any):Observable<any>{
    return this._httpClient.put(this.apiUrl+'/'+id,data);
  }

}
