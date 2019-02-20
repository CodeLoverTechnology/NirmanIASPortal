import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestYourSelfComponent } from './test-your-self.component';

describe('TestYourSelfComponent', () => {
  let component: TestYourSelfComponent;
  let fixture: ComponentFixture<TestYourSelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestYourSelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestYourSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
