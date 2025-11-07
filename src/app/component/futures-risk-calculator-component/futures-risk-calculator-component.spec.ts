import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturesRiskCalculatorComponent } from './futures-risk-calculator-component';

describe('FuturesRiskCalculatorComponent', () => {
  let component: FuturesRiskCalculatorComponent;
  let fixture: ComponentFixture<FuturesRiskCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuturesRiskCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuturesRiskCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
