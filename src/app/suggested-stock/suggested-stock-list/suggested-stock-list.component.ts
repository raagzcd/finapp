import { Component, OnInit } from '@angular/core';
import {SuggestedStock} from '../suggestedstock.model';

@Component({
  selector: 'app-suggested-stock-list',
  templateUrl: './suggested-stock-list.component.html',
  styleUrls: ['./suggested-stock-list.component.css']
})
export class SuggestedStockListComponent implements OnInit {
  description:string = "test";
  suggestedStocks:SuggestedStock[] = [
    new SuggestedStock("Bank of America","BAC",18,"NYSE"),
    new SuggestedStock("Apple","AAPL",18,"NYSE")
  ];
  constructor() { 

  }

  ngOnInit() {
  }

}
