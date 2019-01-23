export class CourseMaster {
    constructor(
        public CourseID :number,
        public CourseType  :string,
        public CourseCode   :   string,
        public CourseName   :   string,
        public Remarks   :   string,
         public CreatedBy   :   string,
         public CreatedDate   : string,
         public ModifiedBy  :  string ,
         public ModifiedDate  :  string ,
         public Active : boolean
         ){}
}
