import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
  let key = 'Item 1';
  localStorage.setItem(key, 'Value');
  let myItem = localStorage.getItem(key);
  localStorage.setItem(key, 'New Value');
// Create item:
let myObj = { name: 'Skip', breed: 'Labrador' };
localStorage.setItem(key, JSON.stringify(myObj));

// Read item:
let item = JSON.parse(localStorage.getItem(key));