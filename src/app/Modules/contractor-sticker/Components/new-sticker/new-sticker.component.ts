import { Component, ViewChild } from '@angular/core';
import { ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SelectionModel } from '@angular/cdk/collections';
import { DataServiceService } from 'src/app/Services/data-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { RequestReceivedPopupComponent } from 'src/app/shared/Dialogs/request-received-popup/request-received-popup.component';
@Component({
  selector: 'app-new-sticker',
  templateUrl: './new-sticker.component.html',
  styleUrls: ['./new-sticker.component.scss']
})
export class NewStickerComponent {
  newsticker:boolean = true;
  gates:boolean = false;
  approver:boolean = false;
  empname: any;
  nos: any;
  badgenum: any;
  dataSource: any;
  step1Completed = false;
  step2Completed = false;
  step3Completed = false;
  duration:string = "500"
  isLinear = true;
  btntext:string = "Continue"
  interacted:boolean = false;
  afselgates:boolean = false;
  Finaldata:boolean = false;
  step1style:string = "rgb(0 173 229);"
  step2style:string = "black;"
  step3style:string = "black;"
  @ViewChild(MatStepper) stepper: MatStepper;
  @Output() step1: EventEmitter<boolean> = new EventEmitter();
  @Output() step2: EventEmitter<boolean> = new EventEmitter();
  @Output() step3: EventEmitter<boolean> = new EventEmitter();
  constructor(private router: Router, private _location: Location, private dataservice: DataServiceService,  public dialog: MatDialog) { }
  EmpData: any;
  NewSticker = new FormGroup({
    type: new FormControl('type'),
    make: new FormControl(''),
    model: new FormControl(''),
    year: new FormControl(''),

    primarycolor: new FormControl(''),
    secondarycolor: new FormControl(''),
    orgin: new FormControl(''),
    owner: new FormControl(''),

    platecategory: new FormControl(''),
    licenseplateno: new FormControl(''),

    stickeroffice: new FormControl(''),
    expiry: new FormControl(''),

    company: new FormControl(''),
    stickertype: new FormControl(''),

    starttime: new FormControl(''),
    endtime: new FormControl(''),

  })
  types: any = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
Contractor_Types: any = [
  { value: 'restrict-0', viewValue: 'Contractor Restricted' },
  { value: 'nonrestrict-1', viewValue: 'Contractor Non-Restricted' }
]
  ngOnInit() {
    // this.EmpData = event
    console.log(this.dataservice.TempEmpData);
    this.NewSticker.patchValue = this.dataservice.newsticker_data;
    console.log(this.NewSticker.value);
    console.log(this.dataservice.newsticker_data);
    this.empname = this.dataservice.TempEmpData.EmployeeName
    this.badgenum = this.dataservice.TempEmpData.BadgeNumber
    this.nos = this.dataservice.TempEmpData.Sticker
    // this.dataSource = new MatTableDataSource<any>(
    //   this.dataservice.SelectedGates
    // );

    this.dataservice.getselectedgates().subscribe(res =>{
      // this.contractors = res
      console.log(res);
      this.dataSource = new MatTableDataSource<any>(res);
      // this.dataSource.sort = this.sort;
      // this.setDataSourceAttributes();
})
    // this.NewSticker.disable();
    // EmployeeName: 'Pavithra', BadgeNumber: 15181042, Sticker: '2/3', Action: 'View More', description:
  }

  receivedempdata(event: any) {
    this.EmpData = event
    console.log(event);
  }

 
  gateaccess() {
    // this.router.navigateByUrl('/main/ContractorSticker/NewSticker/GateAccess');
    this.gates = true;
    this.newsticker = false;
    console.log(this.dataservice.newsticker_data)
    console.log([this.NewSticker.value]);
    this.dataservice.newsticker_data = [this.NewSticker.value]
  }
  disableform() {
    // this.NewSticker.enable();
  }
  rgaccesssubmit(e:any){
    console.log(e);
    if(e == true){
      this.gates = false;
      this.newsticker = e;
    }
    else if(e == false){
    console.log(e)
    this.gates = e;
    this.newsticker = e;
    this.approver = true;
    }
  }

  next(stepper: MatStepper) {
  
    // stepper.selected.editable = false;
    // console.log(stepper,stepper.selectedIndex,stepper.selected?.completed)
    // console.log(stepper.selected?._markAsInteracted)
    if(stepper.selectedIndex == 0){
      // this.dataservice.PlantCode_PlantGroup_data.plantcode = this.selectedPlantcode
      // this.dataservice.PlantCode_PlantGroup_data.plantgroup = this.selectedPlantgrp
      // this.step1.emit(true);
      this.step1Completed = true;
      this.step1style = "rgb(0 173 229);"
      console.log(stepper.selectedIndex,"calling the event")
      this.afselgates = true;
      stepper.next()
    }
    else if(stepper.selectedIndex == 1){
      this.step2Completed = true;
      this.step2style = "#00ADE5;"
      console.log(stepper.selectedIndex)
      this.Finaldata = true;
      this.btntext = "Submit"
      stepper.next()
    }
    else if(stepper.selectedIndex == 2){
      this.step3Completed = true;
      this.step3style = "#00ADE5;"
      console.log(stepper.selectedIndex)
      this.RequestReceived();
    
    }
    else{
     
    }
   
  }
  GetRA(e:any){
    console.log(e,"getting the event")
  }


  previous(stepper:MatStepper){
    console.log(stepper,stepper.selectedIndex,stepper.selected?.completed)
    console.log(stepper.selected?._markAsInteracted())
    if(stepper.selectedIndex == 0){
      this.gates = true;
      this.approver = false;
      console.log(this.approver)
    }
    else if(stepper.selectedIndex == 1){
      this.afselgates = false;
      this.dataservice.FinalAddedsApprovers = [];
      stepper.previous()
    }
    else if(stepper.selectedIndex == 2){
      this.Finaldata = false;
      stepper.previous()
    }
  }

 
  RequestReceived(){
    var data = {icon:"check_circle_outline",title:"Request Received", content1:"Sticker request received, with the request no.23456", content2:"Please carry the proper Vechile Document at the time of collecting Sticker",url:"/main/ContractorSticker/EmpDetails"}
        const dialogRef = this.dialog.open(RequestReceivedPopupComponent, {height:'auto', width: '437px',data});
        console.log(data);
        console.log(this.dataservice.pagetitle);
        dialogRef.afterClosed().subscribe((result) => {
          console.log("dialog closed")
        })
  }

  back() {
   if(this.approver == true){

   }
   else if(this.gates == true){
     this.gates = false;
     this.approver = false;
     this.newsticker = true;
   }
  else{
    this._location.back();
  }
   
  }
 

}
