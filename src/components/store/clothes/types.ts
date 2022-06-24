import { REQUEST_STATUS } from 'types/RequestStatuses';

export interface Clothes {
  category: string[];
  color: string[];
  id: string;
  name: string;
  price: string;
  size: string[];
}

export interface State {
  items: Clothes[];
  status: REQUEST_STATUS;
}
