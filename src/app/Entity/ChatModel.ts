export class ChatModel {
    constructor(
     public UserChatID:number,
     public ChatMessage :  string,
     public UserIP :   string,
     public ReplyMessage :   string,
     public ReplyBy :   string,
      public Remarks :   string,
      public IsRead : boolean,
      public CraatedBy :  string, 
      public CreatedDate :   string,
      public ModifiedBy :   string,
      public ModifiedDate :   string,
      public Active : boolean
      ){}
}