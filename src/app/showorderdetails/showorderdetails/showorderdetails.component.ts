import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrderDto } from 'src/app/_module/orderdto';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-showorderdetails',
  templateUrl: './showorderdetails.component.html',
  styleUrls: ['./showorderdetails.component.css']
})
export class ShoworderdetailsComponent implements OnInit {
  orderId: number | undefined;
  order: OrderDto | undefined;
  sub: Subscription | null = null;
totalprice:number | undefined
  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe((params) => {
      const orderIdStr = params.get('id');
      if (orderIdStr) {
        this.orderId = +orderIdStr;
        if (this.orderId !== undefined) {
          this.getOrderDetails(this.orderId);
        }
      }
    });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  getOrderDetails(orderId: number): void {
    this.orderService.getOrderDetails(orderId).subscribe(
      (order: OrderDto) => {
        this.order = order;
       console.log(order.totalPrice)
      },
      (error: any) => {
        console.error('Error getting order details:', error);
        // Add error handling code here
      }
    );
  }
}