import { Component, OnInit } from '@angular/core';
import { ChatModel } from 'src/app/Entity/ChatModel';
import { ChatServicesService } from 'src/app/Services/Chat/chat-services.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-live-chat',
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.css']
})
export class LiveChatComponent implements OnInit {
  private UserChatList: any;
  chatModel = {
    UserIP: "192.168.1.1",
    ReplyMessage: "Welcome To Nirman IAS Live Chat.",
    IsRead: false
  } as ChatModel;

  constructor(private _service: ChatServicesService) {

  }

  ngOnInit() {

  }
  onSubmit() {
    debugger;
    this.chatModel.ReplyMessage = null;
    var Result = this._service.postchat(this.chatModel).subscribe(
      result => { //this.chatModel=result?result:undefined ;
        this.GetChatListFromServer();
        this.chatModel.ChatMessage=null;
      },
      (err: HttpClientModule) => {
        if (err instanceof Error) {
          console.log("Server Side Error....!");
        } else {
          console.log("Client Side Error   !" + err);
        }
      })
  }

  GetChatListFromServer() {
    var ChatResult = this._service.getchatInfo().subscribe(res => {
      var ChatList = null;
      var UserChatList = res.filter(chat => chat.userIP === this.chatModel.UserIP);
      UserChatList.forEach(function (value) {
        var LineSpaceCode ="\r\n";
        if (ChatList === null) {
          if (value.replyMessage === null) {
            ChatList = "User Message : " + value.chatMessage + LineSpaceCode;
          }
          else {
            ChatList = "Admin : " + value.replyMessage + LineSpaceCode+" User Message : " + value.chatMessage +LineSpaceCode ;
          }
        }
        else {
          if (value.replyMessage === null) {
            ChatList += LineSpaceCode+" User Message : " + value.chatMessage + LineSpaceCode;
          }
          else {
            ChatList += "Admin : " + value.replyMessage + LineSpaceCode+" User Message : " + value.chatMessage + LineSpaceCode;
          }
        }

      });
      this.chatModel.ReplyMessage = ChatList;
    });
    (err: HttpClientModule) => {
      if (err instanceof Error) {
        console.log("Server Side Error" + err.message);
      } else {
        console.log("Client Side Error  !");
      }
    }
  }
}




