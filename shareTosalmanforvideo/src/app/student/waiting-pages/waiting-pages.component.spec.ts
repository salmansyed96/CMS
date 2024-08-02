import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingPagesComponent } from './waiting-pages.component';

describe('WaitingPagesComponent', () => {
  let component: WaitingPagesComponent;
  let fixture: ComponentFixture<WaitingPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitingPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaitingPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
