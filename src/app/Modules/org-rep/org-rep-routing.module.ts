import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrgListComponent } from './Components/org-list/org-list.component';

const routes: Routes = [
  {
    path:"",
    component:OrgListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrgRepRoutingModule { }
