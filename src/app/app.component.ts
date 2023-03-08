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
        col1: 'row1Col1',
        col2sub1: 'row1Col2',
        col2sub2: 'row1Col3',
        col3sub2: 'row1Col4',
      },
    },
    {
      data: {
        col1: 'row2Col1',
        col2sub1: 'row2Col2',
        col2sub2: 'row2Col3',
        col3sub2: 'row2Col4',
      },
    },
  ];

  myColumns = [
    { key: 'col2', isMulti: true }
  ];

  mainHeaderColumns = ['prod', 'stock'];
  subHeaderColumns = ['col2sub1', 'col2sub2', 'col3sub2'];

  allColumns = [
    {
      key: "col2",
      "rowspan": 1,
      "colspan": 2
    },
    {
      key: "col2sub1",
      "rowspan": 1,
      "colspan": 1
    },
    {
      key: "col2sub2",
      "rowspan": 1,
      "colspan": 1
    }
  ];

  allComplexDataCols = [];

  columnHighlight = true;

  constructor() { }

  ngOnInit() {
    // $('.mat-column-col2sub1').css('background-color', 'green');
    this.allComplexDataCols.push(...this.mainHeaderColumns);

    this.myColumns.forEach((col) => {
      console.log(col);
      this.mainHeaderColumns.push(col.key);
    });

    console.log(this.mainHeaderColumns);

    this.allComplexDataCols.push(...this.subHeaderColumns);
    console.log('allColumns: ', this.allColumns);
  }

}
