import { Component, OnInit } from '@angular/core';
import { FacultyMasterService } from "../../../Services/FacultyMaster/faculty-master.service";
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-get-faculty-master',
  templateUrl: './get-faculty-master.component.html',
  styleUrls: ['./get-faculty-master.component.css']
})
export class GetFacultyMasterComponent implements OnInit {
  public result:any;
  constructor(private _service:FacultyMasterService) { }
ngOnInit() {
    this._service.getFacultyMasterInfo().subscribe(res=>this.result=res);
    (err:HttpErrorResponse)=>{
      if(err.error instanceof Error){
        console.log("Server Side Error !");
  }else{
      console.log("Client Side Error   !");
  }
}
}
}
