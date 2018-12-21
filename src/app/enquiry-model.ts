export class EnquiryModel {
    constructor(
    public EnquiryID : number,
    public Name:string,
    public EmailID :string,
    public ContactNo : number,
    public EnquiryMessage : string,
    public ReplyMessage : string,
    public ReferenceEnquiryID : number,
    public CreatedBy : string,
    public CreatedDate : string,
    public ModifiedBy : string,
    public ModifiedDate : string,
    public Active : boolean
){}
}
