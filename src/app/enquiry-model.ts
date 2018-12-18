export class EnquiryModel {
    constructor(
    public EnquiryID : number,
    public Name:string,
    public EmailID :string,
    public ContactNo : number,
   // public TypeOfEnquiry : string,
    public EnquiryMessage : string,
    public ReplyMessage : string,
    public CreatedBy : string,
    public CreatedDate : Date,
    public ModifiedBy : string,
    public ModifiedDate : Date,
    public Active : boolean
){}
}
