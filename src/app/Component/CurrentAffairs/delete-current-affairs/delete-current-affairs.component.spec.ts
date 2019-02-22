import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCurrentAffairsComponent } from './delete-current-affairs.component';

describe('DeleteCurrentAffairsComponent', () => {
  let component: DeleteCurrentAffairsComponent;
  let fixture: ComponentFixture<DeleteCurrentAffairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCurrentAffairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCurrentAffairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
