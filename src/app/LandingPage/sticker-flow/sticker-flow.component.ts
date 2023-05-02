import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sticker-flow',
  templateUrl: './sticker-flow.component.html',
  styleUrls: ['./sticker-flow.component.scss']
})
export class StickerFlowComponent {
   users:any = [
    {name:"contractor Stricker", icon:'', subheader:''},
    {name:"Employee Stricker", icon:'', subheader:'Temporary Digital Sticker'},
    {name:"Org Rep Login", icon:'', subheader:'Aramco Vechile Replacement'}
   ];
   constructor(private router: Router) { }
   navigate(user:any){
      console.log(user.name);
      if(user.name == "contractor Stricker"){
        this.router.navigateByUrl('main/ContractorSticker');
      }
      else if(user.name == "Employee Stricker"){
        this.router.navigateByUrl('main/es');
      }
      else{
        this.router.navigateByUrl('main/or');

      }
   }
}
