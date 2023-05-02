import { Component,ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort, MatSortable, Sort} from '@angular/material/sort'
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DataServiceService } from 'src/app/Services/data-service.service';
import { CntrListService } from 'src/app/Services/cntr-list.service';
import { Observable } from 'rxjs';
import { ContractsList , Contracts} from 'src/app/Interfaces/ContractorList';
// export interface sorting {
//   active: string, direction: string
// }
  interface filter {
    value: string;
    name: string;
  }




@Component({
  selector: 'app-contractor-list',
  templateUrl: './contractor-list.component.html',
  styleUrls: ['./contractor-list.component.scss'],
})
export class ContractorListComponent {
 
  displayedColumns: string[] = ['contractname', 'contractnumber', 'ExpiryDate', 'Action'];
  dataSource:any;
  contractors: any;
  sort: any;
  isLoadMore:boolean = true;
  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
   
  }
  setDataSourceAttributes() {
    // this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  // selection = new SelectionModel (true, []);
  constructor(
    private router: Router,
    private _location: Location,
    private dataservice: DataServiceService,
    private CntrList : CntrListService,
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  // @ViewChild(MatSort) sort: MatSort;

  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  // }


 
  ngOnInit() {
    // this.dataSource = this.dataservice.Contractors_Data;
    // this.dataSource = new MatTableDataSource(this.dataservice.Contractors_Data);
    console.log(this.dataSource);
    // this.dataservice.getcontractors().subscribe((res:ContractsList) =>{
    //         this.contractors = res
    //         console.log(this.contractors);
    //         this.dataSource = new MatTableDataSource<any>(this.contractors);
    //         this.dataSource.sort = this.sort;
    //         this.setDataSourceAttributes();
    // })

    this.CntrList.getcontractors().subscribe((res:ContractsList) =>{
      this.contractors = res
      console.log(this.contractors);
      this.dataSource = new MatTableDataSource<any>(this.contractors);
      this.dataSource.sort = this.sort;
      this.setDataSourceAttributes();
})
  
    // this.dataSource.sort = this.sort;
  }

 
  // addnewemp(){
  //   this.router.navigateByUrl('/main/idcard/addnewemp');
  // }

externalNumsort(){
  let i:number = 0
  let order:[string,string,string] = ['asc','desc','']
  this.dataSource.sort.sort(<MatSortable>({ id:'contractnumber', start:order[i]}));
  i = i + 1
  if(i == 3){
    i = 0
  }
}
externalIdsort(){
  let i:number = 0
  let order:[string,string,string] = ['asc','desc','']
  this.dataSource.sort.sort(<MatSortable>({ id:'ExpiryDate', start:order[i]}));
  i = i + 1
  if(i == 3){
    i = 0
  }
  // console.log(this.dataSource.sort.sortables.Map)
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




  inprocessrequest() {
    this.router.navigateByUrl('/main/ContractorSticker/InProcess');
  }
  employeedetails(contract: ContractsList) {
    console.log(contract);
    this.dataservice.selectedcontracts = contract
    this.CntrList.setContractData(contract)
    this.router.navigateByUrl('/main/ContractorSticker/EmpDetails');

  }
  back() {
    this._location.back();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  filterlist: filter[] = [
    { value: 'sel', name: 'Selected' },
    { value: 'unsel', name: 'Un Selected' },
  ];
  /** Whether the number of selected elements matches the total number of rows. */
  //  isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  // toggleAllRows() {
  //   if (this.isAllSelected()) {
  //     this.selection.clear();
  //     return;
  //   }

  //   this.selection.select(...this.dataSource.data);
  // }

  /** The label for the checkbox on the passed row */
  // checkboxLabel(row?: PeriodicElement): string {
  //   if (!row) {
  //     return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  //   }
  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  // }

  loadMore() {
     this.ngOnInit();
  }
}
