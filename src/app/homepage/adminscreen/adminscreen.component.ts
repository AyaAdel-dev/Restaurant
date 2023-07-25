import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrderDto } from 'src/app/_module/orderdto';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-adminscreen',
  templateUrl: './adminscreen.component.html',
  styleUrls: ['./adminscreen.component.css'],
})
export class AdminscreenComponent implements OnInit {
  isauthorized: boolean = false;
  sub: Subscription | null = null;
  orders: OrderDto[] = [];
  constructor(
     private router: ActivatedRoute,
     private route:Router,
     public orderService: OrderService
  ) { }
  
  ngOnInit() {
    this.orderService.getAllOrders().subscribe(
      (orders) => {
        this.orders = orders;
        console.log('Orders:', orders);
      },
      (error) => {
        console.error('Error getting orders:', error);
        // Add error handling code here
      }
    );
  }
  
  showDetails(orderId: number) {
    this.route.navigate(['/showOrder', orderId]); 
  }
  
}