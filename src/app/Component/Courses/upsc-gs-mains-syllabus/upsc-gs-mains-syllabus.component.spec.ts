import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UPSCGSMainsSyllabusComponent } from './upsc-gs-mains-syllabus.component';

describe('UPSCGSMainsSyllabusComponent', () => {
  let component: UPSCGSMainsSyllabusComponent;
  let fixture: ComponentFixture<UPSCGSMainsSyllabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UPSCGSMainsSyllabusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UPSCGSMainsSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
