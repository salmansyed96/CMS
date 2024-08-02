import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchByIdComponent } from './batch-by-id.component';

describe('BatchByIdComponent', () => {
  let component: BatchByIdComponent;
  let fixture: ComponentFixture<BatchByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
