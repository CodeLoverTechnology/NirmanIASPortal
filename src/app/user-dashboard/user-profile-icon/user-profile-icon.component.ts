import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../Services/authentication.service";
@Component({
  selector: 'app-user-profile-icon',
  templateUrl: './user-profile-icon.component.html',
  styleUrls: ['./user-profile-icon.component.css']
})
export class UserProfileIconComponent implements OnInit {

  constructor(private auth:AuthenticationService) { }

  ngOnInit() {
  }
  logout() {
    this.auth.logout();
  }

}
