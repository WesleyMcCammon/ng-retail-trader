import { Component, OnInit } from '@angular/core';
import { ForexService } from '../../service/forex-service';
import { PropFirm } from '../../model/prop-firm';

@Component({
  selector: 'app-forex-prop-firms-component',
  imports: [],
  templateUrl: './forex-prop-firms-component.html',
  styleUrl: './forex-prop-firms-component.css',
})
export class ForexPropFirmsComponent implements OnInit {
  propFirms: PropFirm[] = new Array<PropFirm>();

  constructor(private forexService: ForexService) {}

  ngOnInit(): void {
    this.forexService.getPropFirms().subscribe((propFirms: PropFirm[]) => {
      this.propFirms = propFirms.sort((a,b) => a.companyName.localeCompare(b.companyName));
    });
  }
}
