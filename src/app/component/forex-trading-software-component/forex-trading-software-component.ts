import { Component, OnInit } from '@angular/core';
import { ForexService } from '../../service/forex-service';
import { TradingSoftware } from '../../model/trading-software';

@Component({
  selector: 'app-forex-trading-software-component',
  imports: [],
  templateUrl: './forex-trading-software-component.html',
  styleUrl: './forex-trading-software-component.css',
})
export class ForexTradingSoftwareComponent implements OnInit {
  tradingSoftwares: TradingSoftware[] = new Array<TradingSoftware>();
  
  constructor(private forexService: ForexService) {}

  ngOnInit(): void {
    this.forexService.getTradingSoftware().subscribe((tradingSoftwares: TradingSoftware[]) => {
      this.tradingSoftwares = tradingSoftwares;
    });
  }
}
