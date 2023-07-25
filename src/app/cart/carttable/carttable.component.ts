import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrderItems } from 'src/app/_module/order';
import { OrderDto } from 'src/app/_module/orderdto';
import jwt_decode from 'jwt-decode';
import { OrderService } from 'src/app/service/order.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-carttable',
  templateUrl: './carttable.component.html',
  styleUrls: ['./carttable.component.css'],
})
export class CarttableComponent implements OnInit {
  totalPrice: number = 0;
  subtotal: number = 0;
  sub: Subscription | null = null;
  items: OrderItems[] = [];
  price: number = 0;
  quantityCount: number = 0;
  order: OrderDto = new OrderDto();
   
  constructor(public orderService: OrderService, private route: Router,private location: Location) {}

  ngOnInit(): void {
    const orderJson = localStorage.getItem('orders');
    if (orderJson !== null) {
      const order = JSON.parse(orderJson);
      if (order) {
        this.items = order;
        this.calculateTotalPrice();
      }
    }
    for (let item of this.items) {
      if (item.price !== undefined && item.quantity !== undefined) {
        let subtotal = 0;
        subtotal = item.price * item.quantity;
        item.subtotal = subtotal;
        console.log(this.subtotal + 'subtotal');
      }
    }
  }
  calculateTotalPrice() {
    let totalPrice = 0;
    let subtotal = 0;
    if (this.items) {
      for (let item of this.items) {
        if (item.price !== undefined && item.quantity !== undefined) {
          totalPrice += item.price * item.quantity;
        }
      }
    }
    this.totalPrice = totalPrice;
  }

  decreaseQuantity(index: number) {
    this.quantityCount = this.items[index].quantity || 0;
    this.price = this.items[index].price || 0;
    console.log(this.quantityCount);
    if (this.items[index] && this.quantityCount > 1) {
      this.quantityCount--;
      console.log(this.quantityCount);
      this.items[index].totalprice = this.price * this.quantityCount;

      this.items[index].quantity = this.quantityCount;

      this.items[index].price = this.price;
      this.items[index].subtotal = this.price * this.quantityCount;
      localStorage.setItem('orders', JSON.stringify(this.items));
      this.calculateTotalPrice();
    }
  }

  increaseQuantity(index: number) {
    this.quantityCount = this.items[index].quantity || 0;
    this.price = this.items[index].price || 0;
    if (this.items[index]) {
      this.quantityCount++;
      this.items[index].totalprice = this.price * this.quantityCount;
      this.items[index].quantity = this.quantityCount;
      this.items[index].price = this.price;
      this.items[index].subtotal = this.price * this.quantityCount;
      localStorage.setItem('orders', JSON.stringify(this.items));
      this.calculateTotalPrice();
    }
  }
  removeItem(index: number) {
    this.items.splice(index, 1);
    localStorage.setItem('orders', JSON.stringify(this.items));
    this.calculateTotalPrice();
  }
  getItemData() {
    return this.items.filter(item => item).map(item => ({
      itemId: item.id,
      quantity: item.quantity
    }));
  }
  checkout() {
    const token: string | null = localStorage.getItem('token');
    const items = this.getItemData();
    const totalPrice =  this.totalPrice;
    console.log(items,"totalprice", totalPrice, "token", token);
  
    if (items.length > 0 && token) {
      this.orderService.add(token, { totalPrice, items }).subscribe(
        (a) => {
          console.log('order created successfully');
          localStorage.removeItem('orders');
          alert('Bon Appetit ♥ ');
          window.location.reload();
        },
        (error) => {
          console.error('Error creating order:', error);
          // Add error handling code here
        }
      );
    }
  }
}
