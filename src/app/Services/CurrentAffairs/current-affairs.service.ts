import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { CurrentAffairsMasters} from '../../Entity/CurrentAffairsMaster';

@Injectable({
  providedIn: 'root'
})
export class CurrentAffairsService {

  BaseURL: string = "http://nias.codelovertechnology.com/api/";
  
  constructor(private _http:HttpClient){}
  
   getCurrentAffairsInfo():any{
    return this._http.get(this.BaseURL+"CurrentAffairsMasters/CurrentAffairsMastersList");
  }

   postCurrentAffairs(Current: CurrentAffairsMasters):any{
    return this._http.post<any>(this.BaseURL+"CurrentAffairsMasters/CreateCurrentAffairsMasters",Current);
  }
}
