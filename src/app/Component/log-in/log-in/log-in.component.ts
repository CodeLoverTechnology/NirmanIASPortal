import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { FormsModule } from '@angular/forms'; 
import { UsermasterService } from '../../../Services/UserMaster/usermaster.service';
import { UserMaster } from "src/app/Entity/user-master";
import { HttpErrorResponse, HttpClientModule } from '@angular/common/http';
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
  model : any={};

  constructor(private router: Router,
    private _userServices: UsermasterService,
    private localSt: SessionStorageService) { }
    errorMessage:string;

  ngOnInit() {
      this.localSt.clear("UserEmailID");
      this.localSt.clear("UserID");
      this.localSt.clear("UserName");
      this.localSt.clear("Department");
      this.localSt.clear("Designation");
      this.localSt.clear(); 
    }

   //check(username: string, password: string) {
    login()
    {
     
    // this.UserDeatilsMaster.UserEmailID = username;
    // this.UserDeatilsMaster.Password = password;
    //this.busy =this._userServices.LoginUser(this.model).subscribe();
    this._userServices.LoginUser(this.model).subscribe(res => this.result = res);
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Server Side Error !");
      } else {
        console.log("Client Side Error   !");
      }
    }
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
      this.router.navigate(['/admin']);
    } 
    // .subscribe(
    //   (result:UserMaster) =>{
    //         
    //     if(result != undefined && result.UserEmailID!='')    
    //     {              
    //   this.localSt.store("UserEmailID", result.UserEmailID);
    //   this.localSt.store("UserID", result.UserID);
    //   this.localSt.store("UserName", result.UserName);
    //   this.localSt.store("Department", result.Department);
    //   this.localSt.store("Designation", result.Designation);
    //   this.router.navigate(['./admin']);                
    //     }    
    //     else{    
    //       this.errorMessage = "Login ID and Password are invalid. Try Again!... 1";    
    //     }    
    //   },    
    //   (err: HttpClientModule) => {
    //     if (err instanceof Error) {
    //       console.log("Server Side Error....!");
    //     } else {
    //       console.log("Client Side Error   !" + err);
    //     }
    //   }); 
      //res => this.result = res
      
     // );
    // (err: HttpErrorResponse) => {
    //   if (err.error instanceof Error) {
    //     console.log("Server Side Error !");
    //   }
    //    else {
    //     console.log("Client Side Error   !");
    //   }
    // }
    // if (this.result != undefined) {
    //   this.localSt.store("UserEmailID", this.result.userEmailID);
    //   this.localSt.store("UserID", this.result.userID);
    //   this.localSt.store("UserName", this.result.userName);
    //   this.localSt.store("Department", this.result.department);
    //   this.localSt.store("Designation", this.result.designation);
    //   this.router.navigate(['/admin']);
    // }
    // else { 
    //    
    //   alert("Invalid username or password");
    //   //this.router.navigate(['/login']);
    //   this.router.navigate(['/admin']);
    // }    
 }
}
