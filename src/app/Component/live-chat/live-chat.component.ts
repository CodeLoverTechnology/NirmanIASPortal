import { Component, OnInit } from '@angular/core';
import { ChatModel } from 'src/app/Entity/ChatModel';
import { ChatServicesService } from 'src/app/Services/Chat/chat-services.service';


@Component({
  selector: 'app-live-chat',
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.css']
})
export class LiveChatComponent implements OnInit {
  chatModel :ChatModel;
  private ConverstaionMessage:string= "";
  constructor(private _service:ChatServicesService) { }

  ngOnInit() {
  }

  SendMessageToServer()
  {
    this.ConverstaionMessage+=( '\n'+  this.chatModel["ChatMessage"]);
    this.chatModel["ReplyMessage"]=this.ConverstaionMessage;
    this.chatModel["ChatMessage"]="";
  }

}
