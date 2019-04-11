import { Component, OnInit } from '@angular/core';
import {UsermasterService} from "../../Services/UserMaster/usermaster.service";
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private auth:UsermasterService) { }

  ngOnInit() {
  }
  Logout() {
    this.auth.Logout();
   // this.isloggedIn = false;
 }

}
