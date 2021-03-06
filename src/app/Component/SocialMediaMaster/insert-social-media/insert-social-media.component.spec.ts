import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import { InsertSocialMediaComponent } from './insert-social-media.component';

describe('InsertSocialMediaComponent', () => {
  let component: InsertSocialMediaComponent;
  let fixture: ComponentFixture<InsertSocialMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertSocialMediaComponent ],
      imports: [ReactiveFormsModule],  
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
