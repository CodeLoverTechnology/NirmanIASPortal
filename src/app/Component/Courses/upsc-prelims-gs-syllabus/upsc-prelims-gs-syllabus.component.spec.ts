import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UPSCPrelimsGSSyllabusComponent } from './upsc-prelims-gs-syllabus.component';

describe('UPSCPrelimsGSSyllabusComponent', () => {
  let component: UPSCPrelimsGSSyllabusComponent;
  let fixture: ComponentFixture<UPSCPrelimsGSSyllabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UPSCPrelimsGSSyllabusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UPSCPrelimsGSSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
