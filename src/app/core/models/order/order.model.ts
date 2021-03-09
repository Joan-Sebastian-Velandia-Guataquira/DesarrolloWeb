export class Order {
  constructor(
    public buyer: string,
    public date: string,
    public products: string[],
  ){}
}
