import { Component } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/Services/data-service.service';
import { Location } from '@angular/common';
import { StickerRequest } from 'src/app/Interfaces/InProcessReqList';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';
import {
  ElementRef,
  HostListener,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CancelSelectedpopupComponent } from 'src/app/shared/Dialogs/cancel-selectedpopup/cancel-selectedpopup.component';
import { RenewSelectedpopupComponent } from 'src/app/shared/Dialogs/renew-selectedpopup/renew-selectedpopup.component';
export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
  action: string;
  PersonalDetails: any[];
  VechileDetails: any[];
  StickerDetails: any[];
  AllowedHours: any[];
  SecheduledDateTime: any[];
}
export interface filter {
  value: string;
  name: string;
}
// const ELEMENT_DATA: PeriodicElement[] = [
//   {
//     position: 'Basha Sulthan',
//     name: '100000140',
//     weight: '31/12/9999',
//     symbol: 'Active',
//     action: 'View Details',
//     PersonalDetails: [
//       {
//         BadgeNumber: '100000140',
//         EmployeeName: 'Basha Sulthan',
//         No_of_Sticker: '3',
//       },
//     ],
//     VechileDetails: [
//       {
//         Type: 'Saden',
//         Primary_Color: 'White',
//         Plate_Category: 'Private',

//         Make: 'Type',
//         Secondary_Color: 'Primary Color',
//         License_Plate_No: 'Plate Category',
//         Model: 'RFG',
//         Orgin: '--',
//         Year: '2022',
//         Owner: 'Basha Sulthan',
//       },
//     ],
//     StickerDetails: [
//       {
//         Sticker_Office: 'Saden',
//         Company: 'HCB',
//         Expiry: '20/02/2025',
//         Sticker_Type: 'Permanent',
//       },
//     ],
//     AllowedHours: [
//       {
//         StartTime: '12 PM',
//         EndTime: '12 AM',
//       },
//     ],
//     SecheduledDateTime: [
//       {
//         Expiry: 'Basha Sulthan',
//         Sticker_Type: 'Permanent',
//       },
//     ],
//   },
//   {
//     position: 'Ramu S',
//     name: '100000142',
//     weight: '31/12/2023',
//     symbol: 'Active',
//     action: 'View Details',
//     PersonalDetails: [
//       {
//         BadgeNumber: '100000140',
//         EmployeeName: 'Basha Sulthan',
//         No_of_Sticker: '3',
//       },
//     ],
//     VechileDetails: [
//       {
//         Type: 'Saden',
//         Primary_Color: 'White',
//         Plate_Category: 'Private',

//         Make: 'Type',
//         Secondary_Color: 'Primary Color',
//         License_Plate_No: 'Plate Category',
//         Model: 'RFG',
//         Orgin: '--',
//         Year: '2022',
//         Owner: 'Basha Sulthan',
//       },
//     ],
//     StickerDetails: [
//       {
//         Sticker_Office: 'Saden',
//         Company: 'HCB',
//         Expiry: '20/02/2025',
//         Sticker_Type: 'Permanent',
//       },
//     ],
//     AllowedHours: [
//       {
//         StartTime: '12 PM',
//         EndTime: '12 AM',
//       },
//     ],
//     SecheduledDateTime: [
//       {
//         Expiry: 'Basha Sulthan',
//         Sticker_Type: 'Permanent',
//       },
//     ],
//   },
//   {
//     position: 'Ramesh M',
//     name: '100000145',
//     weight: '31/12/2023',
//     symbol: 'Active',
//     action: 'View Details',
//     PersonalDetails: [
//       {
//         BadgeNumber: '100000140',
//         EmployeeName: 'Basha Sulthan',
//         No_of_Sticker: '3',
//       },
//     ],
//     VechileDetails: [
//       {
//         Type: 'Saden',
//         Primary_Color: 'White',
//         Plate_Category: 'Private',

//         Make: 'Type',
//         Secondary_Color: 'Primary Color',
//         License_Plate_No: 'Plate Category',
//         Model: 'RFG',
//         Orgin: '--',
//         Year: '2022',
//         Owner: 'Basha Sulthan',
//       },
//     ],
//     StickerDetails: [
//       {
//         Sticker_Office: 'Saden',
//         Company: 'HCB',
//         Expiry: '20/02/2025',
//         Sticker_Type: 'Permanent',
//       },
//     ],
//     AllowedHours: [
//       {
//         StartTime: '12 PM',
//         EndTime: '12 AM',
//       },
//     ],
//     SecheduledDateTime: [
//       {
//         Expiry: 'Basha Sulthan',
//         Sticker_Type: 'Permanent',
//       },
//     ],
//   },
//   {
//     position: 'Keerthi L',
//     name: '100000146',
//     weight: '31/12/2023',
//     symbol: 'Active',
//     action: 'View Details',
//     PersonalDetails: [
//       {
//         BadgeNumber: '100000140',
//         EmployeeName: 'Basha Sulthan',
//         No_of_Sticker: '3',
//       },
//     ],
//     VechileDetails: [
//       {
//         Type: 'Saden',
//         Primary_Color: 'White',
//         Plate_Category: 'Private',

//         Make: 'Type',
//         Secondary_Color: 'Primary Color',
//         License_Plate_No: 'Plate Category',
//         Model: 'RFG',
//         Orgin: '--',
//         Year: '2022',
//         Owner: 'Basha Sulthan',
//       },
//     ],
//     StickerDetails: [
//       {
//         Sticker_Office: 'Saden',
//         Company: 'HCB',
//         Expiry: '20/02/2025',
//         Sticker_Type: 'Permanent',
//       },
//     ],
//     AllowedHours: [
//       {
//         StartTime: '12 PM',
//         EndTime: '12 AM',
//       },
//     ],
//     SecheduledDateTime: [
//       {
//         Expiry: 'Basha Sulthan',
//         Sticker_Type: 'Permanent',
//       },
//     ],
//   },
//   {
//     position: 'Prakash M',
//     name: '100000149',
//     weight: '31/12/2023',
//     symbol: 'Active',
//     action: 'View Details',
//     PersonalDetails: [
//       {
//         BadgeNumber: '100000140',
//         EmployeeName: 'Basha Sulthan',
//         No_of_Sticker: '3',
//       },
//     ],
//     VechileDetails: [
//       {
//         Type: 'Saden',
//         Primary_Color: 'White',
//         Plate_Category: 'Private',

//         Make: 'Type',
//         Secondary_Color: 'Primary Color',
//         License_Plate_No: 'Plate Category',
//         Model: 'RFG',
//         Orgin: '--',
//         Year: '2022',
//         Owner: 'Basha Sulthan',
//       },
//     ],
//     StickerDetails: [
//       {
//         Sticker_Office: 'Saden',
//         Company: 'HCB',
//         Expiry: '20/02/2025',
//         Sticker_Type: 'Permanent',
//       },
//     ],
//     AllowedHours: [
//       {
//         StartTime: '12 PM',
//         EndTime: '12 AM',
//       },
//     ],
//     SecheduledDateTime: [
//       {
//         Expiry: 'Basha Sulthan',
//         Sticker_Type: 'Permanent',
//       },
//     ],
//   },
//   {
//     position: 'Ruban R',
//     name: '100000156',
//     weight: '31/12/2023',
//     symbol: 'Active',
//     action: 'View Details',
//     PersonalDetails: [
//       {
//         BadgeNumber: '100000140',
//         EmployeeName: 'Basha Sulthan',
//         No_of_Sticker: '3',
//       },
//     ],
//     VechileDetails: [
//       {
//         Type: 'Saden',
//         Primary_Color: 'White',
//         Plate_Category: 'Private',

//         Make: 'Type',
//         Secondary_Color: 'Primary Color',
//         License_Plate_No: 'Plate Category',
//         Model: 'RFG',
//         Orgin: '--',
//         Year: '2022',
//         Owner: 'Basha Sulthan',
//       },
//     ],
//     StickerDetails: [
//       {
//         Sticker_Office: 'Saden',
//         Company: 'HCB',
//         Expiry: '20/02/2025',
//         Sticker_Type: 'Permanent',
//       },
//     ],
//     AllowedHours: [
//       {
//         StartTime: '12 PM',
//         EndTime: '12 AM',
//       },
//     ],
//     SecheduledDateTime: [
//       {
//         Expiry: 'Basha Sulthan',
//         Sticker_Type: 'Permanent',
//       },
//     ],
//   },
//   {
//     position: 'Anand S',
//     name: '100000157',
//     weight: '31/12/2023',
//     symbol: 'Active',
//     action: 'View Details',
//     PersonalDetails: [
//       {
//         BadgeNumber: '100000140',
//         EmployeeName: 'Basha Sulthan',
//         No_of_Sticker: '3',
//       },
//     ],
//     VechileDetails: [
//       {
//         Type: 'Saden',
//         Primary_Color: 'White',
//         Plate_Category: 'Private',

//         Make: 'Type',
//         Secondary_Color: 'Primary Color',
//         License_Plate_No: 'Plate Category',
//         Model: 'RFG',
//         Orgin: '--',
//         Year: '2022',
//         Owner: 'Basha Sulthan',
//       },
//     ],
//     StickerDetails: [
//       {
//         Sticker_Office: 'Saden',
//         Company: 'HCB',
//         Expiry: '20/02/2025',
//         Sticker_Type: 'Permanent',
//       },
//     ],
//     AllowedHours: [
//       {
//         StartTime: '12 PM',
//         EndTime: '12 AM',
//       },
//     ],
//     SecheduledDateTime: [
//       {
//         Expiry: 'Basha Sulthan',
//         Sticker_Type: 'Permanent',
//       },
//     ],
//   },
//   {
//     position: 'Ravi S',
//     name: '100000163',
//     weight: '31/12/2023',
//     symbol: 'Active',
//     action: 'View Details',
//     PersonalDetails: [
//       {
//         BadgeNumber: '100000140',
//         EmployeeName: 'Basha Sulthan',
//         No_of_Sticker: '3',
//       },
//     ],
//     VechileDetails: [
//       {
//         Type: 'Saden',
//         Primary_Color: 'White',
//         Plate_Category: 'Private',

//         Make: 'Type',
//         Secondary_Color: 'Primary Color',
//         License_Plate_No: 'Plate Category',
//         Model: 'RFG',
//         Orgin: '--',
//         Year: '2022',
//         Owner: 'Basha Sulthan',
//       },
//     ],
//     StickerDetails: [
//       {
//         Sticker_Office: 'Saden',
//         Company: 'HCB',
//         Expiry: '20/02/2025',
//         Sticker_Type: 'Permanent',
//       },
//     ],
//     AllowedHours: [
//       {
//         StartTime: '12 PM',
//         EndTime: '12 AM',
//       },
//     ],
//     SecheduledDateTime: [
//       {
//         Expiry: 'Basha Sulthan',
//         Sticker_Type: 'Permanent',
//       },
//     ],
//   },
// ];

@Component({
  selector: 'app-in-process-request',
  templateUrl: './in-process-request.component.html',
  styleUrls: ['./in-process-request.component.scss'],
})
export class InProcessRequestComponent {
  displayedColumns: string[] = [
    'select',
    // 'position',
    'weight',
    'name',
    'RequestType',
    'action',
  ];
  dataSource: any;
  InprocessData:any;
  selection = new SelectionModel<any>(true, []);
  SelectedData: any = [];
  ucd: PeriodicElement[];
  dataSource2: any;
  Sdata: any;
  Undata: any;
  dummydata: any = [];
  adddata: any;
  SelectedBox: any = [];
  UnselectedBox: any = [];
  standarddata: any;
  deselect: any = [];
  checked: any = [];
  UncheckedTable: any = [];
  unchecked: any = [];
  CheckedTable: any = [];
  notselect: any = [];
  constructor(
    private router: Router,
    private _location: Location,
    private dataservice: DataServiceService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }
  filterlist: filter[] = [
    { value: 'sel', name: 'Selected' },
    { value: 'unsel', name: 'Un Selected' },
  ];
  deletedrow: any = [];
  d: any;
  ngOnInit() {
    this.dataservice.InPdy.next(this.dataservice.InprocessRequest);
    console.log(this.router);
    console.log('hello');
    // const data: any = this.dataservice.InprocessRequest;
    // this.standarddata = data;
    // this.dataSource = new MatTableDataSource<any>(data);
    // this.dataSource2 = new MatTableDataSource<any>(data);
    // this.dummydata = this.dataservice.InprocessRequest;
    // console.log(this.dataSource);
    // console.log(this.dataSource.data);
    // console.log(data);
    this.dataservice.getInprocessRequest().subscribe((res:StickerRequest) =>{
      console.log(res)
      this.InprocessData = res
      this.dataSource = new MatTableDataSource<any>(this.InprocessData);
      
})
    // this.SelectedBox = this.dataSource.data
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  // if (value == 'active') {
  //   this.dataSource = new MatTableDataSource<any>(
  //     this.ctrEmpList.filter((item: any) => item.idstat == 'Active')
  //   );
  // }

  // filter(value: string) {
  //   this.dataSource = new MatTableDataSource<any>(this.dataservice.InprocessRequest);
  //   let len = this.dataSource.data.length
  //   let l: number = this.selection['_selected'].length;
  //   let s: any;
  //   this.checked = [];
  //   this.unchecked = [];
  //   this.UncheckedTable = [];
  //   for (let i: number = 0; i < len; i++) {
  //     this.unchecked.push(i);
  //   }
  //   if (l > 0) {
  //     for (let i: number = 0; i < l; i++) {
  //       s = this.dataSource.data.indexOf(this.selection['_selected'][i]);
  //       this.checked.push(s);
  //     }

  //     this.unchecked = this.unchecked.filter(
  //       (val: any) => !this.checked.includes(val)
  //     );
  //   } else {
    
  //   }

  //   if (value == 'UnSelected') {
  //     if (l > 0) {
  //       for (let j: number = 0; j < this.unchecked.length; j++) {
  //         this.UncheckedTable.push(this.dataSource.data[this.unchecked[j]]);
  //       }
  //       console.log(this.UncheckedTable);
  //       this.dataSource = new MatTableDataSource<any>(this.UncheckedTable);
  //     } else {
  //     }
  //   } else if (value == 'Selected') {
  //     if (l > 0) {
  //       console.log(this.CheckedTable);
  //       this.dataSource = new MatTableDataSource<any>(this.selection["_selected"]);
  //     } else {
  //     }
  //   } else {
  //     this.dataSource = new MatTableDataSource<any>(this.dataservice.InprocessRequest);
  //   }
  
  // }

  filter(value:string) {
    this.dataSource = new MatTableDataSource<any>(this.InprocessData);
    this.notselect = []
     if(this.selection["_selected"].length > 0){
      if(value == "Selected"){
        this.dataSource = new MatTableDataSource<any>(this.selection.selected);
      }
      else if(value == "UnSelected"){
        for(let i:number = 0; i<this.dataSource.data.length; i++){
          let val = this.selection.isSelected(this.dataSource.data[i])
          if(val == false){
            this.notselect.push(this.dataSource.data[i])
          }
         }
        this.dataSource = new MatTableDataSource<any>(this.notselect);
      }
      else{
        this.dataSource = new MatTableDataSource<any>(this.InprocessData);
      }
     }
     }



addplantgrp(row: any, e: any, index: any) {
  if (e.checked == true) {
    const vs = this.dataservice.InPdy;
  
  } else if (e.checked == false) {
    // this.SelectedBox.splice(index,1)
    console.log(e.checked);
    console.log(this.SelectedBox);
  
    //  this.selection["_selected"]
  }
  // console.log(this.selectedPlantgrp);
}
addnewemp() {
  this.router.navigateByUrl('/main/idcard/addnewemp');
}

/** Whether the number of selected elements matches the total number of rows. */
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

  this.selection.select(...this.dataSource.data);
}

/** The label for the checkbox on the passed row */
checkboxLabel(row ?: StickerRequest): string {
  if (!row) {
    return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  }
  return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1
    }`;
}

back() {
  this._location.back();
}

requestdetails(e: any) {
  console.log(e);
  this.dataservice.InprocessTempEmpData = e;
  this.router.navigateByUrl('main/ContractorSticker/ViewRequest');
}


renewsel(){
  var data = {
    //  badge_number:this.BadgeNumber,
    //   employee:this.emp_name,
     length:this.selection['_selected'].length,
     header:"Renew Sticker",
     message1:"renew sticker for ",
     message2:"and other"
  }
  if(this.selection['_selected'].length > 0){
    // console.log(this.selection.selected);
    // console.log(this.selection['_selected'].length);
    // console.log(this.BadgeNumber,this.selection.selected);
    // var data = this.EmployeesData;
    const dialogRef = this.dialog.open(RenewSelectedpopupComponent ,{height:'auto', width: '400px',data});
    
    // EmployeeName: 'Gopika', BadgeNumber: 
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  else{
    this.snackBar.open("Select atleast one Sticker", 'OK',{ duration: 3000,panelClass: ['alert-snackbar'] });
  }
 
}

cancelsel(){
  if(this.selection['_selected'].length > 0){
    // console.log(this.selection.selected);
    // console.log(this.selection['_selected'].length);
    // console.log(this.BadgeNumber,this.selection.selected);
    // var data = this.EmployeesData;
    const dialogRef = this.dialog.open(CancelSelectedpopupComponent);
    
    // EmployeeName: 'Gopika', BadgeNumber: 
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  else{
    this.snackBar.open("Select atleast one Sticker", 'OK',{ duration: 3000,panelClass: ['alert-snackbar'] });
  }
}

}
