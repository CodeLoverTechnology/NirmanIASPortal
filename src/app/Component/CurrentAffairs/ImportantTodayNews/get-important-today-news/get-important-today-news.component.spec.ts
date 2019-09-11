import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetImportantTodayNewsComponent } from './get-important-today-news.component';

describe('GetImportantTodayNewsComponent', () => {
  let component: GetImportantTodayNewsComponent;
  let fixture: ComponentFixture<GetImportantTodayNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetImportantTodayNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetImportantTodayNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
