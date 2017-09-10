import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SymbolService {
  private _symbolUrl = 'http://data.okfn.org/data/core/nyse-other-listings/r/nyse-listed.json';
  constructor(private http: Http) { }

  getSymbols() {
    console.log(this._symbolUrl);
    return this.http.get(this._symbolUrl)
      .map(res => res.json());
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
