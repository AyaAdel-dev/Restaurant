import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OrderDto } from '../../_module/orderdto';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'app-showorderdetails',
  templateUrl: './showorderdetails.component.html',
  styleUrls: ['./showorderdetails.component.css']
})
export class ShoworderdetailsComponent implements OnInit {
  orders: OrderDto[] = [];

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  
  ngOnInit() {
    const orderId = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(orderId)) {
      this.orderService.getOrderDetails(orderId).subscribe(
        (orders: OrderDto[] | undefined) => {
          if (orders) { // Check if orders is defined
            this.orders = orders;
            console.log('Orders:', orders);
          }
        },
        (error: any) => {
          console.error('Error getting order details:', error);
          // Add error handling code here
        }
      );
    } else {
      console.error('Invalid order ID:', orderId);
      // Add error handling code here
    }
  }
}