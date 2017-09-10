import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { Symbol } from '../model/symbol'
import { SymbolService } from "../service/symbol.service";
import { MdOptionSelectionChange } from "@angular/material/material";

@Component({
  selector: 'app-symbol',
  templateUrl: './symbol.component.html',
  styleUrls: ['./symbol.component.css']
})
export class SymbolComponent implements OnInit {
  stockCtrl: FormControl;
  filteredstocks: any;
  stocks: string[]
  
  @Output() selectedStock = new EventEmitter<string>();

  constructor(private symbolService: SymbolService) {
    this.stockCtrl = new FormControl();
    this.filteredstocks = this.stockCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterstocks(name));
  }

  filterstocks(val: string) {
    return val ? this.stocks.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
      : this.stocks;
  }
  
  selected(event: MdOptionSelectionChange, stock: string) {
    if (event.source.selected) {
      this.selectedStock.emit(stock);
    }
  }

  ngOnInit(): void {
    // this.symbolService.getSymbols().subscribe((p) => {
    //   console.log(p);
    //   this.stocks = p;


    // });
    this.stocks = [
      'aapl', 'goog', 'ge', 'msft'
    ];
  }
}


