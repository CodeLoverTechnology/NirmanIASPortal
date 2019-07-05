export class PreviousYearQuestionAnswerModels {
    constructor(
        public PreviousYearID : number,
        public SubCategory : number,
        public Pre_Mains  : number,
        public Year  : number,
        public QuestionPaperName   : string,
        public QuestionPaperPath  : string,
        public AnswerPaperName :string,
        public AnswerPaperPath : string,
        public Remarks : string,
        public CreatedBy  : string,
        public CreatedDate   : string,
        public ModifiedBy  : string,
        public ModifiedDate   : string,
        public Active    : boolean,
    ){}
}