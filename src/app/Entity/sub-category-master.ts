import { DatePipe } from "@angular/common";

export class SubCategoryMaster {
    constructor(
       public SubCategoryID:number,
       public CategoryID:number,
       public SubCategoryCode :string,
       public SubCategoryName:string, 
       public SubCatDescription:string,
       public Sequence:number,
       public CreatedBy:string,
       public CreatedDate:DatePipe,
       public ModifiedBy:string,
       public ModifiedDate:DatePipe,
       public Active:boolean
  ){}
}
