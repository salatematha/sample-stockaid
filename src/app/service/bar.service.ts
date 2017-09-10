import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { Bar } from "../model/bar";
//import 'rxjs/add/operator/map';

@Injectable()
export class BarService {
  private _barUrl = 'https://api.iextrading.com/1.0/stock/aapl/chart/';
  constructor(private http: Http) { }

  getBars(symbol:string, interval:string):Observable<Bar[]> {
    console.log(this._barUrl);
    return this.http.get(this._barUrl.replace("aapl", symbol)+interval)
      .map(res => res.json());
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
