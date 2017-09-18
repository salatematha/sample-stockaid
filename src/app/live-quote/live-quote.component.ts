import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription'
import { WebSocketsService } from '../service/web-sockets.service'



@Component({
  selector: 'app-live-quote',
  templateUrl: './live-quote.component.html',
  styleUrls: ['./live-quote.component.css']
})
export class LiveQuoteComponent implements OnInit, OnDestroy {
  messages;
  connection;
  message;
  symbols = new Array<StockQuote>();


  constructor(private webSocket: WebSocketsService) { }

  sendMessage() {
    this.message = 'aapl,vti,snap;fb;aig+';
    this.webSocket.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit() {

    this.connection = this.webSocket.getMessages().subscribe(message => {
      console.log(message);
      let found = false;
      this.messages = message as StockQuote;
      this.symbols.forEach(element => {
        if (element.symbol == this.messages.symbol) {
          element.lastSalePrice = this.messages.lastSalePrice;
          found = true;
        }
      });
      if (!found)
        this.symbols.push(this.messages);
    });
    this.message = 'aapl,snap;fb;aig+';
    this.sendMessage();
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}

interface StockQuote {

  symbol: any;
  marketPercent: any;
  bidSize: any;
  bidPrice: any;
  askSize: any;
  askPrice: any;
  volume: any;
  lastSalePrice: any;
  lastSaleSize: any;
  lastSaleTime: any;
  lastUpdated: any;
  sector: any;
  securityType: any;

}