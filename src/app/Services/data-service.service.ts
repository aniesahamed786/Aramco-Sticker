import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, timeout } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';
import { ContractsList } from '../Interfaces/ContractorList';
import { StickerRequest } from '../Interfaces/InProcessReqList';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  subject$ = new BehaviorSubject<any>([]);
  cntlist: Observable<any> = this.subject$.asObservable();
  
  selectedcontracts: any = [];


  
  constructor(private http: HttpClient,private snackBar: MatSnackBar) {}
  InPdy = new BehaviorSubject<any>([]);
  InprocessRequest: any = [
  ];
  Contractors_Data: any = [
    {
      ContractName: 'James',
      ContractNumber: 5103647,
      ExpiryDate: '09/09/2025',
      Action: 'View Details',
    },
    {
      ContractName: 'Smith',
      ContractNumber: 7103647,
      ExpiryDate: '10/12/2025',
      Action: 'View Details',
    },
    {
      ContractName: 'Dhoni',
      ContractNumber: 4103647,
      ExpiryDate: '11/10/2025',
      Action: 'View Details',
    },
    {
      ContractName: 'Virat',
      ContractNumber: 3103647,
      ExpiryDate: '12/09/2025',
      Action: 'View Details',
    },
    {
      ContractName: 'Aswin',
      ContractNumber: 8103647,
      ExpiryDate: '13/08/2025',
      Action: 'View Details',
    },
    {
      ContractName: 'Maxwell',
      ContractNumber: 9103647,
      ExpiryDate: '14/10/2025',
      Action: 'View Details',
    },
    {
      ContractName: 'Sunil',
      ContractNumber: 103647,
      ExpiryDate: '15/05/2025',
      Action: 'View Details',
    },
    {
      ContractName: 'Jadeja',
      ContractNumber: 2103647,
      ExpiryDate: '16/04/2025',
      Action: 'View Details',
    },
    {
      ContractName: 'Sachin',
      ContractNumber: 1103647,
      ExpiryDate: '17/03/2025',
      Action: 'View Details',
    },
    {
      ContractName: 'Imran',
      ContractNumber: 4103647,
      ExpiryDate: '20/02/2025',
      Action: 'View Details',
    },
  ];
  InprocessTempEmpData: any = [];
  TempEmpData: any = [];
  Employees_Data: any = [
    {
      EmployeeName: 'James Smith',
      BadgeNumber: 15181034,
      Sticker: '1/4',
      Action: 'View More',
      description: [
        {
          StickerType: 'Contractor Non Restricted',
          PlateNo: '2345-KSA',
          Model_Year: '2022',
          ExipiryDate: '11/02/2023',
          Status: 'Active',
          Action: 'View Details',
        },
        {
          StickerType: 'Contractor Restricted',
          PlateNo: '2345-KSA',
          Model_Year: '2022',
          ExipiryDate: '11/02/2022',
          Status: 'InActive',
          Action: 'View Details',
        },
        {
          StickerType: 'Contractor Non Restricted',
          PlateNo: '2345-KSA',
          Model_Year: '2022',
          ExipiryDate: '11/02/2021',
          Status: 'InActive',
          Action: 'View Details',
        },
      ],
    },
    {
      EmployeeName: 'Rahul Gandhi',
      BadgeNumber: 15181035,
      Sticker: '3/3',
      Action: 'View More',
      description: [
        {
          StickerType: 'Contractor Non Restricted',
          PlateNo: '2345-KSA',
          Model_Year: '2022',
          ExipiryDate: '11/02/2023',
          Status: 'Active',
          Action: 'View Details',
        },
        {
          StickerType: 'Contractor Restricted',
          PlateNo: '2345-KSA',
          Model_Year: '2022',
          ExipiryDate: '11/02/2022',
          Status: 'InActive',
          Action: 'View Details',
        },
        {
          StickerType: 'Contractor Non Restricted',
          PlateNo: '2345-KSA',
          Model_Year: '2022',
          ExipiryDate: '11/02/2021',
          Status: 'InActive',
          Action: 'View Details',
        },
      ],
    },
    {
      EmployeeName: 'Lokeshwaran',
      BadgeNumber: 15181036,
      Sticker: '3/3',
      Action: 'View More',
      description: [
        {
          StickerType: 'Contractor Non Restricted',
          PlateNo: '2345-KSA',
          Model_Year: '2022',
          ExipiryDate: '11/02/2023',
          Status: 'Active',
          Action: 'View Details',
        },
        {
          StickerType: 'Contractor Restricted',
          PlateNo: '2345-KSA',
          Model_Year: '2022',
          ExipiryDate: '11/02/2022',
          Status: 'InActive',
          Action: 'View Details',
        },
        {
          StickerType: 'Contractor Non Restricted',
          PlateNo: '2345-KSA',
          Model_Year: '2022',
          ExipiryDate: '11/02/2021',
          Status: 'InActive',
          Action: 'View Details',
        },
      ],
    },
    {
      EmployeeName: 'Joushua',
      BadgeNumber: 15181037,
      Sticker: '2/3',
      Action: 'View More',
      description: [
        {
          StickerType: 'Contractor Non Restricted',
          PlateNo: '2345-KSA',
          Model_Year: '2022',
          ExipiryDate: '11/02/2023',
          Status: 'Active',
          Action: 'View Details',
        },
        {
          StickerType: 'Contractor Restricted',
          PlateNo: '2345-KSA',
          Model_Year: '2022',
          ExipiryDate: '11/02/2022',
          Status: 'InActive',
          Action: 'View Details',
        },
        {
          StickerType: 'Contractor Non Restricted',
          PlateNo: '2345-KSA',
          Model_Year: '2022',
          ExipiryDate: '11/02/2021',
          Status: 'InActive',
          Action: 'View Details',
        },
      ],
    },
    {
      EmployeeName: 'Mohan',
      BadgeNumber: 15181038,
      Sticker: '2/3',
      Action: 'View More',
      description: [
        {
          StickerType: 'Contractor Non Restricted',
          PlateNo: '2345-KSA',
          Model_Year: '2022',
          ExipiryDate: '11/02/2023',
          Status: 'Active',
          Action: 'View Details',
        },
        {
          StickerType: 'Contractor Restricted',
          PlateNo: '2345-KSA',
          Model_Year: '2022',
          ExipiryDate: '11/02/2022',
          Status: 'InActive',
          Action: 'View Details',
        },
        {
          StickerType: 'Contractor Non Restricted',
          PlateNo: '2345-KSA',
          Model_Year: '2022',
          ExipiryDate: '11/02/2021',
          Status: 'InActive',
          Action: 'View Details',
        },
      ],
    },
    {
      EmployeeName: 'Mukesh',
      BadgeNumber: 15181039,
      Sticker: '2/3',
      Action: 'View More',
      description: [
        {
          StickerType: 'Contractor Non Restricted',
          PlateNo: '2345-KSA',
          Model_Year: '2022',
          ExipiryDate: '11/02/2023',
          Status: 'Active',
          Action: 'View Details',
        },
        {
          StickerType: 'Contractor Restricted',
          PlateNo: '2345-KSA',
          Model_Year: '2022',
          ExipiryDate: '11/02/2022',
          Status: 'InActive',
          Action: 'View Details',
        },
        {
          StickerType: 'Contractor Non Restricted',
          PlateNo: '2345-KSA',
          Model_Year: '2022',
          ExipiryDate: '11/02/2021',
          Status: 'InActive',
          Action: 'View Details',
        },
      ],
    },
    {
      EmployeeName: 'Gopika',
      BadgeNumber: 15181040,
      Sticker: '2/3',
      Action: 'View More',
      description: [
        {
          StickerType: 'Restricted',
          PlateNo: '2345-KSA',
          Model_Year: '2023',
          ExipiryDate: '11/02/2023',
          Status: 'Active',
          Action: 'View Details',
        },
        {
          StickerType: 'Restricted',
          PlateNo: '2345-KSA',
          Model_Year: '2022',
          ExipiryDate: '11/02/2022',
          Status: 'Active',
          Action: 'View Details',
        },
        {
          StickerType: 'Restricted',
          PlateNo: '2345-KSA',
          Model_Year: '2022',
          ExipiryDate: '11/02/2025',
          Status: 'InActive',
          Action: 'View Details',
        },
      ],
    },
    {
      EmployeeName: 'Karthi',
      BadgeNumber: 15181041,
      Sticker: '2/3',
      Action: 'View More',
      description: [
        {
          StickerType: 'Contractor Non Restricted',
          PlateNo: '2345-KSA',
          Model_Year: '2022',
          ExipiryDate: '11/02/2023',
          Status: 'Active',
          Action: 'View Details',
        },
        {
          StickerType: 'Contractor Restricted',
          PlateNo: '2345-KSA',
          Model_Year: '2022',
          ExipiryDate: '11/02/2022',
          Status: 'InActive',
          Action: 'View Details',
        },
        {
          StickerType: 'Contractor Non Restricted',
          PlateNo: '2345-KSA',
          Model_Year: '2022',
          ExipiryDate: '11/02/2021',
          Status: 'InActive',
          Action: 'View Details',
        },
      ],
    },
    {
      EmployeeName: 'Pavithra',
      BadgeNumber: 15181042,
      Sticker: '2/3',
      Action: 'View More',
      description: [
        {
          StickerType: 'Contractor Non Restricted',
          PlateNo: '2345-KSA',
          Model_Year: '2022',
          ExipiryDate: '11/02/2023',
          Status: 'Active',
          Action: 'View Details',
        },
        {
          StickerType: 'Contractor Restricted',
          PlateNo: '2345-KSA',
          Model_Year: '2022',
          ExipiryDate: '11/02/2022',
          Status: 'InActive',
          Action: 'View Details',
        },
        {
          StickerType: 'Contractor Non Restricted',
          PlateNo: '2345-KSA',
          Model_Year: '2022',
          ExipiryDate: '11/02/2021',
          Status: 'InActive',
          Action: 'View Details',
        },
      ],
    },
    {
      EmployeeName: 'Ramasamy',
      BadgeNumber: 15181043,
      Sticker: '2/3',
      Action: 'View More',
      description: [
        {
          StickerType: 'Contractor Non Restricted',
          PlateNo: '2345-KSA',
          Model_Year: '2022',
          ExipiryDate: '11/02/2023',
          Status: 'Active',
          Action: 'View Details',
        },
        {
          StickerType: 'Contractor Restricted',
          PlateNo: '2345-KSA',
          Model_Year: '2022',
          ExipiryDate: '11/02/2022',
          Status: 'InActive',
          Action: 'View Details',
        },
        {
          StickerType: 'Contractor Non Restricted',
          PlateNo: '2345-KSA',
          Model_Year: '2022',
          ExipiryDate: '11/02/2021',
          Status: 'InActive',
          Action: 'View Details',
        },
      ],
    },
  ];

  SelectedGates: any = [
   
  ];
  CurrentRestrictedAccess: any = [
    {
      plantcode: '214-Jizan Bulk Marine Terminal',
      plantgroup: 'CR43',
      validitytype: 'Permanent',
      expirydate: '31/12/9999',
      name: 'Anwar',
    },
    {
      plantcode: '214-Jizan Bulk Marine Terminal',
      plantgroup: 'CR42',
      validitytype: 'Permanent',
      expirydate: '31/12/9999',
      name: 'Hussain',
    },
  ];
  plant_code: any = [
    {
      plcd: '214-Jizan Bulk Marine Terminal',
    },
    {
      plcd: 'Pressure Reduction Station',
    },
    {
      plcd: 'Dharan Terminal',
    },
    {
      plcd: '456-Jizan Station',
    },
  ];
  plant_group: any = [
    {
      plgrp: 'DWC',
      subitems: [
        {
          desc: '456-Jizan Station',
          pcode: 'plant code',
        },
        {
          desc: '456-Jizan Station',
          pcode: 'plant code',
        },
        {
          desc: '456-Jizan Station',
          pcode: 'plant code',
        },
        {
          desc: '456-Jizan Station',
          pcode: 'plant code',
        },
        {
          desc: '456-Jizan Station',
          pcode: 'plant code',
        },
        {
          desc: '456-Jizan Station',
          pcode: 'plant code',
        },
      ],
    },
    {
      plgrp: 'PCR',
      subitems: [
        {
          desc: '456-Jizan Station',
          pcode: 'plant code',
        },
        {
          desc: '456-Jizan Station',
          pcode: 'plant code',
        },
        {
          desc: '456-Jizan Station',
          pcode: 'plant code',
        },
      ],
    },
    {
      plgrp: 'PHR',
      subitems: [
        {
          desc: '456-Jizan Station',
          pcode: 'plant code',
        },
        {
          desc: '456-Jizan Station',
          pcode: 'plant code',
        },
      ],
    },
    {
      plgrp: 'F5-L',
      subitems: [
        {
          desc: '456-Jizan Station',
          pcode: 'plant code',
        },
      ],
    },
  ];
  newsticker_data: any = [
    {
      company: '',
      endtime: '',
      expiry: '',
      licenseplateno: '',
      make: '',
      model: '',
      orgin: '',
      owner: '',
      platecategory: '',
      primarycolor: '',
      secondarycolor: '',
      starttime: '',
      stickeroffice: '',
      stickertype: '',
      type: '',
      year: '2023',
    },
  ];
  stickeractions_data: any = [
    {
      company: '',
      endtime: '',
      expiry: '',
      licenseplateno: '',
      make: '',
      model: '',
      orgin: '',
      owner: '',
      platecategory: '',
      primarycolor: '',
      secondarycolor: '',
      starttime: '',
      stickeroffice: '',
      stickertype: '',
      type: '',
      year: '',
    },
  ];
  selected_gates_data = [];
  PlantCode_PlantGroup_data: any = [];
  approver_data: any = [
    {
      expiry_date: '',
      validity_type: '',
      approver_name: '',
    },
  ];
  selectedaccess = [
    {
      Description: '214 - Jezan Marine Terminal',
      plantcode: 'Plant Code',
      validitytype: 'Permanent',
      expirydate: '12/12/2023',
      name: 'Husain',
      position: 'Developer',
      orgname: 'K',
      orgcode: '2185',
    },
  ];
  pagetitle:string = '';
  FinalAddedsApprovers: any = [];
  protected url = 'http://localhost:3000';
  protected url2 = 'http://localhost:3000/SelectedGates';
  protected url3 = 'http://localhost:3000/InprocessRequest'
  protected url4 = 'http://localhost:3000/Employees_Data'
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
  getselectedgates(): Observable<any> {
    return this.http.get(this.url2).pipe(
      map((res) => res),
      timeout(2000),
      catchError((err: any) => {
        console.log('errrr', err);
         this.snackBar.open(err.message, 'OK',{ duration: 3000,panelClass: ['alert-snackbar'] });
        throw 'err';
      })
    );
  }

  getInprocessRequest(): Observable<StickerRequest>{
    return this.http.get<StickerRequest>(this.url3).pipe(
      map((res:StickerRequest) => res),
      timeout(2000),
      catchError((err: any) => {
        console.log('errrr', err);
         this.snackBar.open(err.message, 'OK',{ duration: 3000,panelClass: ['alert-snackbar'] });
        throw 'err';
      })
    );
  }


  getEmployeesData(){
    return this.http.get(this.url4).pipe(
      map((res) => res),
      timeout(2000),
      catchError((err: any) => {
        console.log('errrr', err);
        //  this.snackBar.open(err.message, '',{ duration: 3000,panelClass: ['alert-snackbar'] });
        throw 'err';
      })
    );
  }
}
