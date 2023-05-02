export interface Contracts { 
    contractname: string;
    contractnumber: number;
    Expirydate: string;
}

export interface PersonalDetails {
    BadgeNo: string;
    EmployeeName: string;
    No_of_sticker: string;
  }
  
export   interface VechicleDetails {
    Type: string;
    Primary: string;
    PlateCategory: string;
    Make: string;
    SecondaryColor: string;
    LicenseplateNo: string;
    Model: string;
    Origin: string;
    Year: string;
    Owner: string;
  }
  
 export interface StickerDetails {
    StickerOffice: string;
    Company: string;
    Expiry: string;
    StickerType: string;
  }
  
 export interface AllowedHours {
    StartTime: string;
    EndTime: string;
  }
  
 export interface Action {
    PersonalDetails: PersonalDetails[];
    VechicleDetails: VechicleDetails[];
    StickerDetails: StickerDetails[];
    AllowedHours: AllowedHours[];
  }
  
 export interface ViewMore {
    Stickertype: string;
    Plateno: string;
    Model_year: string;
    ExpiryDate: string;
    Status: string;
    Action: Action[];
  }
  
 export interface Viewdetails {
    EmployeeName: string;
    BadgeNumber: string;
    Sticker: string;
    ViewMore: ViewMore[];
  }
  
export  interface ContractsList {
    contractname: string;
    contractnumber: number;
    Expirydate: string;
    Viewdetails: Viewdetails[];
  }
  