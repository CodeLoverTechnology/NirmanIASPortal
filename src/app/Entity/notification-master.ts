export class NotificationMaster {
    constructor(
        public NotificationID : number,
        public Category : number,
        public Notification : string,
        public Description : string,
        public ImagePath : string,
        public MoreDetailsFilePath : string,
        public IsNew : boolean,
        public CreatedBy : string,
        public CreatedDate : string,
        public ModifiedBy : string,
        public ModifiedDate : string,
        public Active : boolean
    ){}
}
