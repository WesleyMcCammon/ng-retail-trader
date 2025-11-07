import { Routes } from '@angular/router';
import { HomeComponent } from './component/home-component/home-component';
import { EducationComponent } from './component/education-component/education-component';
import { InsightsComponent } from './component/insights-component/insights-component';
import { TradingToolsComponent } from './component/trading-tools-component/trading-tools-component';
import { ProfileComponent } from './component/profile-component/profile-component';
import { ContactComponent } from './component/contact-component/contact-component';
import { AboutComponent } from './component/about-component/about-component';
import { TestComponent } from './component/test-component/test-component';
import { TopFiveMistakesComponent } from './component/top-five-mistakes-component/top-five-mistakes-component';
import { PageNotFoundComponent } from './component/page-not-found-component/page-not-found-component';
import { TradingJournalComponent } from './component/trading-journal-component/trading-journal-component';
import { TechnicalIndicatorsComponent } from './component/technical-indicators-component/technical-indicators-component';
import { GlossaryComponent } from './component/glossary-component/glossary-component';
import { FundamentalAnalysisComponent } from './component/fundamental-analysis-component/fundamental-analysis-component';
import { BuildATradingPlanComponent } from './component/build-a-trading-plan-component/build-a-trading-plan-component';
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

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'education', component: EducationComponent},
    { path: 'insights', component: InsightsComponent},
    { path: 'tools', component: TradingToolsComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'about', component: AboutComponent},
    { path: 'test', component: TestComponent},
    { path: 'top-five-mistakes', component: TopFiveMistakesComponent},
    { path: 'trading-journals', component: TradingJournalComponent},
    { path: 'technical-indicators', component: TechnicalIndicatorsComponent},
    { path: 'glossary', component: GlossaryComponent},
    { path: 'fundamental-analysis', component: FundamentalAnalysisComponent },
    { path: 'build-a-trading-plan', component: BuildATradingPlanComponent},
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
    
    { path: '**', component: PageNotFoundComponent }
];
