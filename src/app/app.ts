import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header-component/header-component';
import { FooterComponent } from './component/footer-component/footer-component';
import { VerticalMenuComponent } from './component/vertical-menu-component/vertical-menu-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, VerticalMenuComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ng-retail-trader';
}
