import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StickerFlowComponent } from './LandingPage/sticker-flow/sticker-flow.component';
import { ContractorAccessComponent } from './LandingPage/contractor-access/contractor-access.component';
import { EmployeeAccessComponent } from './LandingPage/employee-access/employee-access.component';
import { OrgRepComponent } from './LandingPage/org-rep/org-rep.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    StickerFlowComponent,
    ContractorAccessComponent,
    EmployeeAccessComponent,
    OrgRepComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
    MatSnackBarModule
   
  ],
  exports:[
   
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
