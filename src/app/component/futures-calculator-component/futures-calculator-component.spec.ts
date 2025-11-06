import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturesCalculatorComponent } from './futures-calculator-component';

describe('FuturesCalculatorComponent', () => {
  let component: FuturesCalculatorComponent;
  let fixture: ComponentFixture<FuturesCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuturesCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuturesCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
