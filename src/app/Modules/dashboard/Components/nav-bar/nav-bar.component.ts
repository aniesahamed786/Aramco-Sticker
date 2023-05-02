import { Component } from '@angular/core';
interface navBarModel{
  vendorNo:string,
  vendorName: string,
  vendorAddress: string,
  positioncode:string,
  positionname:string,
  orgcode: string,
  orgname: string,
  badgeno: string,

}
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  NavbarData : navBarModel = {} as navBarModel;
  GeneralData : any ;

}
