import { Component,Input, Output, EventEmitter } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import {SelectionModel} from '@angular/cdk/collections';
import { DataServiceService } from 'src/app/Services/data-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-add-restrict-approver',
  templateUrl: './add-restrict-approver.component.html',
  styleUrls: ['./add-restrict-approver.component.scss']
})
export class AddRestrictApproverComponent {
  @Input() approvertable1:any = [];
  @Input() approvertable2:any = [];
  datasource:any
  @Output() submitapprovers = new EventEmitter<boolean>();
  selecteddate:string = "";
  selectedvaltype:string = "";
  selectedname:string = "";
  resValidDate: any;
  valDate: any = [];
  displayedColumns: string[] = [ 'position', 'name', 'weight', 'symbol'];
  constructor(private router : Router,private _location: Location, private dataservice: DataServiceService) { }

  ngOnInit(){
   this.datasource = this.dataservice.FinalAddedsApprovers
   console.log(this.datasource)
  }

  submission(){
    // this.router.navigateByUrl('/main/ContractorSticker/NewSticker/FSubmission');
    console.log(this.selecteddate);
    console.log(this.selectedvaltype);
    console.log(this.selectedname);
    this.submitapprovers.emit(false);
    // this.dataservice.approver_data.approver_name = this.selectedname
    // this.dataservice.approver_data.expiry_date = this.selecteddate
    // this.dataservice.approver_data.validity_type = this.selectedvaltype
  }
  // valDateChange(i: string, event: any) {
  //   this.valDate[i] = <string>this.datepipe.transform(event.value, 'yyyy-MM-dd');
  //   console.log(this.valDate);
  // }
  cancel(){
    this.submitapprovers.emit(true);
  }

}
