import { Component, OnInit, Input ,Output, EventEmitter} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import {SelectionModel} from '@angular/cdk/collections';
import { DataServiceService } from 'src/app/Services/data-service.service';
@Component({
  selector: 'app-gate-access-shared',
  templateUrl: './gate-access.component.html',
  styleUrls: ['./gate-access.component.scss']
})
export class GateAccessComponent {
  @Input() datatable:any = [];
  @Output() submitgateaccess = new EventEmitter<boolean>();
  dataSource: any;
  constructor(private router : Router,private _location: Location, private dataservice: DataServiceService) { }
  displayedColumns = ['select'];
  selection = new SelectionModel<any>(true, []);
  selectedPc: any = [];
  ngOnInit() {
    console.log(this.datatable);
    console.log(this.dataservice.SelectedGates);
    this.dataservice.getselectedgates().subscribe(res =>{
      // this.contractors = res
      console.log(res);
      this.dataSource = new MatTableDataSource<any>(res);
      // this.dataSource.sort = this.sort;
      // this.setDataSourceAttributes();
})
  }

  back(){
    // this._location.back();
    // console.log(this.selectedPc.length)
    // if(this.selectedPc.length > 0){
    //   this.submitgateaccess.emit(false);
    // }
    // else{
    //   this.submitgateaccess.emit(false);
    // }
  }
submit(){
  this.dataservice.SelectedGates = this.selectedPc;
  console.log(this.dataservice.SelectedGates)
  console.log("from GA Shared component")
  this.submitgateaccess.emit(false);
 
}
cancel(){
  this.submitgateaccess.emit(true);
  this.selectedPc = [];
  console.log(this.selectedPc);
  console.log(this.dataservice.SelectedGates);
}

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.datatable.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
  console.log(this.selection.select(...this.datatable.data))
    this.selection.select(...this.datatable.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      console.log(row);
      console.log(`${this.isAllSelected() ? 'deselect' : 'select'} all`)
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }


  addgadata(row: any, e: any) {
    if (e.checked == true) {
     
        this.selectedPc.push(row);
        console.log(this.selectedPc.indexOf(row))
    }
    else {
    
        this.selectedPc.splice(this.selectedPc.indexOf(row),1);
    
    }
    console.log(this.selectedPc);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
