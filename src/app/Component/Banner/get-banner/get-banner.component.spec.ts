import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBannerComponent } from './get-banner.component';

describe('GetBannerComponent', () => {
  let component: GetBannerComponent;
  let fixture: ComponentFixture<GetBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
