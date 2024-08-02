import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStudentAllotedComponent } from './all-student-alloted.component';

describe('AllStudentAllotedComponent', () => {
  let component: AllStudentAllotedComponent;
  let fixture: ComponentFixture<AllStudentAllotedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllStudentAllotedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllStudentAllotedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
