import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetImagevediosComponent } from './get-imagevedios.component';

describe('GetImagevediosComponent', () => {
  let component: GetImagevediosComponent;
  let fixture: ComponentFixture<GetImagevediosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetImagevediosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetImagevediosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
