import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistDetailComponent } from './therapist-detail.component';

describe('TherapistDetailComponent', () => {
  let component: TherapistDetailComponent;
  let fixture: ComponentFixture<TherapistDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TherapistDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapistDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
