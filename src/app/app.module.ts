import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SuggestedStockComponent } from './suggested-stock/suggested-stock.component';
import { SuggestedStockDetailComponent } from './suggested-stock/suggested-stock-detail/suggested-stock-detail.component';
import { SuggestedStockListComponent } from './suggested-stock/suggested-stock-list/suggested-stock-list.component';
import { SuggestedStockItemComponent } from './suggested-stock/suggested-stock-list/suggested-stock-item/suggested-stock-item.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { PortfolioListEditComponent } from './portfolio-list/portfolio-list-edit/portfolio-list-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SuggestedStockComponent,
    SuggestedStockDetailComponent,
    SuggestedStockListComponent,
    SuggestedStockItemComponent,
    PortfolioListComponent,
    PortfolioListEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
