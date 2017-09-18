import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { Quote } from "../model/quote";

@Injectable()
export class QuoteService {
  private _quoteUrl = 'https://api.iextrading.com/1.0/stock/aapl/quote';
  constructor(private http: Http) { }

  getQuotes(symbol: string): Observable<Quote> {
    console.log(this._quoteUrl);
    return this.http.get(this._quoteUrl.replace("aapl", symbol))
      .map(res => res.json());
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

