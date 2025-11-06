import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexCalculatorComponent } from './forex-calculator-component';

describe('ForexCalculatorComponent', () => {
  let component: ForexCalculatorComponent;
  let fixture: ComponentFixture<ForexCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForexCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForexCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
