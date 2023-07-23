import { Component } from '@angular/core';
import { OrderDto } from 'src/app/_module/orderdto';

@Component({
  selector: 'app-adminscreen',
  templateUrl: './adminscreen.component.html',
  styleUrls: ['./adminscreen.component.css']
})
export class AdminscreenComponent {
  orders: OrderDto[] = [
    { id: 1, userid: 1, totalprice: 10 },
    {  id: 1, userid: 1, totalprice: 10  },
    {  id: 1, userid: 1, totalprice: 10  },
  ];

  showDetails(index : number) {
    alert(`Order Details: ${index}`);
  }
}