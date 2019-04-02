export class ImageVideoInfo {
    constructor(
        public FileID :number,
        public Category  :number,
        public FileName   :   string,
        public FileType   :   number,
        public FileUploadForPage   :   number,
        public Title :string,
        public FileImagePath : string,
        public VideoFilePathOrLink : string,
        public Remarks : string,
        public IsNew :boolean,
         public CreatedBy   :   string,
         public CreatedDate   : string,
         public ModifiedBy  :  string ,
         public ModifiedDate  :  string ,
         public Active : boolean
         ){}
}