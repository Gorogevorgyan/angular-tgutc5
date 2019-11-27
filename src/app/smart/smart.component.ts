import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../reducer/AppState';
import { DataModel } from '../reducer/dataModel';
import { FilterType } from '../reducer/data.Action';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.scss']
})
export class SmartComponent implements OnInit {
  public data: Observable<DataModel[]>;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('dataReducer').subscribe((d: any)  => {
      this.data = d.data;
    });
  }
  printId(e){
    console.log(e.id)
  }
  filter(e) {
      this.store.dispatch(new FilterType(e));
  }


}
