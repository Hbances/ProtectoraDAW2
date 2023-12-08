import { Component } from '@angular/core';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  generalData: any  ;
  constructor(private _generalService : GeneralService) {
    this._generalService.retrieveData();
  }

}
