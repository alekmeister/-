import { REQUEST_STATUS } from 'types/RequestStatuses';

export interface Clothes {
  category: string[];
  color: string[];
  id: string;
  name: string;
  price: number;
  newPrice?: number;
  size: string[];
  amount: number;
}

export interface State {
  items: Clothes[];
  basket: Clothes[];
  status: REQUEST_STATUS;
}
