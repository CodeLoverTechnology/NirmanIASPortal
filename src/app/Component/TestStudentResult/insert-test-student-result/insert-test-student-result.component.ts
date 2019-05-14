import { Component, OnInit } from '@angular/core';
import { TestStudentResult } from 'src/app/Entity/TestStudentResult';
import { TestStudentResultService } from 'src/app/Services/TestStudentResult/test-student-result.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-insert-test-student-result',
  templateUrl: './insert-test-student-result.component.html',
  styleUrls: ['./insert-test-student-result.component.css']
})
export class InsertTestStudentResultComponent implements OnInit {
  testStudentResult = {} as TestStudentResult;
  busy: Promise<any>;
  Result: any; 
  constructor(private _service:TestStudentResultService,private router: Router) { }

  ngOnInit() {
  }

  onFormSubmit() {
    this.busy =this._service.postTestStudentResult(this.testStudentResult).subscribe(
      res => this.Result = res);
     (err: HttpErrorResponse) => {
    if (err.error instanceof Error) {      
      alert(' server error');
    } else {
      alert('Client error');
    }
   };
  if(this.busy)
    {
      alert("Test Student Result Added Successfully.");
      this.testStudentResult={} as TestStudentResult;
    }
    else{
      alert("Test Student Result not Added.");
    }
    
  }


}
