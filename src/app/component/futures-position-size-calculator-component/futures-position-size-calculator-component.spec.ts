import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturesPositionSizeCalculatorComponent } from './futures-position-size-calculator-component';

describe('FuturesPositionSizeCalculatorComponent', () => {
  let component: FuturesPositionSizeCalculatorComponent;
  let fixture: ComponentFixture<FuturesPositionSizeCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuturesPositionSizeCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuturesPositionSizeCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
