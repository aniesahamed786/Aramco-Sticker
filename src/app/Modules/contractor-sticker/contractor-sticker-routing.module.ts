import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractorListComponent } from './Components/contractor-list/contractor-list.component';
import { EmployeeDetailsComponent } from './Components/employee-details/employee-details.component';
import { EmployeeStickerDetailsComponent } from './Components/employee-sticker-details/employee-sticker-details.component';
import { FSubmissionComponent } from './Components/fsubmission/fsubmission.component';
import { GateAccessComponent } from './Components/gate-access/gate-access.component';
import { InProcessRequestComponent } from './Components/in-process-request/in-process-request.component';
import { NewStickerComponent } from './Components/new-sticker/new-sticker.component';
import { RenewStickerComponent } from './Components/renew-sticker/renew-sticker.component';
import { RestrictApproverComponent } from './Components/restrict-approver/restrict-approver.component';
import { RestrictedAccessComponent } from './Components/restricted-access/restricted-access.component';
import { ViewRequestComponent } from './Components/view-request/view-request.component';
const routes: Routes = [
  {
    path: '',
    component:ContractorListComponent
  },
  {
    path:'InProcess',
    component:InProcessRequestComponent
 },
 {
     path:'EmpDetails',
     component:EmployeeDetailsComponent
  },
 {
     path:'EmployeeStickerDetails',
     component:EmployeeStickerDetailsComponent
  },
  {
    path:'EmployeeStickerDetails/renew',
    component:RenewStickerComponent
 },

  {
    path:'ViewRequest',
    component:ViewRequestComponent
 },

 {
  path:'NewSticker',
  component:NewStickerComponent
},
{
  path:'NewSticker/GateAccess',
  component:GateAccessComponent
},
{
  path:'NewSticker/RestrictedAccess',
  component:RestrictedAccessComponent
},
{
  path:'NewSticker/RestrictApprover',
  component:RestrictApproverComponent
},
{
  path:'NewSticker/FSubmission',
  component:FSubmissionComponent
},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractorStickerRoutingModule { }
