import { Component, OnInit } from '@angular/core';
import { TestStudentResult } from 'src/app/Entity/TestStudentResult';
import { TestStudentResultService } from 'src/app/Services/TestStudentResult/test-student-result.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-get-test-student-result-list',
  templateUrl: './get-test-student-result-list.component.html',
  styleUrls: ['./get-test-student-result-list.component.css']
})
export class GetTestStudentResultListComponent implements OnInit {

  busy: Promise<any>;
  testStudentResult: TestStudentResult[]
  public result: any;
  constructor(private _service: TestStudentResultService, private router: Router) { }
  ngOnInit() {
    this.busy = this._service.getTestStudentResult().subscribe(res => this.result = res);
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Server Side Error !");
      } else {
        console.log("Client Side Error !");
      }
    }
  }
  deleteEnquiry(testStudentResult: TestStudentResult): void {
    // this._service.deleteEnquiry(enquiry.enquiryID)
    //   .subscribe( data => {
    //     this.enquiries = this.enquiries.filter(e => e !== enquiry);
    //   })
  };

  editUser(testStudentResult: TestStudentResult): void {
    // window.localStorage.removeItem("EnquiryId");
    // window.localStorage.setItem("EnquiryId", Enquiry.enquiryID.toString());
    // this.router.navigate(['admin/update-enquiry']);
  };

}

