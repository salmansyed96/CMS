import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBatchComponent } from './all-batch.component';

describe('AllBatchComponent', () => {
  let component: AllBatchComponent;
  let fixture: ComponentFixture<AllBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
