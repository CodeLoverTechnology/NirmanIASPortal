import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutchatComponent } from './putchat.component';

describe('PutchatComponent', () => {
  let component: PutchatComponent;
  let fixture: ComponentFixture<PutchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
