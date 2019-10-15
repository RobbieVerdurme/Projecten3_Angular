import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultMultimedComponent } from './result-multimed.component';

describe('ResultMultimedComponent', () => {
  let component: ResultMultimedComponent;
  let fixture: ComponentFixture<ResultMultimedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultMultimedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultMultimedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
