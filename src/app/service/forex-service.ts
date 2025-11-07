import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Currency, CurrencyPair, CurrencyType } from '../model/futures-contract';

@Injectable({
  providedIn: 'root',
})
export class ForexService {
  currencies: Currency[] = new Array<Currency>();

  constructor() {
  }

  getCurrencyPairs(): Observable<CurrencyPair[]> {
    var currencyPairs: CurrencyPair[] = new Array<CurrencyPair>();
    currencyPairs.push({ baseCurrency: 'EUR', quoteCurrency: 'USD', description: 'Euro / US Dollar', currencyType: CurrencyType.MAJOR });
    currencyPairs.push({baseCurrency: 'USD', quoteCurrency: 'JPY', description: 'US Dollar / Japanese Yen', currencyType: CurrencyType.MAJOR});
    currencyPairs.push({baseCurrency: 'GBP', quoteCurrency: 'USD', description: 'British Pound / US Dollar', currencyType: CurrencyType.MAJOR});
    currencyPairs.push({baseCurrency: 'USD', quoteCurrency: 'CHF', description: 'US Dollar / Swiss Franc', currencyType: CurrencyType.MAJOR});
    currencyPairs.push({baseCurrency: 'AUD', quoteCurrency: 'USD', description: 'Australian Dollar / US Dollar', currencyType: CurrencyType.MAJOR});
    currencyPairs.push({baseCurrency: 'USD', quoteCurrency: 'CAD', description: 'US Dollar / Canadian Dollar', currencyType: CurrencyType.MAJOR});
    currencyPairs.push({baseCurrency: 'NZD', quoteCurrency: 'USD', description: 'New Zealand Dollar / US Dollar', currencyType: CurrencyType.MAJOR});

    currencyPairs.push({ baseCurrency: 'EUR', quoteCurrency: 'GBP', description: 'Euro / British Pound', currencyType: CurrencyType.MINOR });
    currencyPairs.push({ baseCurrency: 'EUR', quoteCurrency: 'JPY', description: 'Euro / Japanese Yen', currencyType: CurrencyType.MINOR });
        <tr><td>GBP/JPY</td><td>British Pound / Japanese Yen</td><td><a href="https://finance.yahoo.com/quote/GBPJPY=X" target="_blank">View Chart</a></td></tr>
        <tr><td>AUD/NZD</td><td>Australian Dollar / New Zealand Dollar</td><td><a href="https://finance.yahoo.com/quote/AUDNZD=X" target="_blank">View Chart</a></td></tr>
        <tr><td>EUR/AUD</td><td>Euro / Australian Dollar</td><td><a href="https://finance.yahoo.com/quote/EURAUD=X" target="_blank">View Chart</a></td></tr>
        <tr><td>EUR/CAD</td><td>Euro / Canadian Dollar</td><td><a href="https://finance.yahoo.com/quote/EURCAD=X" target="_blank">View Chart</a></td></tr>
        <tr><td>AUD/JPY</td><td>Australian Dollar / Japanese Yen</td><td><a href="https://finance.yahoo.com/quote/AUDJPY=X" target="_blank">View Chart</a></td></tr>
        <tr><td>CHF/JPY</td><td>Swiss Franc / Japanese Yen</td><td><a href="https://finance.yahoo.com/quote/CHFJPY=X" target="_blank">View Chart</a></td></tr>

    return of(new Array<CurrencyPair>());
  }
}
/*

        <tr><td>EUR/USD</td><td>Euro / US Dollar</td><td><a href="https://finance.yahoo.com/quote/EURUSD=X" target="_blank">View Chart</a></td></tr>
        <tr><td>USD/JPY</td><td>US Dollar / Japanese Yen</td><td><a href="https://finance.yahoo.com/quote/USDJPY=X" target="_blank">View Chart</a></td></tr>
        <tr><td>GBP/USD</td><td>British Pound / US Dollar</td><td><a href="https://finance.yahoo.com/quote/GBPUSD=X" target="_blank">View Chart</a></td></tr>
        <tr><td>USD/CHF</td><td>US Dollar / Swiss Franc</td><td><a href="https://finance.yahoo.com/quote/USDCHF=X" target="_blank">View Chart</a></td></tr>
        <tr><td>AUD/USD</td><td>Australian Dollar / US Dollar</td><td><a href="https://finance.yahoo.com/quote/AUDUSD=X" target="_blank">View Chart</a></td></tr>
        <tr><td>USD/CAD</td><td>US Dollar / Canadian Dollar</td><td><a href="https://finance.yahoo.com/quote/USDCAD=X" target="_blank">View Chart</a></td></tr>
        <tr><td>NZD/USD</td><td>New Zealand Dollar / US Dollar</td><td><a href="https://finance.yahoo.com/quote/NZDUSD=X" target="_blank">View Chart</a></td></tr>

*/