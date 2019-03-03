import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintedMaterialListComponent } from './printed-material-list.component';

describe('PrintedMaterialListComponent', () => {
  let component: PrintedMaterialListComponent;
  let fixture: ComponentFixture<PrintedMaterialListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintedMaterialListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintedMaterialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
