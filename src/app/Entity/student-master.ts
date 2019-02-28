export class StudentMaster {
    constructor(
        public StudentID : number,
        public StudentCode : string,
        public StudentName : string,
        public Address  : string,
        public Course  : number,
        public ContactNo  : string,
        public EmailID  : string,
        public AdmissionDate  : string,
        public ValidityStartDate  : string,
        public ValidityEndDate  : string,
        public Branch  : string,
        public Remarks  : string,
        public CreatedBy  : string,
        public CreatedDate  : string,
        public ModifiedBy  : string,
        public ModifiedDate  : string,
        public Active  : boolean
    ){}
}
