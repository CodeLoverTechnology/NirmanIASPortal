export class  VideoLectures
{ 
    constructor(
    public  VideoID: number,
    public  VideoType :number,
    public  VideoTitle :String,
    public  VideoCategory :number,
    public  VideoPath :String,
    public  Faculty :number,
    public  NoOfViews: number,
    public  Description :String,
    public  CreatedBy :String,
    public  CreatedDate :Date,
    public  ModifiedBy :String,
    public  ModifiedDate :Date,
    public Active :boolean,
    ){}
   }
   
   
   
   