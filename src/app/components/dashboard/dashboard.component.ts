import { Component, OnInit } from '@angular/core';
import { StocksService, StockInterface } from 'src/app/services/stocks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  stocks: Array<StockInterface>;
  symbols: Array<string>;

  constructor(private service: StocksService) { 
    this.symbols = service.get();
    console.log(this.symbols);
    
  }

  ngOnInit(): void {
    this.service.load(this.symbols).subscribe(stocks => this.stocks = stocks);
  }

}
