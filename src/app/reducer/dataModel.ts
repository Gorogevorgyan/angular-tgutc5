export interface DataModel {
  id: number;
  name: string;
  type?: string;
  category?: string;
  revenuePerWeek?: object;
  weekStats?: object;
  revenue?: number;
  balance?: number;
  monthBalance?: number;
  monthRevenue?: number;
}
