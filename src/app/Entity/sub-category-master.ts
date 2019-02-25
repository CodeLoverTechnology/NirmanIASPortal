export class SubCategoryMaster {
    constructor(
       public SubCategoryID:number,
       public CategoryID:number,
       public SubCategoryCode :string,
       public SubCategoryName:string, 
       public SubCatDescription:string,
       public Sequence:number,
       public CreatedBy:string,
       public CreatedDate:Date,
       public ModifiedBy:string,
       public ModifiedDate:Date,
       public Active:boolean
  ){}
}
