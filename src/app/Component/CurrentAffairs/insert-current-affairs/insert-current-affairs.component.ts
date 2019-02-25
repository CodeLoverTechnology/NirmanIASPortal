import { Component, OnInit } from '@angular/core';
import { CurrentAffairsMasters } from 'src/app/Entity/CurrentAffairsMaster';
import { CurrentAffairsService } from '../../../Services/CurrentAffairs/current-affairs.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-insert-current-affairs',
  templateUrl: './insert-current-affairs.component.html',
  styleUrls: ['./insert-current-affairs.component.css']
})
export class InsertCurrentAffairsComponent implements OnInit {
  Current = {} as CurrentAffairsMasters;
  Result: any;
    
  constructor(private _service: CurrentAffairsService) { }
  ngOnInit() { }

  onFormSubmit() {
   
    this._service.createCurrentAffairs(this.Current).subscribe(
      res => this.Result = res);
     (err: HttpErrorResponse) => {
    if (err.error instanceof Error) {
      
      alert(' server error');
      //console.log("Server Side Error....!");
    } else {
      alert('Client error');
      //console.log("Client Side Error !");
    }
    this.getCurrent();
  };
  }
  getCurrent() {
    this.Result= this._service.getCurrentAffairsInfo();
  }
}