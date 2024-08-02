import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAllotmentComponent } from './student-allotment.component';

describe('StudentAllotmentComponent', () => {
  let component: StudentAllotmentComponent;
  let fixture: ComponentFixture<StudentAllotmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAllotmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentAllotmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
