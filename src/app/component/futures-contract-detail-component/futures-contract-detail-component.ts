import { DecimalPipe } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FuturesContract } from '../../model/futures-contract';

interface MonthlyContractCode {
  code: string;
  monthName: string;
}

@Component({
  selector: 'app-futures-contract-detail-component',
  imports: [DecimalPipe],
  templateUrl: './futures-contract-detail-component.html',
  styleUrl: './futures-contract-detail-component.css',
})
export class FuturesContractDetailComponent implements OnInit, OnChanges {
  @Input() futuresContracts!: FuturesContract[];
  @Input() title: string = '';

  baseChartUrl: string = 'https://finance.yahoo.com/quote/XXX=F/futures/';
  monthlyContractCodes: MonthlyContractCode[] = new Array<MonthlyContractCode>();

  ngOnInit(): void { 
    this.monthlyContractCodes.push({code: 'F', monthName: 'Jan'});
    this.monthlyContractCodes.push({code: 'G', monthName: 'Feb'});
    this.monthlyContractCodes.push({code: 'H', monthName: 'Mar'});
    this.monthlyContractCodes.push({code: 'J', monthName: 'Apr'});
    this.monthlyContractCodes.push({code: 'K', monthName: 'May'});
    this.monthlyContractCodes.push({code: 'M', monthName: 'Jun'});
    this.monthlyContractCodes.push({code: 'N', monthName: 'Jul'});
    this.monthlyContractCodes.push({code: 'Q', monthName: 'Aug'});
    this.monthlyContractCodes.push({code: 'U', monthName: 'Sep'});
    this.monthlyContractCodes.push({code: 'V', monthName: 'Oct'});
    this.monthlyContractCodes.push({code: 'X', monthName: 'Nov'});
    this.monthlyContractCodes.push({code: 'Z', monthName: 'Dec'});
  }

  ngOnChanges(changes: SimpleChanges): void {
    debugger;
  }
  getDeliveryMonths(codes: string[]): string {
    var deliveryMonth: string = '';

    if(codes.length === 12)  {
      deliveryMonth = 'monthly';
    }
    else {
      for(var index = 0; index < codes.length; index++) {
        const monthlyContractCode = this.monthlyContractCodes.find(m => m.code === codes[index])!;
        deliveryMonth += (monthlyContractCode.monthName + ' (' + monthlyContractCode.code + ')');
        if(index < codes.length - 1) deliveryMonth += ', ';
      }
    }
    
    return deliveryMonth;
  }
}
