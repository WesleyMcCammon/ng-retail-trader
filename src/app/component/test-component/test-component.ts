import { Component } from '@angular/core';
import { ForexPositionSizeCalculatorComponent } from "../forex-position-size-calculator-component/forex-position-size-calculator-component";
import { FuturesPositionSizeCalculatorComponent } from "../futures-position-size-calculator-component/futures-position-size-calculator-component";

@Component({
  selector: 'app-test-component',
  imports: [ForexPositionSizeCalculatorComponent, FuturesPositionSizeCalculatorComponent],
  templateUrl: './test-component.html',
  styleUrl: './test-component.css',
})
export class TestComponent {
  calculatorType: string = 'futures';

  changeCalculatorType(eventTarget: EventTarget | null) {
    this.calculatorType = (eventTarget as HTMLInputElement).value;    
  }
}

/*
<script>
    const futuresBtn = document.getElementById('futuresBtn');
    const forexBtn = document.getElementById('forexBtn');
    const futuresCalc = document.getElementById('futuresCalc');
    const forexCalc = document.getElementById('forexCalc');

    futuresBtn.onclick = () => {
      futuresBtn.classList.add('active');
      forexBtn.classList.remove('active');
      futuresCalc.style.display = 'block';
      forexCalc.style.display = 'none';
    };

    forexBtn.onclick = () => {
      forexBtn.classList.add('active');
      futuresBtn.classList.remove('active');
      forexCalc.style.display = 'block';
      futuresCalc.style.display = 'none';
    };

    function calculateFuturesRisk() {
      const symbol = document.getElementById('symbol').value;
      const direction = document.querySelector('input[name="direction"]:checked').value;
      const entry = parseFloat(document.getElementById('entry').value);
      const exit = parseFloat(document.getElementById('exit').value);
      const contracts = parseInt(document.getElementById('contracts').value);

      const tickSize = {
        NQ: 0.25, ES: 0.25, YM: 1, RTY: 0.1, GC: 0.1, CL: 0.01
      };
      const tickValue = {
        NQ: 5, ES: 12.5, YM: 5, RTY: 5, GC: 10, CL: 10
      };

      if (isNaN(entry) || isNaN(exit) || isNaN(contracts)) {
        document.getElementById('futuresResult').innerText = "Please enter valid numbers.";
        return;
      }

      const pointDiff = direction === "Buy" ? exit - entry : entry - exit;
      const ticks = pointDiff / tickSize[symbol];
      const usd = ticks * tickValue[symbol] * contracts;

      document.getElementById('futuresResult').innerText =
        `Points: ${pointDiff.toFixed(2)} | Ticks: ${ticks.toFixed(0)} | USD: $${usd.toFixed(2)}`;
    }

    function calculateForexRisk() {
      const lots = parseFloat(document.getElementById('forexLots').value);
      const entry = parseFloat(document.getElementById('forexEntry').value);
      const exit = parseFloat(document.getElementById('forexExit').value);

      if (isNaN(lots) || isNaN(entry) || isNaN(exit)) {
        document.getElementById('forexResult').innerText = "Please enter valid values.";
        return;
      }

      const pips = Math.abs(exit - entry) * 10000;
      const pipValue = 10; // standard lot
      const usd = pips * pipValue * lots;

      document.getElementById('forexResult').innerText =
        `Pips: ${pips.toFixed(0)} | USD: $${usd.toFixed(2)}`;
    }
  </script>


*/