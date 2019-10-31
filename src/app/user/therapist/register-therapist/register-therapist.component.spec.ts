import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTherapistComponent } from './register-therapist.component';

describe('RegisterTherapistComponent', () => {
  let component: RegisterTherapistComponent;
  let fixture: ComponentFixture<RegisterTherapistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterTherapistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterTherapistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
