import { Component, OnInit } from '@angular/core';
import { SocialMediaServiceService } from '../../../Services/SocialMediaService/social-media-service.service';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';
import {SocialMediaModel} from "../../../Entity/SocialMediaModel";

@Component({
  selector: 'app-get-social-media',
  templateUrl: './get-social-media.component.html',
  styleUrls: ['./get-social-media.component.css']
})
export class GetSocialMediaComponent implements OnInit {
  
  allEmployees: Observable<SocialMediaModel[]>; 
 
  constructor( private formbulider: FormBuilder,private employeeService:SocialMediaServiceService) { }
ngOnInit() {
  }
  loadALLChat() {
    this.allEmployees = this.employeeService.getAllEmployee();
  }
}

