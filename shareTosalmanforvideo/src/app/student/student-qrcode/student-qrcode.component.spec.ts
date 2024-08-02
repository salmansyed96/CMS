import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentQrcodeComponent } from './student-qrcode.component';

describe('StudentQrcodeComponent', () => {
  let component: StudentQrcodeComponent;
  let fixture: ComponentFixture<StudentQrcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentQrcodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentQrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
