export class CategoryMaster {
    constructor(
        public CategoryID:number,
        public CategoryCode  :any,
        public CategoryName  :   string,
        public Description  :   string,
        public Sequence  :   string,
         public CreatedBy  :   string,
         public CreatedDate  : boolean,
         public ModifiedBy :   string,
         public ModifiedDate :   string,
         public Active : boolean
         ){}
}
