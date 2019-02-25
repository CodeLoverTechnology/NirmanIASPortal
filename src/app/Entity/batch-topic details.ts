export class BatchTopicDetails{
    constructor(
    public BatchTopicID: number,
    public BatchID:number,
    public  TopicDate: string,
    public  Topic:string,
    public  TopicSummary:string ,
    public  Location:string ,
    public  FacultyID:number,
    public  TpoicPicPath:string,
    public  IsNew:boolean,    
    public  Remarks:string,
    public  CreatedBy:string,
    public  CreatedDate:Date,
    public  ModifiedBy: string,
    public  ModifiedDate : Date,
    public  Active: boolean,
    ){} 
   
   
   

}
