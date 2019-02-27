import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }
 checkusernameandpassword(username : string, password : string)
 {
   if(username == "admin" && password == "admin123"){
     localStorage.setItem("username","admin");
     return true;
   }
   else{
     return false;
   }
 }
}

  // check(form): boolean{
  //     if(form.userid.value == "admin" && form.pswrd.value == "admin") {
  //          return true;
  //     }
  //     else{
  //        alert("Error Password or Username")
  //         }
  //    }



