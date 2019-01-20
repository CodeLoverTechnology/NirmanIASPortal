import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryNIASComponent } from './gallery-nias.component';

describe('GalleryNIASComponent', () => {
  let component: GalleryNIASComponent;
  let fixture: ComponentFixture<GalleryNIASComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryNIASComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryNIASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
