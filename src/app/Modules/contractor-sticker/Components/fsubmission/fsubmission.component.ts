import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SelectionModel } from '@angular/cdk/collections';
import { DataServiceService } from 'src/app/Services/data-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
@Component({
  selector: 'app-fsubmission',
  templateUrl: './fsubmission.component.html',
  styleUrls: ['./fsubmission.component.scss'],
})
export class FSubmissionComponent {
  dataSource: any;
  dataSource2: any;
  // displayedColumns: string[] = [ 'position', 'name', 'weight', 'symbol'];
  constructor(
    private router: Router,
    private _location: Location,
    private dataservice: DataServiceService
  ) {}
  finaldata = new FormGroup({
    type: new FormControl(this.dataservice.newsticker_data[0].type),
    make: new FormControl(this.dataservice.newsticker_data[0].make),
    model: new FormControl(this.dataservice.newsticker_data[0].model),
    year: new FormControl(this.dataservice.newsticker_data[0].year),

    primarycolor: new FormControl(
      this.dataservice.newsticker_data[0].primarycolor
    ),
    secondarycolor: new FormControl(
      this.dataservice.newsticker_data[0].secondarycolor
    ),
    orgin: new FormControl(this.dataservice.newsticker_data[0].orgin),
    owner: new FormControl(this.dataservice.newsticker_data[0].owner),

    platecategory: new FormControl(
      this.dataservice.newsticker_data[0].platecategory
    ),
    licenseplateno: new FormControl(
      this.dataservice.newsticker_data[0].licenseplateno
    ),

    stickeroffice: new FormControl(
      this.dataservice.newsticker_data[0].stickeroffice
    ),
    expiry: new FormControl(this.dataservice.newsticker_data[0].expiry),

    company: new FormControl(this.dataservice.newsticker_data[0].company),
    stickertype: new FormControl(
      this.dataservice.newsticker_data[0].stickertype
    ),

    starttime: new FormControl(this.dataservice.newsticker_data[0].starttime),
    endtime: new FormControl(this.dataservice.newsticker_data[0].endtime),
  });
  types: any = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
  empname: any;
  nos: any;
  badgenum: any;
  selection = new SelectionModel<any>(true, []);
  displayedColumns = ['select', 'area'];
  displayedColumns2: string[] = ['position', 'name', 'weight', 'symbol'];
  selecteddate: string = '';
  selectedvaltype: string = '';
  selectedname: string = '';
  resValidDate: any;
  ngOnInit() {
    // this.EmpData = event

    // this.finaldata.patchValue = this.dataservice.newsticker_data;
    // this.finaldata.setValue(this.dataservice.newsticker_data);
    // console.log(this.NewSticker.value);
    // console.log(this.dataservice.newsticker_data[0].type);
    console.log(this.dataservice.selected_gates_data);
    console.log(this.dataservice.PlantCode_PlantGroup_data);
    console.log(this.dataservice.approver_data);
    this.empname = this.dataservice.TempEmpData.EmployeeName;
    this.badgenum = this.dataservice.TempEmpData.BadgeNumber;
    this.nos = this.dataservice.TempEmpData.Sticker;
    this.finaldata.disable();
    console.log(this.dataservice.selected_gates_data)
    this.dataSource = new MatTableDataSource<any>(
      // this.dataservice.selected_gates_data
      this.dataservice.SelectedGates
    );
    console.log(this.dataSource);
    this.dataSource2 = new MatTableDataSource<any>(
      this.dataservice.selectedaccess
    );
    console.log(this.dataservice.SelectedGates)
    // console.log(this.finaldata.value['type']);
  }

  back() {
    this._location.back();
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
}
