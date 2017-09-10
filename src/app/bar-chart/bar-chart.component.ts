import { Component, ViewChild, Input, SimpleChanges } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { MdPaginator, MdSort } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { Bar } from "../model/bar";
import { BarService } from "../service/bar.service";
import { UIChart } from "primeng/primeng";

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  @ViewChild("mixedChart") mixedChart: UIChart;
  bars = new Array<Bar>();
  label = new Array<any>();
  close = new Array<any>();
  @Input() chartInterval: string = '';
  @Input() stsymbol: string = '';
  ngOnChanges(changes: SimpleChanges) {

    this.getCloseFromServiceRefreshChart(this.stsymbol, this.chartInterval);
  }
  hoursData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
      }
    ]
  }
  constructor(private barService: BarService) { }

  getCloseFromServiceRefreshChart(symbol: string, interval: string) {
    let label = new Array<any>();
    let close = new Array<any>();
    this.barService.getBars(symbol, interval).subscribe((p) => {
      this.bars = p;
      Object.keys(this.bars).forEach(element => {
        close.push(this.bars[element].close);
        label.push(this.bars[element].date);
      });
      this.SetValuesAndUpdateChart(symbol, label, close)
    });
  }

  SetValuesAndUpdateChart(symbol, label, close) {
    this.hoursData.labels = label;
    this.hoursData.datasets[0] = {
      label: symbol ? symbol : '',
      data: close,
      fill: false,
      borderColor: '#673ab7'
    }; this.mixedChart.refresh();
  }

}