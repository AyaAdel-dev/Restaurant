import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderDto } from '../_module/orderdto';
import { Observable } from 'rxjs';
import { OrderItems } from '../_module/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private readonly baseurl: string = 'https://localhost:7080/api/Users/AddAppartement';
  private readonly getorderurl:string ='';
  constructor(public http: HttpClient) {}

  add(order: OrderDto) {
    return this.http.post<OrderDto>(this.baseurl, order);
  }

  // getAllOrders():Observable<OrderItems[]> {
  //   const url = `${this.getorderurl}`;
  //   return this.http.get<OrderItems[]>(url);

  // }
}
