import { Injectable } from '@angular/core';
// import { InMemoryDbService, RequestInfo, RequestInfoUtilities, ParsedRequestUrl, ResponseOptions, STATUS, getStatusText } from 'angular-in-memory-web-api';
// import {User} from "../Entity/user";
import { UserMaster } from "../Entity/user-master";
import { ParsedUrlQuery } from 'querystring';
import { ParsedEvent } from '@angular/compiler';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { UserDashboardComponent } from "../user-dashboard/user-dashboard/user-dashboard.component";
import { $ } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  user = {} as UserMaster;
  constructor() { }
  createDb() {
    const user = [
      { UserID: 11, UserName:'Rahul Kumar', Department:'R&D', Designation: 'R&D Head', UserEmailID: 'info.rajinfotech@gmail.com' },
      
    ];
    return {user};
  }
 getToken(user) {
   return 'this is a token' ;
 }

  // overriding post
  post(reqInfo: RequestInfo) {
  //   console.log(reqInfo);
  //  if (reqInfo.id === 'login') {
  //   console.log('from login');
  //   return reqInfo.utils.createResponse$(() => {
  //    const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation
  //    const user = reqInfo.collection.find(user => {
  //     return  reqInfo.req['body'].email === user.email && reqInfo.req['body'].password === user.password ;
  //}
  //);
  }
 // let resposeBody = {};
  // if(user) {
  //   resposeBody = {
  //     id: user.id,
  //     firstName: user.firstName,
  //     lastName: user.lastName,
  //     email: user.email,
  //     token: this.getToken(user)  
  //   };
  // }
  // const options:ResponseOptions = resposeBody ?
  // {
  //   body: dataEncapsulation ? { resposeBody } : resposeBody,
  //   status: 200
  // } :
  // {
  //  body: { error:`'user' with email='${reqInfo.req['body'].email}'not found`},
  //  status: 404
  // };
  // options.statusText = options.status === 200 ? 'ok' : 'Not Found';
  // options.headers = reqInfo.headers;
  // options.url = reqInfo.url;
  // return options;
  //   })
  //  }else if (reqInfo.id === 'signup'){
  //   reqInfo.id === null
  //    console.log('from signup');
  //  }}
}
