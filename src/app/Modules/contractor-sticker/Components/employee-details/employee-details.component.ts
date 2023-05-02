import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, MatSortable, Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SelectionModel } from '@angular/cdk/collections';
import { DataServiceService } from 'src/app/Services/data-service.service';
import { CntrListService } from 'src/app/Services/cntr-list.service';
import { Viewdetails,ContractsList } from 'src/app/Interfaces/ContractorList';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { FormControl, FormGroup } from '@angular/forms';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';
import {
  ElementRef,
  HostListener,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { SearchEmployeeComponent } from 'src/app/shared/Dialogs/search-employee/search-employee.component';
import { RenewSelectedpopupComponent } from 'src/app/shared/Dialogs/renew-selectedpopup/renew-selectedpopup.component';
import { CancelSelectedpopupComponent } from 'src/app/shared/Dialogs/cancel-selectedpopup/cancel-selectedpopup.component';
// {StickerType:'Contractor Non Restricted',PlateNo:'2345-KSA',Model_Year:'2022',ExipiryDate:'11/02/2023',Status:'Active',Action:'View Details'},


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded, void', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('500ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class EmployeeDetailsComponent {
  displayedColumns: string[] = [
    'select',
    'name',
    'weight',
    'symbol',
    'status1',
    'details',
  ];

  // {EmployeeName: 'James Smith', BadgeNumber: 15181034, Sticker: '1/4', Action: 'View More', description: Array(3)}
  dataSource: any;
  // {EmployeeName: 'Gopika', BadgeNumber: '101', Sticker: '1/4', ViewMore
  columnsToDisplay: string[] = ['EmployeeName', 'BadgeNumber', 'Sticker'];
  columnsToDisplayWithExpand:string[] = [...this.columnsToDisplay, 'expand'];
  expandedElement: any | null;
  dataSource2: any;
  display: boolean = false;
  ccolor = '#dcdcdc';
  valuez: string = '';
  EmployeesData: any;
  selection = new SelectionModel<any>(true, []);
  name: any;
  animal: any;
  expandedtable: boolean = false;
  tableheight: any;
  selecteddata: any;
  checked: any = [];
  unchecked: any = [];
  UncheckedTable: any = [];
  notselect: any = [];
  contractors: any;
  isLoadMore:boolean = true;
  BadgeNumber:number;
  emp_name: string;
  // @Output() sendData: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private router: Router,
    private _location: Location,
    private dataservice: DataServiceService,
    private CntrList:CntrListService,
    public dialog: MatDialog,
    private _liveAnnouncer: LiveAnnouncer,
    private snackBar: MatSnackBar
  ) { }
  myGroup1 = new FormGroup({
    Search: new FormControl(''),
  });
  myGroup2 = new FormGroup({
    Search2: new FormControl(),
  });
  myGroup3 = new FormGroup({
    Search3: new FormControl(),
  });

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  sort: any;
  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
    console.log(ms);
  }
  setDataSourceAttributes() {
    // this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(
      // this.CntrList.getContractData().subscribe((data:ContractsList) => data.Viewdetails)
      // this.dataservice.Employees_Data
      this.dataservice.selectedcontracts.Viewdetails
     
    );
    this.CntrList.getContractData().subscribe((data:ContractsList) => data.Viewdetails)
    console.log(this.CntrList.getContractData().subscribe(data => console.log(data.Viewdetails)))
    
    // this.dataSource = new MatTableDataSource<InEmployeeSticker>([this.dataservice.Employees_Data]);
    this.dataSource2 = this.dataSource;
    console.log(this.dataSource2);
    this.EmployeesData = this.dataservice.selectedcontracts.Viewdetails;
    this.dataservice.getcontractors().subscribe((res) => {
      this.contractors = res;
      console.log(this.contractors.contractnumber == 2000);

      // this.dataSource = new MatTableDataSource<any>(this.contractors);
      // this.dataSource.sort = this.sort;
      // this.setDataSourceAttributes();
    });
    this.display = false;
    console.log(this.dataservice.selectedcontracts.Viewdetails,this.CntrList.getContractData());
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  back() {
    this._location.back();
  }
  viewdetails(element: any, expandedElement: any) {
    this.selecteddata = element.ViewMore;
    // console.log(element.ViewMore);
    console.log(element);
    this.expandedtable = true;
    this.dataSource2 = new MatTableDataSource<any>(element.ViewMore);
    // this.dataSource2._updateChangeSubscription();
    // console.log(expandedElement);
    this.dataservice.TempEmpData = expandedElement;
    // after close the drop table the checked data will be cleared
    if (expandedElement === element) {
      console.log(this.selection['_selected']);
      this.emp_name =  element.EmployeeName
      this.BadgeNumber = element.BadgeNumber
      console.log(true);
    } else if (expandedElement !== element) {
      this.selection.clear();
      this.BadgeNumber = 0;
      console.log(this.selection['_selected']);
      console.log(false);
    }
  }
  // checkboxfilter(value:string){
  //   this.dataSource2 = new MatTableDataSource<any>(this.selecteddata);
  //   let len = this.dataSource2.data.length
  //   let l: number = this.selection['_selected'].length;
  //   let s: any;
  //   this.checked = [];
  //   this.unchecked = [];
  //   this.UncheckedTable = [];
  //   console.log(this.selection["_selected"].length)
  //   if (l > 0) {
  //     for (let i: number = 0; i < l; i++) {
  //       s = this.dataSource2.data.indexOf(this.selection['_selected'][i]);
  //       this.checked.push(s);
  //     }
  //     for (let i: number = 0; i < len; i++) {
  //       this.unchecked.push(i);
  //     }
  //     this.unchecked = this.unchecked.filter(
  //       (val: any) => !this.checked.includes(val)
  //     );
  //   } else {
  //     // this.checked = []
  //   }
  // if(value == "selected"){
  //   this.dataSource2 = new MatTableDataSource<any>(this.selection["_selected"]);

  // }
  // else if(value == "unselected"){
  //   if (l > 0) {
  //     for (let j: number = 0; j < this.unchecked.length; j++) {
  //       this.UncheckedTable.push(this.dataSource2.data[this.unchecked[j]]);
  //     }
  //     console.log(this.UncheckedTable);
  //     this.dataSource2 = new MatTableDataSource<any>(this.UncheckedTable);
  //   } else {
  //   }

  // }
  // else{

  //   this.dataSource2 = new MatTableDataSource<any>(this.selecteddata);
  //   console.log(this.selection["_selected"])
  //   console.log(this.selection["_unmarkSelected"])
  //   console.log(this.selection["_markSelected"])
  //   console.log(this.selection["_emitChanges"])

  //   console.log(this.selection["_selected"])
  // }

  // }

  checkboxfilter(value: string) {
    this.dataSource2 = new MatTableDataSource<any>(this.selecteddata);
    this.notselect = [];
    if (this.selection['_selected'].length > 0) {
      if (value == 'selected') {
        this.dataSource2 = new MatTableDataSource<any>(this.selection.selected);
      } else if (value == 'unselected') {
        for (let i: number = 0; i < this.dataSource2.data.length; i++) {
          let val = this.selection.isSelected(this.dataSource2.data[i]);
          if (val == false) {
            this.notselect.push(this.dataSource2.data[i]);
          }
        }
        this.dataSource2 = new MatTableDataSource<any>(this.notselect);
      } else {
        this.dataSource2 = new MatTableDataSource<any>(this.selecteddata);
      }
    }
    else{
      this.snackBar.open("no data selected to filter", 'OK',{ duration: 3000,panelClass: ['alert-snackbar'] });
    }
  }

  viewdetails2(valuez: any) {
    console.log(valuez);
  }
  callviewdetails() {
    console.log('tr');
  }

  employeestickerdetails(e: string) {
    console.log(e);
    this.router.navigateByUrl('/main/ContractorSticker/EmployeeStickerDetails');
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource2.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource2.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1
      }`;
  }

  searchemp(e: any) {
    console.log(e);
    this.openDialog();
  }

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

renewsel(){
  var data = {
     badge_number:this.BadgeNumber,
      employee:this.emp_name,
     length:this.selection['_selected'].length,
     header:"Renew Sticker",
     message1:"renew sticker for ",
     message2:"and other"
  }
  if(this.selection['_selected'].length > 0){
    // console.log(this.selection.selected);
    // console.log(this.selection['_selected'].length);
    console.log(this.BadgeNumber,this.selection.selected);
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
    console.log(this.BadgeNumber,this.selection.selected);
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


  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
      console.log(sortState);
      console.log(sortState.direction);
      // console.log(this.dataSource)
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
      console.log(sortState);
      console.log(sortState.direction);
      // console.log(this.dataSource)
    }
  }

  externalNumsort() {
    let i: number = 0;
    let order: [string, string] = ['asc', 'desc'];
    this.dataSource.sort.sort(<MatSortable>{
      id: 'BadgeNumber',
      start: order[i],
    });
    i = i + 1;
    if (i == 2) {
      i = 0;
    }
  }
  externalIdsort() {
    let i: number = 0;
    let order: [string, string] = ['asc', 'desc'];
    this.dataSource.sort.sort(<MatSortable>{
      id: 'EmployeeName',
      start: order[i],
    });
    i = i + 1;
    if (i == 2) {
      i = 0;
    }
  }
  getColor(status:string){
    if(status == "Active"){
      // console.log(status)
      return "#00843d"
    }
    else if(status == "InActive"){
      // console.log(status)
      return "red"
    }
    else{
      return "red"
    }
  }

  loadMore() {
    // this.ngOnInit();
 }
}
