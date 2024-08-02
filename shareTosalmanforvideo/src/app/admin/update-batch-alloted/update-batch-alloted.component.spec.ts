import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBatchAllotedComponent } from './update-batch-alloted.component';

describe('UpdateBatchAllotedComponent', () => {
  let component: UpdateBatchAllotedComponent;
  let fixture: ComponentFixture<UpdateBatchAllotedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBatchAllotedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBatchAllotedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
