export class SMSMessageMaster {
    constructor(
        public  SMSID : number,
        public  ContactNo: number,
        public  Message :string,
        public  Status : number,
        public  CreatedBy : string,
        public  CreatedDate : string,
        public  ModifiedBy : string,
        public  ModifiedDate :string,
        public  Active :string
    ){}
}
