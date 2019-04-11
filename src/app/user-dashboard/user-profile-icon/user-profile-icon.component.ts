import { Component, OnInit } from '@angular/core';
import {UsermasterService} from "../../Services/UserMaster/usermaster.service";
@Component({
  selector: 'app-user-profile-icon',
  templateUrl: './user-profile-icon.component.html',
  styleUrls: ['./user-profile-icon.component.css']
})
export class UserProfileIconComponent implements OnInit {

  constructor(private auth:UsermasterService) { }

  ngOnInit() {
  }
  logout() {
    this.auth.Logout();
  }

}
