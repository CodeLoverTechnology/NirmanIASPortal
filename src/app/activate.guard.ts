import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
//import { Observable } from 'rxjs';
import { AdminService} from './Services/admin.service';
//import { LogInComponent } from './component/log-in/log-in/log-in.component';

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {
  constructor( private _Service: AdminService, private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
  // const login = true; // ... your login logic here
    if (localStorage.getItem('username')!=null) {
      return true;
    } 
    else{
      this.router.navigate(['/login']);
      return false;
    }
  //   if(this._Service.check()){
  //     return true;
  //   }else{
  //     alert("Username or Password is incorrect");
  //     this.router.navigate(['Getmaster']);
  //   }
  // }
  }
}
