import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Mascota} from '../models/mascota.model';
@Injectable({
  providedIn: 'root'
})
export class RescueService {
  private pets : Mascota[] =[];
  constructor(private _http: HttpClient) { }
  retrieveData(): void {
      this._http.get("../assets/data/pets_data.json").subscribe({
      next: (Mascotas : any) =>{
        this.pets = Mascotas.pets;
      },
      complete: () => {
      },
      error: (msg:string) => {
        alert("error");
      },
    })
  }
}
