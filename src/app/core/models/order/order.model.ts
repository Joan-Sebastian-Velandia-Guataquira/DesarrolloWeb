import { Product } from '../product/product.model';
import { User } from '../user/user.model';

export class Order {
  constructor(
    private products: Product[] = [],
    private date: Date,
    private buyer: User
  ){}
}
