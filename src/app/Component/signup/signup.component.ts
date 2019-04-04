import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, NgForm} from "@angular/forms";
// import {UserMaster} from "../../Entity/UserMaster";
import { UserMaster } from "../../Entity/user-master";
import {AuthenticationService} from "../../Services/authentication.service";
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

  export class SignupComponent implements OnInit {

    signupForm: FormGroup;
  
    constructor(private fb:FormBuilder, private auth:AuthenticationService,
      private router : Router) { }
  
    ngOnInit() {
      this.signupForm = this.fb.group({
        'UserEmailID':[null,[Validators.required, Validators.email]],
      'UserName':[null,Validators.required],
        'Password' : [null,Validators.required]
      });
    }
  signup(formData:NgForm){
   return this.auth.signup(formData).subscribe(user => {console.log(`added user ${JSON.stringify(user)}`);
   this.router.navigate(['login']);
  });
  
  }
  }
  
