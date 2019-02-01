import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatModel } from 'src/app/Entity/ChatModel';

@Injectable({
  providedIn: 'root'
})
export class ChatServicesService {

BaseURL: string = "http:// NIAS.codelovertechnology.com";

selectedEnquiry: {
UserChatID:number; 
ChatMessage :  string; 
UserIP :   string; 
ReplyMessage :   string;
ReplyBy :   string; };
constructor(private _http:HttpClient){}


public getchatInfo():any{
  return this._http.get(this.BaseURL+"api/ChatMaster/ChatMasterList");
}

public postchat(ChatModel : ChatModel){
  return this._http.post<any>(this.BaseURL+"api/ChatMaster/ChatMasterCreate",ChatModel);
}}