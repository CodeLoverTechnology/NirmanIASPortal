import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../Services/authentication.service";
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private auth:AuthenticationService) { }

  ngOnInit() {
  }
  logout() {
    this.auth.logout();
   // this.isloggedIn = false;
 }

}
