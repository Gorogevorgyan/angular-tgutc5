// @ts-ignore
import * as dataJson from '../json/data.json';
import { DATA_ACTIONS, FilterType } from './data.Action';

const initialState = {
  data: filterMonthRevenue()
};

export function reducerData(state = initialState, action: FilterType) {
  switch (action.type) {
    case DATA_ACTIONS.FILTER_TYPE:
      return {
        ...state,
        data: filterData(action.payload)
      };
    default:
      return state;
  }
}

function filterMonthRevenue() {
  return dataJson.companies.filter((d: any) => {
    if ((d.monthRevenue && d.monthRevenue > 0) || (d.monthBalance && d.monthBalance > 0)) {
      if (d.type) {
        d.category = d.type;
        d.weekStats = d.revenuePerWeek;
        d.balance = d.revenue;
        d.monthBalance = d.monthRevenue;
        delete d.type;
        delete d.revenuePerWeek;
        delete d.revenue;
        delete d.monthRevenue;
      }
      return d;
    }
  });
}

function filterData(fil) {
  return fil.filter === 'Все категории' ? filterMonthRevenue()
    : filterMonthRevenue().filter((a: any) => fil.filter === a.category);
}
