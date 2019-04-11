import { Injectable } from '@angular/core';
import {CanActivate,Router, ActivatedRouteSnapshot, RouterEvent, RouterStateSnapshot} from "@angular/router";
import { SessionStorageService } from 'ngx-webstorage';
@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private router:Router,private localSt: SessionStorageService) { }
  canActivate( route:ActivatedRouteSnapshot, state: RouterStateSnapshot) {    
    if ( this.localSt.retrieve("UserEmailID")) {
      //logged in
      return true;
    }
    this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }
}
