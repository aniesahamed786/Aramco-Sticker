import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import {SelectionModel} from '@angular/cdk/collections';
import { DataServiceService } from 'src/app/Services/data-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { ResechedulePopupComponent } from 'src/app/shared/Dialogs/resechedule-popup/resechedule-popup.component';
@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.scss']
})
export class ViewRequestComponent {
  
  displayedColumns = ['selectedgates', 'area'];
  displayedColumns2 = ['plantcode','validity','expirydate',];
  dataSource:any;
  dataSource2:any;
  viewreq:boolean = true;
  recallreq: boolean = false;
  approverslist:string[] = ["1","2","3"]
  foods: any = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  RenewalForm = new FormGroup({
    'Badge_Number':new FormControl(''),
    'EmpName': new FormControl(''),
    'Nofsticker':new FormControl(''),
    'Type':new FormControl(''),
    'Primary Color':new FormControl(''),
    'Plate Category':new FormControl(''),
    'Make':new FormControl(''),
    'Secondary Color':new FormControl(''),
    'License Plate No':new FormControl(''),
    'Model':new FormControl(''),
    'Orgin':new FormControl(''),
    'Year':new FormControl(''),
    'Owner':new FormControl(''),
    // 'StickerOffice':new FormControl(''),
    'Company':new FormControl(''),
    'Expiry':new FormControl(''),
    'StickerType':new FormControl(''),
    'StartTime':new FormControl(''),
    'EndTime':new FormControl(''),
    'StickerOffice':new FormControl(''),
    'DateandTime':new FormControl(''),
  });


  
      BadgeNumber:string
      EmployeeName:string
      No_of_Sticker:string
      Type:string
      Primary_Color:string
      Plate_Category:string 
      Make:string 
      Secondary_Color: string 
      License_Plate_No:string
      Model:string
      Orgin:string 
      Year:string 
      Owner:string 
      Sticker_Office:string
      Company:string
      Expiry:string 
      Sticker_Type:string 
      StartTime:string 
      EndTime:string 
  
  
  constructor(private router : Router, public dialog: MatDialog,private _location: Location, private dataservice: DataServiceService) { }



// myGroup3 = new FormGroup({
//   Search3: new FormControl()
// });
  
  ngOnInit(){
    // this.dataSource = new MatTableDataSource<any>(this.dataservice.SelectedGates);
    this.dataservice.getselectedgates().subscribe(res =>{
      // this.contractors = res
      console.log(res);
      this.dataSource = new MatTableDataSource<any>(res);
      // this.dataSource.sort = this.sort;
      // this.setDataSourceAttributes();
})
    this.dataSource2 = new MatTableDataSource<any>(this.dataservice.CurrentRestrictedAccess);
    console.log(this.dataservice.InprocessTempEmpData)
    this.BadgeNumber=this.dataservice.InprocessTempEmpData.PersonalDetails[0].BadgeNumber
    this.EmployeeName=this.dataservice.InprocessTempEmpData.PersonalDetails[0].EmployeeName
    this.No_of_Sticker=this.dataservice.InprocessTempEmpData.PersonalDetails[0].No_of_Sticker
    this.Type=this.dataservice.InprocessTempEmpData.VechileDetails[0].Type
    this.Primary_Color=this.dataservice.InprocessTempEmpData.VechileDetails[0].Primary_Color
    this.Plate_Category=this.dataservice.InprocessTempEmpData.VechileDetails[0].Plate_Category
    this.Make=this.dataservice.InprocessTempEmpData.VechileDetails[0].Make
    this.Secondary_Color=this.dataservice.InprocessTempEmpData.VechileDetails[0].Secondary_Color
    this.License_Plate_No=this.dataservice.InprocessTempEmpData.VechileDetails[0].License_Plate_No
    this.Model=this.dataservice.InprocessTempEmpData.VechileDetails[0].Model
    this.Orgin=this.dataservice.InprocessTempEmpData.VechileDetails[0].Orgin
    this.Year=this.dataservice.InprocessTempEmpData.VechileDetails[0].Year
    this.Owner=this.dataservice.InprocessTempEmpData.VechileDetails[0].Owner
    this.Sticker_Office=this.dataservice.InprocessTempEmpData.StickerDetails[0].Sticker_Office
    this.Company=this.dataservice.InprocessTempEmpData.StickerDetails[0].Company
    this.Expiry=this.dataservice.InprocessTempEmpData.StickerDetails[0].Expiry
    this.Sticker_Type=this.dataservice.InprocessTempEmpData.StickerDetails[0].Sticker_Type
    this.StartTime=this.dataservice.InprocessTempEmpData.AllowedHours[0].StartTime
    this.EndTime=this.dataservice.InprocessTempEmpData.AllowedHours[0].EndTime
    // console.log(this.BadgeNumber,)
    // this.RenewalForm = new FormGroup({
    //   'BadgeNumber': new FormControl('')
    // })
    // this.dataSource = new MatTableDataSource<InEmployeeSticker>([this.dataservice.Employees_Data]);
    // BadgeNumber
    // : 
    // "100000140"
    // EmployeeName
    // : 
    // "Basha Sulthan"
    // No_of_Sticker

       console.log(
        this.BadgeNumber,
        this.EmployeeName,
        this.No_of_Sticker,
        this.Type,
        this.Primary_Color,
        this.Plate_Category,
        this.Make,
        this.Secondary_Color,
        this.License_Plate_No,
        this.Model,
        this.Orgin,
        this.Year,
        this.Owner,
        this.Sticker_Office,
        this.Company,
        this.Expiry,
        this.Sticker_Type,
        this.StartTime,
        this.EndTime)
     
  }
  back(){
    this._location.back();
  }


 deletereq(){

 }
 resechedule(){
  // var data = {icon:"check_circle_outline",title:"Request Submitted", content1:"Information Submitted, with the request No.23456", content2:"",url:"/main/ContractorSticker/EmpDetails"}
  const dialogRef = this.dialog.open(ResechedulePopupComponent, {height:'auto', width: '500px'});
  // console.log(data);
  console.log(this.dataservice.pagetitle);
  dialogRef.afterClosed().subscribe((result) => {
    console.log("dialog closed")
  })
 }
 recall(value:string){
     this.viewreq = false;
     this.recallreq = true;
     this.dataservice.pagetitle = value;
     this.dataservice.TempEmpData.EmployeeName =  this.EmployeeName 
     this.dataservice.TempEmpData.BadgeNumber =  this.BadgeNumber
     this.dataservice.TempEmpData.Sticker = this.No_of_Sticker
 }
//  actions(value:string){
//   console.log(value)
//   this.dataservice.pagetitle = value;
//   this.stickeractions = true;
//   this.stickerdetails = false;
// }
     
      // Expiry=this.dataservice.InprocessTempEmpData.Expiry
      // Sticker_Type=this.dataservice.InprocessTempEmpData.
 
}
