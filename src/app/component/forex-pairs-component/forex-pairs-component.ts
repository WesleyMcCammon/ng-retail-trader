import { Component, OnInit } from '@angular/core';
import { ForexService } from '../../service/forex-service';
import { CurrencyPair, CurrencyType } from '../../model/futures-contract';

@Component({
  selector: 'app-forex-pairs-component',
  imports: [],
  templateUrl: './forex-pairs-component.html',
  styleUrl: './forex-pairs-component.css',
})
export class ForexPairsComponent implements OnInit {
  currencyPairs: CurrencyPair[] = new Array<CurrencyPair>();

  constructor(private forexService: ForexService) {}

  ngOnInit(): void {
    this.forexService.getCurrencyPairs().subscribe((currencyPairs: CurrencyPair[]) => {
      this.currencyPairs = currencyPairs;
    });
  }

  getPairsByCurrencyType(currencyType: string): CurrencyPair[] {
    return this.currencyPairs.filter(c => c.currencyType == currencyType)
      .sort((a,b) => a.baseCurrency.localeCompare(b.baseCurrency));
  }

  getChartUrl(baseCurrency: string, quoteCurrency: string): string {
    return `https://finance.yahoo.com/quote/${baseCurrency}${quoteCurrency}=X`
  }
}
