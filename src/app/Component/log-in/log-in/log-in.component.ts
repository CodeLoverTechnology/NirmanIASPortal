import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AdminService } from '../../../Services/admin.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  providers: [AdminService]
})
export class LogInComponent implements OnInit {

  constructor(private router:Router, private _service : AdminService) { }

  
//username: string;
//password: string;
  ngOnInit() {
  }
  check(username: string, password : string)
  {
    var output = this._service.checkusernameandpassword(username,password);
    if(output ==true)
    {
      this.router.navigate(['/admin']);
    }else{
      alert("Invalid username or password");
      //this.router.navigate(['/login']);
    }
  }
  // login() : void {
  //   if(this.username.value == 'admin' && this.password.value == 'admin'){
  //     alert("login successfully!!!");
  //    //this.router.navigate(["admin"]);
  //   }else {
  //     alert("Invalid credentials");
  //   }
  // }
}


//   let key = 'Item 1';
//   localStorage.setItem(key, 'Value');
//   let myItem = localStorage.getItem(key);
//   localStorage.setItem(key, 'New Value');
// // Create item:
// let myObj = { name: 'Skip', breed: 'Labrador' };
// localStorage.setItem(key, JSON.stringify(myObj));

// // Read item:
// let item = JSON.parse(localStorage.getItem(key));