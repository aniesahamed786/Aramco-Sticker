import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, timeout } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';
import { ContractsList } from '../Interfaces/ContractorList';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class CntrListService {

  constructor(private http: HttpClient,private snackBar: MatSnackBar) {}
  protected url = 'http://localhost:3000';

  private SelectedGates = new BehaviorSubject<ContractsList>({} as ContractsList);

  setContractData(newData: ContractsList) {
    this.SelectedGates.next(newData);
  }

  getContractData() {
    return this.SelectedGates.asObservable();
  }
 

  getcontractors(): Observable<ContractsList> {
    return this.http.get<ContractsList>(this.url + '/contracts').pipe(
      map((res:ContractsList) => res),
      timeout(2000),
      catchError((err: any) => {
        console.log('errrr', err);
         this.snackBar.open(err.message, 'OK',{ duration: 3000,panelClass: ['alert-snackbar'] });
        throw 'err';
      })
    );
    //  .tap((contracts:any) => this.subject$.next(contracts))
  }
}
