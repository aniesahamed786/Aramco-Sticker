import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SelectionModel } from '@angular/cdk/collections';
import { DataServiceService } from 'src/app/Services/data-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { SearchEmployeeComponent } from 'src/app/shared/Dialogs/search-employee/search-employee.component';
import { PopupdialogComponent } from 'src/app/shared/Dialogs/popupdialog/popupdialog.component';
import { RequestReceivedPopupComponent } from 'src/app/shared/Dialogs/request-received-popup/request-received-popup.component';
@Component({
  selector: 'app-employee-sticker-details',
  templateUrl: './employee-sticker-details.component.html',
  styleUrls: ['./employee-sticker-details.component.scss'],
})
export class EmployeeStickerDetailsComponent {
  Title:string = "";
  gateaccess: boolean = false;
  addrestrictaccess:boolean = false;
  stickerdetails: boolean = true;
  addapprovers:boolean = false;
  displayedColumns = ['selectedgates', 'area'];
  displayedColumns2 = ['plantcode', 'validity', 'expirydate'];
  dataSource: any;
  dataSource2: any;
  plantcodedataSource:any;
  plantgroupdataScource:any;
  foods: any = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
  dataSource3: any;
  dataSource4: any;
  dataSource5: any;
  empname: string;
  badgenum: string;
  nos: string;
  VechicleDetails:any;
  StickerDetails:any;
   AllowedHours:any;
  EmployeesData: any;
  stickeractions:boolean = false;
  StickerActionHeader: boolean = false;
  constructor(
    private router: Router,
    private _location: Location,
    private dataservice: DataServiceService,
    public dialog: MatDialog
  ) { }

  myGroup1 = new FormGroup({
    name: new FormControl(),
  });
  myGroup2 = new FormGroup({
    Search2: new FormControl(),
  });
  // myGroup3 = new FormGroup({
  //   Search3: new FormControl()
  // });

  ngOnInit() {
    console.log(this.dataservice.TempEmpData);
    this.EmployeesData = this.dataservice.selectedcontracts.Viewdetails;
    // this.NewSticker.patchValue = this.dataservice.newsticker_data;
    // console.log(this.NewSticker.value);
    // console.log(this.dataservice.newsticker_data);
    this.empname = this.dataservice.TempEmpData.EmployeeName
    this.badgenum = this.dataservice.TempEmpData.BadgeNumber
    this.nos = this.dataservice.TempEmpData.Sticker
    
    this.VechicleDetails = this.dataservice.TempEmpData.ViewMore[0].Action[0].VechicleDetails[0]
    this.StickerDetails = this.dataservice.TempEmpData.ViewMore[0].Action[0].StickerDetails[0]
    this.AllowedHours = this.dataservice.TempEmpData.ViewMore[0].Action[0].AllowedHours[0]
    console.log(this.VechicleDetails, this.StickerDetails, this.AllowedHours)
    
    // PersonalDetails: Array(1), VechicleDetails: Array(1), StickerDetails: Array(1), AllowedHours: Array(1)
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
    // this.dataSource2 = new MatTableDataSource<any>(
    //   this.dataservice.CurrentRestrictedAccess
    // );
    this.plantcodedataSource = new MatTableDataSource<any>(
      this.dataservice.CurrentRestrictedAccess
    );
    this.plantgroupdataScource = new MatTableDataSource<any>(
      this.dataservice.CurrentRestrictedAccess
    );
    console.log(this.dataSource2)
    this.dataSource3 = new MatTableDataSource<any>(this.dataservice.plant_code);
    console.log(this.dataservice.SelectedGates);
    this.dataSource4 = new MatTableDataSource<any>(this.dataservice.plant_group);
    console.log(this.dataSource2)


    let sadata = this.dataservice.stickeractions_data[0]
    sadata.company= this.StickerDetails.Company,
    sadata.endtime= this.AllowedHours.StartTime,
    sadata.expiry= this.StickerDetails.Expiry,
    sadata.licenseplateno=this.VechicleDetails.LicenseplateNo,
    sadata.make= this.VechicleDetails.Make,
    sadata.model= this.VechicleDetails.Model,
    sadata.orgin= this.VechicleDetails.Origin,
    sadata.owner= this.VechicleDetails.Owner,
    sadata.platecategory= this.VechicleDetails.PlateCategory,
    sadata.primarycolor= this.VechicleDetails.Primary,
    sadata.secondarycolor= this.VechicleDetails.SecondaryColor,
    sadata.starttime= this.AllowedHours.EndTime,
    sadata.stickeroffice= this.StickerDetails.StickerOffice,
    sadata.stickertype= this.StickerDetails.StickerType,
    sadata.type= this.VechicleDetails.Type,
    sadata.year= this.VechicleDetails.Year;



    // StartTime: '12:00AM', EndTime: '12:00PM
    console.log(sadata)
    console.log(this.dataservice.stickeractions_data)
  }

  back() {
    this._location.back();
  }

  addgates() {
    this.stickerdetails = false;
    this.gateaccess = true;
    console.log(this.dataservice.SelectedGates);
  }
addaccess(){
  this.stickerdetails = false;
  this.addrestrictaccess = true;
}


  aftersubmit(e: boolean) {
    if(e == true){
      this.stickerdetails = e;
      this.gateaccess = false;
    }
    else if(e == false){
      this.stickerdetails = true;
      this.gateaccess = e;
      this.dataSource = new MatTableDataSource<any>(
        this.dataservice.SelectedGates
      );
      console.log(this.dataservice.SelectedGates);
    }
  }
  afterrestrictaccess(e:boolean){
    if(e == true){
      this.stickerdetails = e;
      this.addrestrictaccess = false;
      this.addapprovers = false;
      this.dataservice.FinalAddedsApprovers = []
    }
    else if(e == false){
      this.stickerdetails = false;
      this.addrestrictaccess = e;
      this.addapprovers = true;
      this.dataSource5 = this.dataservice.FinalAddedsApprovers
      // this.dataSource = new MatTableDataSource<any>(
      //   this.dataservice.SelectedGates
      // );
    }
  }
  aftersubmitapprover(e:boolean){
    if(e == true){
      this.stickerdetails = false;
      this.addrestrictaccess = true;
      this.addapprovers = false;
      this.dataservice.FinalAddedsApprovers = []
    }
    else if(e == false){
      this.stickerdetails = true;
      this.addrestrictaccess = e;
      this.addapprovers = e;
      this.dataSource2 = this.dataservice.FinalAddedsApprovers;
    }
  }
  NewSticker(){
    // console.log(e);
    this.openDialog();

  }

  // searchemp(e: any) {
  //   console.log(e);
  //   this.openDialog();
  // }

  openDialog(): void {
    var data = this.EmployeesData;
    const dialogRef = this.dialog.open(SearchEmployeeComponent, {
      data,
    });
    console.log(data);
    // EmployeeName: 'Gopika', BadgeNumber: 
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  lost(){
    var data = {title:"Lost Sticker", content:"Sticker lost information, will be saved on submission"}
    const dialogRef = this.dialog.open(PopupdialogComponent, {height:'180px', width: '400px',data});
    console.log(data);
    dialogRef.afterClosed().subscribe((result) => {
      console.log("dialog closed")
    })
  }

  actions(value:string){
    console.log(value)
    this.dataservice.pagetitle = value;
    this.Title = value;
    this.StickerActionHeader = true;
    this.stickeractions = true;
    this.stickerdetails = false;
  }
  cancel(){
    this.stickeractions = false;
    this.stickerdetails = true;
  }
  backaction(){
    this.cancel();
    this.StickerActionHeader = false;
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
  RequestSubmitted(){
    var data = {icon:"check_circle_outline",title:"Request Submitted", content1:"Information Submitted, with the request No.23456", content2:"",url:"/main/ContractorSticker/EmpDetails"}
    const dialogRef = this.dialog.open(RequestReceivedPopupComponent, {height:'auto', width: '400px',data});
    console.log(data);
    console.log(this.dataservice.pagetitle);
    dialogRef.afterClosed().subscribe((result) => {
      console.log("dialog closed")
    })
  }
  continue(){
      if(this.dataservice.pagetitle == "Renew"){
        this.RequestReceived();
      }
      else if(this.dataservice.pagetitle == "Change"){
        this.RequestSubmitted();
      }
      else if(this.dataservice.pagetitle == "Cancel"){
        this.RequestSubmitted();
      }
      else if(this.dataservice.pagetitle == "Replace"){
        this.RequestReceived();
      }
      else if(this.dataservice.pagetitle == "Additional"){
        this.RequestReceived();
      }
  }

  plantcodesearch(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.plantcodedataSource.filter = filterValue.trim().toLowerCase();
  }
  plantgroupsearch(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.plantgroupdataScource.filter = filterValue.trim().toLowerCase();
  }


  // applyColumnFilter(filterValue: string) {
  //   filterValue = filterValue.trim().toLowerCase(); // remove whitespace and convert to lowercase
  //   this.dataSource.filterPredicate = (data: any, filter: string) => {
  //     return data.column1.trim().toLowerCase().indexOf(filter) !== -1; // apply filter to column1
  //   };
  //   this.dataSource.filter = filterValue;
  // }
  
}
