import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { MatSortModule } from '@angular/material/sort'
import { ContractorStickerRoutingModule } from './contractor-sticker-routing.module';
import { ContractorListComponent } from './Components/contractor-list/contractor-list.component';
import { DataServiceService } from 'src/app/Services/data-service.service';
import { CntrListService } from 'src/app/Services/cntr-list.service';
import { InProcessRequestComponent } from './Components/in-process-request/in-process-request.component';
import { EmployeeDetailsComponent } from './Components/employee-details/employee-details.component';
import { EmployeeStickerDetailsComponent } from './Components/employee-sticker-details/employee-sticker-details.component';
import { ViewRequestComponent } from './Components/view-request/view-request.component';
import { SharedModule } from '../../shared/shared.module';
import { NewStickerComponent } from './Components/new-sticker/new-sticker.component';
import { GateAccessComponent } from './Components/gate-access/gate-access.component';
import { RestrictedAccessComponent } from './Components/restricted-access/restricted-access.component';
import { RestrictApproverComponent } from './Components/restrict-approver/restrict-approver.component';
import { FSubmissionComponent } from './Components/fsubmission/fsubmission.component';
import { RenewStickerComponent } from './Components/renew-sticker/renew-sticker.component';

@NgModule({
  declarations: [
    ContractorListComponent,
    InProcessRequestComponent,
    EmployeeDetailsComponent,
    EmployeeStickerDetailsComponent,
    ViewRequestComponent,
    NewStickerComponent,
    GateAccessComponent,
    RestrictedAccessComponent,
    RestrictApproverComponent,
    FSubmissionComponent,
    RenewStickerComponent,
   
  ],
  imports: [
    CommonModule,
    ContractorStickerRoutingModule,
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
    SharedModule
   
  ],
  providers: [DataServiceService,CntrListService
    // {
    //   provide: NG_VALUE_ACCESSOR,
    //   useExisting: forwardRef(() => MyInputField),
    //   multi: true,
    // }
  ]
})
export class ContractorStickerModule { }
