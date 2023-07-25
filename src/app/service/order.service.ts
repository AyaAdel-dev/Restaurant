import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, forkJoin, map, switchMap, throwError } from 'rxjs';
import { OrderDto } from '../_module/orderdto';
import { OrderItems } from '../_module/order';
import { UserService } from './user.service';
import { ItemDto } from '../_module/itemDto';
import { OrderItemDto } from '../_module/orderItemDto';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  private readonly baseurl: string = 'https://localhost:7129/api/Order';
  private readonly getOrdrt:string='https://localhost:7129/api';
  constructor(private http: HttpClient,private userService:UserService) {}

  add(token: string, order: any): Observable<OrderDto> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<OrderDto>(this.baseurl, order, { headers });
  }

getAllOrders(): Observable<OrderDto[]> {
  return this.http.get<OrderDto[]>(this.baseurl).pipe(
    switchMap((orders) => {
      return this.userService.getAllUsers().pipe(
        map((users: any[]) => {
          // console.log('Users:', users);
          // console.log('Orders:', orders); 
          return orders.map((order) => {
            const user = users.find(user => user.userId && user.userId === order.userId); 
            // console.log('User:', user); 
            // console.log('Order UserId:', order.userId); 
            return new OrderDto(
              order.id,
              order.userId,
              order.totalPrice,
              user ? user.userName : '',
            );
          });
        })
      );
    })
  );
}

getOrderDetails(orderId: number): Observable<OrderDto> {
  const orderItemsUrl = `${this.getOrdrt}/Order/${orderId}`;

  return this.http.get<OrderItemDto[]>(orderItemsUrl).pipe(
    switchMap((orderItems) => {
      if (!Array.isArray(orderItems)) {
        orderItems = [orderItems];
        console.log(orderItems);
      }
      const itemIds = orderItems.map((item) => item.itemId);
      const itemsUrl = `${this.getOrdrt}/items/${itemIds.join(',')}`;

      return this.http.get<ItemDto[]>(itemsUrl).pipe(
        map((items) => {
          const orderItemsWithItems = orderItems.map((orderItem) => {
            const item = items.find((item) => item.Id === orderItem.itemId);
            console.log( orderItem.itemId);
            const quantity = orderItem.quantity ?? 0;
            console.log(quantity)
            return {
              id: item?.itemId,
              name: item?.name,
              category: item?.category,
              description: item?.description,
              price: item?.price,
              image: item?.image,
              quantity,
              totalprice:orderItem.totalPrice,
            };
          });
          const orderDto: OrderDto = {
            id: orderId,
            itemsObj: orderItemsWithItems,
          };
          console.log(orderDto)
          return orderDto;
        })
      );
    }),
    catchError((error: any) => {
      console.error('Error getting order details:', error);
      return throwError(error);
    })
  );
}
}