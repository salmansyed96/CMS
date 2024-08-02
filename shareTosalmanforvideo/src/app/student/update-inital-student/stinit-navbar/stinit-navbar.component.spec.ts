import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StinitNavbarComponent } from './stinit-navbar.component';

describe('StinitNavbarComponent', () => {
  let component: StinitNavbarComponent;
  let fixture: ComponentFixture<StinitNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StinitNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StinitNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
