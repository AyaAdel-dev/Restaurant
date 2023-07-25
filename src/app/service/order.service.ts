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
  private readonly getitem:string='https://localhost:7129';
  constructor(private http: HttpClient,private userService:UserService) {}

  getItemDetails(itemId: number): Observable<any> {
    return this.http.get<any>(`${this.getOrdrt}/Items/${itemId}`);
  }

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

getOrderDetails(orderId: number): Observable<OrderDto[]> {
  const orderItemsUrl = `${this.getitem}/items/${orderId}`;

  return this.http.get<OrderItemDto[]>(orderItemsUrl).pipe(
    switchMap((orderItems) => {
      if (!Array.isArray(orderItems)) {
        orderItems = [orderItems];
      }

      // Get the itemIds for the order
      const itemIds = orderItems.map(item => item.itemId);

      // Fetch the corresponding ItemDto objects from the server
      const itemsRequests = itemIds.map(itemId => {
        const itemsUrl = `${this.getOrdrt}/Items/${itemId}`;
        console.log(itemsUrl)
        return this.http.get<ItemDto>(itemsUrl);
      });

      return forkJoin(itemsRequests).pipe(
        map((items) => {
          // Create an array of order items with the corresponding ItemDto objects
          const orderItemsWithItems = orderItems.map((orderItem) => {
            console.log(items);
            const item = items.find(item => item.id && orderItem.itemId === item.id);
            console.log(item)
            if (!item) {
              console.warn(`Item not found for itemId: ${orderItem.id}`);
            }
            const quantity = orderItem.quantity ?? 0;
            return {
              id: item?.itemId,
              name: item?.name,
              price: item?.price ?? 0,
              image: item?.image,
              quantity,
              totalprice: (item?.price ?? 0) * quantity,
            };
          });

          // Create an OrderDto object for the order
          const orderDto: OrderDto = {
            id: orderId,
            itemsObj: orderItemsWithItems,
            totalPrice: orderItemsWithItems.reduce((acc, item) => acc + item.totalprice, 0),
            orderId: orderId
          };

          // Return an array containing the OrderDto object
          return [orderDto];
        }),
        catchError((error: any) => {
          console.error('Error getting order items:', error);
          return throwError(error);
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