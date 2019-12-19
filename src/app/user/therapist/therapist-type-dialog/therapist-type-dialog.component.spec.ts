import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistTypeDialogComponent } from './therapist-type-dialog.component';

describe('TherapistTypeDialogComponent', () => {
  let component: TherapistTypeDialogComponent;
  let fixture: ComponentFixture<TherapistTypeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TherapistTypeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapistTypeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
