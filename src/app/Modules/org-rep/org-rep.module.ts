import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrgRepRoutingModule } from './org-rep-routing.module';
import { OrgListComponent } from './Components/org-list/org-list.component';


@NgModule({
  declarations: [
    OrgListComponent
  ],
  imports: [
    CommonModule,
    OrgRepRoutingModule
  ]
})
export class OrgRepModule { }
