export class NirmanResultMasters{
 constructor(
  public ResultID : number,
  public  ExamName : string,
  public  ExamYear :string,
  public  CandidateName :string,
  public  CandidateRank : string,
  public  CandiatePicPath : string,
  public  CandiateReview : string,
  public  Remarks : string,
  public  CreatedBy : string,
  public  CreatedDate :Date,
  public  ModifiedBy : string,
  public ModifiedDate :Date,
  public Active: boolean,
  public  IsNew : boolean
    ){}
}



