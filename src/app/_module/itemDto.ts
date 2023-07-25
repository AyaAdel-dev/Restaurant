export class ItemDto {
    constructor(
      public id?: number,
      public itemId?:number,
      public name?: string,
      public category?: string,
      public description?: string,
      public price?:number,
      public image?: string,
      public quantity?:number,
      public subTotal?:number,
    ) {}
  }
  