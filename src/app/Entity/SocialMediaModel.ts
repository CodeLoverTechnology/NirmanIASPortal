export class SocialMediaModel {
    constructor(
     public SocialMediaID:number,
     public SocialMediaName :string,
     public Address  :   string,
     public Notes  :   string,
     public CreatedBy  :   string,
      public CreatedDate  :   string,
      public ModifiedBy  : string,
      public ModifiedDate  :  string ,
      public Active : boolean
      ){}
}
