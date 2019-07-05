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
    sessionStorage.removeItem('UserName');    
    sessionStorage.clear(); 
      this.localSt.clear("UserEmailID");
      this.localSt.clear("UserID");
      this.localSt.clear("UserName");
      this.localSt.clear("Department");
      this.localSt.clear("Designation");
      this.localSt.clear(); 
    }

    login()
    {
    this.busy=this._userServices.LoginUser(this.model).subscribe(    
      result =>{ 
        debugger;
          if(result.length >0) 
        {      
        if(result != undefined && result[0].userEmailID!='')    
        {              
      this.localSt.store("UserEmailID", result[0].userEmailID);
      this.localSt.store("UserID", result[0].userID);
      this.localSt.store("UserName", result[0].userName);
      this.localSt.store("Department", result[0].department);
      this.localSt.store("Designation", result[0].designation);
      this.router.navigate(['./admin']);                
        }    
        else{    
          this.errorMessage = "Login ID and Password are invalid. Try Again!... 1";    
        }  
      }
      else
      {
        this.errorMessage = "Login ID and Password are invalid. Try Again!... ";   
      } 
      },    
      (err: HttpClientModule) => {
        if (err instanceof Error) {
          console.log("Server Side Error....!");
        } else {
          console.log("Client Side Error   !" + err);
        }
      });      
   }
}
