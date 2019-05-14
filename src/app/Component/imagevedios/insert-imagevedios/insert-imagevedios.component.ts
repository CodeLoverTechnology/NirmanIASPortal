import { Component, OnInit } from '@angular/core';
import {Imagevedios} from "../../../Entity/imagevedios";
import {ImagevediosService} from "../../../Services/ImageVedios/imagevedios.service";
import {HttpErrorResponse} from "@angular/common/http";
@Component({
  selector: 'app-insert-imagevedios',
  templateUrl: './insert-imagevedios.component.html',
  styleUrls: ['./insert-imagevedios.component.css']
})
export class InsertImagevediosComponent implements OnInit {

  image = {} as Imagevedios;

  constructor(private _service:ImagevediosService) { }
  ngOnInit(){ }
  onFormSubmit()
  {
     
    this._service.postImagevedios(this.image).subscribe(
   result => console.log('Success !!!.',result),
      (err:HttpErrorResponse)=>{
     if(err.error instanceof Error){
            console.log("Server Side Error....!");
          }else{
            console.log("Client Side Error   !");
          }
        }) 
         
      console.log(this.image);
    }}

