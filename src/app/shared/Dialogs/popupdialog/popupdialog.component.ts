import { Component,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-popupdialog',
  templateUrl: './popupdialog.component.html',
  styleUrls: ['./popupdialog.component.scss']
})
export class PopupdialogComponent {
    constructor(
      public dialogRef: MatDialogRef<PopupdialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data:any,
    ) {}

  
}
