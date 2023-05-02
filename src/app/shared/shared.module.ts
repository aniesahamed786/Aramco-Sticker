import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { SearchEmployeeComponent } from './Dialogs/search-employee/search-employee.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {  MatRadioModule } from '@angular/material/radio';
import {  MatDialogModule } from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatStepperModule} from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle' ;
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSortModule } from '@angular/material/sort';
import { SearchEmpPipe } from './Pipes/search-emp.pipe';
import { SearchempDirective } from './Dialogs/search-employee/searchemp.directive';
import { GateAccessComponent } from './Components/gate-access/gate-access.component';
import { AddRestrictedAccessComponent } from './Components/add-restricted-access/add-restricted-access.component';
import { AddRestrictApproverComponent } from './Components/add-restrict-approver/add-restrict-approver.component';
import { StickerActionsComponent } from './Components/sticker-actions/sticker-actions.component';
import { PopupdialogComponent } from './Dialogs/popupdialog/popupdialog.component';
import { RequestReceivedPopupComponent } from './Dialogs/request-received-popup/request-received-popup.component';
import { RenewSelectedpopupComponent } from './Dialogs/renew-selectedpopup/renew-selectedpopup.component';
import { CancelSelectedpopupComponent } from './Dialogs/cancel-selectedpopup/cancel-selectedpopup.component';
import { DeleteRequestpopupComponent } from './Dialogs/delete-requestpopup/delete-requestpopup.component';
import { ResechedulePopupComponent } from './Dialogs/resechedule-popup/resechedule-popup.component';

// import { SearchempPipe } from 'src/app/Pipes/searchemp.pipe';

@NgModule({
  declarations: [
    SearchEmployeeComponent,
    SearchEmpPipe,
    SearchempDirective,
    GateAccessComponent,
    AddRestrictedAccessComponent,
    AddRestrictApproverComponent,
    StickerActionsComponent,
    PopupdialogComponent,
    RequestReceivedPopupComponent,
    RenewSelectedpopupComponent,
    CancelSelectedpopupComponent,
    DeleteRequestpopupComponent,
    ResechedulePopupComponent,
  
    // SearchempPipe 
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatSelectModule, ReactiveFormsModule, MatTableModule,
    MatButtonModule, MatCardModule, MatRadioModule, MatDialogModule,MatCheckboxModule,MatStepperModule,MatExpansionModule,
    MatSlideToggleModule,HttpClientModule,MatProgressSpinnerModule,MatDatepickerModule,MatNativeDateModule,
    MatGridListModule,
    MatMenuModule,
    LayoutModule,
    MatSortModule,
    // SearchempPipe
  ],
  exports:[
    SearchEmployeeComponent,
    SearchEmpPipe,
    GateAccessComponent,
    AddRestrictedAccessComponent,
    AddRestrictApproverComponent,
    StickerActionsComponent,
    PopupdialogComponent,
    RequestReceivedPopupComponent
  ]
})
export class SharedModule { }
