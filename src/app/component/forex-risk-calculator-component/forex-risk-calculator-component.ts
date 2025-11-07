import { Component } from '@angular/core';

@Component({
  selector: 'app-forex-risk-calculator-component',
  imports: [],
  templateUrl: './forex-risk-calculator-component.html',
  styleUrl: './forex-risk-calculator-component.css',
})
export class ForexRiskCalculatorComponent {

}

/*

  <script>
    function calculatePositionSize() {
      const accountSize = parseFloat(document.getElementById('accountSize').value);
      const riskPercent = parseFloat(document.getElementById('riskPercent').value);
      const stopLossPips = parseFloat(document.getElementById('stopLossPips').value);
      const pipValue = parseFloat(document.getElementById('pipValue').value);
      const currencyPair = document.getElementById('currencyPair').value;
      const accountCurrency = document.getElementById('accountCurrency').value;

      if (isNaN(accountSize) || isNaN(riskPercent) || isNaN(stopLossPips) || isNaN(pipValue)) {
        alert("Please fill in all fields with valid numbers.");
        return;
      }

      const riskAmount = accountSize * (riskPercent / 100);
      const lotSize = riskAmount / (stopLossPips * pipValue);

      const resultDiv = document.getElementById('result');
      resultDiv.style.display = 'block';
      resultDiv.innerHTML = `
        <strong>Currency Pair:</strong> ${currencyPair}<br/>
        <strong>Account Currency:</strong> ${accountCurrency}<br/>
        <strong>Risk Amount:</strong> $${riskAmount.toFixed(2)}<br/>
        <strong>Stop Loss:</strong> ${stopLossPips} pips<br/>
        <strong>Pip Value:</strong> $${pipValue.toFixed(2)}<br/>
        <strong>Recommended Lot Size:</strong> ${lotSize.toFixed(2)} standard lots
      `;
    }
  </script>
</body>
</html>
*/