import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentAffairsForHinduComponent } from './current-affairs-for-hindu.component';

describe('CurrentAffairsForHinduComponent', () => {
  let component: CurrentAffairsForHinduComponent;
  let fixture: ComponentFixture<CurrentAffairsForHinduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentAffairsForHinduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentAffairsForHinduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
