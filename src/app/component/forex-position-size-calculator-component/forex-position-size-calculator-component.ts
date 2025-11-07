import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForexService } from '../../service/forex-service';
import { CurrencyPair } from '../../model/futures-contract';

@Component({
  selector: 'app-forex-position-size-calculator-component',
  imports: [FormsModule],
  templateUrl: './forex-position-size-calculator-component.html',
  styleUrl: './forex-position-size-calculator-component.css',
})
export class ForexPositionSizeCalculatorComponent implements OnInit {
  currencyPairs: CurrencyPair[] = new Array<CurrencyPair>();
  accountSize: string = '';
  riskPercent: string = '';
  stopLossPips: string = '';
  pipValue: string = '';
  riskAmount: string = '';
  lotSize: string = '';
  currencyPair: string = 'EUR/USD';
  accountCurrency: string = 'USD';

  constructor(private forexService: ForexService) { }

  ngOnInit(): void {
    this.forexService.getCurrencyPairs().subscribe((currencyPairs: CurrencyPair[]) => {
      this.currencyPairs = currencyPairs;
    });
  }

  getPairsByCurrencyType(currencyType: string): CurrencyPair[] {
    return this.currencyPairs.filter(c => c.currencyType == currencyType)
      .sort((a, b) => a.baseCurrency.localeCompare(b.baseCurrency));
  }

  setAccountSize(eventTarget: EventTarget | null) {
    this.accountSize = (eventTarget as HTMLInputElement).value;
  }

  setRiskPercent(eventTarget: EventTarget | null) {
    this.riskPercent = (eventTarget as HTMLInputElement).value;
  }

  setStopLossPips(eventTarget: EventTarget | null) {
    this.stopLossPips = (eventTarget as HTMLInputElement).value;
  }

  setPipValue(eventTarget: EventTarget | null) {
    this.pipValue = (eventTarget as HTMLInputElement).value;
  }

  setCurrencyPair(eventTarget: EventTarget | null) {
    this.currencyPair = (eventTarget as HTMLInputElement).value;
  }

  setAccountCurrency(eventTarget: EventTarget | null) {
    this.accountCurrency = (eventTarget as HTMLInputElement).value;
  }

  public calculatePositionSize(): void {
    const accountSizeAmount = parseFloat(this.accountSize);
    const riskPercentAmount = parseFloat(this.riskPercent);
    const stopLossAmount = parseFloat(this.stopLossPips);
    const pipValueAmount = parseFloat(this.pipValue);

    const amount = accountSizeAmount * (riskPercentAmount / 100);
    this.riskAmount = (amount).toFixed(2);
    this.lotSize = (amount / (stopLossAmount * pipValueAmount)).toFixed(4);
  }
}