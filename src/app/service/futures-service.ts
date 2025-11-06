import { Injectable } from '@angular/core';
import { FuturesContract } from '../model/futures-contract';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FuturesService {
  public getFuturesContracts(): Observable<FuturesContract[]> {
    const futuresContracts: FuturesContract[] =new Array<FuturesContract>();
    futuresContracts.push({
      symbol: 'ES', description: 'S&P 500 E-mini', market: 'CME', type: 'Equity Index', contractMonths: ['H', 'M', 'U', 'Z'],
      tickValue: 12.5, chartLink: 'https://finance.yahoo.com/quote/XXX=F/futures/', microContract: 'MES'
    });
    futuresContracts.push({
      symbol: 'NQ', description: 'NASDAQ-100 E-mini', market: 'CME', type: 'Equity Index', contractMonths: ['H', 'M', 'U', 'Z'],
      tickValue: 5, chartLink: 'https://finance.yahoo.com/quote/XXX=F/futures/', microContract: 'MNQ'
    });
    futuresContracts.push({
      symbol: 'YM', description: 'Dow Jones E-mini', market: 'CME', type: 'Equity Index', contractMonths: ['H', 'M', 'U', 'Z'],
      tickValue: 12.5, chartLink: 'https://finance.yahoo.com/quote/XXX=F/futures/', microContract: 'MYM'
    });
    futuresContracts.push({
      symbol: 'RTY', description: 'Russell 2000 E-mini', market: 'CME', type: 'Equity Index', contractMonths: ['H', 'M', 'U', 'Z'],
      tickValue: 12.5, chartLink: 'https://finance.yahoo.com/quote/XXX=F/futures/', microContract: 'M2K'
    });

    futuresContracts.push({
      symbol: 'ZC', description: 'Corn Futures', market: 'CBOT', type: 'Agriculture', contractMonths: ['H', 'K', 'N', 'U', 'Z'],
      tickValue: 12.5, chartLink: '', microContract: ''
    });
    futuresContracts.push({
      symbol: 'ZS', description: 'Soybeans', market: 'CBOT', type: 'Agriculture', contractMonths: ['F', 'H', 'K', 'N', 'Q', 'U', 'X'],
      tickValue: 12.5, chartLink: '', microContract: ''
    });
    futuresContracts.push({
      symbol: 'ZW', description: 'Wheat', market: 'CBOT', type: 'Agriculture', contractMonths: ['H', 'K', 'N', 'U', 'Z'],
      tickValue: 12.5, chartLink: '', microContract: ''
    });
    futuresContracts.push({
      symbol: 'GC', description: 'Gold', market: 'COMEX', type: 'Metals', contractMonths: ['H', 'M', 'U', 'Z'],
      tickValue: 10, chartLink: '', microContract: 'MGC'
    });
    futuresContracts.push({
      symbol: 'SI', description: 'Silver', market: 'COMEX', type: 'Metals', contractMonths: ['F', 'H', 'K', 'N', 'U', 'Z'],
      tickValue: 25, chartLink: '', microContract: ''
    });
    futuresContracts.push({
      symbol: 'CL', description: 'Crude Oil', market: 'NYMEX', type: 'Energy', contractMonths: ['F', 'G', 'H', 'J', 'K', 'M', 'N', 'Q', 'U', 'V', 'X', 'Z'],
      tickValue: 10, chartLink: '', microContract: 'MCL'
    });


    futuresContracts.push({
      symbol: 'ZN', description: '10-Year Treasury Note', market: 'CBOT', type: 'Interest Rates',
      contractMonths: ['H', 'M', 'U', 'Z'], tickValue: 15.625, chartLink: '', microContract: ''
    });
    futuresContracts.push({
      symbol: 'ZB', description: '30-Year Treasury Bond', market: 'CBOT', type: 'Interest Rates',
      contractMonths: ['H', 'M', 'U', 'Z'], tickValue: 31.25, chartLink: '', microContract: ''
    });
    futuresContracts.push({
      symbol: 'ZF', description: '5-Year Treasury Note', market: 'CBOT', type: 'Interest Rates',
      contractMonths: ['H', 'M', 'U', 'Z'], tickValue: 15.625, chartLink: '', microContract: ''
    });
    futuresContracts.push({
      symbol: 'ZT', description: '2-Year Treasury Note', market: 'CBOT', type: 'Interest Rates',
      contractMonths: ['H', 'M', 'U', 'Z'], tickValue: 15.625, chartLink: '', microContract: ''
    });
    futuresContracts.push({
      symbol: 'SR3', description: '3-Month SOFR Futures', market: 'CME', type: 'Interest Rates',
      contractMonths: ['F', 'G', 'H', 'J', 'K', 'M', 'N', 'Q', 'U', 'V', 'X', 'Z'], tickValue: 25, chartLink: '', microContract: ''
    });

    futuresContracts.push({
      symbol: 'LE',
      description: 'Live Cattle',
      market: 'CME',
      type: 'Agriculture',
      contractMonths: ['G', 'J', 'M', 'Q', 'V', 'Z'],
      tickValue: 4,
      chartLink: '',
      microContract: ''
    });

    futuresContracts.push({
      symbol: 'HE',
      description: 'Lean Hogs',
      market: 'CME',
      type: 'Agriculture',
      contractMonths: ['G', 'J', 'K', 'M', 'N', 'Q', 'V', 'Z'],
      tickValue: 4,
      chartLink: '',
      microContract: ''
    });

    futuresContracts.push({
      symbol: 'GF',
      description: 'Feeder Cattle',
      market: 'CME',
      type: 'Agriculture',
      contractMonths: ['F', 'H', 'J', 'K', 'Q', 'U', 'X'],
      tickValue: 12.5,
      chartLink: '',
      microContract: ''
    });

    futuresContracts.push({
      symbol: '6E',
      description: 'Euro FX Futures',
      market: 'CME',
      type: 'Currency',
      contractMonths: ['H', 'M', 'U', 'Z'],
      tickValue: 6.25,
      chartLink: '',
      microContract: ''
    });

    futuresContracts.push({
      symbol: '6J',
      description: 'Japanese Yen Futures',
      market: 'CME',
      type: 'Currency',
      contractMonths: ['H', 'M', 'U', 'Z'],
      tickValue: 12.5,
      chartLink: '',
      microContract: ''
    });

    futuresContracts.push({
      symbol: '6B',
      description: 'British Pound Futures',
      market: 'CME',
      type: 'Currency',
      contractMonths: ['H', 'M', 'U', 'Z'],
      tickValue: 6.25,
      chartLink: '',
      microContract: ''
    });

    futuresContracts.push({
      symbol: '6A',
      description: 'Australian Dollar Futures',
      market: 'CME',
      type: 'Currency',
      contractMonths: ['H', 'M', 'U', 'Z'],
      tickValue: 10,
      chartLink: '',
      microContract: ''
    });

    futuresContracts.push({
      symbol: '6C',
      description: 'Canadian Dollar Futures',
      market: 'CME',
      type: 'Currency',
      contractMonths: ['H', 'M', 'U', 'Z'],
      tickValue: 6.25,
      chartLink: '',
      microContract: ''
    });

    futuresContracts.push({
      symbol: '6S',
      description: 'Swiss Franc Futures',
      market: 'CME',
      type: 'Currency',
      contractMonths: ['H', 'M', 'U', 'Z'],
      tickValue: 12.5,
      chartLink: '',
      microContract: ''
    });

    futuresContracts.push({
      symbol: '6N',
      description: 'New Zealand Dollar Futures',
      market: 'CME',
      type: 'Currency',
      contractMonths: ['H', 'M', 'U', 'Z'],
      tickValue: 6.25,
      chartLink: '',
      microContract: ''
    });

    const micros: FuturesContract[] = futuresContracts.filter(f => f.microContract !== undefined && f.microContract?.length > 0);
    for(var index = 0; index < micros.length; index++) {
      const microFuturesContract = Object.assign({}, micros[index]);
      microFuturesContract.symbol = microFuturesContract.microContract!;
      microFuturesContract.tickValue = microFuturesContract.tickValue / 10;
      microFuturesContract.description = microFuturesContract.description.replace('E-mini', 'Micro')
      futuresContracts.push(microFuturesContract);
    }

    return of(futuresContracts);
  }
}
