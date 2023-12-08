import { Injectable } from '@angular/core';
import { Genral } from '../models/genral.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private general : Genral[] = [];
  constructor(private _http :HttpClient) { }

  retrieveData() : void{
     this._http.get('../assets/data/general_data.json').subscribe({
      next : (genral :any) =>{
        this.general = genral;
      },
      complete : () => {
        console.log(this.general);
        // subscription.unsubscribe();
      },
      error : (msg : string) => {
        console.log("error: " + msg);
        // subscription.unsubscribe();
      }
    })
  }

}
