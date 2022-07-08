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

export interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}
export interface FormAddress {
  country: string;
  city: string;
  street: string;
  house: string;
  apartment: string;
}

export interface Total {
  dataTotal: number;
}

export interface PaymentMethod {
  paymentMethod: string;
}
export interface FullOrder {
  Data: FormData;
  Address: FormAddress;
  Items: Clothes[];
  Total: Total;
  PaymentMethod: PaymentMethod;
}

export interface State {
  items: Clothes[];
  basket: Clothes[];
  total: number;
  orders: FullOrder[];
  status: REQUEST_STATUS;
}
