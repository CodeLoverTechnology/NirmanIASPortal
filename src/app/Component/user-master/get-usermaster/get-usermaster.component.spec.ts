import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUsermasterComponent } from './get-usermaster.component';

describe('GetUsermasterComponent', () => {
  let component: GetUsermasterComponent;
  let fixture: ComponentFixture<GetUsermasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetUsermasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetUsermasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
