import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutInfoTwoComponent } from './about-info-two.component';

describe('AboutInfoTwoComponent', () => {
  let component: AboutInfoTwoComponent;
  let fixture: ComponentFixture<AboutInfoTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutInfoTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutInfoTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
