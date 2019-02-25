export class CurrentAffairsMasters{
    constructor(
        public CurrentAffairsID :number,
        public Category         :string,
        public SubCategory      :string,
        public Title            :string,
        public Summary: string,
        public PDFPath: string,
        public CurrentAffairsImgPath: string,
        public IsNew : boolean,
        public NoOfView: number,
        public SpecialRemarks   :   string,
        public CreatedBy   :   string,
        public CreatedDate   : string,
        public ModifiedBy  :  string ,
        public ModifiedDate  :  string ,
        public Active : boolean
         ){}
}
