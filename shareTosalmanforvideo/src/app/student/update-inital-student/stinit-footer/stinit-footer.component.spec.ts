import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StinitFooterComponent } from './stinit-footer.component';

describe('StinitFooterComponent', () => {
  let component: StinitFooterComponent;
  let fixture: ComponentFixture<StinitFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StinitFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StinitFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
