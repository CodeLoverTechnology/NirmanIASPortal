import { Component, OnInit, NgModule,PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SessionStorageService } from 'ngx-webstorage';
import {UsermasterService} from "../app/Services/UserMaster/usermaster.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  title = 'Nirman IAS';
  private var_one:string;
  LoginUser : string;
  constructor(@Inject(PLATFORM_ID) private platformId: Object,private localSt: SessionStorageService,private UserServices:UsermasterService,
    @Inject(APP_ID) private appId: string) { }
    onActivate(event: any) {
      if (isPlatformBrowser(this.platformId)) {
        let scrollToTop = window.setInterval(() => {
          let pos = window.pageYOffset;
          if (pos > 0) {
            window.scrollTo(0, pos - 50); // how far to scroll on each step
          } else {
            window.clearInterval(scrollToTop);
          }
        }, 16);
      }
    }
ngOnInit(){
  this.LoginUser=this.localSt.retrieve("UserName");
 }

 Logout() {
  this.UserServices.Logout();
}

}

function openNav() {
  document.getElementById("mySidenav1").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav1").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}




