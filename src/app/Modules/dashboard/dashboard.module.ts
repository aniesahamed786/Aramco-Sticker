import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FlexLayoutModule } from '@angular/flex-layout';
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
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from './Components/header/header.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { MainComponent } from './Components/main/main.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NavBarComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    // FlexLayoutModule,
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
    
  ]
})
export class DashboardModule { }
