import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingPsychologyComponent } from './trading-psychology-component';

describe('TradingPsychologyComponent', () => {
  let component: TradingPsychologyComponent;
  let fixture: ComponentFixture<TradingPsychologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradingPsychologyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradingPsychologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
