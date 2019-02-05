import { Component, OnInit } from '@angular/core';
import {CanActivate} from "@angular/router";
@Component({
  selector: 'app-niashome',
  templateUrl: './niashome.component.html',
  styleUrls: ['./niashome.component.css']
})
export class NIASHomeComponent implements OnInit {

  constructor() {
    class AlwaysAuthGuard implements CanActivate {
      canActivate() {
        console.log("AlwaysAuthGuard");
        return true;
      }
    }
   }

  ngOnInit() {
  }

}
