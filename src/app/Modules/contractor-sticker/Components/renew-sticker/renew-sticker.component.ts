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
  selector: 'app-renew-sticker',
  templateUrl: './renew-sticker.component.html',
  styleUrls: ['./renew-sticker.component.scss']
})
export class RenewStickerComponent {
  renew:boolean = true;
  gateaccess:boolean = false;
  restrictaccess:boolean = false;
  approver:boolean = false;
  Init:boolean = true;
  status:boolean = false;
  renewgates:boolean =false;
  renewApprovers:boolean = false;
  nav:boolean = false;
  empname: string;
  nos: string;
  badgenum: string;
  dataSource: any;
  dataSource3: any;
  dataSource4: any;
  dataSource5: any;
  dataSource2: any;
  @ViewChild(MatStepper) stepper: MatStepper;
  constructor(private router: Router, private _location: Location, private dataservice: DataServiceService,  public dialog: MatDialog) { }
  EmpData: any;
  RenewSticker = new FormGroup({
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

  selection = new SelectionModel<any>(true, []);
  displayedColumns = ['select', 'area'];
  displayedColumns2: string[] = ['position', 'name', 'weight', 'symbol'];
  selecteddate: string = '';
  selectedvaltype: string = '';
  selectedname: string = '';
  resValidDate: any;
  ngOnInit() {
    // this.EmpData = event
    console.log(this.dataservice.TempEmpData);
    // this.NewSticker.patchValue = this.dataservice.newsticker_data;
    // console.log(this.NewSticker.value);
    // console.log(this.dataservice.newsticker_data);
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
    this.dataSource3 = new MatTableDataSource<any>(this.dataservice.plant_code);
    console.log(this.dataservice.SelectedGates);
    this.dataSource4 = new MatTableDataSource<any>(this.dataservice.plant_group);
  
    // this.NewSticker.disable();
    // EmployeeName: 'Pavithra', BadgeNumber: 15181042, Sticker: '2/3', Action: 'View More', description:
  }

  back() {
    if(this.approver == true){
 
    }
   else{
     this._location.back();
   }
    
   }
  rgaccess(){
     
     if(this.nav == true){
      this.renew = true
      this.renewgates = true
      this.renewApprovers = true
      this.router.navigateByUrl('main/ContractorSticker/EmployeeStickerDetails');
     }
     else{
      this.renew = false
      this.gateaccess = true
     console.log(this.RenewSticker.value.stickertype)
     }
  }
  rgaccesssubmit(e:any){
   console.log(e);
   if(e == false){  
    if( this.RenewSticker.value.stickertype == 'restrict-0'){
      this.gateaccess = false
      this.renewApprovers = false;
      this.renew = true;
      this.approver = false;
      this.Init = true;
      this.status = true;
      this.renewgates = true;
      this.renewApprovers = false;
      this.nav = true;
      this.dataSource = new MatTableDataSource<any>(
        this.dataservice.SelectedGates
      );
    }
    else{
      this.gateaccess = false
      this.restrictaccess = true;
      this.approver = true;

    }
  }
  else{
    this.gateaccess = false
    this.renewApprovers = false;
    this.renew = true;
    this.approver = false;
    this.renewgates = false;
    this.renewApprovers = false;

  }

  }
  rsarestrictaccess(e:any){
    this.restrictaccess = false
    this.approver = true
    this.renew = false;
    this.dataSource5 = this.dataservice.FinalAddedsApprovers
  }
  rsubmitapprovers(e:any){
    this.renew = true;
    this.approver = false;
    this.Init = true;
    this.status = true;
    this.renewgates = true;
    this.renewApprovers = true;
    this.nav = true;
    this.dataSource = new MatTableDataSource<any>(
      this.dataservice.SelectedGates
    );
    // console.log(this.dataSource);
    this.dataSource2 = new MatTableDataSource<any>(
      this.dataservice.FinalAddedsApprovers
    );

    console.log(this.dataservice.SelectedGates);
    console.log(this.dataservice.FinalAddedsApprovers);
  }


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    console.log(this.selection.select(...this.dataSource.data));
    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      console.log(row);
      console.log(`${this.isAllSelected() ? 'deselect' : 'select'} all`);
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }

  step1Completed:boolean = true;
  step2Completed:boolean = false;
  step3Completed:boolean = false;
  duration:any = '500';
  afterselectedgates:boolean = false;
  Finaldata:boolean = false;
  previous(stepper: MatStepper){
    console.log(stepper.selectedIndex)
      if(stepper.selectedIndex == 0){
        console.log(stepper.selectedIndex)
        this.approver = false;
        this.gateaccess = true;
        stepper.previous()
       }
       else if(stepper.selectedIndex == 1){
        console.log(stepper.selectedIndex)
        this.afterselectedgates = false;
        this.dataservice.FinalAddedsApprovers = [];
        stepper.previous()
       }
       else if(stepper.selectedIndex == 2){
        this.Finaldata = false;
        console.log(stepper.selectedIndex)
        stepper.previous()
       }
  }
  next(stepper: MatStepper){
    console.log(stepper.selectedIndex)
   
     if(stepper.selectedIndex == 0){
      this.step1Completed = true;
      console.log(stepper.selectedIndex)
      this.afterselectedgates = true;
      stepper.next();
     }
     else if(stepper.selectedIndex == 1){
      console.log(stepper.selectedIndex)
      this.step2Completed = true;
      this.dataSource = new MatTableDataSource<any>(
        this.dataservice.SelectedGates
      );
      // console.log(this.dataSource);
      this.dataSource2 = new MatTableDataSource<any>(
        this.dataservice.FinalAddedsApprovers
      );
      this.Finaldata = true;
      stepper.next();
     }
     else if(stepper.selectedIndex == 2){
      console.log(stepper.selectedIndex)
      this.step3Completed = true;
      this.dataservice.FinalAddedsApprovers = [];
      this.dataservice.SelectedGates = [];
      this.approver = false;
      this.gateaccess = false;
      this.renew = true;
      this.spopup();
      console.log(this.dataservice.pagetitle)
      stepper.next();
     }
  }
spopup(){
  console.log(this.dataservice.pagetitle)
  if(this.dataservice.pagetitle == "Renew"){
    var data = {icon:"check_circle_outline",title:"Request Received", content1:"Sticker request received, with the request no.23456", content2:"Please carry the proper Vechile Document at the time of collecting Sticker",url:"/main/ContractorSticker/EmpDetails"}
    const dialogRef = this.dialog.open(RequestReceivedPopupComponent, {height:'auto', width: '437px',data});
    console.log(data);
    dialogRef.afterClosed().subscribe((result) => {
      console.log("dialog closed")
    
    })
  }
  else if(this.dataservice.pagetitle == "Replace"){
    var data = {icon:"check_circle_outline",title:"Request Received", content1:"Sticker request received, with the request no.23456", content2:"Please carry the proper Vechile Document at the time of collecting Sticker",url:"/main/ContractorSticker/EmpDetails"}
    const dialogRef = this.dialog.open(RequestReceivedPopupComponent, {height:'auto', width: '437px',data});
    console.log(data);
    dialogRef.afterClosed().subscribe((result) => {
      console.log("dialog closed")
    
    })
  }
  else if(this.dataservice.pagetitle == "Additional Sticker"){
    var data = {icon:"check_circle_outline",title:"Request Received", content1:"Sticker request received, with the request no.23456", content2:"Please carry the proper Vechile Document at the time of collecting Sticker",url:"/main/ContractorSticker/EmpDetails"}
    const dialogRef = this.dialog.open(RequestReceivedPopupComponent, {height:'auto', width: '437px',data});
    console.log(data);
    dialogRef.afterClosed().subscribe((result) => {
      console.log("dialog closed")
    
    })
  }
  else if(this.dataservice.pagetitle == "Recall"){
    console.log(this.dataservice.pagetitle)
    var data = {icon:"check_circle_outline",title:"Request Received", content1:"Sticker request received, with the request no.23456", content2:"Please carry the proper Vechile Document at the time of collecting Sticker",url:"/main/ContractorSticker/InProcess"}
    const dialogRef = this.dialog.open(RequestReceivedPopupComponent, {height:'auto', width: '437px',data});
    console.log(data);
    dialogRef.afterClosed().subscribe((result) => {
      console.log("dialog closed")
    
    })
  }
  else{
    var data = {icon:"check_circle_outline",title:"collapsed", content1:"err",content2:"",url:"/main/ContractorSticker/EmpDetails"}
    const dialogRef = this.dialog.open(RequestReceivedPopupComponent, {height:'auto', width: '437px',data});
    console.log(data);
    dialogRef.afterClosed().subscribe((result) => {
      console.log("dialog closed")
    
    })
  }
}

}
