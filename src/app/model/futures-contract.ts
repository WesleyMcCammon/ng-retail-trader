export interface FuturesContract {
  symbol: string;
  description: string;
  market: string;
  type: string;
  contractMonths: string[];
  tickValue: number;
  chartLink: string;
  microContract?: string;
}

export interface FuturesContractType {
  name: string;
  description: string;
}

export enum CurrencyType {
  MAJOR, MINOR, EXOTIC
}

export interface Currency {
  symbol: string;
  description: string;
}

export interface CurrencyPair {
  baseCurrency: string;
  quoteCurrency: string;
  description: string;
  currencyType: CurrencyType;
}