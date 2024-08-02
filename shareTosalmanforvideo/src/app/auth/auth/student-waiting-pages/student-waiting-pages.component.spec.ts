import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentWaitingPagesComponent } from './student-waiting-pages.component';

describe('StudentWaitingPagesComponent', () => {
  let component: StudentWaitingPagesComponent;
  let fixture: ComponentFixture<StudentWaitingPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentWaitingPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentWaitingPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
