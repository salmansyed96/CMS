import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffByIdComponent } from './staff-by-id.component';

describe('StaffByIdComponent', () => {
  let component: StaffByIdComponent;
  let fixture: ComponentFixture<StaffByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
