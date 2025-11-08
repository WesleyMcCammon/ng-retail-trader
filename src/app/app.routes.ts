import { Routes } from '@angular/router';
import { HomeComponent } from './component/home-component/home-component';
import { TopFiveMistakesComponent } from './component/top-five-mistakes-component/top-five-mistakes-component';
import { PageNotFoundComponent } from './component/page-not-found-component/page-not-found-component';
import { TradingJournalComponent } from './component/trading-journal-component/trading-journal-component';
import { TechnicalIndicatorsComponent } from './component/technical-indicators-component/technical-indicators-component';
import { GlossaryComponent } from './component/glossary-component/glossary-component';
import { FundamentalAnalysisComponent } from './component/fundamental-analysis-component/fundamental-analysis-component';
import { TechnicalAnalysisComponent } from './component/technical-analysis-component/technical-analysis-component';
import { OvertradingComponent } from './component/overtrading-component/overtrading-component';
import { RiskManagementComponent } from './component/risk-management-component/risk-management-component';
import { ChasingTheMarketComponent } from './component/chasing-the-market-component/chasing-the-market-component';
import { MostTradedComponent } from './component/most-traded-component/most-traded-component';
import { StockMarketSymbolsComponent } from './component/stock-market-symbols-component/stock-market-symbols-component';
import { ForexPairsComponent } from './component/forex-pairs-component/forex-pairs-component';
import { FuturesContractsComponent } from './component/futures-contracts-component/futures-contracts-component';
import { ForexPositionSizeCalculatorComponent } from './component/forex-position-size-calculator-component/forex-position-size-calculator-component';
import { FuturesPositionSizeCalculatorComponent } from './component/futures-position-size-calculator-component/futures-position-size-calculator-component';
import { BuildATradingPlanComponent } from './component/build-a-trading-plan-component/build-a-trading-plan-component';
import { ForexGettingStartedComponent } from './component/forex-getting-started-component/forex-getting-started-component';
import { ForexTradingSoftwareComponent } from './component/forex-trading-software-component/forex-trading-software-component';
import { ForexIndicatorsComponent } from './component/forex-indicators-component/forex-indicators-component';
import { ChartTypeComponent } from './component/chart-type-component/chart-type-component';
import { HowForexMarketWorksComponent } from './component/how-forex-market-works-component/how-forex-market-works-component';
import { ForexEducationResourcesComponent } from './component/forex-education-resources-component/forex-education-resources-component';
import { ForexGiftShopComponent } from './component/forex-gift-shop-component/forex-gift-shop-component';
import { ForexChoosingABrokerComponent } from './component/forex-choosing-a-broker-component/forex-choosing-a-broker-component';
import { ForexAccountTypesComponent } from './component/forex-account-types-component/forex-account-types-component';
import { ForexPropFirmsComponent } from './component/forex-prop-firms-component/forex-prop-firms-component';
import { TradingPsychologyComponent } from './component/trading-psychology-component/trading-psychology-component';
import { ForexKeyConceptsComponent } from './component/forex-key-concepts-component/forex-key-concepts-component';
import { TestComponent } from './component/test-component/test-component';
import { ForexTopBrokersComponent } from './component/forex-top-brokers-component/forex-top-brokers-component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'forex-getting-started', component: ForexGettingStartedComponent},
    { path: 'forex-trading-software', component: ForexTradingSoftwareComponent},
    { path: 'forex-trading-indicators', component: ForexIndicatorsComponent },
    { path: 'chart-types', component: ChartTypeComponent },
    { path: 'top-five-mistakes', component: TopFiveMistakesComponent},
    { path: 'trading-journals', component: TradingJournalComponent},
    { path: 'key-concepts', component: ForexKeyConceptsComponent},
    { path: 'technical-indicators', component: TechnicalIndicatorsComponent},
    { path: 'glossary', component: GlossaryComponent},
    { path: 'fundamental-analysis', component: FundamentalAnalysisComponent },
    { path: 'technical-analysis', component: TechnicalAnalysisComponent},
    { path: 'overtrading', component: OvertradingComponent},
    { path: 'risk-management', component: RiskManagementComponent},
    { path: 'chasing-the-market', component: ChasingTheMarketComponent},
    { path: 'most-traded', component: MostTradedComponent},
    { path: 'stock-market-symbols', component: StockMarketSymbolsComponent},
    { path: 'forex-pairs', component: ForexPairsComponent},
    { path: 'futures-contracts', component: FuturesContractsComponent},
    { path: 'forex-position-size-calculator', component: ForexPositionSizeCalculatorComponent},
    { path: 'futures-position-size-calculator', component: FuturesPositionSizeCalculatorComponent},    
    { path: 'build-a-trading-plan', component: BuildATradingPlanComponent},
    { path: 'forex-market-works', component: HowForexMarketWorksComponent },
    { path: 'trading-psychology', component: TradingPsychologyComponent},
    { path: 'forex-education-resources', component: ForexEducationResourcesComponent },
    { path: 'forex-gift-shop', component: ForexGiftShopComponent },
    { path: 'forex-choose-broker', component: ForexChoosingABrokerComponent},
    { path: 'forex-account-types', component: ForexAccountTypesComponent},
    { path: 'forex-prop-firms', component: ForexPropFirmsComponent },
    { path: 'top-forex-brokers', component: ForexTopBrokersComponent },
    { path: 'test', component: TestComponent},
    { path: '**', component: PageNotFoundComponent }
];
