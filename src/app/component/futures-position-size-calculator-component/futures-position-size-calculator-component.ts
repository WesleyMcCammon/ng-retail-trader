import { Component, OnInit } from '@angular/core';
import { FuturesService } from '../../service/futures-service';
import { FuturesContract } from '../../model/futures-contract';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-futures-position-size-calculator-component',
  imports: [FormsModule],
  templateUrl: './futures-position-size-calculator-component.html',
  styleUrl: './futures-position-size-calculator-component.css',
})
export class FuturesPositionSizeCalculatorComponent implements OnInit {
  accountSize: string = '';
  riskPercent: string = '';
  stopLossTicks: string = '';
  tickValue: string = '';
  contract: string = '';
  selectedFuturesContract: FuturesContract | undefined = undefined;
  futuresContracts: FuturesContract[] = new Array<FuturesContract>();

  constructor(private futuresService: FuturesService) { }

  ngOnInit(): void {
    this.futuresService.getFuturesContracts().subscribe((futuresContracts: FuturesContract[]) => {
      this.futuresContracts = futuresContracts.sort((a, b) => a.symbol.localeCompare(b.symbol));
    });
  }

  setContract(eventTarget: EventTarget | null) {
    this.contract = (eventTarget as HTMLInputElement).value;
    this.selectedFuturesContract = this.futuresContracts.find(f => f.symbol === this.contract)!;
    this.tickValue = this.selectedFuturesContract?.tickValue.toFixed(2);
  }

  calculateFuturesPosition(): void {
    const accountSizeAmount = parseFloat(this.accountSize);
    const riskPercentAmount = parseFloat(this.riskPercent);
    const stopLossTicksAmount = parseFloat(this.stopLossTicks);
    const tickValueAmount = parseFloat(this.tickValue);

    const riskAmount = accountSizeAmount * (riskPercentAmount / 100);
    const riskPerContract = stopLossTicksAmount * tickValueAmount;
    const contracts = Math.floor(riskAmount / riskPerContract);
    
    debugger;
    /*
    
      const accountSize = parseFloat(document.getElementById('accountSize').value);
      const riskPercent = parseFloat(document.getElementById('riskPercent').value);
      const stopLossTicks = parseFloat(document.getElementById('stopLossTicks').value);
      const tickValue = parseFloat(document.getElementById('tickValue').value);
      const contract = document.getElementById('contract').value;

      if (isNaN(accountSize) || isNaN(riskPercent) || isNaN(stopLossTicks) || isNaN(tickValue)) {
        alert("Please fill in all fields with valid numbers.");
        return;
      }

      const riskAmount = accountSize * (riskPercent / 100);
      const riskPerContract = stopLossTicks * tickValue;
      const contracts = Math.floor(riskAmount / riskPerContract);

      const resultDiv = document.getElementById('result');
      resultDiv.style.display = 'block';
      resultDiv.innerHTML = `
        <strong>Contract:</strong> ${contract}<br/>
        <strong>Risk Amount:</strong> $${riskAmount.toFixed(2)}<br/>
        <strong>Stop Loss:</strong> ${stopLossTicks} ticks<br/>
        <strong>Tick Value:</strong> $${tickValue.toFixed(2)}<br/>
        <strong>Max Position Size:</strong> ${contracts} contract(s)
      `;
    */
  }
}
/*

  <script>
    const tickValues = {
      ES: 12.5,
      NQ: 5,
      CL: 10,
      GC: 10,
      '6E': 6.25,
      ZN: 15.625,
      ZC: 12.5,
      ZS: 12.5,
      LE: 4,
      NG: 10
    };

    function updateTickValue() {
      const contract = document.getElementById('contract').value;
      document.getElementById('tickValue').value = tickValues[contract] || '';
    }

    function calculateFuturesPosition() {
      const accountSize = parseFloat(document.getElementById('accountSize').value);
      const riskPercent = parseFloat(document.getElementById('riskPercent').value);
      const stopLossTicks = parseFloat(document.getElementById('stopLossTicks').value);
      const tickValue = parseFloat(document.getElementById('tickValue').value);
      const contract = document.getElementById('contract').value;

      if (isNaN(accountSize) || isNaN(riskPercent) || isNaN(stopLossTicks) || isNaN(tickValue)) {
        alert("Please fill in all fields with valid numbers.");
        return;
      }

      const riskAmount = accountSize * (riskPercent / 100);
      const riskPerContract = stopLossTicks * tickValue;
      const contracts = Math.floor(riskAmount / riskPerContract);

      const resultDiv = document.getElementById('result');
      resultDiv.style.display = 'block';
      resultDiv.innerHTML = `
        <strong>Contract:</strong> ${contract}<br/>
        <strong>Risk Amount:</strong> $${riskAmount.toFixed(2)}<br/>
        <strong>Stop Loss:</strong> ${stopLossTicks} ticks<br/>
        <strong>Tick Value:</strong> $${tickValue.toFixed(2)}<br/>
        <strong>Max Position Size:</strong> ${contracts} contract(s)
      `;
    }

    // Initialize tick value on page load
    window.onload = updateTickValue;
  </script>
*/