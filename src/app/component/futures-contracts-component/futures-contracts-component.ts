import { Component, OnInit } from '@angular/core';
import { FuturesContractDetailComponent } from '../futures-contract-detail-component/futures-contract-detail-component';
import { FuturesContract, FuturesContractType } from '../../model/futures-contract';
import { FuturesService } from '../../service/futures-service';


@Component({
  selector: 'app-futures-contracts-component',
  imports: [FuturesContractDetailComponent],
  templateUrl: './futures-contracts-component.html',
  styleUrl: './futures-contracts-component.css',
})
export class FuturesContractsComponent implements OnInit {
  sortOption: string = 'type';
  futuresContracts: FuturesContract[] = new Array<FuturesContract>();
  contractMarketTypes: string[] = new Array<string>();
  contractMarkets: string[] = new Array<string>();

  constructor(private futuresService: FuturesService) {}

  ngOnInit(): void {
    this.futuresService.getFuturesContracts().subscribe((futuresContracts: FuturesContract[]) => {
      this.futuresContracts = futuresContracts;

      const micros: FuturesContract[] = this.futuresContracts.filter(f => f.microContract !== undefined && f.microContract?.length > 0);
      for(var index = 0; index < micros.length; index++) {
        const microFuturesContract = Object.assign({}, micros[index]);
        microFuturesContract.symbol = microFuturesContract.microContract!;
        microFuturesContract.tickValue = microFuturesContract.tickValue / 10;
        microFuturesContract.description = microFuturesContract.description.replace('E-mini', 'Micro')
        this.futuresContracts.push(microFuturesContract);
      }

      this.contractMarketTypes = [...new Set(this.futuresContracts.map(futuresContract => futuresContract.type))];
      this.contractMarkets = [...new Set(this.futuresContracts.map(futuresContract => futuresContract.market))];
    });
  }
  /*
  yo(): void {
    this.futuresContracts.push({
      symbol: 'ES', description: 'S&P 500 E-mini', market: 'CME', type: 'Equity Index', contractMonths: ['H', 'M', 'U', 'Z'],
      tickValue: 12.5, chartLink: 'https://finance.yahoo.com/quote/XXX=F/futures/', microContract: 'MES'
    });
    this.futuresContracts.push({
      symbol: 'NQ', description: 'NASDAQ-100 E-mini', market: 'CME', type: 'Equity Index', contractMonths: ['H', 'M', 'U', 'Z'],
      tickValue: 5, chartLink: 'https://finance.yahoo.com/quote/XXX=F/futures/', microContract: 'MNQ'
    });
    this.futuresContracts.push({
      symbol: 'YM', description: 'Dow Jones E-mini', market: 'CME', type: 'Equity Index', contractMonths: ['H', 'M', 'U', 'Z'],
      tickValue: 12.5, chartLink: 'https://finance.yahoo.com/quote/XXX=F/futures/', microContract: 'MYM'
    });
    this.futuresContracts.push({
      symbol: 'RTY', description: 'Russell 2000 E-mini', market: 'CME', type: 'Equity Index', contractMonths: ['H', 'M', 'U', 'Z'],
      tickValue: 12.5, chartLink: 'https://finance.yahoo.com/quote/XXX=F/futures/', microContract: 'M2K'
    });

    this.futuresContracts.push({
      symbol: 'ZC', description: 'Corn Futures', market: 'CBOT', type: 'Agriculture', contractMonths: ['H', 'K', 'N', 'U', 'Z'],
      tickValue: 12.5, chartLink: '', microContract: ''
    });
    this.futuresContracts.push({
      symbol: 'ZS', description: 'Soybeans', market: 'CBOT', type: 'Agriculture', contractMonths: ['F', 'H', 'K', 'N', 'Q', 'U', 'X'],
      tickValue: 12.5, chartLink: '', microContract: ''
    });
    this.futuresContracts.push({
      symbol: 'ZW', description: 'Wheat', market: 'CBOT', type: 'Agriculture', contractMonths: ['H', 'K', 'N', 'U', 'Z'],
      tickValue: 12.5, chartLink: '', microContract: ''
    });
    this.futuresContracts.push({
      symbol: 'GC', description: 'Gold', market: 'COMEX', type: 'Metals', contractMonths: ['H', 'M', 'U', 'Z'],
      tickValue: 10, chartLink: '', microContract: 'MGC'
    });
    this.futuresContracts.push({
      symbol: 'SI', description: 'Silver', market: 'COMEX', type: 'Metals', contractMonths: ['F', 'H', 'K', 'N', 'U', 'Z'],
      tickValue: 25, chartLink: '', microContract: ''
    });
    this.futuresContracts.push({
      symbol: 'CL', description: 'Crude Oil', market: 'NYMEX', type: 'Energy', contractMonths: ['F', 'G', 'H', 'J', 'K', 'M', 'N', 'Q', 'U', 'V', 'X', 'Z'],
      tickValue: 10, chartLink: '', microContract: 'MCL'
    });


    this.futuresContracts.push({
      symbol: 'ZN', description: '10-Year Treasury Note', market: 'CBOT', type: 'Interest Rates',
      contractMonths: ['H', 'M', 'U', 'Z'], tickValue: 15.625, chartLink: '', microContract: ''
    });
    this.futuresContracts.push({
      symbol: 'ZB', description: '30-Year Treasury Bond', market: 'CBOT', type: 'Interest Rates',
      contractMonths: ['H', 'M', 'U', 'Z'], tickValue: 31.25, chartLink: '', microContract: ''
    });
    this.futuresContracts.push({
      symbol: 'ZF', description: '5-Year Treasury Note', market: 'CBOT', type: 'Interest Rates',
      contractMonths: ['H', 'M', 'U', 'Z'], tickValue: 15.625, chartLink: '', microContract: ''
    });
    this.futuresContracts.push({
      symbol: 'ZT', description: '2-Year Treasury Note', market: 'CBOT', type: 'Interest Rates',
      contractMonths: ['H', 'M', 'U', 'Z'], tickValue: 15.625, chartLink: '', microContract: ''
    });
    this.futuresContracts.push({
      symbol: 'SR3', description: '3-Month SOFR Futures', market: 'CME', type: 'Interest Rates',
      contractMonths: ['F', 'G', 'H', 'J', 'K', 'M', 'N', 'Q', 'U', 'V', 'X', 'Z'], tickValue: 25, chartLink: '', microContract: ''
    });

    this.futuresContracts.push({
      symbol: 'LE',
      description: 'Live Cattle',
      market: 'CME',
      type: 'Agriculture',
      contractMonths: ['G', 'J', 'M', 'Q', 'V', 'Z'],
      tickValue: 4,
      chartLink: '',
      microContract: ''
    });

    this.futuresContracts.push({
      symbol: 'HE',
      description: 'Lean Hogs',
      market: 'CME',
      type: 'Agriculture',
      contractMonths: ['G', 'J', 'K', 'M', 'N', 'Q', 'V', 'Z'],
      tickValue: 4,
      chartLink: '',
      microContract: ''
    });

    this.futuresContracts.push({
      symbol: 'GF',
      description: 'Feeder Cattle',
      market: 'CME',
      type: 'Agriculture',
      contractMonths: ['F', 'H', 'J', 'K', 'Q', 'U', 'X'],
      tickValue: 12.5,
      chartLink: '',
      microContract: ''
    });

    this.futuresContracts.push({
      symbol: '6E',
      description: 'Euro FX Futures',
      market: 'CME',
      type: 'Currency',
      contractMonths: ['H', 'M', 'U', 'Z'],
      tickValue: 6.25,
      chartLink: '',
      microContract: ''
    });

    this.futuresContracts.push({
      symbol: '6J',
      description: 'Japanese Yen Futures',
      market: 'CME',
      type: 'Currency',
      contractMonths: ['H', 'M', 'U', 'Z'],
      tickValue: 12.5,
      chartLink: '',
      microContract: ''
    });

    this.futuresContracts.push({
      symbol: '6B',
      description: 'British Pound Futures',
      market: 'CME',
      type: 'Currency',
      contractMonths: ['H', 'M', 'U', 'Z'],
      tickValue: 6.25,
      chartLink: '',
      microContract: ''
    });

    this.futuresContracts.push({
      symbol: '6A',
      description: 'Australian Dollar Futures',
      market: 'CME',
      type: 'Currency',
      contractMonths: ['H', 'M', 'U', 'Z'],
      tickValue: 10,
      chartLink: '',
      microContract: ''
    });

    this.futuresContracts.push({
      symbol: '6C',
      description: 'Canadian Dollar Futures',
      market: 'CME',
      type: 'Currency',
      contractMonths: ['H', 'M', 'U', 'Z'],
      tickValue: 6.25,
      chartLink: '',
      microContract: ''
    });

    this.futuresContracts.push({
      symbol: '6S',
      description: 'Swiss Franc Futures',
      market: 'CME',
      type: 'Currency',
      contractMonths: ['H', 'M', 'U', 'Z'],
      tickValue: 12.5,
      chartLink: '',
      microContract: ''
    });

    this.futuresContracts.push({
      symbol: '6N',
      description: 'New Zealand Dollar Futures',
      market: 'CME',
      type: 'Currency',
      contractMonths: ['H', 'M', 'U', 'Z'],
      tickValue: 6.25,
      chartLink: '',
      microContract: ''
    });

    const micros: FuturesContract[] = this.futuresContracts.filter(f => f.microContract !== undefined && f.microContract?.length > 0);
    for(var index = 0; index < micros.length; index++) {
      const microFuturesContract = Object.assign({}, micros[index]);
      microFuturesContract.symbol = microFuturesContract.microContract!;
      microFuturesContract.tickValue = microFuturesContract.tickValue / 10;
      microFuturesContract.description = microFuturesContract.description.replace('E-mini', 'Micro')
      this.futuresContracts.push(microFuturesContract);
    }

    this.contractMarketTypes = [...new Set(this.futuresContracts.map(futuresContract => futuresContract.type))];
    this.contractMarkets = [...new Set(this.futuresContracts.map(futuresContract => futuresContract.market))];
  }
  */
  public setTableSort(eventTarget: EventTarget | null) {
    this.sortOption = (eventTarget as HTMLInputElement).value;
  }
  public getFuturesContractsByType(type: string): FuturesContract[] {
    return this.futuresContracts.filter(f => f.type === type || type.length === 0).sort((a, b) => a.symbol.localeCompare(b.symbol));
  }

  public getFuturesContractsByMarket(market: string): FuturesContract[] {
    return this.futuresContracts.filter(f => f.market === market).sort((a, b) => a.symbol.localeCompare(b.symbol));
  }
}
