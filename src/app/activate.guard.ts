import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AdminService} from './Services/admin.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {
  constructor( private _Service: AdminService, private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
    if (localStorage.getItem('username')!=null) {
      return true;
    } 
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
