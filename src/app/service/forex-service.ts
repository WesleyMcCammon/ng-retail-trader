import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Currency, CurrencyPair, CurrencyType } from '../model/futures-contract';
import { PropFirm } from '../model/prop-firm';
import { TradingSoftware } from '../model/trading-software';

@Injectable({
  providedIn: 'root',
})
export class ForexService {

  constructor() {
  }

  getTradingSoftware(): Observable<TradingSoftware[]> {
    var tradingSoftware: TradingSoftware[] = new Array<TradingSoftware>();
    tradingSoftware.push({rank: 1, platform: 'MetaTrader 4 (MT4)', bestFor: 'Classic charting & automation', popularBrokers: 'Pepperstone, IC Markets', url: 'https://www.metatrader4.com/en/trading-platform/web-trading'});
    tradingSoftware.push({rank: 2, platform: 'MetaTrader 5 (MT5)', bestFor: 'Multi-asset & faster execution', popularBrokers: 'FOREX.com, OANDA', url: 'https://www.metatrader5.com/'});
    tradingSoftware.push({rank: 3, platform: 'cTrader', bestFor: 'Advanced UI & order types', popularBrokers: 'GO Markets, IC Markets', url: 'https://ctrader.com/download'});
    tradingSoftware.push({rank: 4, platform: 'TradingView', bestFor: 'Social charting & analysis', popularBrokers: 'BlackBull Markets, Eightcap', url: 'https://www.tradingview.com/'});
    tradingSoftware.push({rank: 5, platform: 'Thinkorswim', bestFor: 'Deep technical tools', popularBrokers: 'TD Ameritrade', url: 'https://trade.thinkorswim.com/'});
    tradingSoftware.push({rank: 6, platform: 'FOREX.com Platform', bestFor: 'Proprietary multi-asset access', popularBrokers: 'FOREX.com', url: 'https://www.forex.com/en-us/'});
    tradingSoftware.push({rank: 7, platform: 'OANDA fxTrade', bestFor: 'Precision execution', popularBrokers: 'OANDA', url: 'https://www.oanda.com/us-en/'});
    tradingSoftware.push({rank: 8, platform: 'IG Markets Platform', bestFor: 'Low spreads & mobile access', popularBrokers: 'IG Markets', url: 'https://www.ig.com/en/trading-platforms?msockid=13e26e654425698f1143783445ab684c'});
    tradingSoftware.push({rank: 9, platform: 'Plus500', bestFor: 'Simple interface & support', popularBrokers: 'Plus500', url: 'https://us.plus500.com/en/?ncc=true&id=1408&tags=bi_sr+638164411_cpi+USFuturesSearchBrand_cp+1253443901824922_agi+Brand.Core_agn+plus500_ks+kwd-78340610333256%3aloc-190_tid+be_mt+c_de+o_nt+_ext+80937_loc+UURL&=%d7%90&msclkid=979f39cc0cc8173812c150df8633b5dc&utm_source=bing&utm_medium=cpc&utm_campaign=USFuturesSearchBrand&utm_term=plus500&utm_content=Brand.Core'});
    tradingSoftware.push({rank: 10, platform: 'Interactive Brokers', bestFor: 'Global access & pro tools', popularBrokers: 'IBKR', url: 'https://www.interactivebrokers.com/en/whyib/overview.php'});

    return of(tradingSoftware);
  }
  getPropFirms(): Observable<any[]> {
    var propFirms: PropFirm[] = new Array<PropFirm>();
    propFirms.push({companyName: 'DNA Funded', plansAvailable: 'Single Helix, Double Helix, Rapid', costRange: '$49 – $299', url: 'https://www.dnafunded.com/'});
    propFirms.push({companyName: 'BrightFunded', plansAvailable: 'One-Step Challenge', costRange: '$89 – $249', url: 'https://www.brightfunded.com/'});
    propFirms.push({companyName: 'FXIFY', plansAvailable: 'Standard, Rapid, Instant Funding', costRange: '$99 – $499', url: 'https://www.fxify.com/'});
    propFirms.push({companyName: 'Blueberry Funded', plansAvailable: 'Scaling Plans', costRange: '$79 – $399', url: 'https://www.blueberrymarkets.com/funded'});
    propFirms.push({companyName: 'Funded Prime', plansAvailable: 'Meme Coin Challenge', costRange: '$59 – $199', url: 'https://www.fundedprime.com/'});
    propFirms.push({companyName: 'FundedNext Futures', plansAvailable: '24-Hour Payout Challenge', costRange: '$99 – $299', url: 'https://www.fundednext.com/'});
    propFirms.push({companyName: 'Funded Trading Plus', plansAvailable: 'Instant Funding', costRange: '$89 – $349', url: 'https://www.fundedtradingplus.com/'});
    propFirms.push({companyName: 'Topstep', plansAvailable: 'Futures Trading Challenge', costRange: '$165 – $375', url: 'https://www.topstep.com/'});
    propFirms.push({companyName: 'City Traders Imperium', plansAvailable: 'High Profit Share Plans', costRange: '$109 – $499', url: 'https://www.citytradersimperium.com/'});
    propFirms.push({companyName: 'The Funded Trader', plansAvailable: 'Social Trading Challenge', costRange: '$89 – $299', url: 'https://www.thefundedtraderprogram.com/'});

    return of(propFirms);
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