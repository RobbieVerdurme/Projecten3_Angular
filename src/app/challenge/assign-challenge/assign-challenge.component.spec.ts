import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignChallengeComponent } from './assign-challenge.component';

describe('AssignChallengeComponent', () => {
  let component: AssignChallengeComponent;
  let fixture: ComponentFixture<AssignChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
