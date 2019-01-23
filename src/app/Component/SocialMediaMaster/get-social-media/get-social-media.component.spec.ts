import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSocialMediaComponent } from './get-social-media.component';

describe('GetSocialMediaComponent', () => {
  let component: GetSocialMediaComponent;
  let fixture: ComponentFixture<GetSocialMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetSocialMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
