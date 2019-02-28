export class UserMaster {
    constructor(
        public UserID : number,
        public UserEmailID : string,
        public UserName  : string,
        public ContactNo  : string,
        public Department   : string,
        public Designation  : string,
        public Remarks   : string,
        public CreatedBy  : string,
        public CreatedDate   : string,
        public ModifiedBy  : string,
        public ModifiedDate   : string,
        public Active    : boolean,
    ){}
}
