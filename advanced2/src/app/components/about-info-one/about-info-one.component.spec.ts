import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutInfoOneComponent } from './about-info-one.component';

describe('AboutInfoOneComponent', () => {
  let component: AboutInfoOneComponent;
  let fixture: ComponentFixture<AboutInfoOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutInfoOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutInfoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
