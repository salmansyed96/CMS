import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAllotedByIdComponent } from './student-alloted-by-id.component';

describe('StudentAllotedByIdComponent', () => {
  let component: StudentAllotedByIdComponent;
  let fixture: ComponentFixture<StudentAllotedByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAllotedByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentAllotedByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
