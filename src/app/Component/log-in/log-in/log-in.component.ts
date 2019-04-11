import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UsermasterService } from '../../../Services/UserMaster/usermaster.service';
import { UserMaster } from "src/app/Entity/user-master";
import { HttpErrorResponse } from '@angular/common/http';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  providers: [UsermasterService]
})
export class LogInComponent implements OnInit {
  UserDeatilsMaster = {} as UserMaster;
  public result: any;
  busy: Promise<any>;

  constructor(private router: Router,
    private _userServices: UsermasterService,
    private localSt: SessionStorageService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    }

   check(username: string, password: string) {
    debugger;
    this.UserDeatilsMaster.UserEmailID = username;
    this.UserDeatilsMaster.Password = password;
    this.busy =this._userServices.LoginUser(this.UserDeatilsMaster).subscribe(res => this.result = res);
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Server Side Error !");
      }
       else {
        console.log("Client Side Error   !");
      }
    }
    if(this.busy)
    {
    
    if (this.result != undefined) {
      this.localSt.store("UserEmailID", this.result.userEmailID);
      this.localSt.store("UserID", this.result.userID);
      this.localSt.store("UserName", this.result.userName);
      this.localSt.store("Department", this.result.department);
      this.localSt.store("Designation", this.result.designation);
      this.router.navigate(['/admin']);
    }
    else { 
      alert("Invalid username or password");
      //this.router.navigate(['/login']);
    }
  }
  else{
    alert("Please Check Information and try again...");
  }  
  
    }
}
