import { Component, ViewChild, Input, SimpleChanges, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { MdPaginator, MdSort } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { Bar } from "../model/bar";
import { BarService } from "../service/bar.service";

@Component({
  selector: 'app-bar-table',
  templateUrl: './bar-table.component.html',
  styleUrls: ['./bar-table.component.css']
})
export class BarTableComponent implements OnInit {
  @Input() stsymbol: string;
  ngOnChanges(changes: SimpleChanges) {
    if (changes.stsymbol.currentValue != null) this.exampleDatabase.getDataFromService(this.stsymbol);
    console.log(changes.stsymbol.currentValue);
  }

  displayedColumns = ['open', 'high', 'low', 'close', 'label'];
  exampleDatabase = new ExampleDatabase(this.barService);
  dataSource: ExampleDataSource | null;
  constructor(private barService: BarService) { }
  @ViewChild(MdPaginator) paginator: MdPaginator;
  @ViewChild(MdSort) sort: MdSort;

  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
  }
}



/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<Bar[]> = new BehaviorSubject<Bar[]>([]);
  get data(): Bar[] { return this.dataChange.value; }
  bars: Bar[];
  constructor(private barService: BarService) {
    console.log("insideoninit");

  }

  getDataFromService(symbol: string) {
    this.barService.getBars(symbol, '1y').subscribe((p) => {
      this.bars = p;
      this.data.length = 0;

      this.bars.forEach(element => {
        const copiedData = this.data.slice();
        copiedData.push(element);
        this.dataChange.next(copiedData);
      });
    });
  }
  ngOnInit() {

  }

}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<any> {
  constructor(private _exampleDatabase: ExampleDatabase, private _paginator: MdPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Bar[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const data = this._exampleDatabase.data.slice();

      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() { }
}