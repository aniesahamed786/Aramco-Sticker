import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contractor-access',
  templateUrl: './contractor-access.component.html',
  styleUrls: ['./contractor-access.component.scss']
})
export class ContractorAccessComponent {
  constructor(private router: Router) { }

  toidcard(value: string) {
    // this.landingData.tileSel = value;
    // this.idshared.setLandingdata(this.landingData);
   
  }
  toSticker(value: string) {
    this.router.navigateByUrl('main/ContractorSticker');

  }
  toTp(value: string) {

  }


}
