export interface IExpensesByCategory {
  salaries: number;
  supplies: number;
  services: number;
}

export interface IMonth {
  id: string;
  month: string;
  revenue: number;
  expenses: number;
  nonOperationalExpenses: number;
  operationalExpenses: number;
}

export interface IDay {
  id: string;
  date: string;
  revenue: number;
  expenses: number;
}

export interface IGetKpisResponse {
  id: string;
  _id: string;
  __v: number;
  totalProfit: number;
  totalRevenue: number;
  totalExpenses: number;
  expensesByCategory: IExpensesByCategory;
  monthlyData: Array<IMonth>;
  dailyData: Array<IDay>;
}

export interface IGetProductsResponse {
  id: string;
  _id: string;
  __v: number;
  price: number;
  expense: number;
  transactions: Array<string>;
  createdAt:string;
  updatedAt:string;
}
