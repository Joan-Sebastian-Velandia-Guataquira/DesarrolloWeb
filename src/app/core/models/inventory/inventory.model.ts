import { Product } from "../product/product.model";

export class Inventory {
  constructor(
    private product: Product,
    private stock: number,
  ){}
}
