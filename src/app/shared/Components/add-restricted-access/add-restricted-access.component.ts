import { Component, Input, Output, EventEmitter } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import {SelectionModel} from '@angular/cdk/collections';
import { DataServiceService } from 'src/app/Services/data-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-add-restricted-access',
  templateUrl: './add-restricted-access.component.html',
  styleUrls: ['./add-restricted-access.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AddRestrictedAccessComponent {
  @Input() datatable2:any = [];
  @Input() datatable3:any = [];
  @Output() submitaddrestrictaccess = new EventEmitter<boolean>();
  selectedPlantcode:any=[];
  selectedPlantgrp: any = [];
  datatable4: any;
  constructor(private router : Router,private _location: Location, private dataservice: DataServiceService) { }

  dataSource1:any;
  selection = new SelectionModel<any>(true, []);
  selection2 = new SelectionModel<any>(true, []);
  displayedColumns1: string[] = ['select'];
  
  //table two

  displayedColumns: string[] = [ 'select'];
  dataSource:any;
  columnsToDisplay = [];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: any | null;
  dataSource2:any;

  // displayedColumns: string[] = [ 'select', 'name', 'weight', 'symbol', 'status1','details'];
 
  display:boolean = false;
  ccolor='#dcdcdc';
  valuez:string = '';
  EmployeesData:any;

  plantcode:[] =[];
  plantgroup:[] = [];
  // back(){
  //   this._location.back();
  // }
  ngOnInit(){
    // this.dataSource1 = new MatTableDataSource<any>(this.dataservice.SelectedGates);
    // this.dataSource = new MatTableDataSource<any>(this.dataservice.SelectedGates);
    // this.dataSource = new MatTableDataSource<InEmployeeSticker>([this.dataservice.Employees_Data]);
    // this.dataSource2 = this.dataSource;
    // console.log(this.dataSource2);
    // this.EmployeesData = this.dataservice.Employees_Data
    // this.dataSource2 = new MatTableDataSource<any>(this.dataservice.Employees_Data);
    console.log(this.datatable2)
    console.log(this.datatable3)
  }
  
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource1.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource1.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  addplantcode(row: any, e: any) {
    if (e.checked == true) {
     
        this.selectedPlantcode.push(row);
        console.log(this.selectedPlantcode.indexOf(row))
    }
    else {
    
        this.selectedPlantcode.splice(this.selectedPlantcode.indexOf(row),1);
    
    }
    console.log(this.selectedPlantcode);
  }

  returnindex(i:any){
    console.log(i.subitems);
    this.datatable4 = new MatTableDataSource<any>(i.subitems);
  }
 approver(){
  // this.router.navigateByUrl('/main/ContractorSticker/NewSticker/RestrictApprover');
  this.dataservice.PlantCode_PlantGroup_data.plantcode = this.selectedPlantcode
  this.dataservice.PlantCode_PlantGroup_data.plantgroup = this.selectedPlantgrp
  if(this.selectedPlantcode.length > 0){
    for(let i:number =0; i<this.selectedPlantcode.length; i++){
       this.dataservice.FinalAddedsApprovers.push({plantcode:this.selectedPlantcode[i].plcd,plantgroup:this.selectedPlantgrp[i].plgrp, validitytype:"Permanent",
       expirydate:"12/12/2023",
       name:"Husain",});
      console.log("i",i)
    }
  }
  else{
    console.log("l - 0")
  }
  this.submitaddrestrictaccess.emit(false);
  console.log(this.dataservice.FinalAddedsApprovers)
  // console.log(this.selectedPlantcode.length);
 }
cancel(){
  this.submitaddrestrictaccess.emit(true);
  console.log(this.dataservice.FinalAddedsApprovers)
}




 isAllSelected2() {
  const numSelected = this.selection2.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected === numRows;
}

/** Selects all rows if they are not all selected; otherwise clear selection. */
toggleAllRows2() {
  if (this.isAllSelected2()) {
    this.selection2.clear();
    return;
  }

  this.selection2.select(...this.dataSource.data);
}

/** The label for the checkbox on the passed row */
checkboxLabel2(row?: any): string {
  if (!row) {
    return `${this.isAllSelected2() ? 'deselect' : 'select'} all`;
  }
  return `${this.selection2.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
}

addplantgrp(row: any, e: any) {
  if (e.checked == true) {
   
      this.selectedPlantgrp.push(row);
      console.log(this.selectedPlantgrp.indexOf(row))
  }
  else {
  
      this.selectedPlantgrp.splice(this.selectedPlantgrp.indexOf(row),1);
  
  }
  console.log(this.selectedPlantgrp);
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.datatable2.filter = filterValue.trim().toLowerCase();
  this.datatable3.filter = filterValue.trim().toLowerCase();
}

plantcodefltr(event: Event){
  const filterValue = (event.target as HTMLInputElement).value;
  this.datatable2.filter = filterValue.trim().toLowerCase();
}

plantgrpfltr(event: Event){
  const filterValue = (event.target as HTMLInputElement).value;
  this.datatable3.filter = filterValue.trim().toLowerCase();
}

}
