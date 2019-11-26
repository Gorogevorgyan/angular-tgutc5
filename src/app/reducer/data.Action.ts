import { Action } from '@ngrx/store';

export namespace DATA_ACTIONS {
  export const FILTER_TYPE = 'FILTER_TYPE';
}

export class FilterType implements Action {
  public payload;
  constructor(obj) {
    this.payload = obj;
  }
  readonly type = DATA_ACTIONS.FILTER_TYPE;
}
