export interface PersonalDetail {
    BadgeNumber: string;
    EmployeeName: string;
    No_of_Sticker: string;
  }
  
export interface VehicleDetail {
    Type: string;
    Primary_Color: string;
    Plate_Category: string;
    Make: string;
    Secondary_Color: string;
    License_Plate_No: string;
    Model: string;
    Orgin: string;
    Year: string;
    Owner: string;
  }
  
export  interface StickerDetail {
    Sticker_Office: string;
    Company: string;
    Expiry: string;
    Sticker_Type: string;
  }
  
export  interface AllowedHour {
    StartTime: string;
    EndTime: string;
  }
  
export  interface ScheduledDateTime {
    Expiry: string;
    Sticker_Type: string;
  }
  
export  interface StickerRequest {
    position: string;
    name: string;
    weight: string;
    RequestType: string;
    action: string;
    PersonalDetails: PersonalDetail[];
    VechileDetails: VehicleDetail[];
    StickerDetails: StickerDetail[];
    AllowedHours: AllowedHour[];
    SecheduledDateTime: ScheduledDateTime[];
  }
  