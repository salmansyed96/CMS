import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInitalStudentComponent } from './update-inital-student.component';

describe('UpdateInitalStudentComponent', () => {
  let component: UpdateInitalStudentComponent;
  let fixture: ComponentFixture<UpdateInitalStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateInitalStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateInitalStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
