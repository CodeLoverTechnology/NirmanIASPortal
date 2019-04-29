import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';
// import { AdminService} from './Services/admin.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {
  constructor( private router:Router,private localSt: SessionStorageService,){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
    if (this.localSt.retrieve('UserEmailID')!=null) {
      return true;
    } 
    else{

      // this.router.navigate(['/login']);
      // return false;
      return true;
    }
  }
}
