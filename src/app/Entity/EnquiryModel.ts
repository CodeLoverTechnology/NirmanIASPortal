export class EnquiryModel {
    constructor(
      public enquiryID : number,
      public name:string,
      public emailID :string,
      public contactNo : number,
      public enquiryMessage : string,
      public replyMessage : string,
      public referenceEnquiryID: number,
      public createdBy : string,
      public createdDate : string,
      public modifiedBy : string,
      public modifiedDate: string,
      public active : boolean
){}
}
