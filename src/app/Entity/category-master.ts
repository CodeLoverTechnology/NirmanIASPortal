export class CategoryMaster {
    constructor(
        public CategoryID:number,
        public CategoryCode  :string,
        public CategoryName  :   string,
        public Description  :   string,
        public Sequence  :   string,
         public CreatedBy  :   string,
         public CreatedDate  : string,
         public ModifiedBy :   string,
         public ModifiedDate :   string,
         public Active : boolean
         ){}
}
