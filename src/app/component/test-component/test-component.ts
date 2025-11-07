import { Component } from '@angular/core';

@Component({
  selector: 'app-test-component',
  imports: [],
  templateUrl: './test-component.html',
  styleUrl: './test-component.css',
})
export class TestComponent {
  calculatorType: string = 'futures';

  changeCalculatorType(eventTarget: EventTarget | null) {
    this.calculatorType = (eventTarget as HTMLInputElement).value;    
  }
}
