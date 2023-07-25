export class OrderItemDto {
    constructor(
      public id?: number,
      public orderId?: number,
      public itemId?: number,
      public quantity?: number,
      public totalPrice?:number
    ) {}
  }