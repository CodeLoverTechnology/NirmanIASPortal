import { Component, OnInit } from '@angular/core';
import { PreviousYearQuestionAnswerModels } from 'src/app/Entity/PreviousYearQuestionAnswerModels';
import { PreviousYearQuestionAnswerService } from 'src/app/Services/PreviousYearQuestionAnswerServices/previous-year-question-answer.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list-previous-year-question-answer',
  templateUrl: './list-previous-year-question-answer.component.html',
  styleUrls: ['./list-previous-year-question-answer.component.css']
})
export class ListPreviousYearQuestionAnswerComponent implements OnInit {
  public result: any;
  Current = {} as PreviousYearQuestionAnswerModels;
  constructor(private _service: PreviousYearQuestionAnswerService) { }
  
  ngOnInit() {
    this._service.getPreviousYearQuestionAnswerList(this.Current).subscribe(res => this.result = res);
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Server Side Error !");
      } else {
        console.log("Client Side Error   !");
      }
    }
  }

}
