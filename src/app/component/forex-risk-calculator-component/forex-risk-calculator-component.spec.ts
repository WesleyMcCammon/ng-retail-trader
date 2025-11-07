import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexRiskCalculatorComponent } from './forex-risk-calculator-component';

describe('ForexRiskCalculatorComponent', () => {
  let component: ForexRiskCalculatorComponent;
  let fixture: ComponentFixture<ForexRiskCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForexRiskCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForexRiskCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
