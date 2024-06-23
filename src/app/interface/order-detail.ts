import { Product } from '../model/product';

export class OrderDetail {
  constructor(initData?: Partial<OrderDetail>) {
    Object.assign(this, initData);
  }
  id!: number;
  product!: Product;
  count!: number;
}
