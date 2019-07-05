export class VideoMastersModel {
    constructor(
        public VideoID : number,
        public SubCategory : number,
        public VideoTitle  : string,
        public Description  : string,
        public VideoPath   : string,
        public Remarks  : string,
        public CreatedBy  : string,
        public CreatedDate   : string,
        public ModifiedBy  : string,
        public ModifiedDate   : string,
        public Active    : boolean,
    ){}
}