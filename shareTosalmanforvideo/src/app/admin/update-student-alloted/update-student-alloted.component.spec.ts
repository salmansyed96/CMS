import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStudentAllotedComponent } from './update-student-alloted.component';

describe('UpdateStudentAllotedComponent', () => {
  let component: UpdateStudentAllotedComponent;
  let fixture: ComponentFixture<UpdateStudentAllotedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStudentAllotedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateStudentAllotedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
