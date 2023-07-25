export class OrderDto {
  constructor(
    public id?: number,
    public userId?: number,
    public totalPrice?: number,
    public userName?: string,
    public itemsObj?: any[] | undefined,

  ) {}
}