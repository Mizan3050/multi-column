import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  myData = [
    {
      data: {
        name: 'row1Col1',
        stock: 'row1Col2',
        value: 'row1Col3',
        stock_qty: 'row1Col4',
      },
    },
    {
      data: {
        name: 'row2Col1',
        stock: 'row2Col2',
        value: 'row2Col3',
        stock_qty: 'row2Col4',
      },
    },
  ];

  mainHeaderColumns = [
    "product",
    "thirty",
    "av_stock"
  ];

  subHeaderColumns = [
    "stock",
    "value",
    "stock_qty"
  ];

  allColumns = [
    {
      "key": "thirty",
      col_name: 'thirty',
      "rowspan": 1,
      "colspan": 2
    },
    {
      "key": "stock",
      col_name: 'stock',
      "rowspan": 1,
      "colspan": 1
    },
    {
      "key": "value",
      col_name: 'value',
      "rowspan": 1,
      "colspan": 1
    },
    {
      "key": "av_stock",
      col_name: 'av stock',
      "rowspan": 1,
      "colspan": 1
    },
    {
      "key": "stock_qty",
      col_name: 'stock qty',
      "rowspan": 1,
      "colspan": 1
    }
  ];

  allComplexDataCols = [
    "product",
    "stock",
    "value",
    "stock_qty"
  ];

  columnHighlight = true;

}
