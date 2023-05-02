import { Component,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-renew-selectedpopup',
  templateUrl: './renew-selectedpopup.component.html',
  styleUrls: ['./renew-selectedpopup.component.scss']
})
export class RenewSelectedpopupComponent {
  constructor(
    public dialogRef: MatDialogRef<RenewSelectedpopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private router:Router
  ) {}

  
}
