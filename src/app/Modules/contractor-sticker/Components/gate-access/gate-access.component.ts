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
  selector: 'app-gate-access',
  templateUrl: './gate-access.component.html',
  styleUrls: ['./gate-access.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class GateAccessComponent {
  selectedPc: any = [];
  constructor(
    private router: Router,
    private _location: Location,
    private dataservice: DataServiceService
  ) {}
  dataSource: any;
  selection = new SelectionModel<any>(true, []);
  columnsToDisplay = ['employeename', 'BadgeNumber', 'Sticker'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: any | null;
  dataSource2: any;
  checked = false;
  cbd: any = [];
  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(
      this.dataservice.SelectedGates
    );
    console.log(this.dataservice.newsticker_data);
    console.log(this.dataservice.SelectedGates);
    // this.dataSource = new MatTableDataSource<InEmployeeSticker>([this.dataservice.Employees_Data]);
  }
  displayedColumns = ['select'];
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

  restrictedaccess() {
    // this.router.navigateByUrl(
    //   '/main/ContractorSticker/NewSticker/RestrictedAccess'
    // );
    console.log('navigation');
    this.dataservice.selected_gates_data = this.selectedPc;
  }

  checkboxdata(e: boolean, row: any) {
    //  console.log(e);
    // console.log(row);
    // this.cbd.push({e,row});
  }
  addgadata(row: any, e: any) {
    if (e.checked == true) {
      this.selectedPc.push(row);
      console.log(this.selectedPc.indexOf(row));
    } else {
      this.selectedPc.splice(this.selectedPc.indexOf(row), 1);
    }
    console.log(this.selectedPc);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
