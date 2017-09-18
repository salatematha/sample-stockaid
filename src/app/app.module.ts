import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarService } from './service/bar.service'
import { WebSocketsService } from './service/web-sockets.service'
//material
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { HttpModule } from '@angular/http';
import { SymbolComponent } from './symbol/symbol.component';
import { SymbolService } from "./service/symbol.service";
import { BarTableComponent } from './bar-table/bar-table.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

//for primeng
import { ChartModule } from 'primeng/primeng';
import { LiveQuoteComponent } from './live-quote/live-quote.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteService } from "./service/quote.service";

@NgModule({
  exports: [
    ChartModule
  ]
})
export class PrimeModule { }
//end for primeng

@NgModule({
  exports: [
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
  ]
})
export class MaterialModule { }
//material done

@NgModule({
  declarations: [
    AppComponent,
    SymbolComponent,
    BarTableComponent,
    BarChartComponent,
    LiveQuoteComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    MdNativeDateModule,
    ReactiveFormsModule,
    PrimeModule
  ],
  providers: [BarService, SymbolService, WebSocketsService, QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
