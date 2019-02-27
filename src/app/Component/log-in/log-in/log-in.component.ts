import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AdminService } from '../../../Services/admin.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  providers: [AdminService]
})
export class LogInComponent implements OnInit {

  constructor(private router:Router, private _service : AdminService) { }

  ngOnInit() {
  }
loginUser(event){
  event.preventDefault()
  console.log(event)
}

  check(username: string, password : string)
  {
    var output = this._service.checkusernameandpassword(username,password);
    if(output ==true)
    {
      this.router.navigate(['/admin']);
    }else{
      alert("Invalid username or password");
      //this.router.navigate(['/login']);
    }
  }
}
