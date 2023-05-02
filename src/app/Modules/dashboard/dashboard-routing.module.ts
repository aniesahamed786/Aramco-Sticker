import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';

const routes: Routes = [

  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'ContractorSticker',
        loadChildren: () => import('../contractor-sticker/contractor-sticker.module').then((m) => m.ContractorStickerModule),
      },
      {
        path: 'es',
        loadChildren: () => import('../employee-sticker/employee-sticker.module').then((m) => m.EmployeeStickerModule),
      },
      {
        path: 'or',
        loadChildren: () => import('../org-rep/org-rep.module').then((m) => m.OrgRepModule),
      },
      // {
      //   path: '',
      //   pathMatch: 'full',
      //   redirectTo: 'landingpage',
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
