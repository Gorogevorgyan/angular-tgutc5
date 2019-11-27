import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dump',
  templateUrl: './dump.component.html',
  styleUrls: ['./dump.component.scss']
})
export class DumpComponent implements OnInit {
  @Input() data;
  @Output() onFilterData = new EventEmitter();
  @Output() onItemSelected = new EventEmitter();
  public arrTypes = [];

  public chartType = 'line';
  public total;
  public tempItem = 'null';
  public month;
  public chartDatasets: Array<any>;
  public chartLabels: Array<any> = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }


  constructor() { }

  ngOnInit() {
    this.chartData();
  }

  chartData() {
    let arrChart = [];
    this.total = 0;
    this.month = 0;
    if (this.data.length) {
      this.data.map((obj, index) => {
        Object.values(obj.weekStats).map((num, i) => {
          if (!index) {
            arrChart = Object.values(obj.weekStats);
          } else {
              arrChart[i] += num;
          }
        });
        this.total += obj.balance;
        this.month += obj.monthBalance;
        if (this.arrTypes.length < this.data.length) {
          this.arrTypes.push(obj.category);
        }
      });
    }
    this.chartDatasets = [
      { data: arrChart, label: 'Chosen data' },
    ];
  }

  changeCategory(type) {
    this.onFilterData.emit({filter: type});
    this.tempItem = 'null';
    setTimeout(() => this.chartData(), 0);
  }

  outputItem() {
    this.onItemSelected.emit(this.data[this.tempItem])
  }

}
