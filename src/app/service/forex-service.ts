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
    currencyPairs.push({ baseCurrency: 'GBP', quoteCurrency: 'JPY', description: 'British Pound / Japanese Yen', currencyType: CurrencyType.MINOR });
    currencyPairs.push({ baseCurrency: 'AUD', quoteCurrency: 'NZD', description: 'Australian Dollar / New Zealand Dollar', currencyType: CurrencyType.MINOR });
    currencyPairs.push({ baseCurrency: 'EUR', quoteCurrency: 'AUD', description: 'Euro / Australian Dollar', currencyType: CurrencyType.MINOR });
    currencyPairs.push({ baseCurrency: 'EUR', quoteCurrency: 'CAD', description: 'Euro / Canadian Dollar', currencyType: CurrencyType.MINOR });
    currencyPairs.push({ baseCurrency: 'AUD', quoteCurrency: 'JPY', description: 'Australian Dollar / Japanese Yen', currencyType: CurrencyType.MINOR });
    currencyPairs.push({ baseCurrency: 'CHF', quoteCurrency: 'JPY', description: 'Swiss Franc / Japanese Yen', currencyType: CurrencyType.MINOR });
    
    currencyPairs.push({ baseCurrency: 'USD', quoteCurrency: 'TRY', description: 'US Dollar / Turkish Lira', currencyType: CurrencyType.EXOTIC });    
    currencyPairs.push({ baseCurrency: 'USD', quoteCurrency: 'ZAR', description: 'US Dollar / South African Rand', currencyType: CurrencyType.EXOTIC });    
    currencyPairs.push({ baseCurrency: 'USD', quoteCurrency: 'SEK', description: 'US Dollar / Swedish Krona', currencyType: CurrencyType.EXOTIC });    
    currencyPairs.push({ baseCurrency: 'USD', quoteCurrency: 'SGD', description: '>US Dollar / Singapore Dollar', currencyType: CurrencyType.EXOTIC });    
    currencyPairs.push({ baseCurrency: 'USD', quoteCurrency: 'MXN', description: 'US Dollar / Mexican Peso', currencyType: CurrencyType.EXOTIC });    
    currencyPairs.push({ baseCurrency: 'USD', quoteCurrency: 'THB', description: 'US Dollar / Thai Baht', currencyType: CurrencyType.EXOTIC });    
    currencyPairs.push({ baseCurrency: 'USD', quoteCurrency: 'HKD', description: 'US Dollar / Hong Kong Dollar', currencyType: CurrencyType.EXOTIC });    
    currencyPairs.push({ baseCurrency: 'USD', quoteCurrency: 'INR', description: 'US Dollar / Indian Rupee', currencyType: CurrencyType.EXOTIC });    
    currencyPairs.push({ baseCurrency: 'EUR', quoteCurrency: 'TRY', description: 'Euro / Turkish Lira', currencyType: CurrencyType.EXOTIC });    
    currencyPairs.push({ baseCurrency: 'EUR', quoteCurrency: 'ZAR', description: 'Euro / South African Rand', currencyType: CurrencyType.EXOTIC });    

    return of(currencyPairs);
  }
}