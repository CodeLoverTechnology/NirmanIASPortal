import { Component, OnInit } from '@angular/core';
import {ChatServicesService} from "../../Services/Chat/chat-services.service";
import {HttpErrorResponse} from "@angular/common/http";

import { ChatModel } from 'src/app/Entity/ChatModel';
@Component({
  selector: 'app-getchat',
  templateUrl: './getchat.component.html',
  styleUrls: ['./getchat.component.css']
})
export class GetchatComponent implements OnInit {
chatmodel = {} as ChatModel;
  public result:any;
  constructor(private _service:ChatServicesService) { }
ngOnInit() {
    this._service.getchatInfo().subscribe(res=>this.result=res);
    (err:HttpErrorResponse)=>{
      if(err.error instanceof Error){
        console.log("Server Side Error !");
  }else{
      console.log("Client Side Error   !");
  }
    }
  }}
