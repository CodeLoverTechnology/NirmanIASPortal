export class BatchDetails {
      constructor(
      public  BatchID: number,
      public  BatchFor: string,
      public  BatchCode:string,
      public  Subject:string ,
      public  Time:string ,
      public  Faculty:number,
      public  BatchStartDate:string,
      public  BatchEndDate:string,
      public  TotalStudents:number,
      public  Remarks:string,
      public  CreatedBy:string,
      public  CreatedDate:Date,
      public  ModifiedBy: string,
      public  ModifiedDate : Date,
      public  Active: boolean,
      public  IsNew : boolean,
      ){}
}
