import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertBannerComponent } from './insert-banner.component';

describe('InsertBannerComponent', () => {
  let component: InsertBannerComponent;
  let fixture: ComponentFixture<InsertBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
