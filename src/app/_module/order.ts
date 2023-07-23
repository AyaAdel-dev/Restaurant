export class OrderItems {
    constructor(
      public id?: number,
      public name?: string,
      public category?: string,
      public description?: string,
      public price?:number,
      public image?: string,
      public quantity?:number,
      public totalprice?:number,
      public subtotal?:number,
    ) {}
  }
  