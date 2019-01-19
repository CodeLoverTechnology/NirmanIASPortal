import { Component, OnInit } from '@angular/core';
import { ChatModel } from 'src/app/Entity/ChatModel';
import { ChatServicesService } from 'src/app/Services/Chat/chat-services.service';
import { HttpErrorResponse } from '@Angular/common/http';



@Component({
  selector: 'app-live-chat',
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.css']
})
export class LiveChatComponent implements OnInit {
  chatModel ={} as ChatModel;
  private ConverstaionMessage:string= "";
  constructor(private _service:ChatServicesService) { }

  ngOnInit() {
    this.chatModel["ChatMessage"]=this._service.getchatInfo().subscribe(res=>this.ConverstaionMessage=res);
    (err:HttpErrorResponse)=>{
      if(err.error instanceof Error){
        console.log("Server Side Error  !");
      }else{
        console.log("Client Sdie Error  !")
      }
    }
  }

  SendMessageToServer()
  {
    this.ConverstaionMessage+=( '\n'+  this.chatModel["ChatMessage"]);
    this.chatModel["ReplyMessage"]=this.ConverstaionMessage;
    this.chatModel["ChatMessage"]= this._service.postchat(this.chatModel).subscribe(res=>this.ConverstaionMessage=res);
(err:HttpErrorResponse)=>{
if(err.error instanceof Error){
alert("Server Side Error....!");
  }else{
    alert("Client Side Error   !");
  }
}}

  }


