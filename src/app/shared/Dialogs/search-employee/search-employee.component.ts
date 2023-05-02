import { Component ,Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {  ElementRef, HostListener, Input , Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { DataServiceService } from 'src/app/Services/data-service.service';
export interface DialogData {
  BadgeNumber: string;
  EmployeeName: string;
}
// EmployeeName: 'Gopika', BadgeNumber: 
@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.scss']
})
export class SearchEmployeeComponent {
  show:Boolean =  false;
  items: any=[];
  searchtxt:any;
  searchtxt2:any;
  @Output() sendData: EventEmitter<any> = new EventEmitter<any>();
  nodata: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<SearchEmployeeComponent>,
    private dataservice : DataServiceService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private router : Router,private _location: Location,
    public dialog: MatDialog
  ) {}
  // constructor( private dataservice: DataServiceService,public dialog: MatDialog) { }
  ngOnInit(){
    this.items = [];
    console.log('aa',this.searchtxt2)
  }

  enterkey(event:any){
     console.log(this.searchtxt)
     if(this.searchtxt == undefined){
      this.nodata = true;
     }
     else{
      this.searching(event);
     }
    
  }
searching(e:any){
  // console.log(e);
  // EmployeeName: 'Gopika', BadgeNumber: 
  if(this.searchtxt.length>0){
    this.searchtxt2 = this.searchtxt
    this.items = this.data;
    this.nodata = false;
    console.log(this.searchtxt2.length,'d', this.items)
  }
  else{
    this.items = [];
    this.nodata = true;
    console.log(this.searchtxt2,'ud')
  }
  }
  newsticker(e:any){
    // const dialogRef = this.dialog.close(SearchEmployeeComponent, {
    //   data,
    //  });
    console.log(e)
    this.dataservice.TempEmpData = e
    this.sendData.emit(e);
    this.router.navigateByUrl('/main/ContractorSticker/NewSticker');
    this.dialogRef.close();
  }

}
