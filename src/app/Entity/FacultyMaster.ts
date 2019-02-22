export class FacultyMaster{
    constructor(
        public FacultyID :number,
        public FacultyName     :string,
        public Subject    :string,
        public RefeenceName           :string,
        public Address: string,
        public EmailID: string,
        public ContactNo: string,
        public Remarks   :   string,
        public CreatedBy   :   string,
        public CreatedDate   : string,
        public ModifiedBy  :  string ,
        public ModifiedDate  :  string ,
        public Active : boolean
         ){}

}