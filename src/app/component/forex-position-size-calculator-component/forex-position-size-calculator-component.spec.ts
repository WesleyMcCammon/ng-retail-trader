import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexPositionSizeCalculatorComponent } from './forex-position-size-calculator-component';

describe('ForexPositionSizeCalculatorComponent', () => {
  let component: ForexPositionSizeCalculatorComponent;
  let fixture: ComponentFixture<ForexPositionSizeCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForexPositionSizeCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForexPositionSizeCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
