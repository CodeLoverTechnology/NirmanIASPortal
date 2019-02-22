export class BannerModel {
    constructor  (
        public BannerID   :string,
        public BannerTitle    :string,
        public BannerImagesPath:   string,
        public SubTitle  :   string,
        public Remarks: string,
         public CreatedBy   :   string,
         public CreatedDate   : string,
         public ModifiedBy  :  string ,
         public ModifiedDate  :  string ,
         public Active : boolean
         ){}
}
