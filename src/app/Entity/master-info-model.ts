export class MasterInfoModel {
    constructor(
        public MasterID  :number,
        public MasterValue   :string,
        public MasterTable    :   string,
        public Sequence    :   string,
        public CreatedBy    :   string,
         public CreatedDate   :   string,
         public ModifiedBy   : string,
         public ModifiedDate   :  string ,
         public Active  : boolean
         ){}
}

