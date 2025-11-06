import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingJournalComponent } from './trading-journal-component';

describe('TradingJournalComponent', () => {
  let component: TradingJournalComponent;
  let fixture: ComponentFixture<TradingJournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradingJournalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradingJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
