import { Component, ViewChild, Input, SimpleChanges, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { MdPaginator, MdSort } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { Quote } from "../model/quote";
import { QuoteService } from "../service/quote.service";
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
  quotes = Array<Quote>();
  constructor(private quoteService: QuoteService) { }

  @Input() stsymbol: string;
  ngOnChanges(changes: SimpleChanges) {
    if (this.stsymbol)
      this.quoteService.getQuotes(this.stsymbol).subscribe((p) => {
        this.quotes.push(p);
        console.log(p);
      });
  }
  ngOnInit() {
    this.quoteService.getQuotes('aapl').subscribe((p) => {
      this.quotes.push(p);
    }); this.quoteService.getQuotes('goog').subscribe((p) => {
      this.quotes.push(p);
    }); this.quoteService.getQuotes('goog').subscribe((p) => {
      this.quotes.push(p);
    }); this.quoteService.getQuotes('amzn').subscribe((p) => {
      this.quotes.push(p);
    }); this.quoteService.getQuotes('aapl').subscribe((p) => {
      this.quotes.push(p);
    }); this.quoteService.getQuotes('goog').subscribe((p) => {
      this.quotes.push(p);
    }); this.quoteService.getQuotes('goog').subscribe((p) => {
      this.quotes.push(p);
    }); this.quoteService.getQuotes('amzn').subscribe((p) => {
      this.quotes.push(p);
    });

  }
}
