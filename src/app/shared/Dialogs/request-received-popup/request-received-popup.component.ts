import { Component,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-request-received-popup',
  templateUrl: './request-received-popup.component.html',
  styleUrls: ['./request-received-popup.component.scss']
})
export class RequestReceivedPopupComponent {

  constructor(
    public dialogRef: MatDialogRef<RequestReceivedPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private router:Router
  ) {}
   navigate(d:string){
    var url = this.data.url
      this.router.navigateByUrl(url)
    console.log(this.data.url);
   }
}
