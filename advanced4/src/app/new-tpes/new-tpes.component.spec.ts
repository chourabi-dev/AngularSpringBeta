import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTpesComponent } from './new-tpes.component';

describe('NewTpesComponent', () => {
  let component: NewTpesComponent;
  let fixture: ComponentFixture<NewTpesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTpesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTpesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
