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
  ChatModel = {} as ChatModel;

constructor(private _service:ChatServicesService) { }
ngOnInit(){ 
  this._service.getchatInfo().subscribe(res=>this.var_one=res);
  (err:HttpClientModule)=>{
    if(err instanceof Error){
      console.log("Server Side Error"+ err.message);
    }else{
      console.log("Client Side Error  !");
    }
  }
}
onSubmit()
{
  
this._service.postchat(this.ChatModel).subscribe(
  result => console.log('Success !!!.',result),
    (err:HttpClientModule)=>{
   if(err instanceof Error){
          console.log("Server Side Error....!"+err.message);
        }else{
          console.log("Client Side Error   !");
        }
      })
    console.log(this.ChatModel);
  }}



