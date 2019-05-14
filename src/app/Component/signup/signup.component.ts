import { Component, OnInit } from '@angular/core';
import { UserMaster } from "src/app/Entity/user-master";
import { UsermasterService } from "src/app/Services/UserMaster/usermaster.service";
import { HttpErrorResponse } from '@angular/common/http';
import { SessionStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

  export class SignupComponent implements OnInit {
    busy: Promise<any>;
    Result : any;
    userDetailsMaster = {} as UserMaster;  
    constructor(private UserService:UsermasterService, private localSt: SessionStorageService,private router:Router) { }
  
    ngOnInit() {
      
    }
    onSubmit(){
      this.busy = this.UserService.postUser(this.userDetailsMaster).subscribe(
        result => this.Result = result);
    (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
            console.log("Server Side Error....!");
        } else {
            console.log("Client Side Error !");
        }
    }; 
     
    if(this.busy)
    {
    if(this.Result!=undefined) 
    {
      this.localSt.store("UserEmailID", this.Result.userEmailID);
      this.localSt.store("UserID", this.Result.userID);
      this.localSt.store("UserName", this.Result.userName);
      this.localSt.store("Department", this.Result.department);
      this.localSt.store("Designation", this.Result.designation);
      // localStorage.setItem("username","admin");
      this.router.navigate(['/admin']); 
    }  
  }
  else{
    alert("Please Check Information and try again...");
  }  
  }
  }
  
