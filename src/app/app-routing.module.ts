import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractorAccessComponent } from './LandingPage/contractor-access/contractor-access.component';
import { StickerFlowComponent } from './LandingPage/sticker-flow/sticker-flow.component';

const routes: Routes = [

  {
    path: 'landingpage',
    component:StickerFlowComponent
    // loadChildren: () => import('./Tile-landing-page/landing-page.module').then((m) => m.LandingPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./Modules/dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  // {
  //   path: 'main/ea',
  //   loadChildren: () => import('./Modules/dashboard/SubModules/employee-sticker/employee-sticker.module').then((m) => m.EmployeeStickerModule)
  // },
  // {
  //   path: 'main/or',
  //   loadChildren: () => import('./Modules/dashboard/SubModules/org-rep/org-rep.module').then((m) => m.OrgRepModule)
  // },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'landingpage',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
