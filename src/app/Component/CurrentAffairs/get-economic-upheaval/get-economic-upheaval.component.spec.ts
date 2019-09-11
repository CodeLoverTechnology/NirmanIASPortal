import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEconomicUpheavalComponent } from './get-economic-upheaval.component';

describe('GetEconomicUpheavalComponent', () => {
  let component: GetEconomicUpheavalComponent;
  let fixture: ComponentFixture<GetEconomicUpheavalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetEconomicUpheavalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEconomicUpheavalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
