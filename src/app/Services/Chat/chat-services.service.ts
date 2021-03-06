import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatModel } from 'src/app/Entity/ChatModel';

@Injectable({
  providedIn: 'root'
})
export class ChatServicesService {
  ipAddress: any;
  BaseURL: string = "https://nias.nirmanias.com/api/";
  constructor(private _http: HttpClient) { }


  public getchatInfo(): any {
    return this._http.get(this.BaseURL + "ChatMaster/ChatMasterList");
  }

  public postchat(chatModel: ChatModel) {
    this.getIpAddress();
    chatModel.UserIP = this.ipAddress.ip ;
    return this._http.post<any>(this.BaseURL + "ChatMaster/ChatMasterCreate", chatModel);
  }

  public getIpAddress(): any {
    this._http.get<{ ip: string }>('https://jsonip.com')
      .subscribe(data => {
        console.log('User Info : ', data);
         
        this.ipAddress = data
      })
  }
   public putchatinfo(chatModel:ChatModel){
     return this._http.put<any>(`this.BaseURL + "ChatMaster/ChatMasterUpdate"`,ChatModel);
   }
   public deletechat(chatModel:ChatModel){
     return this._http.delete<any>(this.BaseURL + "ChatMaster/DeleteChatMaster"+chatModel.UserChatID);
   }
}