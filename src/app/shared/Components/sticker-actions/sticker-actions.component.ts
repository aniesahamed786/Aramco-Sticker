import { Component, ViewChild } from '@angular/core';
import { ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SelectionModel } from '@angular/cdk/collections';
import { DataServiceService } from 'src/app/Services/data-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
@Component({
  selector: 'app-sticker-actions',
  templateUrl: './sticker-actions.component.html',
  styleUrls: ['./sticker-actions.component.scss']
})
export class StickerActionsComponent {
  @ViewChild(MatStepper) stepper: MatStepper;
  empname: any;
  badgenum: any;
  nos: any;
  EmployeesData: any;
  VechicleDetails: any;
  StickerDetails: any;
  AllowedHours: any;
  ActiveForm: boolean = false;
  constructor(private router: Router, private _location: Location, private dataservice: DataServiceService) { }

  StickerActions = new FormGroup({
    type: new FormControl(this.dataservice.stickeractions_data[0].type),
    make: new FormControl(this.dataservice.stickeractions_data[0].make),
    model: new FormControl(this.dataservice.stickeractions_data[0].model),
    year: new FormControl(this.dataservice.stickeractions_data[0].year),

    primarycolor: new FormControl(
      this.dataservice.stickeractions_data[0].primarycolor
    ),
    secondarycolor: new FormControl(
      this.dataservice.stickeractions_data[0].secondarycolor
    ),
    orgin: new FormControl(this.dataservice.stickeractions_data[0].orgin),
    owner: new FormControl(this.dataservice.stickeractions_data[0].owner),

    platecategory: new FormControl(
      this.dataservice.stickeractions_data[0].platecategory
    ),
    licenseplateno: new FormControl(
      this.dataservice.stickeractions_data[0].licenseplateno
    ),

    stickeroffice: new FormControl(
      this.dataservice.stickeractions_data[0].stickeroffice
    ),
    expiry: new FormControl(this.dataservice.stickeractions_data[0].expiry),

    company: new FormControl(this.dataservice.stickeractions_data[0].company),
    stickertype: new FormControl(
      this.dataservice.stickeractions_data[0].stickertype
    ),

    starttime: new FormControl(this.dataservice.stickeractions_data[0].starttime),
    endtime: new FormControl(this.dataservice.stickeractions_data[0].endtime),

  })
  types: any ;
  Contractor_Types: any = [
    { value: 'restrict-0', viewValue: 'Contractor Restricted' },
    { value: 'nonrestrict-1', viewValue: 'Contractor Non-Restricted' }
  ]

  selection = new SelectionModel<any>(true, []);
  Title:string;
  ngOnInit(){
    this.EmployeesData = this.dataservice.selectedcontracts.Viewdetails;
    this.VechicleDetails = this.dataservice.TempEmpData.ViewMore[0].Action[0].VechicleDetails[0]
    this.StickerDetails = this.dataservice.TempEmpData.ViewMore[0].Action[0].StickerDetails[0]
    this.AllowedHours = this.dataservice.TempEmpData.ViewMore[0].Action[0].AllowedHours[0]
    console.log(this.VechicleDetails, this.StickerDetails, this.AllowedHours)
    this.empname = this.dataservice.TempEmpData.EmployeeName
    this.badgenum = this.dataservice.TempEmpData.BadgeNumber
    this.nos = this.dataservice.TempEmpData.Sticker
    this.Title = this.dataservice.pagetitle
   console.log(this.dataservice.stickeractions_data[0].type)
   console.log(this.dataservice.stickeractions_data[0]);
   this.types = [
    { value: this.VechicleDetails.LicenseplateNo, viewValue: 'Steak' },
    { value: this.VechicleDetails.Make, viewValue: 'Pizza' },
    { value: this.VechicleDetails.Model, viewValue: 'Tacos' },
    { value: this.VechicleDetails.Origin, viewValue: 'Steak' },
    { value: this.VechicleDetails.Owner, viewValue: 'Pizza' },
    { value: this.VechicleDetails.PlateCategory, viewValue: 'Tacos' },
    { value: this.VechicleDetails.Primary, viewValue: 'Steak' },
    { value: this.VechicleDetails.SecondaryColor, viewValue: 'Pizza' },
    { value: this.VechicleDetails.Type, viewValue: 'Tacos' },
    { value: this.VechicleDetails.Year, viewValue: 'Steak' },
    { value: this.StickerDetails.Company, viewValue: 'Pizza' },
    { value: this.StickerDetails.Expiry, viewValue: 'Tacos' },
    { value: this.StickerDetails.StickerOffice, viewValue: 'Tacos' },
    { value: this.StickerDetails.StickerType, viewValue: 'Tacos' },
    { value:  this.AllowedHours.EndTime, viewValue: 'Tacos' },
    { value:  this.AllowedHours.StartTime, viewValue: 'Tacos' },
   ]
   this.StickerActions.disable();
   console.log(this.StickerActions)
  }
  // EndTime
  // : 
  // "12:00PM"
  // StartTime
  // : 
  // "12:00AM"

  back() {
    // this._location.back();
    this.router.navigateByUrl('/main/ContractorSticker/EmployeeStickerDetails');
  }

  actions(){
    // this.StickerActions.patchValue({
    //   type:'ISO',
    // make: 'MAKE',
    // model: 'QATR 65',
    // year: '2023',
    // })
   this.StickerActions = this.StickerActions
  //  this.ActiveForm = true;
  //  this.StickerActions.disable();
    console.log(this.StickerActions.getRawValue())
  }
}
