import { Component, OnInit } from '@angular/core';

import { PanelModule } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  selectedStock: string;
  chartInterval = ['5y', '2y', '1y', 'ytd','6m','3m'];

  onSelectedStockChange(stock: string) {
    this.selectedStock = stock.toLocaleUpperCase();
  }

  ngOnInit(): void {

  }
  displayChart: boolean = true;
}