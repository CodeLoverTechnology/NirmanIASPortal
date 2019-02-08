import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookContentSOCIALJUSTICEComponent } from './book-content-social-justice.component';

describe('BookContentSOCIALJUSTICEComponent', () => {
  let component: BookContentSOCIALJUSTICEComponent;
  let fixture: ComponentFixture<BookContentSOCIALJUSTICEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookContentSOCIALJUSTICEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookContentSOCIALJUSTICEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
