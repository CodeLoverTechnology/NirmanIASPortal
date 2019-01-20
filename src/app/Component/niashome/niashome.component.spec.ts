import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NIASHomeComponent } from './niashome.component';

describe('NIASHomeComponent', () => {
  let component: NIASHomeComponent;
  let fixture: ComponentFixture<NIASHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NIASHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NIASHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
