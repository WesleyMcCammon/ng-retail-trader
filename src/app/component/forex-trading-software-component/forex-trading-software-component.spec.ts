import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexTradingSoftwareComponent } from './forex-trading-software-component';

describe('ForexTradingSoftwareComponent', () => {
  let component: ForexTradingSoftwareComponent;
  let fixture: ComponentFixture<ForexTradingSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForexTradingSoftwareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForexTradingSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
