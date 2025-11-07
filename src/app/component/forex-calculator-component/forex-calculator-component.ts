import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CurrencyPair } from '../../model/futures-contract';
import { ForexService } from '../../service/forex-service';

@Component({
  selector: 'app-forex-calculator-component',
  imports: [FormsModule],
  templateUrl: './forex-calculator-component.html',
  styleUrl: './forex-calculator-component.css',
})
export class ForexCalculatorComponent implements OnInit {
  currencyPairs: CurrencyPair[] = new Array<CurrencyPair>();
  pair: string = 'EUR/USD';
  direction: string = 'Buy';
  entryPrice: string = '';
  exitPrice: string = '';
  numberLots: string = '';
  resultInPips: string = '';
  profitOrLoss: string = '';

  constructor(private forexService: ForexService) { }

  ngOnInit(): void {
    this.forexService.getCurrencyPairs().subscribe((currencyPairs: CurrencyPair[]) => {
      this.currencyPairs = currencyPairs;
    });
  }

  getCombinedPair(currencyPair: CurrencyPair): string {
    return `${currencyPair.baseCurrency}${currencyPair.quoteCurrency}`;
  }

  getPairsByCurrencyType(currencyType: string): CurrencyPair[] {
    return this.currencyPairs.filter(c => c.currencyType == currencyType)
      .sort((a, b) => a.baseCurrency.localeCompare(b.baseCurrency));
  }

  selectPair(eventTarget: EventTarget | null) {
    this.pair = (eventTarget as HTMLInputElement).value;
    console.log(this.pair);
  }

  selectDirection(eventTarget: EventTarget | null) {
    this.direction = (eventTarget as HTMLInputElement).value;
    console.log(this.direction);
  }

  calculatePips(): void {
    const isJPY = this.pair.includes("JPY");
    const pipFactor = isJPY ? 100 : 10000;
    const pipValue = isJPY ? 9.1 : 10; // Approximate pip value per standard lot

    debugger;
    const pipDiff = this.direction === "Buy" ? parseFloat(this.exitPrice) - parseFloat(this.entryPrice) :
      parseFloat(this.entryPrice) - parseFloat(this.exitPrice);
    const pips = pipDiff * pipFactor;
    const usd = pips * pipValue * parseFloat(this.numberLots);
    this.profitOrLoss = `$${usd.toFixed(2)}`;
    this.resultInPips = pips.toFixed(1);
  }
}
