import { Component } from '@angular/core';
import { FuturesCalculatorComponent } from "../futures-calculator-component/futures-calculator-component";
import { ForexCalculatorComponent } from "../forex-calculator-component/forex-calculator-component";


@Component({
  selector: 'app-trading-tools-component',
  imports: [FuturesCalculatorComponent, ForexCalculatorComponent],
  templateUrl: './trading-tools-component.html',
  styleUrl: './trading-tools-component.css',
})
export class TradingToolsComponent {
  calculatorType: string = 'futures';

  changeCalculatorType(eventTarget: EventTarget | null) {
    this.calculatorType = (eventTarget as HTMLInputElement).value;    
  }
}
