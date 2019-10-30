import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalUserDetailComponent } from './normal-user-detail.component';

describe('NormalUserDetailComponent', () => {
  let component: NormalUserDetailComponent;
  let fixture: ComponentFixture<NormalUserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalUserDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
