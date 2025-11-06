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