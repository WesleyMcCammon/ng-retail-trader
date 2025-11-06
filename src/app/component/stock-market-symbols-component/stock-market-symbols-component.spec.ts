import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMarketSymbolsComponent } from './stock-market-symbols-component';

describe('StockMarketSymbolsComponent', () => {
  let component: StockMarketSymbolsComponent;
  let fixture: ComponentFixture<StockMarketSymbolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockMarketSymbolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockMarketSymbolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
