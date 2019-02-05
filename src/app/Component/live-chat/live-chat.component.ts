import { Component, OnInit } from '@angular/core';
import { ChatModel } from 'src/app/Entity/ChatModel';
import { ChatServicesService } from 'src/app/Services/Chat/chat-services.service';
import { HttpClientModule } from '@Angular/common/http';


@Component({
  selector: 'app-live-chat',
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.css']
})
export class LiveChatComponent implements OnInit{
  private var_one:string;
  ChatModel = {
    ChatMessage:"Hi",
ReplyMessage:"NA",
ReplyBy:"NA",
CraatedBy:"Admin",
CreatedDate:Date(),
ModifiedBy:"Admin",
ModifiedDate:Date(),
Active:true,
IsRead:false
  } as ChatModel;

constructor(private _service:ChatServicesService) { }
ngOnInit(){ 
  

  // this._service.getchatInfo().subscribe(res=>this.var_one=res);
  // (err:HttpClientModule)=>{
  //   if(err instanceof Error){
  //     console.log("Server Side Error"+ err.message);
  //   }else{
  //     console.log("Client Side Error  !");
  //   }
  // }
}
onSubmit()
{
  var Result :any;
  Result = this._service.postchat(this.ChatModel).subscribe(
  result => console.log('Success !!!.',result),
    (err:HttpClientModule)=>{
   if(err instanceof Error){
          console.log("Server Side Error....!"+err.message);
        }else{
          console.log("Client Side Error   !" + err);
        }
      })
    alert( "Service Response"+ Result);
  }}



