import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

interface TickSize {
  symbol: string;
  tickSize: number;
  tickValue: number;
}

@Component({
  selector: 'app-futures-calculator-component',
  imports: [FormsModule],
  templateUrl: './futures-calculator-component.html',
  styleUrl: './futures-calculator-component.css',
})
export class FuturesCalculatorComponent implements OnInit {
  symbol: string = 'NQ';
  direction: string = 'Buy';
  entryPrice: string = '';
  exitPrice: string = '';
  contracts: string = '';
  ticks: string = '';
  points: string = '';
  profitOrLoss: string = '';
  tickSizes: TickSize[] = new Array<TickSize>();

  ngOnInit(): void {
    this.tickSizes.push({symbol: 'NQ', tickSize: 0.25, tickValue: 5});
    this.tickSizes.push({symbol: 'ES', tickSize: 0.25, tickValue: 12.5});
  }

  public selectDirection(eventTarget: EventTarget | null) {
    this.direction = (eventTarget as HTMLInputElement).value;
  }

  public selectSymbol(eventTarget: EventTarget | null) {
    this.symbol = (eventTarget as HTMLInputElement).value;
  }

  public calculateRisk(): void {
      const symbolTickSize: TickSize = this.tickSizes.find(t => t.symbol === this.symbol)!;
      const pointDiff = this.direction === "Buy" ? parseFloat(this.exitPrice) - parseFloat(this.entryPrice) : parseFloat(this.entryPrice) - parseFloat(this.exitPrice);
      this.ticks = (pointDiff / symbolTickSize.tickSize).toFixed(0);
      this.points = pointDiff.toFixed(2);
      this.profitOrLoss = `$${(parseFloat(this.ticks) * symbolTickSize.tickValue * parseFloat(this.contracts)).toFixed(2)}`;
  }
}
