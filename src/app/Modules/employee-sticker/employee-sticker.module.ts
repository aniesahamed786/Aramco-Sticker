import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeStickerRoutingModule } from './employee-sticker-routing.module';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';


@NgModule({
  declarations: [
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    EmployeeStickerRoutingModule
  ]
})
export class EmployeeStickerModule { }
