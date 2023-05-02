import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import {SelectionModel} from '@angular/cdk/collections';
import { DataServiceService } from 'src/app/Services/data-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';
// import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-restrict-approver',
  templateUrl: './restrict-approver.component.html',
  styleUrls: ['./restrict-approver.component.scss']
})
export class RestrictApproverComponent {
  dataSource:any;
  selecteddate:string = "";
  selectedvaltype:string = "";
  selectedname:string = "";
  resValidDate: any;
  valDate: any = [];
  selectedPlantcode:any=[];
  selectedPlantgrp: any = [];
  displayedColumns: string[] = [ 'position', 'name', 'weight', 'symbol'];
  constructor(private router : Router,private _location: Location, private dataservice: DataServiceService) { }
 
  back(){
    this._location.back();
  }

  ngOnInit(){
    this.dataservice.FinalAddedsApprovers = [];
    console.log(this.dataservice.selectedaccess)
    console.log(this.dataservice.PlantCode_PlantGroup_data.plantcode)
    console.log(this.dataservice.PlantCode_PlantGroup_data.plantgroup)
    this.selectedPlantcode = this.dataservice.PlantCode_PlantGroup_data.plantcode 
    this.selectedPlantgrp = this.dataservice.PlantCode_PlantGroup_data.plantgroup 
    console.log(this.selectedPlantcode)
    console.log(this.selectedPlantgrp)
    console.log(this.selectedPlantcode.length)
    if(this.selectedPlantcode.length > 0){
      for(let i:number =0; i<this.selectedPlantcode.length; i++){
         this.dataservice.FinalAddedsApprovers.push({plantcode:this.selectedPlantcode[i].plcd,plantgroup:this.selectedPlantgrp[i].plgrp, validitytype:"Permanent",
         expirydate:"12/12/2023",
         name:"Husain",});
        console.log("i",i)
      }
      this.dataSource = new MatTableDataSource<any>(this.dataservice.FinalAddedsApprovers);
    }
    else{
      console.log("l - 0")
      this.dataSource = new MatTableDataSource<any>(this.dataservice.FinalAddedsApprovers);
    }
  }
  submission(){
    // this.router.navigateByUrl('/main/ContractorSticker/NewSticker/FSubmission');
    console.log(this.selecteddate);
    console.log(this.selectedvaltype);
    console.log(this.selectedname);
    this.dataservice.approver_data.approver_name = this.selectedname
    this.dataservice.approver_data.expiry_date = this.selecteddate
    this.dataservice.approver_data.validity_type = this.selectedvaltype
  }
  // valDateChange(i: string, event: any) {
  //   this.valDate[i] = <string>this.datepipe.transform(event.value, 'yyyy-MM-dd');
  //   console.log(this.valDate);
  // }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
