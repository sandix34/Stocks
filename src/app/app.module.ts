import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';

import { StocksService } from './services/stocks.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
